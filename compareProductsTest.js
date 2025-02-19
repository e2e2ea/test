import dotenv from 'dotenv';

dotenv.config();
import categories from './woolworths/constant/categories.js';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
const MYCATEGORIES = JSON.parse(fs.readFileSync(`constant/categories.json`, 'utf8'));
const getData = async () => {
  let totalProducts = 0;
  let totalProductsUnmatchedInC = 0;
  let totalProductsUnmatchedInW = 0;
  for (const categ of categories) {
    const category = categ.category;
    let mycat = category;
    mycat = category;
    let ColesData;
    if (category === 'Snacks & Confectionery') mycat = 'Pantry';
    if (category === 'Deli & Chilled Meals') mycat = 'Deli & Chilled Meats';
    if (category === 'Health & Wellness') mycat = 'Health & Beauty';
    if (category === 'Beauty & Personal Care') mycat = 'Health & Beauty';
    if (category === 'Home & Lifestyle') mycat = 'Household';
    if (category === 'Cleaning & Maintenance') mycat = 'Household';
    if (category === 'Fruit & Veg') mycat = 'Fruit & Vegetables';
    if (category === 'Freezer') mycat = 'Frozen';
    if (category === 'Deli & Chilled Meals') mycat = 'Deli';
    try {
      const a = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${mycat}.json`, 'utf8'));
      ColesData = a.filter((p) => p.subcategory_id !== '');
      // console.log('cole', ColesData.length);
    } catch (error) {
      console.log(`Skipping ${mycat}: File(s) missing.`);
      continue;
    }
    for (const sub of categ.subCategories) {
      const subCategory = sub.subCategory;
      for (const ext of sub.childItems) {
        const extensionCategory = ext.extensionCategory ? ext.extensionCategory : '';
        let productsMatched = [];
        let woolworthsData;

        try {
          woolworthsData = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${categ.id}/${ext.subId ?? ''}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
          // console.log('woolworthsData', woolworthsData.length);
        } catch (error) {
          continue;
        }
        for (const data of woolworthsData) {
          const filteredProducts = ColesData.filter((p) => {
            if (p.barcode && data.barcode) {
              if (p.barcode.toString() === data.barcode.toString()) {
                return p;
              }
            } else {
            }
          });
          if (filteredProducts && filteredProducts.length > 0) {
            if (filteredProducts[0].subcategory_id) {
              const cleanPrices = (prices) => (prices ? prices.filter((priceObj) => priceObj.price !== null) : []);

              const filteredPrices1 = cleanPrices(filteredProducts[0].prices);
              const filteredPrices2 = cleanPrices(data.prices);

              // If both cleaned prices arrays are empty, do not add to productsMatched
              if (filteredPrices1.length > 0 && filteredPrices2.length > 0) {
                const formattedProduct1 = {
                  source_url: filteredProducts[0].source_url || '',
                  name: filteredProducts[0].name || '',
                  image_url: filteredProducts[0].image_url || '',
                  source_id: filteredProducts[0].source_id || '',
                  barcode: filteredProducts[0].barcode || '',
                  shop: filteredProducts[0].shop || '',
                  category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                  weight: filteredProducts[0].weight || '',
                  prices: cleanPrices(filteredProducts[0].prices),
                };
                const formattedProduct2 = {
                  source_url: data.source_url || '',
                  name: data.name || '',
                  image_url: data.image_url || '',
                  source_id: data.source_id || '',
                  barcode: data.barcode || '',
                  shop: data.shop || '',
                  category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                  weight: data.weight || '',
                  prices: cleanPrices(data.prices),
                };
                productsMatched.push(formattedProduct1);
                productsMatched.push(formattedProduct2);
              }
            }
          }
        }

        try {
          const filteredProductsMatched = productsMatched.filter((p) => p.shop === 'Woolworths');

          // Remove matched products from woolworthsData to get only unmatched products
          const unmatchedWoolworthsProducts = woolworthsData.filter((w) => !filteredProductsMatched.some((p) => p.source_id === w.source_id));

          // now we need to do a filteredProductsMatched id seen in "woolworthsData" variable will be removed so we can know what products in woolworths doesnt match
          if (productsMatched && productsMatched.length > 0) {

            const baseFolder = `./matched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
            const folderPath = path.join(baseFolder);
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
              // console.log(`Created folder: ${folderPath}`);
            }
            if (fs.existsSync(filePath)) {
              // console.log(`File already exists: ${filePath}. Skipping save.`);
              const data = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
              const combinedData = [...data, ...productsMatched];

              // Remove duplicates based on source_id
              const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
              fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
            } else {
              fs.mkdirSync(folderPath, { recursive: true });
              // console.log(`Created folder: ${folderPath}`);
              fs.writeFileSync(filePath, JSON.stringify(productsMatched, null, 2));
              // console.log(`Data saved to ${filePath}`);
            }
            /**
             * 1. get
             */
            let unMatchedColes = [];
            let formattedProducts = [];
            try {
              const filteredProductsMatched = productsMatched.filter((p) => p.shop.toLowerCase() === 'coles');
              let a = [];
              if (ext?.subId) {
                if (ext.childId) {
                  a = await ColesData.filter((p) => p.shop.toLowerCase() === 'coles' && ext?.subId === p.subcategory_id && ext?.childId === p.subsubcategory_id);
                } else {
                  a = await ColesData.filter((p) => p.shop.toLowerCase() === 'coles' && ext?.subId === p.subcategory_id);
                }
              }
              unMatchedColes = a.filter((c) => !filteredProductsMatched.some((p) => p.source_id === c.source_id));
              if (unMatchedColes.length > 0) {
                for (const data of unMatchedColes) {
                  if (data.subcategory_id) {
                    if (data?.prices?.length > 0) {
                      const cleanPrices = (prices) => (prices ? prices.filter((priceObj) => priceObj.price !== null) : []);

                      const filteredPrices1 = cleanPrices(data.prices);

                      // If both cleaned prices arrays are empty, do not add to productsMatched
                      if (filteredPrices1.length > 0) {
                        const formattedProduct = {
                          source_url: data.source_url || '',
                          name: data.name || '',
                          image_url: data.image_url || '',
                          source_id: data.source_id || '',
                          barcode: data.barcode || '',
                          shop: data.shop || '',
                          category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                          weight: data.weight || '',
                          prices: filteredPrices1,
                        };
                        formattedProducts.push(formattedProduct);
                      }
                    }
                  }
                }
                const baseFolder = `./unMatched/coles/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
                const folderPath = path.join(baseFolder);
                if (!fs.existsSync(folderPath)) {
                  fs.mkdirSync(folderPath, { recursive: true });
                }
                const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
                const filePath = path.join(folderPath, fileName);
                if (fs.existsSync(filePath)) {
                  // Merge existing and new data
                  // console.log(`File already exists: ${filePath}. Skipping save.`);
                  const data = JSON.parse(fs.readFileSync(`unMatched/coles/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
                  const combinedData = [...data, ...formattedProducts];

                  // Remove duplicates based on source_id
                  const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
                  fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
                } else {
                  if (unMatchedColes.length > 0) {
                    fs.mkdirSync(folderPath, { recursive: true });
                    // console.log(`Created folder: ${folderPath}`);

                    fs.writeFileSync(filePath, JSON.stringify(formattedProducts, null, 2));
                    // console.log(`Data saved to ${filePath}`);
                  }
                }
              }
            } catch (error) {
              console.log('error', error);
            }
          }
          let formattedUnmatchedWooly = [];
          if (unmatchedWoolworthsProducts && unmatchedWoolworthsProducts.length > 0) {
            for (const data of unmatchedWoolworthsProducts) {
              if (data.subcategory_id) {
                if (data?.prices?.length > 0) {
                  const cleanPrices = (prices) => (prices ? prices.filter((priceObj) => priceObj.price !== null) : []);

                  const filteredPrices1 = cleanPrices(data.prices);

                  // If both cleaned prices arrays are empty, do not add to productsMatched
                  if (filteredPrices1.length > 0) {
                    const formattedProduct = {
                      source_url: data.source_url || '',
                      name: data.name || '',
                      image_url: data.image_url || '',
                      source_id: data.source_id || '',
                      barcode: data.barcode || '',
                      shop: data.shop || '',
                      category_id: data.subsubcategory_id ? data.subsubcategory_id : data.subcategory_id,
                      weight: data.weight || '',
                      prices: filteredPrices1,
                    };
                    formattedUnmatchedWooly.push(formattedProduct);
                  }
                }
              }
            }
            const baseFolder = `./unMatched/woolworths/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
            const folderPath = path.join(baseFolder);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
            }
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (fs.existsSync(filePath)) {
              // Merge existing and new data
              // console.log(`File already exists: ${filePath}. Skipping save.`);
              const data = JSON.parse(fs.readFileSync(`unMatched/woolworths/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
              const combinedData = [...data, ...formattedUnmatchedWooly];

              // Remove duplicates based on source_id
              const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
              fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
            } else {
              if (formattedUnmatchedWooly.length > 0) {
                fs.mkdirSync(folderPath, { recursive: true });
                // console.log(`Created folder: ${folderPath}`);
                fs.writeFileSync(filePath, JSON.stringify(formattedUnmatchedWooly, null, 2));
                // console.log(`Data saved to ${filePath}`);
              }
            }
          }
        } catch (error) {
          console.error('Error writing data to file:', error);
        }
      }
    }
  }

  /**
   * This is for matched products to push in API
   */
  const chunkSize = 100;
  const skipCount = 0; //
  for (const categ of MYCATEGORIES) {
    for (const sub of categ.children) {
      for (const ext of sub.children) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, 'utf8'));
          // console.log('matched', matchedData.length);
        } catch (error) {
          continue;
        }
        totalProducts += matchedData.length
        const chunk = matchedData.slice(skipCount, skipCount + chunkSize);
        for (let i = skipCount; i < matchedData.length; i += chunkSize) {
          // this is the loop to where it should be uploaded
        }
      }
    }
  }

  /**
   * This is for unmatched products in coles to push in API
   */
  const chunkSize1 = 100;
  const skipCount1 = 0;
  for (const categ of MYCATEGORIES) {
    for (const sub of categ.children) {
      for (const ext of sub.children) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`unMatched/coles/${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, 'utf8'));
          // console.log('unMatchedColes', matchedData.length);
        } catch (error) {
          continue;
        }
        totalProductsUnmatchedInC += matchedData.length;
        const chunk = matchedData.slice(skipCount1, skipCount1 + chunkSize1);
        for (let i = skipCount1; i < matchedData.length; i += chunkSize1) {
          // this is the loop to where it should be uploaded
        }
      }
    }
  }

  /**
   * This is for unmatched products in woolworths to push in API
   */
  const chunkSize2 = 100;
  const skipCount2 = 0;
  for (const categ of MYCATEGORIES) {
    for (const sub of categ.children) {
      for (const ext of sub.children) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`unMatched/woolworths/${process.env.FOLDER_DATE}/${categ.id}/${sub.id ?? ''}${ext.id && ` - ${ext.id}`}.json`, 'utf8'));
          // console.log('unMatchedWoolworths', matchedData.length);
        } catch (error) {
          continue;
        }
        totalProductsUnmatchedInW += matchedData.length;
        const chunk = matchedData.slice(skipCount2, skipCount2 + chunkSize2);
        for (let i = skipCount2; i < matchedData.length; i += chunkSize2) {
          // this is the loop to where it should be uploaded
        }
      }
    }
  }
  console.log('totalProductsMatched', totalProducts);
  console.log('totalProductsUnmatchedInC', totalProductsUnmatchedInC);
  console.log('totalProductsUnmatchedInW', totalProductsUnmatchedInW);
};

(async () => {
  await getData();
})();

const checkIds = async (categId, subId, childId) => {
  try {
    let item = [];
    if (subId) {
      switch (subId) {
        case '1':
          if (childId) {
            item = await checkChildIds(categId, subId, childId);
            return item;
          } else {
            item = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${categId}/${subId}${childId && ` - ${childId}`}.json`, 'utf8'));
          }
          return item;
        default:
          item = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${subId}.json`, 'utf8'));
          return item;
      }
    }
    return [];
  } catch (error) {
    console.log('error:', error);
    return [];
  }
};

const checkChildIds = async (categId, subId, childId) => {
  try {
    let item = [];
    if (childId) {
      switch (childId) {
        case '1':
          item = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${categId ? categId : categId}/${subId}${childId && ` - ${childId}`}.json`, 'utf8'));
          return item;
        default:
          // item = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${categId ? categId : categId}/${subId}${childId && ` - ${childId}`}.json`, 'utf8'));
          return item;
      }
    }
    return [];
  } catch (error) {
    console.log('error:', error);
    return [];
  }
};
