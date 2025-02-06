import categories from './constant/categories.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Product from './models/products.js';
import cleanUpPrices from './clean.js';
import dbConnect from './db/dbConnect.js';
import { createArrayCsvWriter } from 'csv-writer';
import dotenv from 'dotenv';

dotenv.config();
const csvWriter = createArrayCsvWriter({
  path: `./woolworths/output_${process.env.FOLDER_DATE}.csv`,
  header: ['Category', 'SubCategory', 'Extension', 'Products'],
});

const categoriesId = [
  { id: '22770', name: 'Snacks & Confectionery', url: '/shop/browse/snacks-confectionery', location: '/shop/browse/snacks-confectionery' },
  { id: '22060', name: 'Bakery', url: '/shop/browse/bakery', location: '/shop/browse/bakery' },
  { id: '22351', name: 'Fruit & Veg', url: '/shop/browse/fruit-veg', location: '/shop/browse/fruit-veg' },
  { id: '22713', name: 'Poultry, Meat & Seafood', url: '/shop/browse/poultry-meat-seafood', location: '/shop/browse/poultry-meat-seafood' },
  { id: '24023', name: 'Deli & Chilled Meals', url: '/shop/browse/deli-chilled-meals', location: '/shop/browse/deli-chilled-meals' },
  { id: '22089', name: 'Dairy, Eggs & Fridge', url: '/shop/browse/dairy-eggs-fridge', location: '/shop/browse/dairy-eggs-fridge' },
  { id: '22770', name: 'Pantry', url: '/shop/browse/pantry', location: '/shop/browse/pantry' },
  { id: '22280', name: 'Freezer', url: '/shop/browse/freezer', location: '/shop/browse/freezer' },
  { id: '22164', name: 'Drinks', url: '/shop/browse/drinks', location: '/shop/browse/drinks' },
  { id: '22394', name: 'Health & Wellness', url: '/shop/browse/health-wellness', location: '/shop/browse/health-wellness' },
  { id: '22394', name: 'Beauty & Personal Care', url: '/shop/browse/beauty-personal-care', location: '/shop/browse/beauty-personal-care' },
  { id: '22015', name: 'Baby', url: '/shop/browse/baby', location: '/shop/browse/baby' },
  { id: '22459', name: 'Home & Lifestyle', url: '/shop/browse/home-lifestyle', location: '/shop/browse/home-lifestyle' },
  { id: '22459', name: 'Cleaning & Maintenance', url: '/shop/browse/cleaning-maintenance', location: '/shop/browse/cleaning-maintenance' },
  { id: '22916', name: 'Pet', url: '/shop/browse/pet', location: '/shop/browse/pet' },

  { id: '', name: 'Back to School', url: '/shop/browse/pet', location: '/shop/browse/pet' },
  { id: '', name: 'Beer, Wine & Spirits', url: '/shop/browse/pet', location: '/shop/browse/pet' },
  { id: '22459', name: 'Electronics', url: '/shop/browse/pet', location: '/shop/browse/pet' },
];
const getData = async () => {
  // console.log('start clean');
  // await cleanUpPrices();
  // console.log('end clean');
  await dbConnect();
  const a = await Product.find().exec();
  let total = 0;
  let data = [];
  for (const categ of categories) {
    const category = categ.category;
    let categId = '';
    const matchedCategory = categoriesId.find((cat) => cat.name === category);
    if (matchedCategory) {
      categId = matchedCategory.id;
    } else {
      console.warn(`Category "${category}" not found in categoriesId`);
    }

    for (const sub of categ.subCategories) {
      const subCategory = sub.subCategory;
      for (const ext of sub.childItems) {
        const extensionCategory = ext.extensionCategory ? ext.extensionCategory : '';
        const filteredProducts = a.filter((product) => {
          // Parse the stringified arrays
          const parsedFields = {
            productCategories: product.category.flatMap((cat) => JSON.parse(cat)),
            productSubCategories: product.subCategory.flatMap((sub) => JSON.parse(sub)),
            productExtensionSubCategories: product.extensionCategory.flatMap((ext) => JSON.parse(ext)),
          };

          // console.log('mycat', mycat)
          // First, check if category matches
          const hasCategory = parsedFields.productCategories.some((cat) => cat.toLowerCase() === category.toLowerCase());
          if (!hasCategory) return false;

          let mySubCategory;
          mySubCategory = subCategory;
          const hasSubCategory = parsedFields.productSubCategories.some((sub) => sub.toLowerCase() === mySubCategory.toLowerCase());

          if (!hasSubCategory) return false;

          let mySubCategoryExtension;
          mySubCategoryExtension = extensionCategory;
          const hasExtensionSubCategories = parsedFields.productExtensionSubCategories.some(
            (ext) => ext.toLowerCase() === mySubCategoryExtension.toLowerCase()
          );

          return hasExtensionSubCategories;
        });

        let mycat = category;
        mycat = category;
        if (category === 'Snacks & Confectionery') mycat = 'Pantry';
        if (category === 'Deli & Chilled Meals') mycat = 'Deli & Chilled Meats';
        if (category === 'Health & Wellness') mycat = 'Health & Beauty';
        if (category === 'Beauty & Personal Care') mycat = 'Health & Beauty';
        if (category === 'Home & Lifestyle') mycat = 'Household';
        if (category === 'Cleaning & Maintenance') mycat = 'Household';

        if (category === 'Electronics') mycat = 'Household';
        if (category === 'Beer, Wine & Spirits') mycat = 'Liquor';
        const toPush = [mycat, filteredProducts.length];
        data.push(toPush);
        const productsData = filteredProducts.map((product) => {
          const productObj = product.toObject();
          // console.log('productObj', productObj)
          const filteredPrices = productObj.prices.filter((p) => p !== null && p !== undefined);
          const cleanedPrices = filteredPrices.map((price) => {
            if (!price || price === null) return;
            const { _id, ...rest } = price; // Destructure to exclude _id
            return rest; // Return the remaining price object without _id
          });

          const formattedProduct = {
            source_url: productObj.source_url || null,
            name: productObj.name || null,
            image_url: productObj.image_url || null,
            source_id: `Woolworths - ${productObj.retailer_product_id}` || null,
            barcode: productObj.barcode || null,
            category_id: categId || '',
            shop: productObj.shop || null,
            weight: productObj.weight || null,
            prices: cleanedPrices,
          };

          return formattedProduct;
        });
        // console.log('Filtered product format:', productsData[0])
        if (productsData && productsData.length > 0) {
          total += productsData.length;
          const baseFolder = `./woolworths/data/${process.env.FOLDER_DATE}/${mycat}/${subCategory}`;
          const folderPath = path.join(baseFolder);

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            // console.log(`Created folder: ${folderPath}`);
          }

          const fileName = `${extensionCategory ? `${extensionCategory === 'Floor/Carpet Cleaners' ? 'Floor - Carpet Cleaners' : extensionCategory}` : ''}.json`;
          const filePath = path.join(folderPath, fileName);
          if (fs.existsSync(filePath)) {
            console.log(`File already exists: ${filePath}. Skipping save.`);
            const data = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${mycat}/${subCategory}/${extensionCategory}.json`, 'utf8'));

            // Merge existing and new data
            const combinedData = [...data, ...productsData];

            // Remove duplicates based on source_id
            const uniqueData = combinedData.filter((item, index, self) => index === self.findIndex((t) => t.source_id === item.source_id));

            fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2));
            // return; // Skip saving the file
          } else {
            try {
              // console.log(`${fileName} - ${productsData.length} products`);
              fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2));
              // console.log(`Data saved to ${filePath}`);
            } catch (error) {
              console.error('Error writing data to file:', error);
            }
          }
        }else{
          console.log(`no products found in ${mycat} ${subCategory} ${extensionCategory}`);
        }
      }
    }
  }
  // console.log('total', total)
  csvWriter
    .writeRecords(data)
    .then(() => {
      console.log('CSV file created successfully!');
    })
    .catch((err) => {
      console.error('Error writing CSV file:', err);
    });
};

(async () => {
  await getData();
})();
