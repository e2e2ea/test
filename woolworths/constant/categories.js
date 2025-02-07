const categories = [
    {
        category: "Cleaning & Maintenance",
        id: '22459',
        subCategories: [
            {
                subCategory: "Cleaning Goods",
                childItems: [
                    { extensionCategory: "Air Fresheners" },
                    { extensionCategory: "Bathroom Cleaners" },
                    { extensionCategory: "Disinfectant & Bleach" },
                    { extensionCategory: "Drain Cleaners & Solvents" },
                    { extensionCategory: "Fabric, Metal & Furniture Care" },
                    { extensionCategory: "Floor/Carpet Cleaners" },
                    { extensionCategory: "Gloves" }, 
                    { extensionCategory: "Kitchen Cleaners" },
                    { extensionCategory: "Mops, Buckets & Brooms" },
                    { extensionCategory: "Mould & Moisture Treatments" }, 
                    { extensionCategory: "Multipurpose Cleaners" },
                    { extensionCategory: "Sponges, Cloths & Wipes" },
                    { extensionCategory: "Window & Glass Cleaners" }, 
                ]
            },
            {
                subCategory: "Garden & Outdoors",
                childItems: [
                    { extensionCategory: "Insecticide & Weed Control" },
                    { extensionCategory: "Potting Mix & Fertilisers" },
                    { extensionCategory: "Lawn Care & Plant Food" },
                    { extensionCategory: "Gloves, Tools & Watering" },
                    { extensionCategory: "Seeds & Plants" },
                    { extensionCategory: "Garden Power Tools & Equipment" },
                    { extensionCategory: "Garage Storage & Organisation" },
                    { extensionCategory: "Pool Maintenance" },
                    { extensionCategory: "Garden Décor & Accessories" },
                    { extensionCategory: "Automotive" },
                ]
            },
            {
                subCategory: "Hardware",
                childItems: [
                    { extensionCategory: "Extension Cords & Adapters" },
                    { extensionCategory: "Lighting & Torches" },
                    { extensionCategory: "Adhesives, Glues & Tapes" },
                    { extensionCategory: "Hooks & Fasteners" },
                    { extensionCategory: "Tools & Accessories" },
                ]
            },
            {
                subCategory: "Kitchen",
                childItems: [
                    { extensionCategory: "Cling Wrap, Foil & Baking Paper" },
                    { extensionCategory: "Dishwashing" },
                    { extensionCategory: "Garbage Bags" },
                    { extensionCategory: "Gloves" },
                    { extensionCategory: "Lunch Boxes & Drink Bottles" },
                    { extensionCategory: "Sandwich & Freezer Bags" },
                    { extensionCategory: "Water Filtration" },
                    { extensionCategory: "Waste Bins" },
                ]
            },
            {
                subCategory: "Laundry",
                childItems: [
                    { extensionCategory: "Fabric Softener" },
                    { extensionCategory: "Ironing & Accessories" },
                    { extensionCategory: "Laundry Capsules" },
                    { extensionCategory: "Laundry Liquid" },
                    { extensionCategory: "Laundry Powder" },
                    { extensionCategory: "Pegs, Baskets & Hangers" },
                    { extensionCategory: "Stain Removal" },
                ]
            },
            {
                subCategory: "Pest Control",
                childItems: [
                    { extensionCategory: "Crawling Insects" },
                    { extensionCategory: "Flying Insects" },
                    { extensionCategory: "Garden Pests" },
                    { extensionCategory: "Insect Repellent" },
                    { extensionCategory: "Mosquitoes" },
                    { extensionCategory: "Rodents" },
                ]
            },
            {
                subCategory: "Toilet Paper, Tissues & Paper Towels",
                childItems: [
                    { extensionCategory: "Toilet Paper" },
                    { extensionCategory: "Paper Towels" },
                    { extensionCategory: "Tissues & Wipes" }
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
                    { extensionCategory: "Nappy Pants" },
                    { extensionCategory: "Newborn Nappies (3-5kg)" },
                    { extensionCategory: "Nappies 3-6 Months (5-7kg)" },
                    { extensionCategory: "Nappies 6-12 Months (7-10kg)" },
                    { extensionCategory: "Nappies 12-18 Months (9-12kg)" },
                    { extensionCategory: "Nappies 18 Months+ (10kg+)" },
                    { extensionCategory: "Swimming Nappies" },
                    { extensionCategory: "Nighttime Nappies" },
                    { extensionCategory: "Reusable Nappies" },
                ]
            },
            {
                subCategory: "Wipes & Changing",
                childItems: [
                    { extensionCategory: "Wipes" },
                    { extensionCategory: "Change Tables & Accessories" },
                ]
            },
            {
                subCategory: "Baby Food",
                childItems: [
                    { extensionCategory: "Organic Baby Food" },
                    { extensionCategory: "Baby Food 4 Months+" },
                    { extensionCategory: "Baby Food 6 Months+" },
                    { extensionCategory: "Baby Food 8 Months+" },
                    { extensionCategory: "Baby Food 12 Months+" },
                    { extensionCategory: "Baby & Toddler Snacks" },
                ]
            },
            {
                subCategory: "Baby Formula & Toddler Milk",
                childItems: [
                    { extensionCategory: "Newborn" },
                    { extensionCategory: "Infant" },
                    { extensionCategory: "Specialty" },
                    { extensionCategory: "Toddler" },
                ]
            },
            {
                subCategory: "Bath & Skincare",
                childItems: [
                    { extensionCategory: "Bath Time" },
                    { extensionCategory: "Skincare" },
                    { extensionCategory: "Grooming" },
                    { extensionCategory: "Bathtubs & Bath Seats" },
                    { extensionCategory: "Bath Toys" },
                    { extensionCategory: "Potty & Toilet Training" },
                ]
            },
            {
                subCategory: "Bottles & Baby Feeding",
                childItems: [
                    { extensionCategory: "Bottles & Bottle Accessories" },
                    { extensionCategory: "Baby Teething & Soothers" },
                    { extensionCategory: "Breast Feeding" },
                    { extensionCategory: "Cleaning & Sterilising" },
                    { extensionCategory: "Food Preparation & Storage" },
                    { extensionCategory: "Utensils & Feeding Accessories" },
                    { extensionCategory: "Baby Bibs", subId: '22019', id: '', },
                ]
            },
            {
                subCategory: "Health & Safety",
                childItems: [
                    { extensionCategory: "Health" },
                    { extensionCategory: "Safety & Proofing" },
                    { extensionCategory: "Monitors" },
                ]
            },
            {
                subCategory: "Nursery & Sleeping",
                childItems: [
                    { extensionCategory: "Manchester & Bedding" },
                    { extensionCategory: "Decor" },
                    { extensionCategory: "Pillows & Sleep Positioners" },
                    { extensionCategory: "Sleeping Accessories" },
                    { extensionCategory: "Wraps" },
                    { extensionCategory: "Swaddles" },
                    { extensionCategory: "Sleeping Bags" },
                ]
            },
            {
                subCategory: "Baby & Toddler Clothing",
                childItems: [
                    { extensionCategory: "Newborn" },
                    { extensionCategory: "Specialty" },
                    { extensionCategory: "Toddler" },
                ]
            },
            {
                subCategory: "Pregnancy Care & Family Planning",
                childItems: [
                    { extensionCategory: "Pregnancy Tests" },
                    { extensionCategory: "Vitamins" },
                    { extensionCategory: "After Pregnancy Care" },
                ]
            },
            {
                subCategory: "Baby Furniture",
                childItems: [
                    { extensionCategory: "High Chairs" },
                    { extensionCategory: "Cots & Bassinets" },
                    { extensionCategory: "Mattresses" },
                ]
            },
            {
                subCategory: "Toys & Playtime",
                childItems: [
                    { extensionCategory: "Books" },
                    { extensionCategory: "Soft Plush Toys" },
                    { extensionCategory: "Education & Learning" },
                    { extensionCategory: "Interactive Toys" },
                    { extensionCategory: "Play Mats & Activity Gyms" },
                    { extensionCategory: "Activity Centres & Walkers" },
                    { extensionCategory: "Trikes, Cars & Rockers" },
                    { extensionCategory: "Playpens & Playsets" },
                    { extensionCategory: "Rockers & Bouncers" },
                ]
            },
            {
                subCategory: "Baby Travel & Accessories",
                childItems: [
                    { extensionCategory: "Carriers" },
                    { extensionCategory: "Car Seats" },
                    { extensionCategory: "Prams" },
                    { extensionCategory: "Strollers" },
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
                    { extensionCategory: "Breakfast Cereal" },
                    { extensionCategory: "Muesli & Oats" },
                    { extensionCategory: "Breakfast Snacks & Drinks" },
                    { extensionCategory: "Jam" },
                    { extensionCategory: "Honey" },
                    { extensionCategory: "Peanut Butter" },
                    { extensionCategory: "Savoury Spread" },
                    { extensionCategory: "Sweet Spread" },  
                    { extensionCategory: "Pancake Mix" },  
                ]
            },
            {
                subCategory: "Tea & Coffee",
                childItems: [
                    { extensionCategory: "Black Tea" },
                    { extensionCategory: "Green Tea" },
                    { extensionCategory: "Herbal Tea" },
                    { extensionCategory: "Specialty Tea" },
                    { extensionCategory: "Coffee Beans" },
                    { extensionCategory: "Ground Coffee" },
                    { extensionCategory: "Coffee Capsules" },
                    { extensionCategory: "Instant & Flavoured Coffee" },
                ]
            },
            {
                subCategory: "Long Life Milk",    
                childItems: [
                    { extensionCategory: "Almond & Other Nut Milks" },
                    { extensionCategory: "Soy Milk" },
                    { extensionCategory: "Oat & Rice Milk" },
                    { extensionCategory: "Powdered Milk" },
                    { extensionCategory: "Long Life Milk" },
                    { extensionCategory: "Condensed & Evaporated Milk" },
                ]
            },
            {
                subCategory: "Baking",
                childItems: [
                    { extensionCategory: "Flour" },
                    { extensionCategory: "Sugar & Sweeteners" },
                    { extensionCategory: "Yeast & Baking Ingredients" },
                    { extensionCategory: "Icing & Cake Decorating" },
                    { extensionCategory: "Cake & Dessert Mix" },
                    { extensionCategory: "Flavouring, Essence & Food Colouring" },
                    { extensionCategory: "Dried Fruit" },
                    { extensionCategory: "Cooking Chocolate & Cocoa" },
                    { extensionCategory: "Pancake Mix" },
                    { extensionCategory: "Nuts, Seeds & Coconut" },
                    { extensionCategory: "Gluten Free Baking" },
                    { extensionCategory: "Bread Mix" }, 
                ]
            },
            {
                subCategory: "Herbs & Spices",
                childItems: [
                    { extensionCategory: "Dried Herbs & Spices" },
                    { extensionCategory: "Salt & Pepper" },
                    { extensionCategory: "Breadcrumbs & Stuffing" },
                    { extensionCategory: "Fresh Herb, Garlic & Ginger Paste" },
                ]
            },
            {
                subCategory: "Condiments",
                childItems: [
                    { extensionCategory: "Chutney & Relish" },
                    { extensionCategory: "Salad Dressings" },
                    { extensionCategory: "Mayonnaise" },
                    { extensionCategory: "Mustard" },
                    { extensionCategory: "Pickled Vegetables" },
                    { extensionCategory: "Tomato & BBQ Sauce" },
                    { extensionCategory: "Sweet Chilli & Hot Sauce" },
                    { extensionCategory: "Fruit Sauce" },
                ]
            },
            {
                subCategory: "Canned Food & Instant Meals",
                childItems: [
                    { extensionCategory: "Instant Meals & Sides" },
                    { extensionCategory: "Instant Noodles" },
                    { extensionCategory: "Baked Beans & Spaghetti" },
                    { extensionCategory: "Canned Soup & Soup Ingredients" },
                    { extensionCategory: "Canned Tuna" },
                    { extensionCategory: "Canned Salmon & Seafood" },
                    { extensionCategory: "Canned Meat" },
                    { extensionCategory: "Canned Vegetables" },
                    { extensionCategory: "Canned Beans & Legumes" },
                    { extensionCategory: "Canned Fruit" },
                    { extensionCategory: "Canned Tomatoes" },
                    { extensionCategory: "Canned & Packet Ready Meals" }
                ]
            },
            {
                subCategory: "Pasta, Rice & Grains",
                childItems: [
                    { extensionCategory: "Dried Pasta" },
                    { extensionCategory: "Pasta Sheets" },
                    { extensionCategory: "Pasta Meals" },
                    { extensionCategory: "Gluten Free Pasta" },
                    { extensionCategory: "Rice" },
                    { extensionCategory: "Beans & Legumes" },
                    { extensionCategory: "Quinoa, Cous Cous & Other Grains" },
                ]
            },
            {
                subCategory: "Cooking Sauces & Recipe Bases",
                childItems: [
                    { extensionCategory: "Pizza & Pasta Sauce" },
                    { extensionCategory: "Marinades & Seasoning" },
                    { extensionCategory: "Soy & Asian Sauces" },
                    { extensionCategory: "Sweet Chilli & Hot Sauce" },
                    { extensionCategory: "Simmer Sauce & Recipe Bases" },
                    { extensionCategory: "Tomato & BBQ Sauce" },
                    { extensionCategory: "Stock & Gravy" },
                ]
            },
            {
                subCategory: "International Foods",
                childItems: [
                    { extensionCategory: "Asian" }, 
                    { extensionCategory: "European" },
                    { extensionCategory: "Indian" },
                    { extensionCategory: "Mexican" },
                    { extensionCategory: "Middle Eastern" },
                    { extensionCategory: "South African" },
                    { extensionCategory: "UK Foods" },
                    { extensionCategory: "Italian" },
                    { extensionCategory: "Kosher" },
                ]
            },
            {
                subCategory: "Desserts",
                childItems: [
                    { extensionCategory: "Ice Cream Cones, Syrups & Toppings" },
                    { extensionCategory: "Jelly" },
                    { extensionCategory: "Puddings" },
                    { extensionCategory: "Ready to Freeze Ice Blocks" },
                ]
            },
            {
                subCategory: "Oil & Vinegar",
                childItems: [
                    { extensionCategory: "Oil" },
                    { extensionCategory: "Vinegar" }
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
                    { extensionCategory: "Chocolate Bars" },
                    { extensionCategory: "Chocolate Blocks" },
                    { extensionCategory: "Chocolate Bites" },
                    { extensionCategory: "Chocolate Share Packs" },
                    { extensionCategory: "Chocolate Boxes & Gifts" },
                    { extensionCategory: "Sweets, Lollies & Licorice" },
                ]
            },
            {
                subCategory: 'Biscuits & Crackers',
                childItems: [
                    { extensionCategory: "Biscuits & Cookies" },
                    { extensionCategory: "Rice Cakes & Crispbread" },
                    { extensionCategory: "Crackers" }
                ]
            },
            {
                subCategory: 'Snacks',
                childItems: [
                    { extensionCategory: "Pretzels & Jerky" },
                    { extensionCategory: "Popcorn" },
                    { extensionCategory: "Muesli Bars & Snack Bars" },
                    { extensionCategory: "Nuts, Dried Fruit & Snack Pots" },
                    { extensionCategory: "Lunch Box Snacks" },
                    { extensionCategory: "Gluten Free Snacks" }
                ]
            },
            {
                subCategory: 'Gum, Mints & Lozenges',
                childItems: [
                    { extensionCategory: "Gum" },
                    { extensionCategory: "Mints" },
                    { extensionCategory: "Lozenges" }
                ]
            },
            {
                subCategory: 'Chips',
                childItems: [
                    { extensionCategory: "Chips Single Pack" },
                    { extensionCategory: "Chips Sharing" },
                    { extensionCategory: "Chips Multi-Pack" },
                    { extensionCategory: "Corn Chips & Salsa" }
                ]
            },
            {
                subCategory: 'Easter Chocolates & Treats',
                childItems: [
                    { extensionCategory: "Easter Bunnies" },
                    { extensionCategory: "Easter Eggs" },
                    { extensionCategory: "Easter Chocolate Gifting" },
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
                    { extensionCategory: "Organic Fruit" },
                    { extensionCategory: "Apples & Pears" },
                    { extensionCategory: "Bananas" },
                    { extensionCategory: "Berries & Cherries" },
                    { extensionCategory: "Citrus Fruit" },
                    { extensionCategory: "Stone Fruit" },
                    { extensionCategory: "Grapes" },
                    { extensionCategory: "Melons & Mangoes" },
                    { extensionCategory: "Avocados" },
                    { extensionCategory: "Pineapples, Kiwi & Tropical Fruit" },
                    { extensionCategory: "Asian & Exotic Fruit" },
                    { extensionCategory: "Cut Fruit" },
                ]
            },
            {
                subCategory: "Vegetables",
                childItems: [
                    { extensionCategory: "Organic Vegetables" },
                    { extensionCategory: "Prepacked Vegetables" },
                    { extensionCategory: "Potatoes & Pumpkins" },
                    { extensionCategory: "Carrots, Onions & Root Veg" },
                    { extensionCategory: "Lettuce, Kale & Leafy Greens" },
                    { extensionCategory: "Broccoli, Cauliflower & Cabbage" },
                    { extensionCategory: "Peas, Beans, Corn & Asparagus" },
                    { extensionCategory: "Capsicum" },
                    { extensionCategory: "Tomatoes" },
                    { extensionCategory: "Celery" },
                    { extensionCategory: "Avocados" },
                    { extensionCategory: "Cucumber" },
                    { extensionCategory: "Mushrooms" },
                    { extensionCategory: "Fresh Herbs, Garlic & Chillies" },
                    { extensionCategory: "Zucchini, Eggplant & Squash" },
                    { extensionCategory: "Sprouts" },
                    { extensionCategory: "Snacking" },
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
                    { extensionCategory: "Cut Veg" },
                    { extensionCategory: "Microwave Ready Sides" },
                    { extensionCategory: "Oven Ready Sides" },
                    { extensionCategory: "Stir Fry & Soup Kits" },
                    { extensionCategory: "Sprouts" },
                    { extensionCategory: "Entertaining Sides" },
                ]
            },
            {
                subCategory: "Organic",
                childItems: [
                    { extensionCategory: "Organic Fruit" },
                    { extensionCategory: "Organic Vegetables" },
                    { extensionCategory: "Organic Salad" },
                    { extensionCategory: "Organic Loose" },
                ]
            },
            {
                subCategory: "Fresh Herbs, Garlic & Chillies",
                childItems: [
                    { extensionCategory: "Fresh Herbs" },
                    { extensionCategory: "Garlic, Chillies & Spices" },
                ]
            },
            {
                subCategory: "Snacking",
                childItems: [
                    { extensionCategory: "Prepacked Vegetables" },
                    { extensionCategory: "Prepacked Fruit" },
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
                    { extensionCategory: "Fresh Chicken" },
                    { extensionCategory: "Free Range Chicken" },
                    { extensionCategory: "Crumbed" },
                    { extensionCategory: "Kebabs & Marinated" },
                    { extensionCategory: "Deli Chicken" },
                    { extensionCategory: "Turkey" },
                    { extensionCategory: "Duck & Game" },
                ]
            },
            {
                subCategory: "Meat",
                childItems: [
                    { extensionCategory: "Beef & Veal" },
                    { extensionCategory: "Lamb" },
                    { extensionCategory: "Pork" },
                    { extensionCategory: "Game" },
                    { extensionCategory: "Burgers & Sausages" },
                    { extensionCategory: "Deli Meat" },
                    { extensionCategory: "Organic Meat" },
                    { extensionCategory: "Gluten Free Meat" },
                    { extensionCategory: "Mince" },
                    { extensionCategory: "Oven Ready Meat" },
                ]
            },
            {
                subCategory: "Seafood",
                childItems: [
                    { extensionCategory: "Salmon & Other Fish" },
                    { extensionCategory: "Prawns" },
                    { extensionCategory: "Seafood Entertaining" },
                    { extensionCategory: "Frozen Prepacked Seafood" },
                    { extensionCategory: "Squid, Octopus & Marinara" },
                    { extensionCategory: "Crab & Lobster" },
                    { extensionCategory: "Oysters, Mussels & Scallops" },
                    { extensionCategory: "Sauce & Condiments" },
                ]
            },
            {
                subCategory: "Mince",
                childItems: [
                    { extensionCategory: "Beef Mince" },
                    { extensionCategory: "Pork Mince" },
                    { extensionCategory: "Chicken & Turkey Mince" },
                    { extensionCategory: "Lamb Mince" },
                ]
            },
            {
                subCategory: "BBQ Meat",
                childItems: [
                    { extensionCategory: "Burgers" },
                    { extensionCategory: "Sausages" },
                    { extensionCategory: "Pork" },
                    { extensionCategory: "Kebabs" },
                    { extensionCategory: "Chicken" },
                    { extensionCategory: "Lamb" },
                ]
            },
            {
                subCategory: "Organic Meat & Poultry",
                childItems: [
                    { extensionCategory: "Organic Beef" },
                    { extensionCategory: "Organic Lamb" },
                    { extensionCategory: "Organic Chicken" },
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
                    { extensionCategory: "Frozen Meals" },
                    { extensionCategory: "Kid's Frozen Meals" },
                    { extensionCategory: "Frozen Dumplings" },
                    { extensionCategory: "Plant Based Meals" },
                ]
            },
            {
                subCategory: "Frozen Gluten Free",
                childItems: [
                    { extensionCategory: "Gluten Free" },
                ]
            },
            {
                subCategory: "Chips & Wedges",
                childItems: [
                    { extensionCategory: "Chips" },
                    { extensionCategory: "Hashbrowns" },
                    { extensionCategory: "Wedges" },
                ]
            },
            {
                subCategory: "Frozen Seafood",
                childItems: [
                    { extensionCategory: "Fish Fillets" },
                    { extensionCategory: "Fish Fingers & Cakes" },
                    { extensionCategory: "Frozen Seafood" },
                ]
            },
            {
                subCategory: "Frozen Meat",
                childItems: [
                    { extensionCategory: "Beef & Pork" },
                    { extensionCategory: "Chicken Pieces & Nuggets" },
                    { extensionCategory: "Whole Birds & Roasts" },
                ]
            },
            {
                subCategory: "Frozen Pizzas",
                childItems: [
                    { extensionCategory: "Pizzas" },
                ]
            },
            {
                subCategory: "Frozen Vegetables",
                childItems: [
                    { extensionCategory: "Beans & Peas" },
                    { extensionCategory: "Corn" },
                    { extensionCategory: "Mixed Vegetables" },
                    { extensionCategory: "Steam Packs" },
                    { extensionCategory: "Other Vegetables" },
                ]
            },
            {
                subCategory: "Frozen Fruit",
                childItems: [
                    { extensionCategory: "Berries & Tropical" },
                ]
            },
            {
                subCategory: "Ice Cream",
                childItems: [
                    { extensionCategory: "Ice Cream Tubs" },
                    { extensionCategory: "Ice Cream Sticks & Cones" },
                    { extensionCategory: "Premium Ice Cream" },
                    { extensionCategory: "Frozen Yoghurt" },
                    { extensionCategory: "Gelato & Sorbet" },
                    { extensionCategory: "Ice Cream Cakes" },
                ]
            },
            {
                subCategory: "Frozen Desserts",
                childItems: [
                    { extensionCategory: "Assorted Desserts" },
                    { extensionCategory: "Cakes & Cheesecakes" },
                    { extensionCategory: "Dessert Pies & Pastries" },
                    { extensionCategory: "Pastry Sheets" },
                ]
            },
            {
                subCategory: "Frozen Party Food",
                childItems: [
                    { extensionCategory: "Pastry Sheets" },
                    { extensionCategory: "Pies, Pastries & Quiches" },
                    { extensionCategory: "Frozen Finger Food" },
                ]
            },
            {
                subCategory: "Frozen Pies & Sausage Rolls",
                childItems: [
                    { extensionCategory: "Pies & Sausage Rolls" },
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
                    { extensionCategory: "Bread" },
                    { extensionCategory: "Sourdough & Specialty Bread" },
                    { extensionCategory: "Muffins & Scones" },
                    { extensionCategory: "Bread Rolls" },
                    { extensionCategory: "Donuts & Cookies" },
                    { extensionCategory: "Bakery Cakes" },
                    { extensionCategory: "Pastries & Desserts" },
                ]
            },
            {
                subCategory: "Packaged Bread & Bakery",
                childItems: [
                    { extensionCategory: "Cakes" },
                    { extensionCategory: "Packaged Bread" },
                    { extensionCategory: "Crumpets & Pancakes" },
                    { extensionCategory: "Muffins, Scones & Cupcakes" },
                    { extensionCategory: "Desserts & Pastries" },
                    { extensionCategory: "Pizza Bases" },
                    { extensionCategory: "Wraps & Flatbread" },
                    { extensionCategory: "Rolls & Bagels" },
                    { extensionCategory: "Gluten Free Bakery" },
                    { extensionCategory: "Pies & Quiches" },
                    { extensionCategory: "Bake At Home" },
                    { extensionCategory: "Organic Bakery" },
                ]
            },
            {
                subCategory: "Easter Hot Cross Buns & Desserts",
                childItems: [
                    { extensionCategory: "Hot Cross Buns" },
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
                    { extensionCategory: "Dry Cat Food" },
                    { extensionCategory: "Chilled Cat Food" },
                    { extensionCategory: "Trays & Cans Cat Food" },
                    { extensionCategory: "Kitten Food.." },
                    { extensionCategory: "Cat Grooming, Accessories & Toys" },
                    { extensionCategory: "Cat Healthcare" },
                    { extensionCategory: "Cat Litter" },
                    { extensionCategory: "Cat Treats & Milk" },
                ]
            },
            {
                subCategory: "Dog & Puppy",
                childItems: [
                    { extensionCategory: "Dry Dog Food" },
                    { extensionCategory: "Chilled Dog Food" },
                    { extensionCategory: "Frozen Dog Food" },
                    { extensionCategory: "Trays & Cans Dog Food" },
                    { extensionCategory: "Puppy Food" },
                    { extensionCategory: "Dog Grooming, Accessories & Toys" },
                    { extensionCategory: "Dog Healthcare" },
                    { extensionCategory: "Dog Collars & Leads" },
                    { extensionCategory: "Dog Treats & Milk" },
                    { extensionCategory: "Dog Bedding & Carriers" },
                ]
            },
            {
                subCategory: "Birds, Fish & Small Pets",
                childItems: [
                    { extensionCategory: "Bird Food" },
                    { extensionCategory: "Bird Treats" },
                    { extensionCategory: "Fish Food" },
                    { extensionCategory: "Small Pets Food" },
                    { extensionCategory: "Small Pet Accessories" },
                    { extensionCategory: "Bird Accessories" },
                    { extensionCategory: "Fish Tanks, Cleaning & Accessories" },
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
                    { extensionCategory: "Chilled Soft Drinks & Energy Drinks" },
                    { extensionCategory: "Chilled Water" },
                    { extensionCategory: "Chilled Juices, Iced Teas & Iced Coffee" },
                ]
            },
            {
                subCategory: "Soft Drinks",
                childItems: [
                    { extensionCategory: "Mixers" },
                    { extensionCategory: "Soft Drink Bottles" },
                    { extensionCategory: "Soft Drink Cans" },
                ]
            },
            {
                subCategory: "Cordials, Juices & Iced Teas",
                childItems: [
                    { extensionCategory: "Cordials" },
                    { extensionCategory: "Juices" },
                    { extensionCategory: "Chilled Juices" },
                    { extensionCategory: "Iced Teas" },
                    { extensionCategory: "Lunch Box Juice" },
                ]
            },
            {
                subCategory: "Water",
                childItems: [
                    { extensionCategory: "Flavoured & Coconut Water" },
                    { extensionCategory: "Sparkling Water" },
                    { extensionCategory: "Still Water" },
                ]
            },
            {
                subCategory: "Sports & Energy Drinks",
                childItems: [
                    { extensionCategory: "Energy Drinks" },
                    { extensionCategory: "Sports Drinks" },
                ]
            },
            {
                subCategory: "Tea",
                childItems: [
                    { extensionCategory: "Black Tea" },
                    { extensionCategory: "Green Tea" },
                    { extensionCategory: "Herbal & Specialty Tea" },
                ]
            },
            {
                subCategory: "Coffee",
                childItems: [
                    { extensionCategory: "Coffee Beans" },
                    { extensionCategory: "Coffee Capsules" },
                    { extensionCategory: "Ground Coffee" },
                    { extensionCategory: "Instant & Flavoured Coffee" },
                ]
            },
            {
                subCategory: "Flavoured Milk",
                childItems: [
                    { extensionCategory: "Bubble Tea" },
                    { extensionCategory: "Drinking Chocolate" },
                    { extensionCategory: "Drinks & Powders" },
                    { extensionCategory: "Kids Milk" },
                ]
            },
            {
                subCategory: "Long Life Milk",
                childItems: [
                    { extensionCategory: "Almond Milk" },
                    { extensionCategory: "Soy Milk" },
                    { extensionCategory: "Powdered Milk" },
                    { extensionCategory: "Oat & Rice Milk" },
                    { extensionCategory: "Lactose Free Milk" },
                    { extensionCategory: "Long Life Milk" },
                ]
            },
            {
                subCategory: "Home Brew",
                childItems: [
                    { extensionCategory: "Home Brew" },
                ]
            },
            {
                subCategory: "Low & Non Alcoholic Drinks",
                childItems: [
                    { extensionCategory: "Low & Non Alcoholic Beer" },
                    { extensionCategory: "Low & Non Alcoholic Wine" },
                    { extensionCategory: "Low & Non Alcoholic Spirits" },
                    { extensionCategory: "Low & Non Alcoholic Home Brew" },
                ]
            },
            {
                subCategory: "Hampers & Gifting",
                childItems: [
                    { extensionCategory: "Liquor Hampers" },
                    { extensionCategory: "No & Very Low Alcohol Hampers" },
                    { extensionCategory: "Drinks Gift Sets" },
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
                    { extensionCategory: "Gluten Free" },
                    { extensionCategory: "Vegan" },
                    { extensionCategory: "Dairy Free" },
                    { extensionCategory: "Breakfast & Spreads" },
                    { extensionCategory: "Sweet & Savoury Snacks" },
                    { extensionCategory: "Confectionery" },
                    { extensionCategory: "Dried Fruit, Nuts & Seeds" },
                    { extensionCategory: "Baking" },
                    { extensionCategory: "Pasta, Rice & Grains" },
                    { extensionCategory: "Cooking Needs" },
                    { extensionCategory: "Drinks" },
                ]
            },
            {
                subCategory: "Vitamins",
                childItems: [
                    { extensionCategory: "Children's Health" },
                    { extensionCategory: "Women's Health" },
                    { extensionCategory: "Men's Health" },
                    { extensionCategory: "Pregnancy & Family Planning" },
                    { extensionCategory: "Cold, Flu & Allergies" },
                    { extensionCategory: "Multi Vitamins" },
                    { extensionCategory: "Digestion & Probiotics" },
                    { extensionCategory: "Fatigue, Stress & Sleep" },
                    { extensionCategory: "Bones, Joints & Muscle Health" },
                    { extensionCategory: "Omega-3" },
                    { extensionCategory: "Hair, Skin & Nails" },
                    { extensionCategory: "Brain & Heart" },
                ]
            },
            {
                subCategory: "Diet & Sports Nutrition",
                childItems: [
                    { extensionCategory: "Sports Nutrition Powders" },
                    { extensionCategory: "Weight Management" },
                    { extensionCategory: "Ready To Drink" },
                    { extensionCategory: "Protein Bars & Snacks" },
                ]
            },
            {
                subCategory: "First Aid & Medicinal",
                childItems: [
                    { extensionCategory: "Pain Relief" },
                    { extensionCategory: "Cold, Flu & Allergies" },
                    { extensionCategory: "First Aid & Bandages" },
                    { extensionCategory: "Digestive Health" },
                    { extensionCategory: "Natural Remedies & Oils" },
                    { extensionCategory: "Intimate Wellness" },
                    { extensionCategory: "Eye, Ear & Mouth Care" },
                    { extensionCategory: "Pregnancy Tests" },
                    { extensionCategory: "Foot Care" },
                    { extensionCategory: "Cotton Wool & Cotton Buds" },
                    { extensionCategory: "Nicotine Replacement" },
                    { extensionCategory: "Test Kits & Face Masks" },
                ]
            },
        ]
    },
]

export default categories;