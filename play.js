import fs from "fs";
import path from "path";

const directoryPath = "coles/data/2-12-2025"; // Change to your actual folder path

const readProductsFromFolder = async () => {
    try {
        const files = fs.readdirSync(directoryPath); // Read all files in the folder

        for (const file of files) {
            if (path.extname(file) === ".json") { // Process only JSON files
                const filePath = path.join(directoryPath, file);
                const data = fs.readFileSync(filePath, "utf-8");
                const products = JSON.parse(data);

                if (Array.isArray(products) && products.length > 0) {
                    console.log(`📂 Read ${products.length} products from ${file}`);
                    products.forEach((product, index) => {
                        const missingFields = Object.entries(product)
                            .filter(([_, value]) => value === null || value === "")
                            .map(([key, _]) => key);

                        if (missingFields.length === 0) {
                            console.log(`\nProduct ${index + 1}: Passed`);
                        } else {
                            console.log(`\nProduct ${index + 1}: Failed in file: ${file}`);
                            console.log(`source_url: ${product.source_url}`);
                            console.log(`image_url: ${product.image_url}`);
                            console.log(`Missing fields: ${missingFields.join(", ")}`);
                        }
                    });
                } else {
                    console.warn(`⚠️ No valid products found in ${file}`);
                }
            }
        }
    } catch (error) {
        console.error("❌ Error reading products:", error);
    }
};

// ✅ Run the Function
const main = async () => {
    await readProductsFromFolder(); // Read and validate product details
};

main();
