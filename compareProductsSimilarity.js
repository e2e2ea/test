import dotenv from 'dotenv';

dotenv.config();
import categories from './constant/copy.js';
import fs from 'fs';
import path from 'path';
import { search } from 'fast-fuzzy';
import axios from 'axios';
import mongoose from 'mongoose';
const db2 = async () => {
  try {
    console.log('Database Name:', process.env.MONGO_COLES_BARCODE);

    const barcodeDB = mongoose.createConnection(`${process.env.MONGO_COLES_BARCODE}`);
    // barcodeDB.on('connected', () => console.log('Connected to Barcode Database'));

    return barcodeDB;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
const barcodeSchema = new mongoose.Schema(
  {
    coles_product_id: { type: String },
    barcode: { type: String },
  },
  { timestamps: true }
);
const getData = async () => {
  let totalProducts = 0;
  const db = await db2();
  const ColesBarcode = db.model('ColesBarcode', barcodeSchema);
  for (const categ of categories) {
    const category = categ.category;
    let productsMatched = [];
    let woolworthsData = [];
    let woolworthsDataToBeMatched = [];
    let ColesData = [];
    let colesFilteredWithoutBarcode = [];
    let colesDataToBeMatched = [];
    let productsDataMatched = [];

    try {
      woolworthsData = JSON.parse(fs.readFileSync(`woolworths/data/${process.env.FOLDER_DATE}/${category}.json`, 'utf8'));
      ColesData = JSON.parse(fs.readFileSync(`coles/data/${process.env.FOLDER_DATE}/${category}.json`, 'utf8'));
    } catch (error) {
      continue;
    }

    try {
      productsDataMatched = JSON.parse(fs.readFileSync(`matched/${process.env.FOLDER_DATE}/${category}.json`, 'utf8'));
      const matchedSourceIds = new Set(productsDataMatched.map((data) => data.source_id.toString()));
      woolworthsDataToBeMatched = woolworthsData.filter((p) => {
        return matchedSourceIds.has(p.source_id.toString()) ? false : true;
      });

      colesFilteredWithoutBarcode = await ColesData.filter((p) => !p.barcode);
      colesDataToBeMatched = ColesData.filter((p) => {
        return matchedSourceIds.has(p.source_id.toString()) ? false : true;
      });
    } catch (error) {
      // console.log('skipping');
    }

    const filteredColesData = colesFilteredWithoutBarcode;
    const filteredwoolworthsData = woolworthsDataToBeMatched;

    for (const data of filteredwoolworthsData) {
      const a = search(data.name, filteredColesData, { keySelector: (obj) => obj.name, returnMatchData: true });
      if (a.length > 0) {
        const filteredMatches = a.filter((match) => match.score >= 0.95);
        // const filteredMatches = a.filter((match) => match.score >= 0.9 && match.score < 0.95);
        if (filteredMatches && filteredMatches.length === 0) continue;
        const bestMatch = filteredMatches[0].item;
        if (!data.barcode) console.log('no barcode found');
        const formattedProduct1 = {
          source_url: bestMatch.source_url || null,
          name: bestMatch.name || null,
          image_url: bestMatch.image_url || null,
          source_id: bestMatch.source_id || null,
          barcode: data.barcode || null,
          shop: bestMatch.shop || null,
          category_id: bestMatch.category_id,
          weight: bestMatch.weight || null,
          prices: bestMatch.prices,
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
        try {
          const cleanedId = bestMatch.source_id.replace(/Coles\s*-\s*/, ''); // Removes "Coles -"
          const barcode = await ColesBarcode.findOne({ coles_product_id: cleanedId });
          if (!barcode) {
            console.log(`data`, `${data.barcode}-${cleanedId}-${bestMatch.shop}`);
            if (data.barcode && cleanedId) {
              const barcodes = new ColesBarcode({ coles_product_id: cleanedId, barcode: data.barcode });
              await barcodes.save();
            }
          } else {
            // console.log('barcodes', barcode);
          }
        } catch (error) {
          console.log('no product found', 'skip', error);
        }
        productsMatched.push(formattedProduct1);
        productsMatched.push(formattedProduct2);
      }
    }

    try {
      if (productsMatched.length > 0) {
        totalProducts += productsMatched.length;
        console.log('totalProducts', totalProducts);
        const baseFolder = `./similar/ex`;
        const folderPath = path.join(baseFolder);
        const fileName = `${category}.json`;
        const filePath = path.join(folderPath, fileName);
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
          console.log(`Created folder: ${folderPath}`);
        }
        fs.writeFileSync(filePath, JSON.stringify(productsMatched, null, 2));
        console.log(`Data saved to ${filePath}`);
      }
    } catch (error) {
      console.error('Error writing data to file:', error);
    }
  }
};

(async () => {
  await getData();
})();
