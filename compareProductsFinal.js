import dotenv from 'dotenv';

dotenv.config();
import categories from './woolworths/constant/categories.js';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const getData = async () => {
  let totalProducts = 0;
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
          woolworthsData = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${mycat}/${subCategory}/${extensionCategory === 'Floor/Carpet Cleaners' ? 'Floor - Carpet Cleaners' : extensionCategory}.json`, 'utf8'));
        } catch (error) {
          console.log(`Skipping ${mycat} - ${subCategory} - ${extensionCategory}: File(s) missing.`, error);
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
              category_id: filteredProducts[0].category_id,
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
              weight: data.weight || null,
              prices: data.prices,
            };
            productsMatched.push(formattedProduct1);
            productsMatched.push(formattedProduct2);
          }
        }

        try {
          if (productsMatched && productsMatched.length > 0) {
            totalProducts = totalProducts + productsMatched.length;
            console.log('totalProducts', totalProducts);
            const baseFolder = `./matched/${process.env.FOLDER_DATE}/${mycat}/${subCategory}`;
            const folderPath = path.join(baseFolder);
            const fileName = `${extensionCategory === 'Floor/Carpet Cleaners' ? 'Floor - Carpet Cleaners' : extensionCategory}.json`;
            const filePath = path.join(folderPath, fileName);
            if (!fs.existsSync(folderPath)) {
              fs.mkdirSync(folderPath, { recursive: true });
              console.log(`Created folder: ${folderPath}`);
            }
            fs.writeFileSync(filePath, JSON.stringify(productsMatched, null, 2));
            console.log(`Data saved to ${filePath}`);

            const chunkSize = 100;
            const skipCount = 3600; //3700
            for (let i = skipCount; i < productsMatched.length; i += chunkSize) {
              const chunk = productsMatched.slice(skipCount, skipCount + chunkSize); // Get 100 items at a time
              console.log('chunk', chunk.length);
              // fs.writeFileSync(`${category}1.json`, JSON.stringify(chunk, null, 2));
              // try {
              //   const externalApiUrl = process.env.JARROD_API;
              //   const apiKey = process.env.JARROD_KEY;

              //   const response = await axios.post(externalApiUrl, chunk, {
              //     headers: {
              //       accept: 'application/json',
              //       'X-API-Key': apiKey,
              //       'Content-Type': 'application/json',
              //     },
              //   });

              //   console.log(`Success! category: ${category} Batch in  ${i / chunkSize + 1}`, response.data);
              // } catch (error) {
              //   if (error.response) {
              //     console.error('Error response:', error.response.status, error.response.data);
              //   } else if (error.request) {
              //     console.error('No response received:', error.request);
              //   } else {
              //     console.error('Error:', error.message);
              //   }
              // }
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
