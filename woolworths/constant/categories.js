const categories = [
    {
        category: "Cleaning & Maintenance",
        id: '22459',
        subCategories: [
            {
                subCategory: "Cleaning Goods",
                childItems: [
                    { extensionCategory: "Air Fresheners", subId: "", childId: "" },
                    { extensionCategory: "Bathroom Cleaners", subId: "", childId: "" },
                    { extensionCategory: "Disinfectant & Bleach", subId: "", childId: "" },
                    { extensionCategory: "Drain Cleaners & Solvents", subId: "", childId: "" },
                    { extensionCategory: "Fabric, Metal & Furniture Care", subId: "", childId: "" },
                    { extensionCategory: "Floor/Carpet Cleaners", subId: "", childId: "" },
                    { extensionCategory: "Gloves", subId: "", childId: "" }, 
                    { extensionCategory: "Kitchen Cleaners", subId: "", childId: "" },
                    { extensionCategory: "Mops, Buckets & Brooms", subId: "", childId: "" },
                    { extensionCategory: "Mould & Moisture Treatments", subId: "", childId: "" }, 
                    { extensionCategory: "Multipurpose Cleaners", subId: "", childId: "" },
                    { extensionCategory: "Sponges, Cloths & Wipes", subId: "", childId: "" },
                    { extensionCategory: "Window & Glass Cleaners", subId: "", childId: "" }, 
                ]
            },
            {
                subCategory: "Garden & Outdoors",
                childItems: [
                    { extensionCategory: "Insecticide & Weed Control", subId: "", childId: "" },
                    { extensionCategory: "Potting Mix & Fertilisers", subId: "", childId: "" },
                    { extensionCategory: "Lawn Care & Plant Food", subId: "", childId: "" },
                    { extensionCategory: "Gloves, Tools & Watering", subId: "", childId: "" },
                    { extensionCategory: "Seeds & Plants", subId: "", childId: "" },
                    { extensionCategory: "Garden Power Tools & Equipment", subId: "", childId: "" },
                    { extensionCategory: "Garage Storage & Organisation", subId: "", childId: "" },
                    { extensionCategory: "Pool Maintenance", subId: "", childId: "" },
                    { extensionCategory: "Garden Décor & Accessories", subId: "", childId: "" },
                    { extensionCategory: "Automotive", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Hardware",
                childItems: [
                    { extensionCategory: "Extension Cords & Adapters", subId: "", childId: "" },
                    { extensionCategory: "Lighting & Torches", subId: "", childId: "" },
                    { extensionCategory: "Adhesives, Glues & Tapes", subId: "", childId: "" },
                    { extensionCategory: "Hooks & Fasteners", subId: "", childId: "" },
                    { extensionCategory: "Tools & Accessories", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Kitchen",
                childItems: [
                    { extensionCategory: "Cling Wrap, Foil & Baking Paper", subId: "", childId: "" },
                    { extensionCategory: "Dishwashing", subId: "", childId: "" },
                    { extensionCategory: "Garbage Bags", subId: "", childId: "" },
                    { extensionCategory: "Gloves", subId: "", childId: "" },
                    { extensionCategory: "Lunch Boxes & Drink Bottles", subId: "", childId: "" },
                    { extensionCategory: "Sandwich & Freezer Bags", subId: "", childId: "" },
                    { extensionCategory: "Water Filtration", subId: "", childId: "" },
                    { extensionCategory: "Waste Bins", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Laundry",
                childItems: [
                    { extensionCategory: "Fabric Softener", subId: "", childId: "" },
                    { extensionCategory: "Ironing & Accessories", subId: "", childId: "" },
                    { extensionCategory: "Laundry Capsules", subId: "", childId: "" },
                    { extensionCategory: "Laundry Liquid", subId: "", childId: "" },
                    { extensionCategory: "Laundry Powder", subId: "", childId: "" },
                    { extensionCategory: "Pegs, Baskets & Hangers", subId: "", childId: "" },
                    { extensionCategory: "Stain Removal", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Pest Control",
                childItems: [
                    { extensionCategory: "Crawling Insects", subId: "", childId: "" },
                    { extensionCategory: "Flying Insects", subId: "", childId: "" },
                    { extensionCategory: "Garden Pests", subId: "", childId: "" },
                    { extensionCategory: "Insect Repellent", subId: "", childId: "" },
                    { extensionCategory: "Mosquitoes", subId: "", childId: "" },
                    { extensionCategory: "Rodents", subId: "", childId: "" },
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
                    { extensionCategory: "Glassware & Bar Accessories" },
                    { extensionCategory: "Dinnerware & Crockery" },
                    { extensionCategory: "Cutlery" },
                    { extensionCategory: "Serveware" },
                    { extensionCategory: "Table Linen & Placemats" },
                ]
            },
            {
                subCategory: "Party Supplies",
                childItems: [
                    { extensionCategory: "Party Tableware" },
                    { extensionCategory: "Candles" },
                    { extensionCategory: "Gift Wrap, Bags & Cards" },
                    { extensionCategory: "Decorations" },
                ]
            },
            {
                subCategory: "Kitchenware & Storage",
                childItems: [
                    { extensionCategory: "Lunch Boxes & Drink Bottles" },
                    { extensionCategory: "Food Storage Containers" },
                    { extensionCategory: "Kitchen Utensils" },
                    { extensionCategory: "Pots & Pans" },
                    { extensionCategory: "Bakeware & Oven Trays" },
                    { extensionCategory: "Chopping Boards" },
                    { extensionCategory: "Knives" },
                    { extensionCategory: "Kitchen Organisation" },
                ]
            },
            {
                subCategory: "Kitchen Appliances",
                childItems: [
                    { extensionCategory: "Blenders & Food Processors" },
                    { extensionCategory: "Air Fryers & Cookers" },
                    { extensionCategory: "Coffee Machines & Milk Frothers" },
                    { extensionCategory: "Kettles & Water Purifiers" },
                    { extensionCategory: "Toaster & Sandwich Presses" },
                    { extensionCategory: "Snack & Ice-Cream Makers" },
                    { extensionCategory: "Refrigerators" },
                ]
            },
            {
                subCategory: "Home Appliances",
                childItems: [
                    { extensionCategory: "Heating & Cooling" },
                    { extensionCategory: "Ironing & Laundry" },
                    { extensionCategory: "Vacuums & Floor Cleaners" },
                    { extensionCategory: "Air Dehumidifiers" },
                ]
            },
            {
                subCategory: "Home Decor & Furniture",
                childItems: [
                    { extensionCategory: "Candles & Home Fragrance" },
                    { extensionCategory: "Cushions & Covers" },
                    { extensionCategory: "Blankets & Throws" },
                    { extensionCategory: "Living Room" },
                    { extensionCategory: "Storage" },
                    { extensionCategory: "Indoor Lighting" },
                    { extensionCategory: "Kitchen & Dining" },
                    { extensionCategory: "Bedroom" },
                    { extensionCategory: "Kids Furniture" },
                    { extensionCategory: "Curtains & Blinds" },
                    { extensionCategory: "Photo Frames & Albums" },
                    { extensionCategory: "Mirrors, Clocks & Wall Art" },
                    { extensionCategory: "Rugs & Doormats" }
                ]
            },
            {
                subCategory: "Manchester & Bedding",
                childItems: [
                    { extensionCategory: "Bedding Sets" },
                    { extensionCategory: "Fitted Sheets" },
                    { extensionCategory: "Flat Sheets" },
                    { extensionCategory: "Doonas & Comforters" },
                    { extensionCategory: "Pillows & Pillowcases" },
                    { extensionCategory: "Blankets & Throws" },
                    { extensionCategory: "Electric Blankets" },
                    { extensionCategory: "Mattresses & Toppers" },
                ]
            },
            {
                subCategory: "Bathroom Towels & Accessories",
                childItems: [
                    { extensionCategory: "Bath Towels & Mats" },
                    { extensionCategory: "Bathroom Accessories" },
                    { extensionCategory: "Bathrobes" },
                    { extensionCategory: "Beach Towels" },
                ]
            },
            {
                subCategory: "Clothing & Accessories",
                childItems: [
                    { extensionCategory: "Women's Clothing & Underwear" },
                    { extensionCategory: "Women's Socks" },
                    { extensionCategory: "Hosiery" },
                    { extensionCategory: "Men's Clothing & Underwear" },
                    { extensionCategory: "Men's Socks" },
                    { extensionCategory: "Boys & Girls Underwear" },
                    { extensionCategory: "Boys & Girls Socks" },
                    { extensionCategory: "Footwear & Shoe Care" },
                    { extensionCategory: "Umbrellas" },
                    { extensionCategory: "Sewing" },
                ]
            },
            {
                subCategory: "Stationery & Office Supplies",
                childItems: [
                    { extensionCategory: "Stationery" },
                    { extensionCategory: "Exercise Books & Paper Goods" },
                    { extensionCategory: "Writing Instruments" },
                    { extensionCategory: "Binders & Folders" },
                    { extensionCategory: "Printers & Ink" },
                    { extensionCategory: "Arts & Craft" },
                    { extensionCategory: "Office Essentials" },
                    { extensionCategory: "Office Furniture" },
                ]
            },
            {
                subCategory: "Toys & Games",
                childItems: [
                    { extensionCategory: "Toys" },
                    { extensionCategory: "Board Games & Puzzles" },
                    { extensionCategory: "Dolls & Action Figures" },
                    { extensionCategory: "Sport & Outdoor Toys" },
                    { extensionCategory: "Toy Cars & Trucks" },
                    { extensionCategory: "Model Building & Construction" },
                    { extensionCategory: "Educational & Early Learning" },
                    { extensionCategory: "Electronic Toys" },
                    { extensionCategory: "Arts & Craft" },
                    { extensionCategory: "Dress Up & Costumes" },
                ]
            },
            {
                subCategory: "Books & Magazines",
                childItems: [
                    { extensionCategory: "Magazines" },
                    { extensionCategory: "Children's" },
                    { extensionCategory: "Teens & Young Adults" },
                    { extensionCategory: "Fiction & Literature" },
                    { extensionCategory: "Non-Fiction" },
                ]
            },
            {
                subCategory: "Luggage & Travel",
                childItems: [
                    { extensionCategory: "Suitcases" },
                    { extensionCategory: "Travel Bags" },
                    { extensionCategory: "Travel Accessories" },
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
                    { extensionCategory: "Nappy Pants", subId: "", childId: "" },
                    { extensionCategory: "Newborn Nappies (3-5kg)", subId: "", childId: "" },
                    { extensionCategory: "Nappies 3-6 Months (5-7kg)", subId: "", childId: "" },
                    { extensionCategory: "Nappies 6-12 Months (7-10kg)", subId: "", childId: "" },
                    { extensionCategory: "Nappies 12-18 Months (9-12kg)", subId: "", childId: "" },
                    { extensionCategory: "Nappies 18 Months+ (10kg+)", subId: "", childId: "" },
                    { extensionCategory: "Swimming Nappies", subId: "", childId: "" },
                    { extensionCategory: "Nighttime Nappies", subId: "", childId: "" },
                    { extensionCategory: "Reusable Nappies", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Wipes & Changing",
                childItems: [
                    { extensionCategory: "Wipes", subId: "", childId: "" },
                    { extensionCategory: "Change Tables & Accessories", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Baby Food",
                childItems: [
                    { extensionCategory: "Organic Baby Food", subId: "", childId: "" },
                    { extensionCategory: "Baby Food 4 Months+", subId: "", childId: "" },
                    { extensionCategory: "Baby Food 6 Months+", subId: "", childId: "" },
                    { extensionCategory: "Baby Food 8 Months+", subId: "", childId: "" },
                    { extensionCategory: "Baby Food 12 Months+", subId: "", childId: "" },
                    { extensionCategory: "Baby & Toddler Snacks", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Baby Formula & Toddler Milk",
                childItems: [
                    { extensionCategory: "Newborn", subId: "", childId: "" },
                    { extensionCategory: "Infant", subId: "", childId: "" },
                    { extensionCategory: "Specialty", subId: "", childId: "" },
                    { extensionCategory: "Toddler", subId: "", childId: "" },
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
                    { extensionCategory: "Bottles & Bottle Accessories", subId: "", childId: "" },
                    { extensionCategory: "Baby Teething & Soothers", subId: "", childId: "" },
                    { extensionCategory: "Breast Feeding", subId: "", childId: "" },
                    { extensionCategory: "Cleaning & Sterilising", subId: "", childId: "" },
                    { extensionCategory: "Food Preparation & Storage", subId: "", childId: "" },
                    { extensionCategory: "Utensils & Feeding Accessories", subId: "", childId: "" },
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
                    { extensionCategory: "Newborn", subId: "", childId: "" },
                    { extensionCategory: "Specialty", subId: "", childId: "" },
                    { extensionCategory: "Toddler", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Pregnancy Care & Family Planning",
                childItems: [
                    { extensionCategory: "Pregnancy Tests", subId: "", childId: "" },
                    { extensionCategory: "Vitamins", subId: "", childId: "" },
                    { extensionCategory: "After Pregnancy Care", subId: "", childId: "" },
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
                    { extensionCategory: "Specialty Tea", subId: "22908", childId: "22914" },
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
                    { extensionCategory: "Flour", subId: "", childId: "" },
                    { extensionCategory: "Sugar & Sweeteners", subId: "", childId: "" },
                    { extensionCategory: "Yeast & Baking Ingredients", subId: "", childId: "" },
                    { extensionCategory: "Icing & Cake Decorating", subId: "", childId: "" },
                    { extensionCategory: "Cake & Dessert Mix", subId: "", childId: "" },
                    { extensionCategory: "Flavouring, Essence & Food Colouring", subId: "", childId: "" },
                    { extensionCategory: "Dried Fruit", subId: "", childId: "" },
                    { extensionCategory: "Cooking Chocolate & Cocoa", subId: "", childId: "" },
                    { extensionCategory: "Pancake Mix", subId: "", childId: "" },
                    { extensionCategory: "Nuts, Seeds & Coconut", subId: "", childId: "" },
                    { extensionCategory: "Gluten Free Baking", subId: "", childId: "" },
                    { extensionCategory: "Bread Mix", subId: "", childId: "" }, 
                ]
            },
            {
                subCategory: "Herbs & Spices",
                childItems: [
                    { extensionCategory: "Dried Herbs & Spices", subId: "", childId: "" },
                    { extensionCategory: "Salt & Pepper", subId: "", childId: "" },
                    { extensionCategory: "Breadcrumbs & Stuffing", subId: "", childId: "" },
                    { extensionCategory: "Fresh Herb, Garlic & Ginger Paste", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Condiments",
                childItems: [
                    { extensionCategory: "Chutney & Relish", subId: "", childId: "" },
                    { extensionCategory: "Salad Dressings", subId: "", childId: "" },
                    { extensionCategory: "Mayonnaise", subId: "", childId: "" },
                    { extensionCategory: "Mustard", subId: "", childId: "" },
                    { extensionCategory: "Pickled Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Tomato & BBQ Sauce", subId: "", childId: "" },
                    { extensionCategory: "Sweet Chilli & Hot Sauce", subId: "", childId: "" },
                    { extensionCategory: "Fruit Sauce" },
                ]
            },
            {
                subCategory: "Canned Food & Instant Meals",
                childItems: [
                    { extensionCategory: "Instant Meals & Sides", subId: "", childId: "" },
                    { extensionCategory: "Instant Noodles", subId: "", childId: "" },
                    { extensionCategory: "Baked Beans & Spaghetti", subId: "", childId: "" },
                    { extensionCategory: "Canned Soup & Soup Ingredients", subId: "", childId: "" },
                    { extensionCategory: "Canned Tuna", subId: "", childId: "" },
                    { extensionCategory: "Canned Salmon & Seafood", subId: "", childId: "" },
                    { extensionCategory: "Canned Meat", subId: "", childId: "" },
                    { extensionCategory: "Canned Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Canned Beans & Legumes", subId: "", childId: "" },
                    { extensionCategory: "Canned Fruit", subId: "", childId: "" },
                    { extensionCategory: "Canned Tomatoes", subId: "", childId: "" },
                    { extensionCategory: "Canned & Packet Ready Meals", subId: "", childId: "" }
                ]
            },
            {
                subCategory: "Pasta, Rice & Grains",
                childItems: [
                    { extensionCategory: "Dried Pasta", subId: "", childId: "" },
                    { extensionCategory: "Pasta Sheets", subId: "", childId: "" },
                    { extensionCategory: "Pasta Meals", subId: "", childId: "" },
                    { extensionCategory: "Gluten Free Pasta", subId: "", childId: "" },
                    { extensionCategory: "Rice", subId: "", childId: "" },
                    { extensionCategory: "Beans & Legumes", subId: "", childId: "" },
                    { extensionCategory: "Quinoa, Cous Cous & Other Grains", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Cooking Sauces & Recipe Bases",
                childItems: [
                    { extensionCategory: "Pizza & Pasta Sauce", subId: "", childId: "" },
                    { extensionCategory: "Marinades & Seasoning", subId: "", childId: "" },
                    { extensionCategory: "Soy & Asian Sauces", subId: "", childId: "" },
                    { extensionCategory: "Sweet Chilli & Hot Sauce", subId: "", childId: "" },
                    { extensionCategory: "Simmer Sauce & Recipe Bases", subId: "", childId: "" },
                    { extensionCategory: "Tomato & BBQ Sauce", subId: "", childId: "" },
                    { extensionCategory: "Stock & Gravy", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Asian", subId: "", childId: "" }, 
                    { extensionCategory: "European", subId: "", childId: "" },
                    { extensionCategory: "Indian", subId: "", childId: "" },
                    { extensionCategory: "Mexican", subId: "", childId: "" },
                    { extensionCategory: "Middle Eastern", subId: "", childId: "" },
                    { extensionCategory: "South African", subId: "", childId: "" },
                    { extensionCategory: "UK Foods", subId: "", childId: "" },
                    { extensionCategory: "Italian", subId: "", childId: "" },
                    { extensionCategory: "Kosher", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Desserts",
                childItems: [
                    { extensionCategory: "Ice Cream Cones, Syrups & Toppings", subId: "", childId: "" },
                    { extensionCategory: "Jelly", subId: "", childId: "" },
                    { extensionCategory: "Puddings", subId: "", childId: "" },
                    { extensionCategory: "Ready to Freeze Ice Blocks", subId: "", childId: "" },
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
                    { extensionCategory: "Chocolate Bars", subId: "", childId: "" },
                    { extensionCategory: "Chocolate Blocks", subId: "", childId: "" },
                    { extensionCategory: "Chocolate Bites", subId: "", childId: "" },
                    { extensionCategory: "Chocolate Share Packs", subId: "", childId: "" },
                    { extensionCategory: "Chocolate Boxes & Gifts", subId: "", childId: "" },
                    { extensionCategory: "Sweets, Lollies & Licorice", subId: "", childId: "" },
                ]
            },
            {
                subCategory: 'Biscuits & Crackers',
                childItems: [
                    { extensionCategory: "Biscuits & Cookies", subId: "", childId: "" },
                    { extensionCategory: "Rice Cakes & Crispbread", subId: "", childId: "" },
                    { extensionCategory: "Crackers", subId: "", childId: "" }
                ]
            },
            {
                subCategory: 'Snacks',
                childItems: [
                    { extensionCategory: "Pretzels & Jerky", subId: "", childId: "" },
                    { extensionCategory: "Popcorn", subId: "", childId: "" },
                    { extensionCategory: "Muesli Bars & Snack Bars", subId: "", childId: "" },
                    { extensionCategory: "Nuts, Dried Fruit & Snack Pots", subId: "", childId: "" },
                    { extensionCategory: "Lunch Box Snacks", subId: "", childId: "" },
                    { extensionCategory: "Gluten Free Snacks", subId: "", childId: "" }
                ]
            },
            {
                subCategory: 'Gum, Mints & Lozenges',
                childItems: [
                    { extensionCategory: "Gum", subId: "", childId: "" },
                    { extensionCategory: "Mints", subId: "", childId: "" },
                    { extensionCategory: "Lozenges", subId: "", childId: "" }
                ]
            },
            {
                subCategory: 'Chips',
                childItems: [
                    { extensionCategory: "Chips Single Pack", subId: "", childId: "" },
                    { extensionCategory: "Chips Sharing", subId: "", childId: "" },
                    { extensionCategory: "Chips Multi-Pack", subId: "", childId: "" },
                    { extensionCategory: "Corn Chips & Salsa", subId: "", childId: "" }
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
                    { extensionCategory: "Apples & Pears", subId: "", childId: "" },
                    { extensionCategory: "Bananas", subId: "", childId: "" },
                    { extensionCategory: "Berries & Cherries", subId: "", childId: "" },
                    { extensionCategory: "Citrus Fruit", subId: "", childId: "" },
                    { extensionCategory: "Stone Fruit", subId: "", childId: "" },
                    { extensionCategory: "Grapes", subId: "", childId: "" },
                    { extensionCategory: "Melons & Mangoes", subId: "", childId: "" },
                    { extensionCategory: "Avocados", subId: "", childId: "" },
                    { extensionCategory: "Pineapples, Kiwi & Tropical Fruit", subId: "", childId: "" },
                    { extensionCategory: "Asian & Exotic Fruit", subId: "", childId: "" },
                    { extensionCategory: "Cut Fruit", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Vegetables",
                childItems: [
                    { extensionCategory: "Organic Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Prepacked Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Potatoes & Pumpkins", subId: "", childId: "" },
                    { extensionCategory: "Carrots, Onions & Root Veg", subId: "", childId: "" },
                    { extensionCategory: "Lettuce, Kale & Leafy Greens", subId: "", childId: "" },
                    { extensionCategory: "Broccoli, Cauliflower & Cabbage", subId: "", childId: "" },
                    { extensionCategory: "Peas, Beans, Corn & Asparagus", subId: "", childId: "" },
                    { extensionCategory: "Capsicum", subId: "", childId: "" },
                    { extensionCategory: "Tomatoes", subId: "", childId: "" },
                    { extensionCategory: "Celery", subId: "", childId: "" },
                    { extensionCategory: "Avocados", subId: "", childId: "" },
                    { extensionCategory: "Cucumber", subId: "", childId: "" },
                    { extensionCategory: "Mushrooms", subId: "", childId: "" },
                    { extensionCategory: "Fresh Herbs, Garlic & Chillies", subId: "", childId: "" },
                    { extensionCategory: "Zucchini, Eggplant & Squash", subId: "", childId: "" },
                    { extensionCategory: "Sprouts", subId: "", childId: "" },
                    { extensionCategory: "Snacking", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Salad",
                childItems: [
                    { extensionCategory: "Salad Bowls" },
                    { extensionCategory: "Coleslaw" },
                    { extensionCategory: "Salad Bags" },
                    { extensionCategory: "Salad Kits" },
                    { extensionCategory: "Spinach & Rocket" },
                    { extensionCategory: "Beetroot & Carrot" },
                    { extensionCategory: "Sprouts" },
                    { extensionCategory: "Organic Salad" },
                    { extensionCategory: "Salad Vegetables" },
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
                    { extensionCategory: "Organic Fruit", subId: "", childId: "" },
                    { extensionCategory: "Organic Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Organic Salad", subId: "", childId: "" },
                    { extensionCategory: "Organic Loose", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Fresh Herbs, Garlic & Chillies",
                childItems: [
                    { extensionCategory: "Fresh Herbs", subId: "", childId: "" },
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
                    { extensionCategory: "Fresh Chicken", subId: "", childId: "" },
                    { extensionCategory: "Free Range Chicken", subId: "", childId: "" },
                    { extensionCategory: "Crumbed", subId: "", childId: "" },
                    { extensionCategory: "Kebabs & Marinated", subId: "", childId: "" },
                    { extensionCategory: "Deli Chicken", subId: "", childId: "" },
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
                    { extensionCategory: "Salmon & Other Fish", subId: "", childId: "" },
                    { extensionCategory: "Prawns", subId: "", childId: "" },
                    { extensionCategory: "Seafood Entertaining", subId: "", childId: "" },
                    { extensionCategory: "Frozen Prepacked Seafood", subId: "", childId: "" },
                    { extensionCategory: "Squid, Octopus & Marinara", subId: "", childId: "" },
                    { extensionCategory: "Crab & Lobster", subId: "", childId: "" },
                    { extensionCategory: "Oysters, Mussels & Scallops", subId: "", childId: "" },
                    { extensionCategory: "Sauce & Condiments", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Mince",
                childItems: [
                    { extensionCategory: "Beef Mince", subId: "", childId: "" },
                    { extensionCategory: "Pork Mince", subId: "", childId: "" },
                    { extensionCategory: "Chicken & Turkey Mince", subId: "", childId: "" },
                    { extensionCategory: "Lamb Mince", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "BBQ Meat",
                childItems: [
                    { extensionCategory: "Burgers", subId: "", childId: "" },
                    { extensionCategory: "Sausages", subId: "", childId: "" },
                    { extensionCategory: "Pork", subId: "", childId: "" },
                    { extensionCategory: "Kebabs", subId: "", childId: "" },
                    { extensionCategory: "Chicken", subId: "", childId: "" },
                    { extensionCategory: "Lamb", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Organic Meat & Poultry",
                childItems: [
                    { extensionCategory: "Organic Beef", subId: "", childId: "" },
                    { extensionCategory: "Organic Lamb", subId: "", childId: "" },
                    { extensionCategory: "Organic Chicken", subId: "", childId: "" },
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
                    { extensionCategory: "Frozen Meals", subId: "", childId: "" },
                    { extensionCategory: "Kid's Frozen Meals", subId: "", childId: "" },
                    { extensionCategory: "Frozen Dumplings", subId: "", childId: "" },
                    { extensionCategory: "Plant Based Meals", subId: "", childId: "" },
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
                    { extensionCategory: "Chips", subId: "", childId: "" },
                    { extensionCategory: "Hashbrowns", subId: "", childId: "" },
                    { extensionCategory: "Wedges", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Seafood",
                childItems: [
                    { extensionCategory: "Fish Fillets", subId: "", childId: "" },
                    { extensionCategory: "Fish Fingers & Cakes", subId: "", childId: "" },
                    { extensionCategory: "Frozen Seafood", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Meat",
                childItems: [
                    { extensionCategory: "Beef & Pork", subId: "", childId: "" },
                    { extensionCategory: "Chicken Pieces & Nuggets", subId: "", childId: "" },
                    { extensionCategory: "Whole Birds & Roasts", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Pizzas",
                childItems: [
                    { extensionCategory: "Pizzas", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Vegetables",
                childItems: [
                    { extensionCategory: "Beans & Peas", subId: "", childId: "" },
                    { extensionCategory: "Corn", subId: "", childId: "" },
                    { extensionCategory: "Mixed Vegetables", subId: "", childId: "" },
                    { extensionCategory: "Steam Packs", subId: "", childId: "" },
                    { extensionCategory: "Other Vegetables", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Fruit",
                childItems: [
                    { extensionCategory: "Berries & Tropical", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Ice Cream",
                childItems: [
                    { extensionCategory: "Ice Cream Tubs", subId: "", childId: "" },
                    { extensionCategory: "Ice Cream Sticks & Cones", subId: "", childId: "" },
                    { extensionCategory: "Premium Ice Cream", subId: "", childId: "" },
                    { extensionCategory: "Frozen Yoghurt", subId: "", childId: "" },
                    { extensionCategory: "Gelato & Sorbet", subId: "", childId: "" },
                    { extensionCategory: "Ice Cream Cakes", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Desserts",
                childItems: [
                    { extensionCategory: "Assorted Desserts", subId: "", childId: "" },
                    { extensionCategory: "Cakes & Cheesecakes", subId: "", childId: "" },
                    { extensionCategory: "Dessert Pies & Pastries", subId: "", childId: "" },
                    { extensionCategory: "Pastry Sheets", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Party Food",
                childItems: [
                    { extensionCategory: "Pastry Sheets", subId: "", childId: "" },
                    { extensionCategory: "Pies, Pastries & Quiches", subId: "", childId: "" },
                    { extensionCategory: "Frozen Finger Food", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Frozen Pies & Sausage Rolls",
                childItems: [
                    { extensionCategory: "Pies & Sausage Rolls", subId: "", childId: "" },
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
                    { extensionCategory: "Bread", subId: "22062", childId: "22064" },
                    { extensionCategory: "Sourdough & Specialty Bread", subId: "22062", childId: "22069" },
                    { extensionCategory: "Muffins & Scones", subId: "", childId: "" },
                    { extensionCategory: "Bread Rolls", subId: "22062", childId: "22065" },
                    { extensionCategory: "Donuts & Cookies", subId: "22062", childId: "22066" },
                    { extensionCategory: "Bakery Cakes", subId: "", childId: "" },
                    { extensionCategory: "Pastries & Desserts", subId: "22062", childId: "22068" },
                ]
            },
            {
                subCategory: "Packaged Bread & Bakery",
                childItems: [
                    { extensionCategory: "Cakes", subId: "22074", childId: "22076" },
                    { extensionCategory: "Packaged Bread", subId: "22074", childId: "22083" },
                    { extensionCategory: "Crumpets & Pancakes", subId: "22074", childId: "22077" },
                    { extensionCategory: "Muffins, Scones & Cupcakes", subId: "22074", childId: "22081" },
                    { extensionCategory: "Desserts & Pastries", subId: "22074", childId: "22078" },
                    { extensionCategory: "Pizza Bases", subId: "22074", childId: "22086" },
                    { extensionCategory: "Wraps & Flatbread", subId: "22074", childId: "22088" },
                    { extensionCategory: "Rolls & Bagels", subId: "22074", childId: "22087" },
                    { extensionCategory: "Gluten Free Bakery", subId: "22074", childId: "22079" },
                    { extensionCategory: "Pies & Quiches", subId: "22074", childId: "22085" },
                    { extensionCategory: "Bake At Home", subId: "22074", childId: "22075" },
                    { extensionCategory: "Organic Bakery", subId: "22074", childId: "22082" },
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
                    { extensionCategory: "Dry Cat Food", subId: "23952", childId: "23953" },
                    { extensionCategory: "Chilled Cat Food", subId: "23952", childId: "23954" },
                    { extensionCategory: "Trays & Cans Cat Food", subId: "", childId: "" },
                    { extensionCategory: "Kitten Food..", subId: "23952", childId: "23957" },
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
                    { extensionCategory: "Chilled Dog Food", subId: "23373", childId: "22959" },
                    { extensionCategory: "Frozen Dog Food", subId: "23373", childId: "22937" },
                    { extensionCategory: "Trays & Cans Dog Food", subId: "", childId: "" },
                    { extensionCategory: "Puppy Food", subId: "23373", childId: "22939" },
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
                    { extensionCategory: "Bird Treats", subId: "22917", childId: "22919" },
                    { extensionCategory: "Fish Food", subId: "", childId: "" },
                    { extensionCategory: "Small Pets Food", subId: "22917", childId: "22921" },
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
                    { extensionCategory: "Chilled Soft Drinks & Energy Drinks", subId: "22164", childId: "23943" },
                    { extensionCategory: "Chilled Water", subId: "22164", childId: "23942" },
                    { extensionCategory: "Chilled Juices, Iced Teas & Iced Coffee", subId: "22164", childId: "22167" },
                ]
            },
            {
                subCategory: "Soft Drinks",
                childItems: [
                    { extensionCategory: "Mixers", subId: "22216", childId: "22217" },
                    { extensionCategory: "Soft Drink Bottles", subId: "22216", childId: "22218" },
                    { extensionCategory: "Soft Drink Cans", subId: "22216", childId: "22219" },
                ]
            },
            {
                subCategory: "Cordials, Juices & Iced Teas",
                childItems: [
                    { extensionCategory: "Cordials", subId: "22176", childId: "22178" },
                    { extensionCategory: "Juices", subId: "22176", childId: "22181" },
                    { extensionCategory: "Chilled Juices", subId: "22176", childId: "22177" },
                    { extensionCategory: "Iced Teas", subId: "22176", childId: "22180" },
                    { extensionCategory: "Lunch Box Juice", subId: "22176", childId: "22182" },
                ]
            },
            {
                subCategory: "Water",
                childItems: [
                    { extensionCategory: "Flavoured & Coconut Water", subId: "22230", childId: "22231" },
                    { extensionCategory: "Sparkling Water", subId: "22230", childId: "22232" },
                    { extensionCategory: "Still Water", subId: "22230", childId: "22233" },
                ]
            },
            {
                subCategory: "Sports & Energy Drinks",
                childItems: [
                    { extensionCategory: "Energy Drinks", subId: "22221", childId: "22222" },
                    { extensionCategory: "Sports Drinks", subId: "22221", childId: "22223" },
                ]
            },
            {
                subCategory: "Tea",
                childItems: [
                    { extensionCategory: "Black Tea", subId: "22225", childId: "23944" },
                    { extensionCategory: "Green Tea", subId: "22225", childId: "23946" },
                    { extensionCategory: "Herbal & Specialty Tea", subId: "22225", childId: "22228" },
                ]
            },
            {
                subCategory: "Coffee",
                childItems: [
                    { extensionCategory: "Coffee Beans", subId: "22170", childId: "22171" },
                    { extensionCategory: "Coffee Capsules", subId: "22170", childId: "22172" },
                    { extensionCategory: "Ground Coffee", subId: "22170", childId: "22174" },
                    { extensionCategory: "Instant & Flavoured Coffee", subId: "22170", childId: "22175" },
                ]
            },
            {
                subCategory: "Flavoured Milk",
                childItems: [
                    { extensionCategory: "Bubble Tea", subId: "22187", childId: "22188" },
                    { extensionCategory: "Drinking Chocolate", subId: "22187", childId: "22189" },
                    { extensionCategory: "Drinks & Powders", subId: "22187", childId: "22190" },
                    { extensionCategory: "Kids Milk", subId: "22187", childId: "22192" },
                ]
            },
            {
                subCategory: "Long Life Milk",
                childItems: [
                    { extensionCategory: "Almond Milk", subId: "22199", childId: "22839" },
                    { extensionCategory: "Soy Milk", subId: "22199", childId: "23842" },
                    { extensionCategory: "Powdered Milk", subId: "22199", childId: "23840" },
                    { extensionCategory: "Oat & Rice Milk", subId: "22199", childId: "23843" },
                    { extensionCategory: "Lactose Free Milk", subId: "22199", childId: "23841" },
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
                    { extensionCategory: "Low & Non Alcoholic Beer", subId: "22213", childId: "22214" },
                    { extensionCategory: "Low & Non Alcoholic Wine", subId: "22213", childId: "22214" },
                    { extensionCategory: "Low & Non Alcoholic Spirits", subId: "22213", childId: "22214" },
                    { extensionCategory: "Low & Non Alcoholic Home Brew", subId: "22213", childId: "22214" },
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
                    { extensionCategory: "Sausages & Frankfurts", subId: "24024", childId: "24030" },
                    { extensionCategory: "Packaged Ham, Bacon & Salami", subId: "24024", childId: "24028" },
                    { extensionCategory: "Sliced & Shaved Deli Meat", subId: "24024", childId: "24029" },
                ]
            },
            {
                subCategory: "Deli Specialties",
                childItems: [
                    { extensionCategory: "Antipasto", subId: "24025", childId: "24033" },
                    { extensionCategory: "Dips & Pate", subId: "24025", childId: "24031" },
                    { extensionCategory: "Gourmet Cheese", subId: "24025", childId: "24032" },
                    { extensionCategory: "Platters", subId: "24025", childId: "24034" },
                ]
            },
            {
                subCategory: "Ready to Eat Meals",
                childItems: [
                    { extensionCategory: "Chilled Pizza & Garlic Bread", subId: "24026", childId: "24041" },
                    { extensionCategory: "Chilled Quiches & Pies", subId: "24026", childId: "24037"},
                    { extensionCategory: "Chilled Soup", subId: "24026", childId: "24038" },
                    { extensionCategory: "Entertaining & Sides", subId: "24026", childId: "24043" },
                    { extensionCategory: "Family Meals", subId: "24026", childId: "24036" },
                    { extensionCategory: "Fresh Pasta & Sauces", subId: "24026", childId: "24040" },
                    { extensionCategory: "Packaged Salads", subId: "24026", childId: "24042" },
                    { extensionCategory: "Single Serve", subId: "24026", childId: "24035" },
                ]
            },
            {
                subCategory: "Vegetarian & Vegan",
                childItems: [
                    { extensionCategory: "Vegan", subId: "24027", childId: "24044" },
                    { extensionCategory: "Vegetarian", subId: "24027", childId: "24045" },
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
                    { extensionCategory: "Block Cheese", subId: "22090", childId: "22091" },
                    { extensionCategory: "Sliced Cheese", subId: "22090", childId: "22099" },
                    { extensionCategory: "Grated Cheese", subId: "22090", childId: "22096" },
                    { extensionCategory: "Entertaining Cheese", subId: "22090", childId: "22094" },
                    { extensionCategory: "Soft Cheese", subId: "22090", childId: "22101" },
                    { extensionCategory: "Snacking Cheese", subId: "22090", childId: "22100" },
                    { extensionCategory: "Cooking Cheese", subId: "22090", childId: "22093" },
                    { extensionCategory: "Fetta & Goat's Cheese", subId: "22090", childId: "22095" },
                    { extensionCategory: "Parmesan & Italian Cheese", subId: "22090", childId: "22097" },
                    { extensionCategory: "Ricotta, Cottage & Cream Cheese", subId: "22090", childId: "22098" },
                ]
            },
            {
                subCategory: "Milk",
                childItems: [
                    { extensionCategory: "Full Cream Milk", subId: "22132", childId: "22134" },
                    { extensionCategory: "Skim & Reduced Fat Milk", subId: "22132", childId: "22138" },
                    { extensionCategory: "Soy & Speciality Milk", subId: "22132", childId: "22139" },
                    { extensionCategory: "Flavoured Milk", subId: "22132", childId: "22133" },
                    { extensionCategory: "Long Life Milk", subId: "22132", childId: "22136" },
                    { extensionCategory: "Lactose Free Milk", subId: "22132", childId: "23985" },
                ]
            },
            {
                subCategory: "Yoghurt",
                childItems: [
                    { extensionCategory: "Everyday Yoghurt", subId: "", childId: "" },
                    { extensionCategory: "Greek Yoghurt & Natural Yoghurt", subId: "22158", childId: "22161" },
                    { extensionCategory: "Thick & Creamy Yoghurt", subId: "", childId: "" },
                    { extensionCategory: "Kids Yoghurt", subId: "22158", childId: "22159" },
                    { extensionCategory: "High Protein Yoghurt", subId: "", childId: "" },
                    { extensionCategory: "Probiotic & Gut Health Yoghurt", subId: "22158", childId: "23991" },
                    { extensionCategory: "Plant Based Yoghurt", subId: "22158", childId: "" },
                    { extensionCategory: "Lactose Free", subId: "22158", childId: "23990" },
                    { extensionCategory: "Kefir", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Cream, Custard & Desserts",
                childItems: [
                    { extensionCategory: "Cream", subId: "22102", childId: "22103" },
                    { extensionCategory: "Custard", subId: "22102", childId: "22105" },
                    { extensionCategory: "Desserts", subId: "", childId: "" },
                ]
            },
            {
                subCategory: "Eggs, Butter & Margarine",
                childItems: [
                    { extensionCategory: "Eggs", subId: "22112", childId: "22114" },
                    { extensionCategory: "Butter & Margarine", subId: "22112", childId: "22113" },
                ]
            },
            {
                subCategory: "Dips & Pate",
                childItems: [
                    { extensionCategory: "Dips", subId: "22108", childId: "22109" },
                    { extensionCategory: "Pate, Paste & Caviar", subId: "22108", childId: "22111" },
                ]
            },
            {
                subCategory: "Ready to Eat Meals",
                childItems: [
                    { extensionCategory: "Italian Meals", subId: "22140", childId: "22146" },
                    { extensionCategory: "Asian Meals", subId: "22140", childId: "22141" },
                    { extensionCategory: "Indian Meals", subId: "22140", childId: "22145" },
                    { extensionCategory: "Chilled Soup", subId: "22140", childId: "22144" },
                    { extensionCategory: "Chilled Ready Meals", subId: "22140", childId: "22144" },
                    { extensionCategory: "Chilled Pizza & Bread", subId: "22140", childId: "22142" },
                    { extensionCategory: "Packaged Salads & Sides", subId: "22140", childId: "22147" },
                    { extensionCategory: "Vegetarian & Meat Free", subId: "22140", childId: "22149" },
                ]
            },
            {
                subCategory: "Fresh Pasta & Sauces",
                childItems: [
                    { extensionCategory: "Fresh Pasta & Noodles", subId: "22116", childId: "22117" },
                    { extensionCategory: "Pasta Sauces", subId: "22116", childId: "22119" },
                ]
            },
            {
                subCategory: "Vegetarian & Vegan",
                childItems: [
                    { extensionCategory: "Vegetarian & Meat Free", subId: "22154", childId: "22155" },
                    { extensionCategory: "Vegan", subId: "22154", childId: "22156" },
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Chilled Asian", subId: "22120", childId: "22121" },
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
                    { extensionCategory: "Colouring", subId: "22423", childId: "23903" },
                    { extensionCategory: "Shampoo & Conditioner", subId: "22423", childId: "23904" },
                    { extensionCategory: "Hair Treatments", subId: "22423", childId: "" },
                    { extensionCategory: "Styling Products", subId: "22423", childId: "23905" },
                    { extensionCategory: "Hair Accessories & Brushes", subId: "22423", childId: "23906" },
                ]
            },
            {
                subCategory: "Oral Care",
                childItems: [
                    { extensionCategory: "Floss & Mouthwash", subId: "22394", childId: "23817"  },
                    { extensionCategory: "Toothbrushes", subId: "22394", childId: "23818"  },
                    { extensionCategory: "Toothpaste", subId: "22394", childId: "23855"  },
                    { extensionCategory: "Teeth Whitening", subId: "22394", childId: "23854"  },
                    { extensionCategory: "Denture Care", subId: "22394", childId: "22406"  },
                ]
            },
            {
                subCategory: "Men's Care",
                childItems: [
                    { extensionCategory: "Men's Blades & Razors", subId: "", childId: "" },
                    { extensionCategory: "Men's Shave Gels & Foams", subId: "23864", childId: "23901" },
                    { extensionCategory: "Men's Aftershave", subId: "23864", childId: "23898" },
                    { extensionCategory: "Men's Skin", subId: "", childId: "" },
                    { extensionCategory: "Men's Body Sprays", subId: "", childId: "" },
                    { extensionCategory: "Men's Deodorants", subId: "22440", childId: "23921" },
                    { extensionCategory: "Men's Shower Gels", subId: "", childId: "" },
                    { extensionCategory: "Men's Hair Care", subId: "22423", childId: "23924" },
                ]
            },
            {
                subCategory: "Period & Continence Care",
                childItems: [
                    { extensionCategory: "Pads & Pants", subId: "22440", childId: "23922" },
                    { extensionCategory: "Tampons", subId: "22440", childId: "23922" },
                    { extensionCategory: "Liners", subId: "22440", childId: "23922" },
                    { extensionCategory: "Period Underwear & Reusables", subId: "22440", childId: "23922" },
                    { extensionCategory: "Maternity Pads", subId: "22440", childId: "23922" },
                    { extensionCategory: "Intimate Hygiene", subId: "22440", childId: "23922" },
                    { extensionCategory: "Continence Pants", subId: "22440", childId: "23922" },
                    { extensionCategory: "Continence Pads", subId: "22440", childId: "23922" },
                    { extensionCategory: "Continence Liners", subId: "22440", childId: "23922" },
                    { extensionCategory: "Continence Underwear & Reusables", subId: "22440", childId: "23922"},
                    { extensionCategory: "Continence Mens", subId: "22440", childId: "23922" },
                ]
            },
            {
                subCategory: "Skin Care",
                childItems: [
                    { extensionCategory: "Body Moisturiser", subId: "23883", childId: "23885" },
                    { extensionCategory: "Face Moisturiser", subId: "23883", childId: "23886" },
                    { extensionCategory: "Facial Cleansers, Toners & Scrubs", subId: "23883", childId: "23887" },
                    { extensionCategory: "Face Masks & Treatments", subId: "", childId: "" },
                    { extensionCategory: "Hand Moisturiser", subId: "23883", childId: "23889" },
                    { extensionCategory: "Lip Care", subId: "23883", childId: "23890" },
                    { extensionCategory: "Self-Tanning", subId: "23883", childId: "23891" },
                    { extensionCategory: "Sun Protection", subId: "23883", childId: "23892" },
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
                    { extensionCategory: "Eyes", subId: "22400", childId: "23851"  },
                    { extensionCategory: "Face", subId: "22400", childId: "23852"  },
                    { extensionCategory: "Lips", subId: "22400", childId: "22402"  },
                    { extensionCategory: "Nails", subId: "22400", childId: "22403"  },
                    { extensionCategory: "Cosmetic Tools & Accessories", subId: "22400", childId: "23853"  },
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
                    { extensionCategory: "Gluten Free", subId: "24007", childId: "" },
                    { extensionCategory: "Vegan", subId: "24007", childId: "" },
                    { extensionCategory: "Dairy Free", subId: "24007", childId: "" },
                    { extensionCategory: "Breakfast & Spreads", subId: "24007", childId: "" },
                    { extensionCategory: "Sweet & Savoury Snacks", subId: "24007", childId: "" },
                    { extensionCategory: "Confectionery", subId: "24007", childId: "" },
                    { extensionCategory: "Dried Fruit, Nuts & Seeds", subId: "24007", childId: "" },
                    { extensionCategory: "Baking", subId: "24007", childId: "" },
                    { extensionCategory: "Pasta, Rice & Grains", subId: "24007", childId: "" },
                    { extensionCategory: "Cooking Needs", subId: "24007", childId: "" },
                    { extensionCategory: "Drinks", subId: "24007", childId: "" },
                ]
            },
            {
                subCategory: "Vitamins",
                childItems: [
                    { extensionCategory: "Children's Health", subId: "", childId: "" },
                    { extensionCategory: "Women's Health", subId: "", childId: "" },
                    { extensionCategory: "Men's Health", subId: "", childId: ""},
                    { extensionCategory: "Pregnancy & Family Planning", subId: "", childId: "" },
                    { extensionCategory: "Cold, Flu & Allergies", subId: "22450", childId: "" },
                    { extensionCategory: "Multi Vitamins", subId: "22450", childId: "" },
                    { extensionCategory: "Digestion & Probiotics", subId: "22450", childId: "23872" },
                    { extensionCategory: "Fatigue, Stress & Sleep", subId: "22450", childId: "" },
                    { extensionCategory: "Bones, Joints & Muscle Health", subId: "22450", childId: "" },
                    { extensionCategory: "Omega-3", subId: "22450", childId: "23916" },
                    { extensionCategory: "Hair, Skin & Nails", subId: "22450", childId: "22453" },
                    { extensionCategory: "Brain & Heart", subId: "22450", childId: "23870" },
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
                    { extensionCategory: "Cold, Flu & Allergies", subId: "22414", childId: "22417" },
                    { extensionCategory: "First Aid & Bandages", subId: "22414", childId: "22416" },
                    { extensionCategory: "Digestive Health", subId: "", childId: "" },
                    { extensionCategory: "Natural Remedies & Oils", subId: "22414", childId: "22421" },
                    { extensionCategory: "Intimate Wellness", subId: "22440", childId: "23894" },
                    { extensionCategory: "Eye, Ear & Mouth Care", subId: "", childId: "" },
                    { extensionCategory: "Pregnancy Tests", subId: "22440", childId: "23895" },
                    { extensionCategory: "Foot Care", subId: "22440", childId: "23893" },
                    { extensionCategory: "Cotton Wool & Cotton Buds", subId: "22414", childId: "22418" },
                    { extensionCategory: "Nicotine Replacement", subId: "22414", childId: "22422" },
                    { extensionCategory: "Test Kits & Face Masks", subId: "", childId: "" },
                ]
            },
        ]
    },
]

export default categories;