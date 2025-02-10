import mongoose from "mongoose";
import fs from "fs";
import Product from "./models/products.js"; // Ensure correct path
import dbConnect from "./db/dbConnect.js"; // Ensure correct path

// ✅ Function to Read and Process Records
const generateCategoryStructure = async () => {
    try {
        await dbConnect(); // Establish database connection
        console.log("✅ Connected to MongoDB");

        // ✅ Fetch All Records from the "Product" collection
        const records = await Product.find({});
        console.log(`📄 Found ${records.length} records.`);

        // ✅ Data Structure: Category -> SubCategory -> ExtensionCategory
        const categoryStructure = {};

        records.forEach(record => {
            const categories = record.category || [];
            const subCategories = record.subCategory || [];
            const extensionCategories = record.extensionCategory || [];

            categories.forEach(category => {
                if (!categoryStructure[category]) {
                    categoryStructure[category] = { id: "", subCategories: {} }; // Initialize category with ID
                }

                subCategories.forEach(subCategory => {
                    if (!categoryStructure[category].subCategories[subCategory]) {
                        categoryStructure[category].subCategories[subCategory] = { id: "", extensionCategories: [] }; // Initialize subCategory with ID
                    }

                    extensionCategories.forEach(extensionCategory => {
                        // Add extensionCategory as an object with name and id
                        if (!categoryStructure[category].subCategories[subCategory].extensionCategories.some(e => e.name === extensionCategory)) {
                            categoryStructure[category].subCategories[subCategory].extensionCategories.push({ name: extensionCategory, id: "" });
                        }
                    });
                });
            });
        });
        const output = Object.entries(categoryStructure).map(([category, { id, subCategories }]) => ({
            category,
            id,
            subCategories: Object.entries(subCategories).map(([subCategory, { id, extensionCategories }]) => ({
                subCategory,
                id,
                "extension Categories": extensionCategories, // Correctly formatted key
            })),
        }));

        // ✅ Save to JSON File
        fs.writeFileSync("CategoryStructure.json", JSON.stringify(output, null, 4));
        console.log("✅ CategoryStructure.json has been saved!");

    } catch (error) {
        console.error("❌ Error processing records:", error);
    } finally {
        mongoose.connection.close(); // Close DB connection after execution
        console.log("🔌 MongoDB connection closed.");
    }
};

// ✅ Run the Function
generateCategoryStructure();
