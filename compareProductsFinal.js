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
    try {
      ColesData = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${mycat}.json`, 'utf8'));
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
          woolworthsData = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
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
            const formattedProduct1 = {
              source_url: filteredProducts[0].source_url || null,
              name: filteredProducts[0].name || null,
              image_url: filteredProducts[0].image_url || null,
              source_id: filteredProducts[0].source_id || null,
              barcode: filteredProducts[0].barcode || null,
              shop: filteredProducts[0].shop || null,
              category_id: data.category_id,
              subcategory_id: data.subcategory_id,
              subsubcategory_id: data.subsubcategory_id,
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
              category_id: data.category_id,
              subcategory_id: data.subcategory_id,
              subsubcategory_id: data.subsubcategory_id || '',
              weight: data.weight || null,
              prices: data.prices,
            };
            productsMatched.push(formattedProduct1);
            productsMatched.push(formattedProduct2);
          }
        }

        try {
          const filteredProductsMatched = productsMatched.filter((p) => p.shop === 'woolworths');

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
              console.log(`File already exists: ${filePath}. Skipping save.`);
              const data = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
              const combinedData = [...data, ...productsData];

              // Remove duplicates based on source_id
              const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
              fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
            } else {
              fs.mkdirSync(folderPath, { recursive: true });
              console.log(`Created folder: ${folderPath}`);
              fs.writeFileSync(filePath, JSON.stringify(productsMatched, null, 2));
              console.log(`Data saved to ${filePath}`);
            }

            const chunkSize = 100;
            const skipCount = 3600; //3700
            // for (let i = skipCount; i < productsMatched.length; i += chunkSize) {
            //   const chunk = productsMatched.slice(skipCount, skipCount + chunkSize); // Get 100 items at a time
            //   console.log('chunk', chunk.length);
            //   // fs.writeFileSync(`${category}1.json`, JSON.stringify(chunk, null, 2));
            //   // try {
            //   //   const externalApiUrl = process.env.JARROD_API;
            //   //   const apiKey = process.env.JARROD_KEY;

            //   //   const response = await axios.post(externalApiUrl, chunk, {
            //   //     headers: {
            //   //       accept: 'application/json',
            //   //       'X-API-Key': apiKey,
            //   //       'Content-Type': 'application/json',
            //   //     },
            //   //   });

            //   //   console.log(`Success! category: ${category} Batch in  ${i / chunkSize + 1}`, response.data);
            //   // } catch (error) {
            //   //   if (error.response) {
            //   //     console.error('Error response:', error.response.status, error.response.data);
            //   //   } else if (error.request) {
            //   //     console.error('No response received:', error.request);
            //   //   } else {
            //   //     console.error('Error:', error.message);
            //   //   }
            //   // }
            // }
          }
          if (unmatchedWoolworthsProducts && unmatchedWoolworthsProducts.length > 0) {
            const baseFolder = `./notMatched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}`;
            const folderPath = path.join(baseFolder);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
            }
            const fileName = `${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`;
            const filePath = path.join(folderPath, fileName);
            if (fs.existsSync(filePath)) {
              // Merge existing and new data
              console.log(`File already exists: ${filePath}. Skipping save.`);
              const data = JSON.parse(fs.readFileSync(`notMatched/${process.env.FOLDER_DATE}/${ext.catId ? ext.catId : categ.id}/${ext.subId}${ext.childId && ` - ${ext.childId}`}.json`, 'utf8'));
              const combinedData = [...data, ...unmatchedWoolworthsProducts];

              // Remove duplicates based on source_id
              const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id && t.shop === item.shop));
              fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
            } else {
              fs.mkdirSync(folderPath, { recursive: true });
              console.log(`Created folder: ${folderPath}`);
              fs.writeFileSync(filePath, JSON.stringify(productsMatched, null, 2));
              console.log(`Data saved to ${filePath}`);
            }
          }
        } catch (error) {
          console.error('Error writing data to file:', error);
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
