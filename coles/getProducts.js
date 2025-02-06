import categories from '../constant/copy.js';
import fs from 'fs';
import path from 'path';
import Product from './models/products.js';
import dbConnect from './db/dbConnect.js';
import { createArrayCsvWriter } from 'csv-writer';
import dotenv from 'dotenv';

const categoriesId = JSON.parse(fs.readFileSync(`./constant/categories.json`, 'utf8'));
dotenv.config();
const csvWriter = createArrayCsvWriter({
  path: `./coles/output_${process.env.FOLDER_DATE}.csv`,
  header: ['Category', 'SubCategory', 'Extension', 'Products'],
});

const getData = async () => {
  await dbConnect();
  let b;
  b = await Product.find();
  let data = [];
  let total = 0
  for (const categ of categories) {
    const category = categ.category;
    let categId = '';
    const matchedCategory = categoriesId.find((cat) => cat.name === category);
    if (matchedCategory) {
      categId = matchedCategory.id;
    } else {
      console.warn(`Category "${category}" not found in categoriesId`);
    }

    const a = await Product.find({ category: category }).exec();
    const productsData = a.map((product) => {
      const productObj = product.toObject();
      const cleanedPrices = productObj.prices.map((price) => {
        const { _id, ...rest } = price; // Destructure to exclude _id
        return rest; // Return the remaining price object without _id
      });
      const formattedProduct = {
        source_url: productObj.source_url || null,
        name: productObj.name || null,
        image_url: productObj.image_url || null,
        source_id: `Coles - ${productObj.coles_product_id}` || null,
        barcode: productObj.barcode || '',
        category_id: categId || '',
        shop: productObj.shop || null,
        weight: productObj.weight || '',
        prices: cleanedPrices,
      };

      return formattedProduct;
    });
    if (productsData.length > 0) {
      const baseFolder = `./coles/data/${process.env.FOLDER_DATE}`;
      const folderPath = path.join(baseFolder);
      const toPush = [category, productsData.length];
      data.push(toPush);
      // Ensure the folder exists
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${folderPath}`);
      }

      const fileName = `${category}.json`;
      const filePath = path.join(folderPath, fileName);
      // Check if the file already exists
      if (fs.existsSync(filePath)) {
        console.log(`File already exists: ${filePath}. Skipping save.`);
        // continue; // Skip saving the file
      }
      try {
        total += productsData.length
        console.log('totalProducts', total);
        console.log(`${fileName} - ${productsData.length} products`);
        fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2)); // Pretty print with 2 spaces
        console.log(`Data saved to ${filePath}`);
      } catch (error) {
        console.error('Error writing data to file:', error);
      }
    }
  }
  // csvWriter
  //   .writeRecords(data)
  //   .then(() => {
  //     console.log('CSV file created successfully!');
  //   })
  //   .catch((err) => {
  //     console.error('Error writing CSV file:', err);
  //   });
};

(async () => {
  await getData();
})();
