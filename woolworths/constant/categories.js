const categories = [
    {
        category: "Cleaning & Maintenance",
        id: '22459',
        subCategories: [
            {
                subCategory: "Cleaning Goods",
                childItems: [
                    { extensionCategory: "Multipurpose Cleaners", subId: "22475", childId: "22487" },
                    { extensionCategory: "Bathroom Cleaners", subId: "22475", childId: "22477" },
                    { extensionCategory: "Air Fresheners", subId: "22475", childId: "22476" },
                    { extensionCategory: "Toilet Cleaners", subId: "22462", childId: "22466" },
                    { extensionCategory: "Kitchen Cleaners", subId: "22475", childId: "22484" },
                    { extensionCategory: "Sponges, Cloths & Wipes", subId: "22475", childId: "22489" },
                    { extensionCategory: "Gloves", subId: "22475", childId: "22483" }, 
                    { extensionCategory: "Mould & Moisture Treatments", subId: "22475", childId: "22486" }, 
                    { extensionCategory: "Disinfectant & Bleach", subId: "22475", childId: "22479" },
                    { extensionCategory: "Floor/Carpet Cleaners", subId: "22475", childId: "22482" },
                    { extensionCategory: "Drain Cleaners & Solvents", subId: "22475", childId: "22480" },
                    { extensionCategory: "Window & Glass Cleaners", subId: "22475", childId: "22490" }, 
                    { extensionCategory: "Fabric, Metal & Furniture Care", subId: "22475", childId: "22481" },
                    { extensionCategory: "Mops, Buckets & Brooms", subId: "22475", childId: "22485" },
                ]
            },
            {
                subCategory: "Garden & Outdoors",
                childItems: [
                    { extensionCategory: "Insecticide & Weed Control", subId: "22519", childId: "22526" },
                    { extensionCategory: "Potting Mix & Fertilisers", subId: "22519", childId: "22528" },
                    { extensionCategory: "Lawn Care & Plant Food", subId: "22519", childId: "22527" },
                    { extensionCategory: "Gloves, Tools & Watering", subId: "22519", childId: "22525" },
                    { extensionCategory: "Seeds & Plants", subId: "22519", childId: "22529" },
                    { extensionCategory: "Garden Power Tools & Equipment", subId: "", childId: "" },
                    { extensionCategory: "Garage Storage & Organisation", subId: "", childId: "" },
                    { extensionCategory: "Pool Maintenance", subId: "", childId: "" },
                    // { extensionCategory: "Garden Décor & Accessories", subId: "22519", childId: "22523" },
                    { extensionCategory: "Garden Decor & Accessories", subId: "22519", childId: "22523" },
                    { extensionCategory: "Automotive", subId: "22519", childId: "22520" },
                ]
            },
            {
                subCategory: "Hardware",
                childItems: [
                    { extensionCategory: "Extension Cords & Adapters", subId: "", childId: "" },
                    { extensionCategory: "Lighting & Torches", subId: "", childId: "" },
                    { extensionCategory: "Adhesives, Glues & Tapes", subId: "22530", childId: "22531" },
                    { extensionCategory: "Hooks & Fasteners", subId: "22530", childId: "22534" },
                    { extensionCategory: "Tools & Accessories", subId: "22530", childId: "22536" },
                ]
            },
            {
                subCategory: "Kitchen",
                childItems: [
                    { extensionCategory: "Cling Wrap, Foil & Baking Paper", subId: "22552", childId: "22553" },
                    { extensionCategory: "Dishwashing", subId: "22552", childId: "22555" },
                    { extensionCategory: "Garbage Bags", subId: "22552", childId: "22557" },
                    { extensionCategory: "Gloves", subId: "22552", childId: "23928" },
                    { extensionCategory: "Lunch Boxes & Drink Bottles", subId: "22552", childId: "22560" },
                    { extensionCategory: "Sandwich & Freezer Bags", subId: "22552", childId: "22564" },
                    { extensionCategory: "Water Filtration", subId: "22537", childId: "23979" },
                    { extensionCategory: "Waste Bins", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Laundry",
                childItems: [
                    { extensionCategory: "Fabric Softener", subId: "22566", childId: "22567" },
                    { extensionCategory: "Ironing & Accessories", subId: "22566", childId: "22568" },
                    { extensionCategory: "Laundry Capsules", subId: "", childId: "" },
                    { extensionCategory: "Laundry Liquid", subId: "22566", childId: "22569" },
                    { extensionCategory: "Laundry Powder", subId: "22566", childId: "22570" },
                    { extensionCategory: "Pegs, Baskets & Hangers", subId: "22566", childId: "22572" },
                    { extensionCategory: "Stain Removal", subId: "22566", childId: "22573" },
                ]
            },
            {
                subCategory: "Pest Control",
                childItems: [
                    { extensionCategory: "Crawling Insects", subId: "22586", childId: "22587" },
                    { extensionCategory: "Flying Insects", subId: "22586", childId: "22588" },
                    { extensionCategory: "Garden Pests", subId: "22586", childId: "22589" },
                    { extensionCategory: "Insect Repellent", subId: "22586", childId: "22590" },
                    { extensionCategory: "Mosquitoes", subId: "22586", childId: "22591" },
                    { extensionCategory: "Rodents", subId: "22586", childId: "22593" },
                ]
            },
            {
                subCategory: "Toilet Paper, Tissues & Paper Towels",
                childItems: [
                    { extensionCategory: "Toilet Paper", subId: "", childId: "" },
                    { extensionCategory: "Paper Towels", subId: "", childId: "" },
                    { extensionCategory: "Tissues & Wipes", subId: "", childId: "" }
                ]
            },
        ]
    },
    {
        category: "Home & Lifestyle",
        id: '22459',
        subCategories: [
            {
                subCategory: "Dining & Entertaining",
                childItems: [
                    { extensionCategory: "Glassware & Bar Accessories", subId: "", childId: "" },
                    { extensionCategory: "Dinnerware & Crockery", subId: "", childId: "" },
                    { extensionCategory: "Cutlery", subId: "", childId: "" },
                    { extensionCategory: "Serveware", subId: "", childId: "" },
                    { extensionCategory: "Table Linen & Placemats", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Party Supplies",
                childItems: [
                    { extensionCategory: "Party Tableware", subId: "", childId: "" },
                    { extensionCategory: "Candles", subId: "22579", childId: "22580" },
                    { extensionCategory: "Gift Wrap, Bags & Cards", subId: "", childId: "" },
                    { extensionCategory: "Decorations", subId: "22579", childId: "22581" },
                ]
            },
            {
                subCategory: "Kitchenware & Storage",
                childItems: [
                    { extensionCategory: "Lunch Boxes & Drink Bottles", subId: "", childId: "" },
                    { extensionCategory: "Food Storage Containers", subId: "", childId: "" },
                    { extensionCategory: "Kitchen Utensils", subId: "", childId: "" },
                    { extensionCategory: "Pots & Pans", subId: "", childId: "" },
                    { extensionCategory: "Bakeware & Oven Trays", subId: "", childId: "" },
                    { extensionCategory: "Chopping Boards", subId: "", childId: "" },
                    { extensionCategory: "Knives", subId: "", childId: "" },
                    { extensionCategory: "Kitchen Organisation", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Kitchen Appliances",
                childItems: [
                    { extensionCategory: "Blenders & Food Processors", subId: "", childId: "" },
                    { extensionCategory: "Air Fryers & Cookers", subId: "", childId: "" },
                    { extensionCategory: "Coffee Machines & Milk Frothers", subId: "", childId: "" },
                    { extensionCategory: "Kettles & Water Purifiers", subId: "", childId: "" },
                    { extensionCategory: "Toaster & Sandwich Presses", subId: "", childId: "" },
                    { extensionCategory: "Snack & Ice-Cream Makers", subId: "", childId: "" },
                    { extensionCategory: "Refrigerators", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Home Appliances",
                childItems: [
                    { extensionCategory: "Heating & Cooling", subId: "", childId: "" },
                    { extensionCategory: "Ironing & Laundry", subId: "", childId: "" },
                    { extensionCategory: "Vacuums & Floor Cleaners", subId: "", childId: "" },
                    { extensionCategory: "Air Dehumidifiers", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Home Decor & Furniture",
                childItems: [
                    { extensionCategory: "Candles & Home Fragrance", subId: "", childId: "" },
                    { extensionCategory: "Cushions & Covers", subId: "", childId: "" },
                    { extensionCategory: "Blankets & Throws", subId: "", childId: "" },
                    { extensionCategory: "Living Room", subId: "", childId: "" },
                    { extensionCategory: "Storage", subId: "", childId: "" },
                    { extensionCategory: "Indoor Lighting", subId: "", childId: "" },
                    { extensionCategory: "Kitchen & Dining", subId: "", childId: "" },
                    { extensionCategory: "Bedroom", subId: "", childId: "" },
                    { extensionCategory: "Kids Furniture", subId: "", childId: "" },
                    { extensionCategory: "Curtains & Blinds", subId: "", childId: "" },
                    { extensionCategory: "Photo Frames & Albums", subId: "", childId: "" },
                    { extensionCategory: "Mirrors, Clocks & Wall Art", subId: "", childId: "" },
                    { extensionCategory: "Rugs & Doormats" }
                ]
            },
            {
                subCategory: "Manchester & Bedding",
                childItems: [
                    { extensionCategory: "Bedding Sets", subId: "", childId: "" },
                    { extensionCategory: "Fitted Sheets", subId: "", childId: "" },
                    { extensionCategory: "Flat Sheets", subId: "", childId: "" },
                    { extensionCategory: "Doonas & Comforters", subId: "", childId: "" },
                    { extensionCategory: "Pillows & Pillowcases", subId: "", childId: "" },
                    { extensionCategory: "Blankets & Throws", subId: "", childId: "" },
                    { extensionCategory: "Electric Blankets", subId: "", childId: "" },
                    { extensionCategory: "Mattresses & Toppers", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Bathroom Towels & Accessories",
                childItems: [
                    { extensionCategory: "Bath Towels & Mats", subId: "", childId: "" },
                    { extensionCategory: "Bathroom Accessories", subId: "", childId: "" },
                    { extensionCategory: "Bathrobes", subId: "", childId: "" },
                    { extensionCategory: "Beach Towels", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Clothing & Accessories",
                childItems: [
                    { extensionCategory: "Women's Clothing & Underwear", subId: "24061", childId: "24064" },
                    { extensionCategory: "Women's Socks", subId: "24061", childId: "24062" },
                    { extensionCategory: "Hosiery", subId: "24061", childId: "24061" },
                    { extensionCategory: "Men's Clothing & Underwear", subId: "24061", childId: "24064" },
                    { extensionCategory: "Men's Socks", subId: "24061", childId: "24062" },
                    { extensionCategory: "Boys & Girls Underwear", subId: "24061", childId: "24064" },
                    { extensionCategory: "Boys & Girls Socks", subId: "24061", childId: "24062" },
                    { extensionCategory: "Footwear & Shoe Care", subId: "", childId: "" },
                    { extensionCategory: "Umbrellas", subId: "", childId: "" },
                    { extensionCategory: "Sewing", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Stationery & Office Supplies",
                childItems: [
                    { extensionCategory: "Stationery", subId: "22594", childId: "" },
                    { extensionCategory: "Exercise Books & Paper Goods", subId: "22594", childId: "" },
                    { extensionCategory: "Writing Instruments", subId: "22594", childId: "" },
                    { extensionCategory: "Binders & Folders", subId: "22594", childId: "" },
                    { extensionCategory: "Printers & Ink", subId: "22594", childId: "" },
                    { extensionCategory: "Arts & Craft", subId: "22594", childId: "" },
                    { extensionCategory: "Office Essentials", subId: "22594", childId: "" },
                    { extensionCategory: "Office Furniture", subId: "22594", childId: "" },
                ]
            },
            {
                subCategory: "Toys & Games",
                childItems: [
                    { extensionCategory: "Toys", subId: "", childId: "" },
                    { extensionCategory: "Board Games & Puzzles", subId: "", childId: "" },
                    { extensionCategory: "Dolls & Action Figures", subId: "", childId: "" },
                    { extensionCategory: "Sport & Outdoor Toys", subId: "", childId: "" },
                    { extensionCategory: "Toy Cars & Trucks", subId: "", childId: "" },
                    { extensionCategory: "Model Building & Construction", subId: "", childId: "" },
                    { extensionCategory: "Educational & Early Learning", subId: "", childId: "" },
                    { extensionCategory: "Electronic Toys", subId: "", childId: "" },
                    { extensionCategory: "Arts & Craft", subId: "", childId: "" },
                    { extensionCategory: "Dress Up & Costumes", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Books & Magazines",
                childItems: [
                    { extensionCategory: "Magazines", subId: "", childId: "" },
                    { extensionCategory: "Children's", subId: "", childId: "" },
                    { extensionCategory: "Teens & Young Adults", subId: "", childId: "" },
                    { extensionCategory: "Fiction & Literature", subId: "", childId: "" },
                    { extensionCategory: "Non-Fiction", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Luggage & Travel",
                childItems: [
                    { extensionCategory: "Suitcases", subId: "", childId: "" },
                    { extensionCategory: "Travel Bags", subId: "", childId: "" },
                    { extensionCategory: "Travel Accessories", subId: "", childId: "" },
                ]
            }
        ]
    },
    {
        category: "Baby",
        id: "22015",
        subCategories: [
            {
                subCategory: "Nappies",
                childItems: [
                    { extensionCategory: "Nappy Pants", subId: "22048", childId: "22054" },
                    { extensionCategory: "Newborn Nappies (3-5kg)", subId: "22048", childId: "22055" },
                    { extensionCategory: "Nappies 3-6 Months (5-7kg)", subId: "22048", childId: "22051" },
                    { extensionCategory: "Nappies 6-12 Months (7-10kg)", subId: "22048", childId: "22052" },
                    { extensionCategory: "Nappies 12-18 Months (9-12kg)", subId: "22048", childId: "22049" },
                    { extensionCategory: "Nappies 18 Months+ (10kg+)", subId: "22048", childId: "22050" },
                    { extensionCategory: "Swimming Nappies", subId: "22048", childId: "22058" },
                    { extensionCategory: "Nighttime Nappies", subId: "22048", childId: "" },
                    { extensionCategory: "Reusable Nappies", subId: "22048", childId: "" },
                ]
            },
            {
                subCategory: "Wipes & Changing",
                childItems: [
                    { extensionCategory: "Wipes", subId: "22048", childId: "22059" },
                    { extensionCategory: "Change Tables & Accessories", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Baby Food",
                childItems: [
                    { extensionCategory: "Organic Baby Food", subId: "22019", childId: "22026" },
                    { extensionCategory: "Baby Food 4 Months+", subId: "22019", childId: "22021" },
                    { extensionCategory: "Baby Food 6 Months+", subId: "22019", childId: "22022" },
                    { extensionCategory: "Baby Food 8 Months+", subId: "22019", childId: "22023" },
                    { extensionCategory: "Baby Food 12 Months+", subId: "22019", childId: "22020" },
                    { extensionCategory: "Baby & Toddler Snacks", subId: "22019", childId: "22025" },
                ]
            },
            {
                subCategory: "Baby Formula & Toddler Milk",
                childItems: [
                    { extensionCategory: "Newborn", subId: "22027", childId: "23832" },
                    { extensionCategory: "Infant", subId: "22027", childId: "23831" },
                    { extensionCategory: "Specialty", subId: "22027", childId: "23830" },
                    { extensionCategory: "Toddler", subId: "22027", childId: "23833" },
                ]
            },
            {
                subCategory: "Bath & Skincare",
                childItems: [
                    { extensionCategory: "Bath Time", subId: "22016", childId: "23821" },
                    { extensionCategory: "Skincare", subId: "22016", childId: "23821" },
                    { extensionCategory: "Grooming", subId: "22016", childId: "23821" },
                    { extensionCategory: "Bathtubs & Bath Seats", subId: "22016", childId: "23821" },
                    { extensionCategory: "Bath Toys", subId: "22016", childId: "23821" },
                    { extensionCategory: "Potty & Toilet Training", subId: "22016", childId: "23821" },
                ]
            },
            {
                subCategory: "Bottles & Baby Feeding",
                childItems: [
                    { extensionCategory: "Bottles & Bottle Accessories", subId: "22016", childId: "23827" },
                    { extensionCategory: "Baby Teething & Soothers", subId: "22016", childId: "23827" },
                    { extensionCategory: "Baby Teething & Soothers", subId: "22016", childId: "23820" },
                    { extensionCategory: "Breast Feeding", subId: "22016", childId: "23827" },
                    { extensionCategory: "Cleaning & Sterilising", subId: "22016", childId: "23827" },
                    { extensionCategory: "Food Preparation & Storage", subId: "22016", childId: "23827" },
                    { extensionCategory: "Utensils & Feeding Accessories", subId: "22016", childId: "23827" },
                    { extensionCategory: "Baby Bibs", subId: "22016", childId: "23827" }, // duplicated child because of different childId
                    { extensionCategory: "Baby Bibs", subId: "22016", childId: "23824" },
                ]
            },
            {
                subCategory: "Health & Safety",
                childItems: [
                    { extensionCategory: "Health", subId: "22016", childId: "23822" },
                    { extensionCategory: "Safety & Proofing", subId: "22016", childId: "23822" },
                    { extensionCategory: "Monitors", subId: "22016", childId: "23822" },
                ]
            },
            {
                subCategory: "Nursery & Sleeping",
                childItems: [
                    { extensionCategory: "Manchester & Bedding", subId: "", childId: "" },
                    { extensionCategory: "Decor", subId: "", childId: "" },
                    { extensionCategory: "Pillows & Sleep Positioners", subId: "", childId: "" },
                    { extensionCategory: "Sleeping Accessories", subId: "", childId: "" },
                    { extensionCategory: "Wraps", subId: "", childId: "" },
                    { extensionCategory: "Swaddles" },
                    { extensionCategory: "Sleeping Bags", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Baby & Toddler Clothing",
                childItems: [
                    { extensionCategory: "Newborn", subId: "22016", childId: "22018" },
                    { extensionCategory: "Specialty", subId: "22016", childId: "22018" },
                    { extensionCategory: "Toddler", subId: "22016", childId: "22018" },
                ]
            },
            {
                subCategory: "Pregnancy Care & Family Planning",
                childItems: [
                    { extensionCategory: "Pregnancy Tests", subId: "24060", childId: "" },
                    { extensionCategory: "Vitamins", subId: "24060", childId: "" },
                    { extensionCategory: "After Pregnancy Care", subId: "24060", childId: "" },
                ]
            },
            {
                subCategory: "Baby Furniture",
                childItems: [
                    { extensionCategory: "High Chairs", subId: "", childId: "" },
                    { extensionCategory: "Cots & Bassinets", subId: "", childId: "" },
                    { extensionCategory: "Mattresses", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Toys & Playtime",
                childItems: [
                    { extensionCategory: "Books", subId: "22016", childId: "23823" },
                    { extensionCategory: "Soft Plush Toys", subId: "22016", childId: "23823" },
                    { extensionCategory: "Education & Learning", subId: "22016", childId: "23823" },
                    { extensionCategory: "Interactive Toys", subId: "22016", childId: "23823" },
                    { extensionCategory: "Play Mats & Activity Gyms", subId: "22016", childId: "23823" },
                    { extensionCategory: "Activity Centres & Walkers", subId: "22016", childId: "23823" },
                    { extensionCategory: "Trikes, Cars & Rockers", subId: "22016", childId: "23823" },
                    { extensionCategory: "Playpens & Playsets", subId: "22016", childId: "23823" },
                    { extensionCategory: "Rockers & Bouncers", subId: "22016", childId: "23823" },
                ]
            },
            {
                subCategory: "Baby Travel & Accessories",
                childItems: [
                    { extensionCategory: "Carriers", subId: "", childId: "" },
                    { extensionCategory: "Car Seats", subId: "", childId: "" },
                    { extensionCategory: "Prams", subId: "", childId: "" },
                    { extensionCategory: "Strollers", subId: "", childId: "" },
                ]
            },
        ]
    },
    {
        category: "Pantry",
        id: '22770',
        subCategories: [
            {
                subCategory: "Breakfast & Spreads",
                childItems: [
                    { extensionCategory: "Breakfast Cereal", subId: "22785", childId: "22786" },
                    { extensionCategory: "Muesli & Oats", subId: "22785", childId: "22791" },
                    { extensionCategory: "Breakfast Snacks & Drinks", subId: "22785", childId: "22787" },
                    { extensionCategory: "Jam", subId: "22785", childId: "22790" },
                    { extensionCategory: "Honey", subId: "22785", childId: "22789" },
                    { extensionCategory: "Peanut Butter", subId: "", childId: "" },
                    { extensionCategory: "Savoury Spread", subId: "22785", childId: "22794" },
                    { extensionCategory: "Sweet Spread", subId: "22785", childId: "22795" },  
                    { extensionCategory: "Pancake Mix", subId: "", childId: "" },  
                ]
            },
            {
                subCategory: "Tea & Coffee",
                childItems: [
                    { extensionCategory: "Black Tea", subId: "22908", childId: "22909" },
                    { extensionCategory: "Green Tea", subId: "22908", childId: "22912" },
                    { extensionCategory: "Herbal Tea", subId: "22908", childId: "22914" },
                    { extensionCategory: "Specialty Tea", subId: "", childId: "" },
                    { extensionCategory: "Coffee Beans", subId: "22908", childId: "22910" },
                    { extensionCategory: "Ground Coffee", subId: "22908", childId: "22913" },
                    { extensionCategory: "Coffee Capsules", subId: "22908", childId: "22911" },
                    { extensionCategory: "Instant & Flavoured Coffee", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Long Life Milk",    
                childItems: [
                    { extensionCategory: "Almond & Other Nut Milks", subId: "", childId: "" },
                    { extensionCategory: "Soy Milk", subId: "", childId: "" },
                    { extensionCategory: "Oat & Rice Milk", subId: "", childId: "" },
                    { extensionCategory: "Powdered Milk", subId: "", childId: "" },
                    { extensionCategory: "Long Life Milk", subId: "", childId: "" },
                    { extensionCategory: "Condensed & Evaporated Milk", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Baking",
                childItems: [
                    { extensionCategory: "Flour", subId: "22771", childId: "22778" },
                    { extensionCategory: "Sugar & Sweeteners", subId: "22771", childId: "22783" },
                    { extensionCategory: "Yeast & Baking Ingredients", subId: "22771", childId: "22784" },
                    { extensionCategory: "Icing & Cake Decorating", subId: "22771", childId: "22780" },
                    { extensionCategory: "Cake & Dessert Mix", subId: "22771", childId: "22774" },
                    { extensionCategory: "Flavouring, Essence & Food Colouring", subId: "22771", childId: "22777" },
                    { extensionCategory: "Dried Fruit", subId: "22771", childId: "22776" },
                    { extensionCategory: "Cooking Chocolate & Cocoa", subId: "22771", childId: "22775" },
                    { extensionCategory: "Pancake Mix", subId: "22771", childId: "22782" },
                    { extensionCategory: "Nuts, Seeds & Coconut", subId: "22771", childId: "22781" },
                    { extensionCategory: "Gluten Free Baking", subId: "22771", childId: "22779" },
                    { extensionCategory: "Bread Mix", subId: "22771", childId: "22773" }, 
                ]
            },
            {
                subCategory: "Herbs & Spices",
                childItems: [
                    { extensionCategory: "Dried Herbs & Spices", subId: "22842", childId: "22844" },
                    { extensionCategory: "Salt & Pepper", subId: "22842", childId: "22847" },
                    { extensionCategory: "Breadcrumbs & Stuffing", subId: "22842", childId: "22843" },
                    { extensionCategory: "Fresh Herb, Garlic & Ginger Paste", subId: "22842", childId: "22845" },
                ]
            },
            {
                subCategory: "Condiments",
                childItems: [
                    { extensionCategory: "Chutney & Relish", subId: "22811", childId: "22812" },
                    { extensionCategory: "Salad Dressings", subId: "22811", childId: "22818" },
                    { extensionCategory: "Mayonnaise", subId: "22811", childId: "22815" },
                    { extensionCategory: "Mustard", subId: "22811", childId: "22816" },
                    { extensionCategory: "Pickled Vegetables", subId: "22811", childId: "22817" },
                    { extensionCategory: "Tomato & BBQ Sauce", subId: "22811", childId: "22820" },
                    { extensionCategory: "Sweet Chilli & Hot Sauce", subId: "22811", childId: "22819" },
                    { extensionCategory: "Fruit Sauce", subId: "22811", childId: "22814" },
                ]
            },
            {
                subCategory: "Canned Food & Instant Meals",
                childItems: [
                    { extensionCategory: "Instant Meals & Sides", subId: "22796", childId: "22809" },
                    { extensionCategory: "Instant Noodles", subId: "22796", childId: "22810" },
                    { extensionCategory: "Baked Beans & Spaghetti", subId: "22796", childId: "22797" },
                    { extensionCategory: "Canned Soup & Soup Ingredients", subId: "22796", childId: "22804" },
                    { extensionCategory: "Canned Tuna", subId: "22796", childId: "22806" },
                    { extensionCategory: "Canned Salmon & Seafood", subId: "22796", childId: "22803" },
                    { extensionCategory: "Canned Meat", subId: "22796", childId: "22801" },
                    { extensionCategory: "Canned Vegetables", subId: "22796", childId: "22807" },
                    { extensionCategory: "Canned Beans & Legumes", subId: "22796", childId: "22798" },
                    { extensionCategory: "Canned Fruit", subId: "22796", childId: "22800" },
                    { extensionCategory: "Canned Tomatoes", subId: "22796", childId: "22805" },
                    { extensionCategory: "Canned & Packet Ready Meals", subId: "22796", childId: "22802" }
                ]
            },
            {
                subCategory: "Pasta, Rice & Grains",
                childItems: [
                    { extensionCategory: "Dried Pasta", subId: "22868", childId: "22870" },
                    { extensionCategory: "Pasta Sheets", subId: "22868", childId: "22873" },
                    { extensionCategory: "Pasta Meals", subId: "22868", childId: "22871" },
                    { extensionCategory: "Gluten Free Pasta", subId: "22868", childId: "23986" },
                    { extensionCategory: "Rice", subId: "22868", childId: "22876" },
                    { extensionCategory: "Beans & Legumes", subId: "22868", childId: "22869" },
                    { extensionCategory: "Quinoa, Cous Cous & Other Grains", subId: "22868", childId: "22875" },
                ]
            },
            {
                subCategory: "Cooking Sauces & Recipe Bases",
                childItems: [
                    { extensionCategory: "Pizza & Pasta Sauce", subId: "22878", childId: "22881" },
                    { extensionCategory: "Marinades & Seasoning", subId: "22878", childId: "22879" },
                    { extensionCategory: "Soy & Asian Sauces", subId: "22878", childId: "22884" },
                    { extensionCategory: "Sweet Chilli & Hot Sauce", subId: "22878", childId: "22886" },
                    { extensionCategory: "Simmer Sauce & Recipe Bases", subId: "22878", childId: "22883" },
                    { extensionCategory: "Tomato & BBQ Sauce", subId: "", childId: "" },
                    { extensionCategory: "Stock & Gravy", subId: "22878", childId: "22885" },
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Asian", subId: "22848", childId: "22849" }, 
                    { extensionCategory: "European", subId: "22848", childId: "22850" },
                    { extensionCategory: "Indian", subId: "22848", childId: "22851" },
                    { extensionCategory: "Mexican", subId: "22848", childId: "22855" },
                    { extensionCategory: "Middle Eastern", subId: "22848", childId: "22856" },
                    { extensionCategory: "South African", subId: "22848", childId: "22858" },
                    { extensionCategory: "UK Foods", subId: "22848", childId: "22859" },
                    { extensionCategory: "Italian", subId: "22848", childId: "22853" },
                    { extensionCategory: "Kosher", subId: "22848", childId: "22854" },
                ]
            },
            {
                subCategory: "Desserts",
                childItems: [
                    { extensionCategory: "Ice Cream Cones, Syrups & Toppings", subId: "22821", childId: "23823" },
                    { extensionCategory: "Jelly", subId: "22821", childId: "22824" },
                    { extensionCategory: "Puddings", subId: "22821", childId: "22825" },
                    { extensionCategory: "Ready to Freeze Ice Blocks", subId: "22821", childId: "22826" },
                ]
            },
            {
                subCategory: "Oil & Vinegar",
                childItems: [
                    { extensionCategory: "Oil", subId: "", childId: "" },
                    { extensionCategory: "Vinegar", subId: "", childId: "" }
                ]
            },
        ]
    },
    {
        category: 'Snacks & Confectionery',
        id: '22770',
        subCategories: [
            {
                subCategory: 'Confectionery',
                childItems: [
                    { extensionCategory: "Chocolate Bars", subId: "22889", childId: "22894" },
                    { extensionCategory: "Chocolate Blocks", subId: "22889", childId: "22895" },
                    { extensionCategory: "Chocolate Bites", subId: "", childId: "" },
                    { extensionCategory: "Chocolate Share Packs", subId: "22889", childId: "22896" },
                    { extensionCategory: "Chocolate Boxes & Gifts", subId: "22889", childId: "23969" },
                    { extensionCategory: "Sweets, Lollies & Licorice", subId: "22889", childId: "23970" },
                ]
            },
            {
                subCategory: 'Biscuits & Crackers',
                childItems: [
                    { extensionCategory: "Biscuits & Cookies", subId: "22889", childId: "22890" },
                    { extensionCategory: "Rice Cakes & Crispbread", subId: "", childId: "" },
                    { extensionCategory: "Crackers", subId: "22889", childId: "22898" }
                ]
            },
            {
                subCategory: 'Snacks',
                childItems: [
                    { extensionCategory: "Pretzels & Jerky", subId: "", childId: "" },
                    { extensionCategory: "Popcorn", subId: "", childId: "" },
                    { extensionCategory: "Muesli Bars & Snack Bars", subId: "22889", childId: "22902" },
                    { extensionCategory: "Nuts, Dried Fruit & Snack Pots", subId: "", childId: "" },
                    { extensionCategory: "Lunch Box Snacks", subId: "22889", childId: "22901" },
                    { extensionCategory: "Gluten Free Snacks", subId: "22889", childId: "22899" }
                ]
            },
            {
                subCategory: 'Gum, Mints & Lozenges',
                childItems: [
                    { extensionCategory: "Gum", subId: "22889", childId: "23988" },
                    { extensionCategory: "Mints", subId: "22889", childId: "23988" },
                    { extensionCategory: "Lozenges", subId: "22889", childId: "23988" }
                ]
            },
            {
                subCategory: 'Chips',
                childItems: [
                    { extensionCategory: "Chips Single Pack", subId: "22889", childId: "22893" },
                    { extensionCategory: "Chips Sharing", subId: "22889", childId: "22892" },
                    { extensionCategory: "Chips Multi-Pack", subId: "22889", childId: "22891" },
                    { extensionCategory: "Corn Chips & Salsa", subId: "22889", childId: "22897" }
                ]
            },
            {
                subCategory: 'Easter Chocolates & Treats',
                childItems: [
                    { extensionCategory: "Easter Bunnies", subId: "", childId: "" },
                    { extensionCategory: "Easter Eggs", subId: "", childId: "" },
                    { extensionCategory: "Easter Chocolate Gifting", subId: "", childId: "" },
                ]
            }
        ]
    },    
    {
        category: "Fruit & Veg",
        id: "22351",
        subCategories: [
            {
                subCategory: "Fruit",
                childItems: [
                    { extensionCategory: "Organic Fruit", subId: "", childId: "" },
                    { extensionCategory: "Apples & Pears", subId: "22352", childId: "22353" },
                    { extensionCategory: "Bananas", subId: "22352", childId: "22354" },
                    { extensionCategory: "Berries & Cherries", subId: "22352", childId: "22355" },
                    { extensionCategory: "Citrus Fruit", subId: "22352", childId: "22356" },
                    { extensionCategory: "Stone Fruit", subId: "", childId: "" },
                    { extensionCategory: "Grapes", subId: "22352", childId: "22358" },
                    { extensionCategory: "Melons & Mangoes", subId: "22352", childId: "22359" },
                    { extensionCategory: "Avocados", subId: "", childId: "" },
                    { extensionCategory: "Pineapples, Kiwi & Tropical Fruit", subId: "22352", childId: "22362" },
                    { extensionCategory: "Asian & Exotic Fruit", subId: "22352", childId: "22364" },
                    { extensionCategory: "Cut Fruit", subId: "22352", childId: "22357" },
                ]
            },
            {
                subCategory: "Vegetables",
                childItems: [
                    { extensionCategory: "Organic Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Prepacked Vegetables", subId: "22379", childId: "22390" },
                    { extensionCategory: "Potatoes & Pumpkins", subId: "22379", childId: "22389" },
                    { extensionCategory: "Carrots, Onions & Root Veg", subId: "22379", childId: "22383" },
                    { extensionCategory: "Lettuce, Kale & Leafy Greens", subId: "22386", childId: "22391" },
                    { extensionCategory: "Broccoli, Cauliflower & Cabbage", subId: "22379", childId: "22381" },
                    { extensionCategory: "Peas, Beans, Corn & Asparagus", subId: "22379", childId: "22388" },
                    { extensionCategory: "Capsicum", subId: "22379", childId: "22382" },
                    { extensionCategory: "Tomatoes", subId: "22379", childId: "22392" },
                    { extensionCategory: "Celery", subId: "", childId: "" },
                    { extensionCategory: "Avocados", subId: "22379", childId: "22380" },
                    { extensionCategory: "Cucumber", subId: "22379", childId: "22384" },
                    { extensionCategory: "Mushrooms", subId: "22379", childId: "22382" },
                    { extensionCategory: "Fresh Herbs, Garlic & Chillies", subId: "22379", childId: "22385" },
                    { extensionCategory: "Zucchini, Eggplant & Squash", subId: "22379", childId: "22393" },
                    { extensionCategory: "Sprouts", subId: "", childId: "" },
                    { extensionCategory: "Snacking", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Salad",
                childItems: [
                    { extensionCategory: "Salad Bowls", subId: "", childId: "" },
                    { extensionCategory: "Coleslaw", subId: "22372", childId: "22375" },
                    { extensionCategory: "Salad Bags", subId: "22372", childId: "22376" },
                    { extensionCategory: "Salad Kits", subId: "", childId: "" },
                    { extensionCategory: "Spinach & Rocket", subId: "", childId: "" },
                    { extensionCategory: "Beetroot & Carrot", subId: "", childId: "" },
                    { extensionCategory: "Sprouts", subId: "22372", childId: "22378" },
                    { extensionCategory: "Organic Salad", subId: "22372", childId: "22374" },
                    { extensionCategory: "Salad Vegetables", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Prepared Vegetables",
                childItems: [
                    { extensionCategory: "Cut Veg", subId: "", childId: "" },
                    { extensionCategory: "Microwave Ready Sides", subId: "", childId: "" },
                    { extensionCategory: "Oven Ready Sides", subId: "", childId: "" },
                    { extensionCategory: "Stir Fry & Soup Kits", subId: "", childId: "" },
                    { extensionCategory: "Sprouts", subId: "", childId: "" },
                    { extensionCategory: "Entertaining Sides", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Organic",
                childItems: [
                    { extensionCategory: "Organic Fruit", subId: "22368", childId: "22369" },
                    { extensionCategory: "Organic Vegetables", subId: "22368", childId: "23987" },
                    { extensionCategory: "Organic Salad", subId: "22368", childId: "22370" },
                    { extensionCategory: "Organic Loose", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Fresh Herbs, Garlic & Chillies",
                childItems: [
                    { extensionCategory: "Fresh Herbs", subId: "22372", childId: "22373" },
                    { extensionCategory: "Garlic, Chillies & Spices", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Snacking",
                childItems: [
                    { extensionCategory: "Prepacked Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Prepacked Fruit", subId: "", childId: "" },
                ]
            },
        ]
    },
    {
        category: "Poultry, Meat & Seafood",
        id: "22713",
        subCategories: [
            {
                subCategory: "Poultry",
                childItems: [
                    { extensionCategory: "Fresh Chicken", subId: "24059", childId: "" },
                    { extensionCategory: "Free Range Chicken", subId: "24059", childId: "" },
                    { extensionCategory: "Crumbed", subId: "", childId: "" },
                    { extensionCategory: "Kebabs & Marinated", subId: "22714", childId: "23935" },
                    { extensionCategory: "Deli Chicken", subId: "24059", childId: "" },
                    { extensionCategory: "Turkey", subId: "", childId: "" },
                    { extensionCategory: "Duck & Game", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Meat",
                childItems: [
                    { extensionCategory: "Beef & Veal", subId: "", childId: "" },
                    { extensionCategory: "Lamb", subId: "", childId: "" },
                    { extensionCategory: "Pork", subId: "", childId: "" },
                    { extensionCategory: "Game", subId: "", childId: "" },
                    { extensionCategory: "Burgers & Sausages", subId: "", childId: "" },
                    { extensionCategory: "Deli Meat", subId: "", childId: "" },
                    { extensionCategory: "Organic Meat", subId: "", childId: "" },
                    { extensionCategory: "Gluten Free Meat", subId: "", childId: "" },
                    { extensionCategory: "Mince", subId: "", childId: "" },
                    { extensionCategory: "Oven Ready Meat", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Seafood",
                childItems: [
                    { extensionCategory: "Salmon & Other Fish", subId: "22714", childId: "22718" },
                    { extensionCategory: "Salmon & Other Fish", subId: "22758", childId: "22761" },
                    { extensionCategory: "Prawns", subId: "22714", childId: "22721" },
                    { extensionCategory: "Prawns", subId: "22758", childId: "22766" },
                    { extensionCategory: "Seafood Entertaining", subId: "", childId: "" },
                    { extensionCategory: "Frozen Prepacked Seafood", subId: "22758", childId: "22760" },
                    { extensionCategory: "Frozen Prepacked Seafood", subId: "22758", childId: "22667" },
                    { extensionCategory: "Squid, Octopus & Marinara", subId: "22758", childId: "22763" },
                    { extensionCategory: "Squid, Octopus & Marinara", subId: "22758", childId: "22769" },
                    { extensionCategory: "Crab & Lobster", subId: "22758", childId: "22759" },
                    { extensionCategory: "Oysters, Mussels & Scallops", subId: "22758", childId: "22764" },
                    { extensionCategory: "Sauce & Condiments", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Mince",
                childItems: [
                    { extensionCategory: "Beef Mince", subId: "", childId: "" },
                    { extensionCategory: "Pork Mince", subId: "", childId: "" },
                    { extensionCategory: "Chicken & Turkey Mince", subId: "24059", childId: "" },
                    { extensionCategory: "Lamb Mince", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "BBQ Meat",
                childItems: [
                    { extensionCategory: "Burgers", subId: "22714", childId: "22716" },
                    { extensionCategory: "Sausages", subId: "22714", childId: "22716" },
                    { extensionCategory: "Pork", subId: "22714", childId: "22720" },
                    { extensionCategory: "Kebabs", subId: "22714", childId: "23935" },
                    { extensionCategory: "Chicken", subId: "22714", childId: "22717" },
                    { extensionCategory: "Chicken", subId: "24059", childId: "" },
                    { extensionCategory: "Lamb", subId: "22714", childId: "22719" },
                ]
            },
            {
                subCategory: "Organic Meat & Poultry",
                childItems: [
                    { extensionCategory: "Organic Beef", subId: "", childId: "" },
                    { extensionCategory: "Organic Lamb", subId: "", childId: "" },
                    { extensionCategory: "Organic Chicken", subId: "24059", childId: "" },
                ]
            },
        ]
    },
    {
        category: "Freezer",
        id: "22280",
        subCategories: [
            {
                subCategory: "Frozen Meals",
                childItems: [
                    { extensionCategory: "Frozen Meals", subId: "22299", childId: "22300" },
                    { extensionCategory: "Kid's Frozen Meals", subId: "22299", childId: "23989" },
                    { extensionCategory: "Frozen Dumplings", subId: "22299", childId: "23292" },
                    { extensionCategory: "Plant Based Meals", subId: "22299", childId: "22304" },
                ]
            },
            {
                subCategory: "Frozen Gluten Free",
                childItems: [
                    { extensionCategory: "Gluten Free", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Chips & Wedges",
                childItems: [
                    { extensionCategory: "Chips", subId: "22281", childId: "22282" },
                    { extensionCategory: "Hashbrowns", subId: "22281", childId: "22284" },
                    { extensionCategory: "Wedges", subId: "22281", childId: "22285" },
                ]
            },
            {
                subCategory: "Frozen Seafood",
                childItems: [
                    { extensionCategory: "Fish Fillets", subId: "22322", childId: "22323" },
                    { extensionCategory: "Fish Fingers & Cakes", subId: "22322", childId: "22324" },
                    { extensionCategory: "Frozen Seafood", subId: "22322", childId: "22325" },
                ]
            },
            {
                subCategory: "Frozen Meat",
                childItems: [
                    { extensionCategory: "Beef & Pork", subId: "", childId: "" },
                    { extensionCategory: "Chicken Pieces & Nuggets", subId: "22305", childId: "22307" },
                    { extensionCategory: "Whole Birds & Roasts", subId: "22305", childId: "22307" },
                ]
            },
            {
                subCategory: "Frozen Pizzas",
                childItems: [
                    { extensionCategory: "Pizzas", subId: "22319", childId: "22321" },
                ]
            },
            {
                subCategory: "Frozen Vegetables",
                childItems: [
                    { extensionCategory: "Beans & Peas", subId: "22327", childId: "22328" },
                    { extensionCategory: "Corn", subId: "22327", childId: "22329" },
                    { extensionCategory: "Mixed Vegetables", subId: "22327", childId: "22331" },
                    { extensionCategory: "Steam Packs", subId: "22327", childId: "22333" },
                    { extensionCategory: "Other Vegetables", subId: "22327", childId: "22332" },
                ]
            },
            {
                subCategory: "Frozen Fruit",
                childItems: [
                    { extensionCategory: "Berries & Tropical", subId: "22293", childId: "22294" },
                ]
            },
            {
                subCategory: "Ice Cream",
                childItems: [
                    { extensionCategory: "Ice Cream Tubs", subId: "22334", childId: "22340" },
                    { extensionCategory: "Ice Cream Sticks & Cones", subId: "22334", childId: "22339" },
                    { extensionCategory: "Premium Ice Cream", subId: "22334", childId: "22341" },
                    { extensionCategory: "Frozen Yoghurt", subId: "22334", childId: "23848" },
                    { extensionCategory: "Gelato & Sorbet", subId: "22334", childId: "22336" },
                    { extensionCategory: "Ice Cream Cakes", subId: "22334", childId: "22337" },
                ]
            },
            {
                subCategory: "Frozen Desserts",
                childItems: [
                    { extensionCategory: "Assorted Desserts", subId: "22287", childId: "22288" },
                    { extensionCategory: "Cakes & Cheesecakes", subId: "22287", childId: "22289" },
                    { extensionCategory: "Dessert Pies & Pastries", subId: "22287", childId: "22290" },
                    { extensionCategory: "Pastry Sheets", subId: "22287", childId: "22292" },
                ]
            },
            {
                subCategory: "Frozen Party Food",
                childItems: [
                    { extensionCategory: "Pastry Sheets", subId: "22311", childId: "22314" },
                    { extensionCategory: "Pies, Pastries & Quiches", subId: "22311", childId: "22315" },
                    { extensionCategory: "Frozen Finger Food", subId: "22311", childId: "22312" },
                ]
            },
            {
                subCategory: "Frozen Pies & Sausage Rolls",
                childItems: [
                    { extensionCategory: "Pies & Sausage Rolls", subId: "22316", childId: "22318" },
                ]
            },
        ]
    },
    {
        category: "Bakery",
        id: "22060",
        subCategories: [
            {
                subCategory: "In-Store Bakery",
                childItems: [
                    { extensionCategory: "Bread", subId: "", childId: "" },
                    { extensionCategory: "Sourdough & Specialty Bread", subId: "", childId: "" },
                    { extensionCategory: "Muffins & Scones", subId: "", childId: "" },
                    { extensionCategory: "Bread Rolls", subId: "", childId: "" },
                    { extensionCategory: "Donuts & Cookies", subId: "", childId: "" },
                    { extensionCategory: "Bakery Cakes", subId: "", childId: "" },
                    { extensionCategory: "Pastries & Desserts", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Packaged Bread & Bakery",
                childItems: [
                    { extensionCategory: "Cakes", subId: "", childId: "" },
                    { extensionCategory: "Packaged Bread", subId: "", childId: "" },
                    { extensionCategory: "Crumpets & Pancakes", subId: "", childId: "" },
                    { extensionCategory: "Muffins, Scones & Cupcakes", subId: "", childId: "" },
                    { extensionCategory: "Desserts & Pastries", subId: "", childId: "" },
                    { extensionCategory: "Pizza Bases", subId: "", childId: "" },
                    { extensionCategory: "Wraps & Flatbread", subId: "", childId: "" },
                    { extensionCategory: "Rolls & Bagels", subId: "", childId: "" },
                    { extensionCategory: "Gluten Free Bakery", subId: "", childId: "" },
                    { extensionCategory: "Pies & Quiches", subId: "", childId: "" },
                    { extensionCategory: "Bake At Home", subId: "", childId: "" },
                    { extensionCategory: "Organic Bakery", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Easter Hot Cross Buns & Desserts",
                childItems: [
                    { extensionCategory: "Hot Cross Buns", subId: "", childId: "" },
                ]
            },
        ]
    },
    {
        category: "Pet",
        id: "22916",
        subCategories: [
            {
                subCategory: "Cat & Kitten",
                childItems: [
                    { extensionCategory: "Dry Cat Food", subId: "", childId: "" },
                    { extensionCategory: "Chilled Cat Food", subId: "", childId: "" },
                    { extensionCategory: "Trays & Cans Cat Food", subId: "", childId: "" },
                    { extensionCategory: "Kitten Food..", subId: "", childId: "" },
                    { extensionCategory: "Cat Grooming, Accessories & Toys", subId: "", childId: "" },
                    { extensionCategory: "Cat Healthcare", subId: "", childId: "" },
                    { extensionCategory: "Cat Litter", subId: "", childId: "" },
                    { extensionCategory: "Cat Treats & Milk", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Dog & Puppy",
                childItems: [
                    { extensionCategory: "Dry Dog Food", subId: "", childId: "" },
                    { extensionCategory: "Chilled Dog Food", subId: "", childId: "" },
                    { extensionCategory: "Frozen Dog Food", subId: "", childId: "" },
                    { extensionCategory: "Trays & Cans Dog Food", subId: "", childId: "" },
                    { extensionCategory: "Puppy Food" },
                    { extensionCategory: "Dog Grooming, Accessories & Toys", subId: "", childId: "" },
                    { extensionCategory: "Dog Healthcare", subId: "", childId: "" },
                    { extensionCategory: "Dog Collars & Leads", subId: "", childId: "" },
                    { extensionCategory: "Dog Treats & Milk", subId: "", childId: "" },
                    { extensionCategory: "Dog Bedding & Carriers", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Birds, Fish & Small Pets",
                childItems: [
                    { extensionCategory: "Bird Food", subId: "", childId: "" },
                    { extensionCategory: "Bird Treats", subId: "", childId: "" },
                    { extensionCategory: "Fish Food", subId: "", childId: "" },
                    { extensionCategory: "Small Pets Food", subId: "", childId: "" },
                    { extensionCategory: "Small Pet Accessories", subId: "", childId: "" },
                    { extensionCategory: "Bird Accessories", subId: "", childId: "" },
                    { extensionCategory: "Fish Tanks, Cleaning & Accessories", subId: "", childId: "" },
                ]
            },
        ]
    },
    {
        category: "Drinks",
        id: "22164",
        subCategories: [
            {
                subCategory: "Chilled Drinks",
                childItems: [
                    { extensionCategory: "Chilled Soft Drinks & Energy Drinks", subId: "", childId: "" },
                    { extensionCategory: "Chilled Water", subId: "", childId: "" },
                    { extensionCategory: "Chilled Juices, Iced Teas & Iced Coffee", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Soft Drinks",
                childItems: [
                    { extensionCategory: "Mixers", subId: "", childId: "" },
                    { extensionCategory: "Soft Drink Bottles", subId: "", childId: "" },
                    { extensionCategory: "Soft Drink Cans", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Cordials, Juices & Iced Teas",
                childItems: [
                    { extensionCategory: "Cordials", subId: "", childId: "" },
                    { extensionCategory: "Juices", subId: "", childId: "" },
                    { extensionCategory: "Chilled Juices", subId: "", childId: "" },
                    { extensionCategory: "Iced Teas", subId: "", childId: "" },
                    { extensionCategory: "Lunch Box Juice", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Water",
                childItems: [
                    { extensionCategory: "Flavoured & Coconut Water", subId: "", childId: "" },
                    { extensionCategory: "Sparkling Water", subId: "", childId: "" },
                    { extensionCategory: "Still Water", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Sports & Energy Drinks",
                childItems: [
                    { extensionCategory: "Energy Drinks", subId: "", childId: "" },
                    { extensionCategory: "Sports Drinks", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Tea",
                childItems: [
                    { extensionCategory: "Black Tea", subId: "", childId: "" },
                    { extensionCategory: "Green Tea", subId: "", childId: "" },
                    { extensionCategory: "Herbal & Specialty Tea", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Coffee",
                childItems: [
                    { extensionCategory: "Coffee Beans", subId: "", childId: "" },
                    { extensionCategory: "Coffee Capsules", subId: "", childId: "" },
                    { extensionCategory: "Ground Coffee", subId: "", childId: "" },
                    { extensionCategory: "Instant & Flavoured Coffee", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Flavoured Milk",
                childItems: [
                    { extensionCategory: "Bubble Tea", subId: "", childId: "" },
                    { extensionCategory: "Drinking Chocolate", subId: "", childId: "" },
                    { extensionCategory: "Drinks & Powders", subId: "", childId: "" },
                    { extensionCategory: "Kids Milk", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Long Life Milk",
                childItems: [
                    { extensionCategory: "Almond Milk", subId: "", childId: "" },
                    { extensionCategory: "Soy Milk", subId: "", childId: "" },
                    { extensionCategory: "Powdered Milk", subId: "", childId: "" },
                    { extensionCategory: "Oat & Rice Milk", subId: "", childId: "" },
                    { extensionCategory: "Lactose Free Milk", subId: "", childId: "" },
                    { extensionCategory: "Long Life Milk", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Home Brew",
                childItems: [
                    { extensionCategory: "Home Brew", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Low & Non Alcoholic Drinks",
                childItems: [
                    { extensionCategory: "Low & Non Alcoholic Beer", subId: "", childId: "" },
                    { extensionCategory: "Low & Non Alcoholic Wine", subId: "", childId: "" },
                    { extensionCategory: "Low & Non Alcoholic Spirits", subId: "", childId: "" },
                    { extensionCategory: "Low & Non Alcoholic Home Brew", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Hampers & Gifting",
                childItems: [
                    { extensionCategory: "Liquor Hampers", subId: "", childId: "" },
                    { extensionCategory: "No & Very Low Alcohol Hampers", subId: "", childId: "" },
                    { extensionCategory: "Drinks Gift Sets", subId: "", childId: "" },
                ]
            },
        ]
    },
    {
        category: "Deli & Chilled Meals",
        id: "24023",
        subCategories: [
            {
                subCategory: "Deli Meats",
                childItems: [
                    { extensionCategory: "Sausages & Frankfurts" },
                    { extensionCategory: "Packaged Ham, Bacon & Salami" },
                    { extensionCategory: "Sliced & Shaved Deli Meat" },
                ]
            },
            {
                subCategory: "Deli Specialties",
                childItems: [
                    { extensionCategory: "Antipasto" },
                    { extensionCategory: "Dips & Pate" },
                    { extensionCategory: "Gourmet Cheese" },
                    { extensionCategory: "Platters" },
                ]
            },
            {
                subCategory: "Ready to Eat Meals",
                childItems: [
                    { extensionCategory: "Chilled Pizza & Garlic Bread" },
                    { extensionCategory: "Chilled Quiches & Pies" },
                    { extensionCategory: "Chilled Soup" },
                    { extensionCategory: "Entertaining & Sides" },
                    { extensionCategory: "Family Meals" },
                    { extensionCategory: "Fresh Pasta & Sauces" },
                    { extensionCategory: "Packaged Salads" },
                    { extensionCategory: "Single Serve" },
                ]
            },
            {
                subCategory: "Vegetarian & Vegan",
                childItems: [
                    { extensionCategory: "Vegan" },
                    { extensionCategory: "Vegetarian" },
                ]
            },
        ]
    },
    {
        category: "Dairy, Eggs & Fridge",
        id: "22089",
        subCategories: [
            {
                subCategory: "Cheese",
                childItems: [
                    { extensionCategory: "Block Cheese" },
                    { extensionCategory: "Sliced Cheese" },
                    { extensionCategory: "Grated Cheese" },
                    { extensionCategory: "Entertaining Cheese" },
                    { extensionCategory: "Soft Cheese" },
                    { extensionCategory: "Snacking Cheese" },
                    { extensionCategory: "Cooking Cheese" },
                    { extensionCategory: "Fetta & Goat's Cheese" },
                    { extensionCategory: "Parmesan & Italian Cheese" },
                    { extensionCategory: "Ricotta, Cottage & Cream Cheese" },
                ]
            },
            {
                subCategory: "Milk",
                childItems: [
                    { extensionCategory: "Full Cream Milk" },
                    { extensionCategory: "Skim & Reduced Fat Milk" },
                    { extensionCategory: "Soy & Speciality Milk" },
                    { extensionCategory: "Flavoured Milk" },
                    { extensionCategory: "Long Life Milk" },
                    { extensionCategory: "Lactose Free Milk" },
                ]
            },
            {
                subCategory: "Yoghurt",
                childItems: [
                    { extensionCategory: "Everyday Yoghurt" },
                    { extensionCategory: "Greek Yoghurt & Natural Yoghurt" },
                    { extensionCategory: "Thick & Creamy Yoghurt" },
                    { extensionCategory: "Kids Yoghurt" },
                    { extensionCategory: "High Protein Yoghurt" },
                    { extensionCategory: "Probiotic & Gut Health Yoghurt" },
                    { extensionCategory: "Plant Based Yoghurt" },
                    { extensionCategory: "Lactose Free" },
                    { extensionCategory: "Kefir" },
                ]
            },
            {
                subCategory: "Cream, Custard & Desserts",
                childItems: [
                    { extensionCategory: "Cream" },
                    { extensionCategory: "Custard" },
                    { extensionCategory: "Desserts" },
                ]
            },
            {
                subCategory: "Eggs, Butter & Margarine",
                childItems: [
                    { extensionCategory: "Eggs" },
                    { extensionCategory: "Butter & Margarine" },
                ]
            },
            {
                subCategory: "Dips & Pate",
                childItems: [
                    { extensionCategory: "Dips" },
                    { extensionCategory: "Pate, Paste & Caviar" },
                ]
            },
            {
                subCategory: "Ready to Eat Meals",
                childItems: [
                    { extensionCategory: "Italian Meals" },
                    { extensionCategory: "Asian Meals" },
                    { extensionCategory: "Indian Meals" },
                    { extensionCategory: "Chilled Soup" },
                    { extensionCategory: "Chilled Ready Meals" },
                    { extensionCategory: "Chilled Pizza & Bread" },
                    { extensionCategory: "Packaged Salads & Sides" },
                    { extensionCategory: "Vegetarian & Meat Free" },
                ]
            },
            {
                subCategory: "Fresh Pasta & Sauces",
                childItems: [
                    { extensionCategory: "Fresh Pasta & Noodles" },
                    { extensionCategory: "Pasta Sauces" },
                ]
            },
            {
                subCategory: "Vegetarian & Vegan",
                childItems: [
                    { extensionCategory: "Vegetarian & Meat Free" },
                    { extensionCategory: "Vegan" },
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Chilled Asian" },
                ]
            },
            
            
        ]
    },
    {
        category: "Beauty & Personal Care",
        id: "22394",
        subCategories: [
            {
                subCategory: "Shower, Bath & Body",
                childItems: [
                    { extensionCategory: "Soap" },
                    { extensionCategory: "Body Wash" },
                    { extensionCategory: "Handwash & Hand Sanitisers" },
                    { extensionCategory: "Bubble Bath & Salts" },
                    { extensionCategory: "Shower & Bath Accessories" },
                    { extensionCategory: "Female Deodorants" },
                    { extensionCategory: "Female Body Sprays" },
                    { extensionCategory: "Cotton Wool & Cotton Buds" },
                    { extensionCategory: "Wipes & Tissues" },
                ]
            },
            {
                subCategory: "Hair Care",
                childItems: [
                    { extensionCategory: "Colouring" },
                    { extensionCategory: "Shampoo & Conditioner" },
                    { extensionCategory: "Hair Treatments" },
                    { extensionCategory: "Styling Products" },
                    { extensionCategory: "Hair Accessories & Brushes" },
                ]
            },
            {
                subCategory: "Oral Care",
                childItems: [
                    { extensionCategory: "Floss & Mouthwash" },
                    { extensionCategory: "Toothbrushes" },
                    { extensionCategory: "Toothpaste" },
                    { extensionCategory: "Teeth Whitening" },
                    { extensionCategory: "Denture Care" },
                ]
            },
            {
                subCategory: "Men's Care",
                childItems: [
                    { extensionCategory: "Men's Blades & Razors" },
                    { extensionCategory: "Men's Shave Gels & Foams" },
                    { extensionCategory: "Men's Aftershave" },
                    { extensionCategory: "Men's Skin" },
                    { extensionCategory: "Men's Body Sprays" },
                    { extensionCategory: "Men's Deodorants" },
                    { extensionCategory: "Men's Shower Gels" },
                    { extensionCategory: "Men's Hair Care" },
                ]
            },
            {
                subCategory: "Period & Continence Care",
                childItems: [
                    { extensionCategory: "Pads & Pants" },
                    { extensionCategory: "Tampons" },
                    { extensionCategory: "Liners" },
                    { extensionCategory: "Period Underwear & Reusables" },
                    { extensionCategory: "Maternity Pads" },
                    { extensionCategory: "Intimate Hygiene" },
                    { extensionCategory: "Continence Pants" },
                    { extensionCategory: "Continence Pads" },
                    { extensionCategory: "Continence Liners" },
                    { extensionCategory: "Continence Underwear & Reusables" },
                    { extensionCategory: "Continence Mens" },
                ]
            },
            {
                subCategory: "Skin Care",
                childItems: [
                    { extensionCategory: "Body Moisturiser" },
                    { extensionCategory: "Face Moisturiser" },
                    { extensionCategory: "Facial Cleansers, Toners & Scrubs" },
                    { extensionCategory: "Face Masks & Treatments" },
                    { extensionCategory: "Hand Moisturiser" },
                    { extensionCategory: "Lip Care" },
                    { extensionCategory: "Self-Tanning" },
                    { extensionCategory: "Sun Protection" },
                ]
            },
            {
                subCategory: "Women's Hair Removal",
                childItems: [
                    { extensionCategory: "Women's Blades & Razors" },
                    { extensionCategory: "Waxes & Creams" },
                ]
            },
            {
                subCategory: "Cosmetics",
                childItems: [
                    { extensionCategory: "Eyes" },
                    { extensionCategory: "Face" },
                    { extensionCategory: "Lips" },
                    { extensionCategory: "Nails" },
                    { extensionCategory: "Cosmetic Tools & Accessories" },
                ]
            },
            {
                subCategory: "Travel Toiletries & Minis",
                childItems: [
                    { extensionCategory: "Travel Toiletries & Minis" },
                ]
            },
            
        ]
    },
    {
        category: "Health & Wellness",
        id: "22394",
        subCategories: [
            {
                subCategory: "Health Foods",
                childItems: [
                    { extensionCategory: "Gluten Free", subId: "1", childId: "" },
                    { extensionCategory: "Vegan", subId: "2", childId: "" },
                    { extensionCategory: "Dairy Free", subId: "3", childId: "" },
                    { extensionCategory: "Breakfast & Spreads", subId: "4", childId: "" },
                    { extensionCategory: "Sweet & Savoury Snacks", subId: "", childId: "" },
                    { extensionCategory: "Confectionery", subId: "", childId: "" },
                    { extensionCategory: "Dried Fruit, Nuts & Seeds", subId: "", childId: "" },
                    { extensionCategory: "Baking", subId: "", childId: "" },
                    { extensionCategory: "Pasta, Rice & Grains", subId: "", childId: "" },
                    { extensionCategory: "Cooking Needs", subId: "", childId: "" },
                    { extensionCategory: "Drinks", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Vitamins",
                childItems: [
                    { extensionCategory: "Children's Health", subId: "", childId: "" },
                    { extensionCategory: "Women's Health", subId: "", childId: "" },
                    { extensionCategory: "Men's Health", subId: "", childId: ""},
                    { extensionCategory: "Pregnancy & Family Planning", subId: "", childId: "" },
                    { extensionCategory: "Cold, Flu & Allergies", subId: "", childId: "" },
                    { extensionCategory: "Multi Vitamins", subId: "", childId: "" },
                    { extensionCategory: "Digestion & Probiotics", subId: "", childId: "" },
                    { extensionCategory: "Fatigue, Stress & Sleep", subId: "", childId: "" },
                    { extensionCategory: "Bones, Joints & Muscle Health", subId: "", childId: "" },
                    { extensionCategory: "Omega-3", subId: "", childId: "" },
                    { extensionCategory: "Hair, Skin & Nails", subId: "", childId: "" },
                    { extensionCategory: "Brain & Heart", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Diet & Sports Nutrition",
                childItems: [
                    { extensionCategory: "Sports Nutrition Powders", subId: "", childId: "" },
                    { extensionCategory: "Weight Management", subId: "", childId: "" },
                    { extensionCategory: "Ready To Drink", subId: "", childId: "" },
                    { extensionCategory: "Protein Bars & Snacks", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "First Aid & Medicinal",
                childItems: [
                    { extensionCategory: "Pain Relief", subId: "", childId: "" },
                    { extensionCategory: "Cold, Flu & Allergies", subId: "", childId: "" },
                    { extensionCategory: "First Aid & Bandages", subId: "", childId: "" },
                    { extensionCategory: "Digestive Health", subId: "", childId: "" },
                    { extensionCategory: "Natural Remedies & Oils", subId: "", childId: "" },
                    { extensionCategory: "Intimate Wellness", subId: "", childId: "" },
                    { extensionCategory: "Eye, Ear & Mouth Care", subId: "", childId: "" },
                    { extensionCategory: "Pregnancy Tests", subId: "", childId: "" },
                    { extensionCategory: "Foot Care", subId: "", childId: "" },
                    { extensionCategory: "Cotton Wool & Cotton Buds", subId: "", childId: "" },
                    { extensionCategory: "Nicotine Replacement", subId: "", childId: "" },
                    { extensionCategory: "Test Kits & Face Masks", subId: "", childId: "" },
                ]
            },
        ]
    },
]

export default categories;