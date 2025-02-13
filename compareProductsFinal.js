import dotenv from 'dotenv';

dotenv.config();
import categories from './woolworths/constant/categories.js';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const getData = async () => {
  let totalProducts = 0;
  let totalProductsNotMatchInW = 0;
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
          console.log('woolworthsData', woolworthsData.length);
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
              const formattedProduct1 = {
                source_url: filteredProducts[0].source_url || null,
                name: filteredProducts[0].name || null,
                image_url: filteredProducts[0].image_url || null,
                source_id: filteredProducts[0].source_id || null,
                barcode: filteredProducts[0].barcode || null,
                shop: filteredProducts[0].shop || null,
                category_id: data.subsubcategory_id ?? data.subcategory_id,
                subcategory_id: '',
                subsubcategory_id: '',
                weight: filteredProducts[0].weight || null,
                prices: filteredProducts[0].prices,
              };
              const formattedProduct2 = {
                source_url: data.source_url || null,
                name: data.name || null,
                image_url: data.image_url || null,
                source_id: data.source_id || null,
                barcode: data.barcode || null,
                shop: data.shop || null,
                category_id: data.subsubcategory_id ?? data.subcategory_id,
                subcategory_id: '',
                subsubcategory_id: '',
                weight: data.weight || null,
                prices: data.prices,
              };
              productsMatched.push(formattedProduct1);
              productsMatched.push(formattedProduct2);
            }
          }
        }

        try {
          const filteredProductsMatched = productsMatched.filter((p) => p.shop === 'Woolworths');

          // Remove matched products from woolworthsData to get only unmatched products
          const unmatchedWoolworthsProducts = woolworthsData.filter((w) => !filteredProductsMatched.some((p) => p.source_id === w.source_id));

          // now we need to do a filteredProductsMatched id seen in "woolworthsData" variable will be removed so we can know what products in woolworths doesnt match
          if (productsMatched && productsMatched.length > 0) {
            totalProducts = totalProducts + productsMatched.length;
            console.log('totalProducts', totalProducts);
            const baseFolder = `./matched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
            const folderPath = path.join(baseFolder);
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
              // console.log(`Created folder: ${folderPath}`);
            }
            if (fs.existsSync(filePath)) {
              // Merge existing and new data
              /* The above code is a JavaScript console log statement that outputs a message indicating
              that a file already exists at a specific file path, and therefore it is skipping the
              save operation. */
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
                    const formattedProduct = {
                      source_url: data.source_url || null,
                      name: data.name || null,
                      image_url: data.image_url || null,
                      source_id: data.source_id || null,
                      barcode: data.barcode || null,
                      shop: data.shop || null,
                      category_id: data.subsubcategory_id ?? data.subcategory_id,
                      subcategory_id: '',
                      subsubcategory_id: '',
                      weight: data.weight || null,
                      prices: data.prices,
                    };
                    formattedProducts.push(formattedProduct);
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
                try {
                  const externalApiUrl = process.env.JARROD_API;
                  const apiKey = process.env.JARROD_KEY;

                  const response = await axios.post(externalApiUrl, formattedProducts, {
                    headers: {
                      accept: 'application/json',
                      'X-API-Key': apiKey,
                      'Content-Type': 'application/json',
                    },
                  });

                  console.log(`Success! category: ${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}`, response.data);
                } catch (error) {
                  if (error.response) {
                    console.error('Error response in C:', error.response.status, error.response.data);
                  } else if (error.request) {
                    console.error('No response received:', error.request);
                  } else {
                    console.error('Error:', error.message);
                  }
                }
              }
              // try {
              //  const b = JSON.parse(fs.readFileSync(`matched/data/${process.env.FOLDER_DATE}/${categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
              // } catch (error) {

              // }
            } catch (error) {
              sonsole.log('error', error);
            }
          }
          let formattedUnmatchedWooly = [];
          if (unmatchedWoolworthsProducts && unmatchedWoolworthsProducts.length > 0) {
            for (const data of unmatchedWoolworthsProducts) {
              if (data.subcategory_id) {
                const formattedProduct = {
                  source_url: data.source_url || null,
                  name: data.name || null,
                  image_url: data.image_url || null,
                  source_id: data.source_id || null,
                  barcode: data.barcode || null,
                  shop: data.shop || null,
                  category_id: data.subsubcategory_id ?? data.subcategory_id,
                  subcategory_id: '',
                  subsubcategory_id: '',
                  weight: data.weight || null,
                  prices: data.prices,
                };
                formattedUnmatchedWooly.push(formattedProduct);
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
            try {
              const externalApiUrl = process.env.JARROD_API;
              const apiKey = process.env.JARROD_KEY;

              const response = await axios.post(externalApiUrl, formattedUnmatchedWooly, {
                headers: {
                  accept: 'application/json',
                  'X-API-Key': apiKey,
                  'Content-Type': 'application/json',
                },
              });

              console.log(`Success! category: ${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}`, response.data);
            } catch (error) {
              if (error.response) {
                console.error('Error response in W:', error.response.status, error.response.data);
              } else if (error.request) {
                console.error('No response received:', error.request);
              } else {
                console.error('Error:', error.message);
              }
            }
          }
        } catch (error) {
          console.error('Error writing data to file:', error);
        }
      }
    }
  }
  const chunkSize = 100;
  const skipCount = 0; //
  for (const categ of categories) {
    for (const sub of categ.subCategories) {
      for (const ext of sub.childItems) {
        let matchedData = [];
        try {
          matchedData = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${categ.id}/${ext.subId ?? ''}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
          console.log('woolworthsData', matchedData.length);
        } catch (error) {
          continue;
        }
        const chunk = matchedData.slice(skipCount, skipCount + chunkSize);
        for (let i = skipCount; i < matchedData.length; i += chunkSize) {
          try {
            const externalApiUrl = process.env.JARROD_API;
            const apiKey = process.env.JARROD_KEY;
            const response = await axios.post(externalApiUrl, chunk, {
              headers: {
                accept: 'application/json',
                'X-API-Key': apiKey,
                'Content-Type': 'application/json',
              },
            });
            console.log(`Success! category: ${categ.id} Batch in  ${i / chunkSize + 1}`, response.data);
          } catch (error) {
            if (error.response) {
              console.error('Error response:', error.response.status, error.response.data);
            } else if (error.request) {
              console.error('No response received:', error.request);
            } else {
              console.error('Error:', error.message);
            }
          }
        }
      }
    }
  }
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
