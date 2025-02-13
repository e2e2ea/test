const categories = [
   {
     category: 'Baby',
     id: '22015',
     subCategories: [
       {
         subCategory: 'Baby Accessories',
         childItems: [
           { subId: '22016', childId: '23823', extensionCategory: 'Baby Grooming & Oral Care', url: 'https:www.coles.com.au/browse/baby/baby-accessories/baby-grooming-oral-care' },
           { subId: '22016', childId: '23822', extensionCategory: 'Baby Health & Safety', url: 'https:www.coles.com.au/browse/baby/baby-accessories/baby-health-safety' },
           { subId: '22048', childId: '22059', extensionCategory: 'Nappy Change Accessories', url: 'https:www.coles.com.au/browse/baby/baby-accessories/nappy-change-accessories' },
         ],
       },
       {
         subCategory: 'Baby Formula',
         childItems: [
           { subId: '22027', childId: '23832', extensionCategory: 'A2 Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/a2-formula' },
           { subId: '22027', childId: '23832', extensionCategory: 'Cow Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/cow-formula' },
           { subId: '22027', childId: '23831', extensionCategory: 'A2 Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/a2-formula' },
           { subId: '22027', childId: '23831', extensionCategory: 'Cow Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/cow-formula' },
           { subId: '22027', childId: 'Toddler', extensionCategory: 'A2 Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/a2-formula' },
           { subId: '22027', childId: 'Toddler', extensionCategory: 'Cow Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/cow-formula' },
           { subId: '', childId: '', extensionCategory: 'Goat Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/goat-formula' },
           { subId: '', childId: '', extensionCategory: 'Organic Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/organic-formula' },
           { subId: '22027', childId: '23830', extensionCategory: 'Specialty Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/specialty-formula' },
        ],
       },
       {
         subCategory: 'Nappies & Nappy Pants',
         childItems: [
          { subId: '22048', childId: '22050', extensionCategory: 'Night Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/night-pants' },
          { subId: '22048', childId: '22051', extensionCategory: 'Night Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/night-pants' },
          { subId: '22048', childId: '22052', extensionCategory: 'Night Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/night-pants' },
          { subId: '22048', childId: '22055', extensionCategory: 'Night Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/night-pants' },
           { subId: '22048', childId: '22055', extensionCategory: 'Nappies', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappies' },
           { subId: '22048', childId: '22055', extensionCategory: 'Nappy Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
           { subId: '22048', childId: '22052', extensionCategory: 'Nappies', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappies' },
           { subId: '22048', childId: '22052', extensionCategory: 'Nappy Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
           { subId: '22048', childId: '22051', extensionCategory: 'Nappies', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappies' },
           { subId: '22048', childId: '22051', extensionCategory: 'Nappy Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
           { subId: '22048', childId: '22050', extensionCategory: 'Nappies', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappies' },
           { subId: '22048', childId: '22050', extensionCategory: 'Nappy Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
           { subId: '22048', childId: '22049', extensionCategory: 'Nappies', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappies' },
           { subId: '22048', childId: '22049', extensionCategory: 'Nappy Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
           { subId: '22048', childId: '22054', extensionCategory: 'Nappy Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
           { subId: '22048', childId: '22058', extensionCategory: 'Swimmers', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/swimmers' },
         ],
       },
       {
         subCategory: 'Baby Wipes',
         childItems: [
           { subId: '22048', childId: '22059', extensionCategory: 'Extra Large Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/extra-large-pack' },
           { subId: '22048', childId: '22059', extensionCategory: 'Large Pack', url: 'http:coles.com.au/browse/baby/baby-wipes/large-pack' },
           { subId: '22048', childId: '22059', extensionCategory: 'Medium Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/medium-pack' },
           { subId: '22048', childId: '22059', extensionCategory: 'Refill Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/refill-pack' },
           { subId: '22048', childId: '22059', extensionCategory: 'Small Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/small-pack' },
         ],
       },
       {
         subCategory: 'Baby Feeding',
         childItems: [
           { subId: '22016', childId: '23827', extensionCategory: 'Nursing Care', url: 'https:www.coles.com.au/browse/baby/baby-feeding/nursing-care' },
         ],
       },
       {
         subCategory: 'Baby & Toddler Food',
         childItems: [
           { subId: '22019', childId: '22026', extensionCategory: 'Baby Food Jars', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
           { subId: '22019', childId: '22026', extensionCategory: 'Baby Food Pouches', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },

           { subId: '22019', childId: '22025', extensionCategory: 'Baby & Toddler Snacks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks' },
           { subId: '22019', childId: '22025', extensionCategory: 'Baby Cereals', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals' },
           { subId: '22019', childId: '22025', extensionCategory: 'Baby Food Jars', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
           { subId: '22019', childId: '22025', extensionCategory: 'Baby Food Pouches', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },
           { subId: '22019', childId: '22025', extensionCategory: 'Baby Pasta', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta' },
           { subId: '22019', childId: '22025', extensionCategory: 'Baby Rusks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks' },
           
           // for 12months
           { subId: '22019', childId: '22020', extensionCategory: 'Baby & Toddler Snacks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks' },
           { subId: '22019', childId: '22020', extensionCategory: 'Baby Cereals', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals' },
           { subId: '22019', childId: '22020', extensionCategory: 'Baby Food Jars', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
           { subId: '22019', childId: '22020', extensionCategory: 'Baby Food Pouches', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },
           { subId: '22019', childId: '22020', extensionCategory: 'Baby Pasta', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta' },
           { subId: '22019', childId: '22020', extensionCategory: 'Baby Rusks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks' },
          
           // for 6months
           { subId: '22019', childId: '22023', extensionCategory: 'Baby & Toddler Snacks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Cereals', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Food Jars', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Food Pouches', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Pasta', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Rusks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks' },
           
           // for 4months
           { subId: '22019', childId: '22021', extensionCategory: 'Baby & Toddler Snacks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks' },
           { subId: '22019', childId: '22021', extensionCategory: 'Baby Cereals', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals' },
           { subId: '22019', childId: '22021', extensionCategory: 'Baby Food Jars', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
           { subId: '22019', childId: '22021', extensionCategory: 'Baby Food Pouches', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },
           { subId: '22019', childId: '22021', extensionCategory: 'Baby Pasta', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta' },
           { subId: '22019', childId: '22021', extensionCategory: 'Baby Rusks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks' },
           
           // for8months
           { subId: '22019', childId: '22023', extensionCategory: 'Baby & Toddler Snacks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Cereals', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Food Jars', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Food Pouches', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Pasta', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta' },
           { subId: '22019', childId: '22023', extensionCategory: 'Baby Rusks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks' },
           
         ],
       },
       {
         subCategory: 'Baby Meal Time',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Baby Plates & Bowls', url: 'https:www.coles.com.au/browse/baby/baby-meal-time/baby-plates-bowls' },
         ],
       },
       {
         subCategory: 'Bottles & Feeding',
         childItems: [
           { subId: '22016', childId: '23823', extensionCategory: 'Baby Teats', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/baby-teats' },
           { subId: '22016', childId: '23823', extensionCategory: 'Bottle Accessories', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/bottle-accessories' },

           { subId: '22016', childId: '23827', extensionCategory: 'Baby Bottles', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/baby-bottles' },
           { subId: '22016', childId: '23827', extensionCategory: 'Baby Cups', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/baby-cups' },
           { subId: '22016', childId: '23827', extensionCategory: 'Baby Teats', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/baby-teats' },
           { subId: '22016', childId: '23827', extensionCategory: 'Bottle Accessories', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/bottle-accessories' },
           { subId: '22016', childId: '23827', extensionCategory: 'Bottle Cleaning', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/bottle-cleaning' },
           { subId: '22016', childId: '23827', extensionCategory: 'Bottle Feeding', url: 'https:www.coles.com.au/browse/baby/bottles-feeding/bottle-feeding' },
         ],
       },
       {
         subCategory: 'Bath & Skincare',
         childItems: [
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Bath', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-bath' },
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Cotton Buds', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-cotton-buds' },
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Hair & Body Wash', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-hair-body-wash' },
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Hair Care', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-hair-care' },
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Medicinal', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-medicinal' },
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Moisturiser', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-moisturiser' },
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Oil', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-oil' },
           { subId: '22016', childId: '23821', extensionCategory: 'Baby Powder', url: 'https:www.coles.com.au/browse/baby/bath-skincare/baby-powder' },
           { subId: '22016', childId: '23821', extensionCategory: 'Nappy Rash Treatment', url: 'https:www.coles.com.au/browse/baby/bath-skincare/nappy-rash-treatment' },
         ],
       },
       {
         subCategory: 'Dummies & Teething',
         childItems: [
           { subId: '22016', childId: '23820', extensionCategory: 'Soothers & Teethers', url: 'https:www.coles.com.au/browse/baby/dummies-teething/soothers-teethers' },
         ],
       },
       {
         subCategory: 'Baby Clothing',
         childItems: [
           { subId: '22016', childId: '23824', extensionCategory: 'Baby Bibs', url: 'https://www.coles.com.au/browse/baby/baby-clothing/baby-bibs' },
         ],
       },
       {
         subCategory: 'Postpartum Care',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Postpartum Care', url: 'https:www.coles.com.au/browse/baby/postpartum-care/postpartum-underwear' },
         ],
       },
     ],
   },
   {
     category: 'Bakery',
     id: "22060",
     subCategories: [
       {
         subCategory: 'Chilled Cakes & Desserts',
         childItems: [
           { subId: '', childId: '', extensionCategory: '2 Pack & Individual Serve Desserts', url: 'https:www.coles.com.au/browse/bakery/chilled-cakes-desserts/2-pack-individual-serve-desserts' },
           { subId: '', childId: '', extensionCategory: 'Birthday & Celebration Cakes', url: 'https:www.coles.com.au/browse/bakery/chilled-cakes-desserts/birthday-celebration-cakes' },
           { subId: '', childId: '', extensionCategory: 'Cheesecakes', url: 'https:www.coles.com.au/browse/bakery/chilled-cakes-desserts/cheesecakes' },
           { subId: '', childId: '', extensionCategory: 'Cream Cakes', url: 'https:www.coles.com.au/browse/bakery/chilled-cakes-desserts/cream-cakes' },
           { subId: '', childId: '', extensionCategory: 'Pavlova & Meringue', url: 'https:www.coles.com.au/browse/bakery/chilled-cakes-desserts/pavlova-meringue' },
           { subId: '', childId: '', extensionCategory: 'Tarts & Pies', url: 'https:www.coles.com.au/browse/bakery/chilled-cakes-desserts/tarts-pies' },
         ],
       },
       {
         subCategory: 'Easter Bakery',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Hot Cross Buns', url: 'https:www.coles.com.au/browse/bakery/easter-bakery/hot-cross-buns' },
         ],
       },
       {
         subCategory: 'Gluten Free Range',
         childItems: [
           { subId: '22075', childId: '22079', extensionCategory: 'All Packaged Bread', url: 'https:www.coles.com.au/browse/bakery/gluten-free-range/all-packaged-bread' },
           { subId: '22075', childId: '22079', extensionCategory: 'Gluten Free Hot Cross Buns', url: 'https:www.coles.com.au/browse/bakery/gluten-free-range/gluten-free-hot-cross-buns' },
           { subId: '22075', childId: '22079', extensionCategory: 'Packaged Breakfast Snack', url: 'https:www.coles.com.au/browse/bakery/gluten-free-range/packaged-breakfast-snack' },
           { subId: '22075', childId: '22079', extensionCategory: 'Packaged Buns & Bread Rolls', url: 'https:www.coles.com.au/browse/bakery/gluten-free-range/packaged-buns-bread-rolls' },
           { subId: '22075', childId: '22079', extensionCategory: 'Packaged Cake & Sweet Treats', url: 'https:www.coles.com.au/browse/bakery/gluten-free-range/packaged-cake-sweet-treats' },
           { subId: '22075', childId: '22079', extensionCategory: 'Packaged Wraps, Flat Bread and Pizza Bases', url: 'https:www.coles.com.au/browse/bakery/gluten-free-range/packaged-wraps-flat-bread-and-pizza-bases' },
           { subId: '22075', childId: '22075', extensionCategory: 'Packaged Wraps, Flat Bread and Pizza Bases', url: 'https:www.coles.com.au/browse/bakery/gluten-free-range/packaged-wraps-flat-bread-and-pizza-bases' },
       ],
       },
       {
         subCategory: 'Instore Bakery Breads and Rolls',
         childItems: [
           { subId: '22062', childId: '22069', extensionCategory: 'Artisan Style Breads By Laurent', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/artisan-style-breads-by-laurent' },
           { subId: '22062', childId: '22064', extensionCategory: 'Artisan Style Breads By Laurent', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/artisan-style-breads-by-laurent' },
           { subId: '22062', childId: '22064', extensionCategory: 'Baguettes', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/baguettes' },
           { subId: '22062', childId: '22064', extensionCategory: 'Bread Loaves', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/bread-loaves' },
           { subId: '22062', childId: '22065', extensionCategory: 'Bread Rolls', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/bread-rolls' },
           { subId: '22062', childId: '22064', extensionCategory: 'Healthier Breads', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls/healthier-breads' },
         ],
       },
       {
         subCategory: 'Instore Bakery Sweet Treats',
         childItems: [
           { subId: '22062', childId: '22066', extensionCategory: 'Cookies', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/cookies' },
           { subId: '22062', childId: '22066', extensionCategory: 'Donuts', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/donuts' },
           { subId: '', childId: '', extensionCategory: 'Easter Treats', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/easter-treats' },
           { subId: '22062', childId: '22068', extensionCategory: 'Pastries & Danishes', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/pastries-danishes' },
           { subId: '22074', childId: '22078', extensionCategory: 'Pastries & Danishes', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/pastries-danishes' },
           { subId: '', childId: '', extensionCategory: 'Scones', url: 'https:www.coles.com.au/browse/bakery/instore-bakery-sweet-treats/scones' },
         ],
       },
       {
         subCategory: 'Packaged Bread Rolls and Buns',
         childItems: [
           { subId: '22074', childId: '22087', extensionCategory: 'Brioche', url: 'https:www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/brioche' },
           { subId: '22074', childId: '22087', extensionCategory: 'Burger Buns and Hot Dog Rolls', url: 'https:www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/burger-buns-and-hot-dog-rolls' },
           { subId: '22074', childId: '22087', extensionCategory: 'Gluten Free Rolls & Buns', url: 'https:www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/gluten-free-rolls-buns' },
           { subId: '22074', childId: '22087', extensionCategory: 'Thins', url: 'https:www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns/thins' },
       ],
       },
       {
         subCategory: 'Packaged Breads',
         childItems: [
           { subId: '22074', childId: '22083', extensionCategory: 'Digestive Health & Speciality Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-breads/digestive-health-speciality-bread' },
           { subId: '22074', childId: '22083', extensionCategory: 'Gluten Free Packaged Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-breads/gluten-free-packaged-bread' },
           { subId: '22074', childId: '22083', extensionCategory: 'Multigrain & Seeded Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-breads/multigrain-seeded-bread' },
           { subId: '22074', childId: '22083', extensionCategory: 'Rye Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-breads/rye-bread' },
           { subId: '22074', childId: '22083', extensionCategory: 'White Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-breads/white-bread' },
           { subId: '22074', childId: '22083', extensionCategory: 'Wholemeal Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-breads/wholemeal-bread' },
         ],
       },
       {
         subCategory: 'Packaged Breakfast Snacks',
         childItems: [
           { subId: '22074', childId: '22087', extensionCategory: 'Bagels', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/bagels' },
           { subId: '22074', childId: '22078', extensionCategory: 'Croissants & Pastries', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/croissants-pastries' },
           { subId: '22074', childId: '22077', extensionCategory: 'Crumpet', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/crumpet' },
           { subId: '22074', childId: '22081', extensionCategory: 'English Muffins', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/english-muffins' },
           { subId: '22074', childId: '22083', extensionCategory: 'Fruit Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/fruit-bread' },
           { subId: '22074', childId: '22079', extensionCategory: 'Gluten Free Packaged Snacks', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/gluten-free-packaged-snacks' },
           { subId: '22074', childId: '22077', extensionCategory: 'Pikelets, Pancakes and Crepes', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/pikelets-pancakes-and-crepes' },
           { subId: '', childId: '', extensionCategory: 'Waffles', url: 'https:www.coles.com.au/browse/bakery/packaged-breakfast-snacks/waffles' },
         ],
       },
       {
         subCategory: 'Packaged Cakes & Sweet Treats',
         childItems: [
           { subId: '22074', childId: '22076', extensionCategory: 'Cookies & Biscuits', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/cookies-biscuits' },
           { subId: '22074', childId: '22076', extensionCategory: 'Cupcakes', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/cupcakes' },
           { subId: '22074', childId: '22081', extensionCategory: 'Cupcakes', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/cupcakes' },
           { subId: '22074', childId: '22076', extensionCategory: 'Fruit Cakes', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/fruit-cakes' },
           { subId: '22074', childId: '22076', extensionCategory: 'Gluten Free Cakes & Treats', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/gluten-free-cakes-treats' },
           { subId: '22074', childId: '22076', extensionCategory: 'Lamingtons', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/lamingtons' },
           { subId: '22074', childId: '22076', extensionCategory: 'Loaf Cakes', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/loaf-cakes' },
           { subId: '22074', childId: '22076', extensionCategory: 'Meringues & Pavlovas', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/meringues-pavlovas' },
           { subId: '22074', childId: '22076', extensionCategory: 'Muffins & Muffin Bars', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/muffins-muffin-bars' },
           { subId: '22074', childId: '22081', extensionCategory: 'Muffins & Muffin Bars', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/muffins-muffin-bars' },
           { subId: '22074', childId: '22076', extensionCategory: 'Pastry Shells', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/pastry-shells' },
           { subId: '22074', childId: '22076', extensionCategory: 'Slices & Bites', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/slices-bites' },
           { subId: '22074', childId: '22076', extensionCategory: 'Sponge & Mud Cakes', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/sponge-mud-cakes' },
           { subId: '22074', childId: '22076', extensionCategory: 'Sponge Rolls & Cake Bars', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/sponge-rolls-cake-bars' },
           { subId: '22074', childId: '22076', extensionCategory: 'Sweet Brioche', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/sweet-brioche' },
           { subId: '22074', childId: '22076', extensionCategory: 'Tea Cakes', url: 'https:www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats/tea-cakes' },
         ],
       },
       {
         subCategory: 'Packaged Flat Bread, Wraps and Pizza Bases',
         childItems: [
           { subId: '22074', childId: '22088', extensionCategory: 'Flavoured Wraps', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/flavoured-wraps' },
           { subId: '22074', childId: '22088', extensionCategory: 'Gluten Free Wraps & Flat Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/gluten-free-wraps-flat-bread' },
           { catId: '22770', subId: '22771', childId: '22779', extensionCategory: 'Gluten Free Wraps & Flat Bread', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/gluten-free-wraps-flat-bread' },
           { subId: '22074', childId: '22088', extensionCategory: 'Naan Bread and Gyros', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/naan-bread-and-gyros' },
           { subId: '22074', childId: '22088', extensionCategory: 'Other Flat Breads', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/other-flat-breads' },
           { subId: '22074', childId: '22086', extensionCategory: 'Pizza Bases', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/pizza-bases' },
           { subId: '22074', childId: '22075', extensionCategory: 'Pizza Bases', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/pizza-bases' },
           { subId: '22074', childId: '22088', extensionCategory: 'Turkish and Ciabatta', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/turkish-and-ciabatta' },
           { subId: '22074', childId: '22088', extensionCategory: 'White Wraps', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/white-wraps' },
           { subId: '22074', childId: '22088', extensionCategory: 'Wholegrain & Seeded Wraps', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/wholegrain-seeded-wraps' },
           { subId: '22074', childId: '22088', extensionCategory: 'Wholemeal Wraps', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/wholemeal-wraps' },
         ],
       },
       {
         subCategory: 'Vegan Range',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'All Vegan Range', url: 'https:www.coles.com.au/browse/bakery/vegan-range/all-vegan-range' },
         ],
       },
     ],
   },
   {
     category: 'Dairy, Eggs & Fridge',
     id: '22089',
     subCategories: [
       {
         subCategory: 'Butter & Margarine',
         childItems: [
           { subId: '22112', childId: '22113', extensionCategory: 'Blends', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine/blends' },
           { subId: '22112', childId: '22113', extensionCategory: 'Butter', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine/butter' },
           { subId: '22112', childId: '22113', extensionCategory: 'Margarine', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine/margarine' },
         
           ],
       },
       {
         subCategory: 'Cheese',
         childItems: [
           { subId: '22090', childId: '22091', extensionCategory: 'Block Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/block-cheese' },
           { subId: '', childId: '', extensionCategory: 'Blue Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/blue-cheese' },
           { subId: '22090', childId: '22101', extensionCategory: 'Brie & Soft Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/brie-soft-cheese' },
           { subId: '22090', childId: '22093', extensionCategory: 'Cheddar & Tasty Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/cheddar-tasty-cheese' },
           { subId: '22090', childId: '22100', extensionCategory: 'Cheese Snacks', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/cheese-snacks' },
           { subId: '22090', childId: '22098', extensionCategory: 'Cream Cheese & Spreads', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/cream-cheese-spreads' },
           { subId: '22090', childId: '22095', extensionCategory: 'Feta Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/feta-cheese' },
           { subId: '22090', childId: '22097', extensionCategory: 'Firm Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/firm-cheese' },
           { subId: '', childId: '', extensionCategory: 'Gourmet Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/gourmet-cheese' },
           { subId: '22090', childId: '22096', extensionCategory: 'Grated Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/grated-cheese' },
           { subId: '22090', childId: '22093', extensionCategory: 'Grated Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/grated-cheese' },
           { subId: '22090', childId: '22097', extensionCategory: 'Grated Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/grated-cheese' },
           { subId: '', childId: '', extensionCategory: 'Pates & Platters', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/pates-platters' },
           { subId: '22090', childId: '22099', extensionCategory: 'Sliced Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/sliced-cheese' },
           { subId: '22090', childId: '22094', extensionCategory: 'Specialty & Entertaining Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/specialty-entertaining-cheese' },
           ],
       },
       {
         subCategory: 'Cream & Custard',
         childItems: [
           { subId: '22102', childId: '22103', extensionCategory: 'Cream', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/cream' },
           { subId: '22102', childId: '22105', extensionCategory: 'Custards', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/custards' },
           { subId: '', childId: '', extensionCategory: 'Sour Cream', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cream-custard/sour-cream' },
           ],
       },
       {
         subCategory: 'Dairy Desserts',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Chilled Dairy Desserts', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/dairy-desserts/chilled-dairy-desserts' },
           ],
       },
       {
         subCategory: 'Dairy World Foods',
         childItems: [
           { subId: '22140', childId: '22141', extensionCategory: 'Asian Foods', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/dairy-world-foods/asian-foods' },
           ],
       },
       {
         subCategory: 'Dips & Pate',
         childItems: [
           { subId: '22108', childId: '22108', extensionCategory: 'Dips', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/dips' },
           { subId: '22108', childId: '22111', extensionCategory: 'Paste', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/paste' },
           { subId: '22108', childId: '22111', extensionCategory: 'Pate', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/dips-pate/pate' },
           ],
       },
       {
         subCategory: 'Eggs',
         childItems: [
           { subId: '22112', childId: '22114', extensionCategory: 'Barn Eggs', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/eggs/barn-eggs' },
           { subId: '22112', childId: '22114', extensionCategory: 'Cage Eggs', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/eggs/cage-eggs' },
           { subId: '22112', childId: '22114', extensionCategory: 'Egg Whites', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/eggs/egg-whites' },
           { subId: '22112', childId: '22114', extensionCategory: 'Free Range Eggs', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/eggs/free-range-eggs' },
           { subId: '22112', childId: '22114', extensionCategory: 'Specialty Eggs', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/eggs/specialty-eggs' },
           ],
       },
       {
         subCategory: 'Fresh Pasta & Sauces',
         childItems: [
           { subId: '22116', childId: '22117', extensionCategory: 'Fresh Pasta & Noodles', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/fresh-pasta-sauces/fresh-pasta-noodles' },
           { subId: '22116', childId: '22119', extensionCategory: 'Pasta Sauces', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/fresh-pasta-sauces/pasta-sauces' },
           ],
       },
       {
         subCategory: 'Garlic Bread & Pastry Sheets',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Chilled Garlic & Specialty Breads', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/garlic-bread-pastry-sheets/chilled-garlic-specialty-breads' },
           { subId: '', childId: '', extensionCategory: 'Chilled Pastry & Dough', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/garlic-bread-pastry-sheets/chilled-pastry-dough' },
           ],
       },
       {
         subCategory: 'Long Life Milk',
         childItems: [
           { subId: '22132', childId: '22136', extensionCategory: 'Almond & Other Nut Milk', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/long-life-milk/almond-other-nut-milk' },
             ],
       },
       {
         subCategory: 'Milk',
         childItems: [
           { subId: '22132', childId: '22133', extensionCategory: 'Flavoured Milk', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/milk/flavoured-milk' },
           { subId: '22132', childId: '22134', extensionCategory: 'Full Cream Milk', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/milk/full-cream-milk' },
           { subId: '', childId: '', extensionCategory: 'Probiotic Milk', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/milk/probiotic-milk' },
           { subId: '22132', childId: '22138', extensionCategory: 'Skim & Low Fat Milk', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/milk/skim-low-fat-milk' },
           { subId: '22132', childId: '22139', extensionCategory: 'Soy & Almond Milk', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/milk/soy-almond-milk' },
           { subId: '22132', childId: '22139', extensionCategory: 'Specialty Milk', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/milk/specialty-milk' },
           ],
       },
       {
         subCategory: 'Packaged Deli Meats',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Packaged Bacon', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-bacon' },
           { subId: '', childId: '', extensionCategory: 'Packaged Deli Meat', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-deli-meat' },
           { subId: '', childId: '', extensionCategory: 'Packaged Frankfurts', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-frankfurts' },
           { subId: '', childId: '', extensionCategory: 'Packaged Salami & Kabana', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats/packaged-salami-kabana' },
           ],
       },
       {
         subCategory: 'Ready to Eat Meals',
         childItems: [
           { subId: '24003', childId: '', extensionCategory: 'Bbq', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/bbq' },
           { subId: '24003', childId: '', extensionCategory: 'Grab & Go Snacks', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/grab-go-snacks' },
           { subId: '24003', childId: '', extensionCategory: 'Hot Snacks & Sides', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/hot-snacks-sides' },
           { subId: '24003', childId: '', extensionCategory: 'Indian Food & Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/indian-food-meals' },
           { subId: '24003', childId: '', extensionCategory: 'Italian Meals & Pasta', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/italian-meals-pasta' },
           { subId: '24003', childId: '', extensionCategory: 'Other Ready Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/other-ready-meals' },
           { subId: '24003', childId: '', extensionCategory: 'Pies & Pastries', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/pies-pastries' },
           { subId: '24003', childId: '', extensionCategory: 'Pizzas', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/pizzas' },
           { subId: '24003', childId: '', extensionCategory: 'Soups & Stews', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/soups-stews' },
           { subId: '24003', childId: '', extensionCategory: 'Thai Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/thai-meals' },
           { subId: '24003', childId: '', extensionCategory: 'the Kitchen Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/the-kitchen-meals' },
           // for main category
           { subId: '22140', childId: '22143', extensionCategory: 'Bbq', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/bbq' },
           { subId: '22140', childId: '22143', extensionCategory: 'Grab & Go Snacks', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/grab-go-snacks' },
           { subId: '22140', childId: '22143', extensionCategory: 'Hot Snacks & Sides', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/hot-snacks-sides' },
           { subId: '22140', childId: '22143', extensionCategory: 'Indian Food & Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/indian-food-meals' },
           { subId: '22140', childId: '22143', extensionCategory: 'Italian Meals & Pasta', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/italian-meals-pasta' },
           { subId: '22140', childId: '22145', extensionCategory: 'Indian Food & Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/indian-food-meals' },
           { subId: '22140', childId: '22146', extensionCategory: 'Italian Meals & Pasta', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/italian-meals-pasta' },
           { subId: '22140', childId: '22143', extensionCategory: 'Other Ready Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/other-ready-meals' },
           { subId: '22140', childId: '22143', extensionCategory: 'Pies & Pastries', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/pies-pastries' },
           { subId: '22140', childId: '22143', extensionCategory: 'Pizzas', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/pizzas' },
           { subId: '22140', childId: '22143', extensionCategory: 'Soups & Stews', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/soups-stews' },
           { subId: '22140', childId: '22144', extensionCategory: 'Soups & Stews', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/soups-stews' },
           { subId: '22140', childId: '22143', extensionCategory: 'Thai Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/thai-meals' },
           { subId: '22140', childId: '22143', extensionCategory: 'the Kitchen Meals', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals/the-kitchen-meals' },

           ],
       },
       {
         subCategory: 'Vegetarian & Vegan',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Falafels', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/falafels' },
           { subId: '', childId: '', extensionCategory: 'Soy', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/soy' },
           { subId: '', childId: '', extensionCategory: 'Tofu', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/tofu' },
           { subId: '22154', childId: '22155', extensionCategory: 'Vegan Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/vegan-cheese' },
           { subId: '22154', childId: '22156', extensionCategory: 'Vegetarian Snacking', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/vegetarian-snacking' },
           { subId: '22154', childId: '22155', extensionCategory: 'Veggie Burgers & Sausages', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/veggie-burgers-sausages' },
           { subId: '22154', childId: '22155', extensionCategory: 'Veggie Meat & Chicken', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan/veggie-meat-chicken' },
           ],
       },
     ],
   },
   {
     category: 'Deli',
     id: '24023',
     subCategories: [
       {
         subCategory: 'Deli Meats',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Beef & Lamb', url: 'https:www.coles.com.au/browse/deli/deli-meats/beef-lamb' },
           { subId: '', childId: '', extensionCategory: 'Chicken & Turkey', url: 'https:www.coles.com.au/browse/deli/deli-meats/chicken-turkey' },
           { subId: '24059', childId: '24058', extensionCategory: 'Deli Bacon', url: 'https:www.coles.com.au/browse/deli/deli-meats/deli-bacon' },
           { subId: '24059', childId: '24058', extensionCategory: 'Ham', url: 'https:www.coles.com.au/browse/deli/deli-meats/ham' },
           { subId: '', childId: '', extensionCategory: 'Kabana, Pancetta & Mortdella', url: 'https:www.coles.com.au/browse/deli/deli-meats/kabana-pancetta-mortdella' },
           { subId: '24024', childId: '24029', extensionCategory: 'Other Sliced Meats', url: 'https:www.coles.com.au/browse/deli/deli-meats/other-sliced-meats' },
           { subId: '', childId: '', extensionCategory: 'Salami', url: 'https:www.coles.com.au/browse/deli/deli-meats/salami' },
           { subId: '24024', childId: '24030', extensionCategory: 'Sausages, Frankfurts & Kransky', url: 'https:www.coles.com.au/browse/deli/deli-meats/sausages-frankfurts-kransky' },
           ],
       },
       {
         subCategory: 'Deli Packaged Meat',
         childItems: [
           { subId: '24024', childId: '24030', extensionCategory: 'Frankfurts & Kransky Packaged', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/frankfurts-kransky-packaged' },
           { subId: '', childId: '', extensionCategory: 'Meat Packaged', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/meat-packaged' },
           { catId: '22713', subId: '24058', childId: '', extensionCategory: 'Packaged Bacon', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/packaged-bacon' },
           { catId: '22713', subId: '24058', childId: '', extensionCategory: 'Packaged Ham', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/packaged-ham' },
           { subId: '24024', childId: '24028', extensionCategory: 'Packaged Bacon', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/packaged-bacon' },
           { subId: '24024', childId: '24028', extensionCategory: 'Packaged Ham', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/packaged-ham' },
           { subId: '24024', childId: '24028', extensionCategory: 'Salami & Kabana Packaged', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/salami-kabana-packaged' },
           ],
       },
       {
         subCategory: 'Deli Poultry',
         childItems: [
           { subId: '24024', childId: '24046', extensionCategory: 'Breast & Thigh Fillets', url: 'https:www.coles.com.au/browse/deli/deli-poultry/breast-thigh-fillets' },
           { subId: '24024', childId: '24046', extensionCategory: 'Diced & Tenders', url: 'https:www.coles.com.au/browse/deli/deli-poultry/diced-tenders' },
           { subId: '24024', childId: '24046', extensionCategory: 'Kebabs, Nibbles & Crumbed', url: 'https:www.coles.com.au/browse/deli/deli-poultry/kebabs-nibbles-crumbed' },
           { subId: '24024', childId: '24046', extensionCategory: 'Wings & Drumsticks', url: 'https:www.coles.com.au/browse/deli/deli-poultry/wings-drumsticks' },
           ],
       },
       {
         subCategory: 'Deli Seafood',
         childItems: [
           { subId: '24055', childId: '', extensionCategory: 'Fish', url: 'https:www.coles.com.au/browse/deli/deli-seafood/fish' },
           { subId: '24055', childId: '', extensionCategory: 'Marinara Mix', url: 'https:www.coles.com.au/browse/deli/deli-seafood/marinara-mix' },
           { subId: '24055', childId: '', extensionCategory: 'Prawn & Crustaceans', url: 'https:www.coles.com.au/browse/deli/deli-seafood/prawn-crustaceans' },
           { subId: '24055', childId: '', extensionCategory: 'Prepackaged Seafood', url: 'https:www.coles.com.au/browse/deli/deli-seafood/prepackaged-seafood' },
           
           { catId: '22713', subId: '22758', childId: '22763', extensionCategory: 'Marinara Mix', url: 'https:www.coles.com.au/browse/deli/deli-seafood/marinara-mix' },
           { catId: '22713', subId: '22758', childId: '', extensionCategory: 'Prawn & Crustaceans', url: 'https:www.coles.com.au/browse/deli/deli-seafood/prawn-crustaceans' },
           { catId: '22713', subId: '22758', childId: '', extensionCategory: 'Prepackaged Seafood', url: 'https:www.coles.com.au/browse/deli/deli-seafood/prepackaged-seafood' },
           ],
       },
       {
         subCategory: 'Entertaining',
         childItems: [
           { subId: '24025', childId: '24033', extensionCategory: 'Antipasto', url: 'https:www.coles.com.au/browse/deli/entertaining/antipasto' },
           { subId: '24025', childId: '24031', extensionCategory: 'Crackers, Dips & Pate', url: 'https:www.coles.com.au/browse/deli/entertaining/crackers-dips-pate' },
           { subId: '', childId: '', extensionCategory: 'Olives', url: 'https:www.coles.com.au/browse/deli/entertaining/olives' },
           { subId: '24025', childId: '24033', extensionCategory: 'Prepacked Olives & Antipasto', url: 'https:www.coles.com.au/browse/deli/entertaining/prepacked-olives-antipasto' },
           ],
       },
       {
         subCategory: 'Gourmet Cheese',
         childItems: [
           { subId: '24025', childId: '24032', extensionCategory: 'Brie & Camembert', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/brie-camembert' },
           { subId: '24025', childId: '24032', extensionCategory: 'Cheddar', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/cheddar' },
           { subId: '24025', childId: '24032', extensionCategory: 'Deli Blue Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/deli-blue-cheese' },
           { subId: '24025', childId: '24032', extensionCategory: 'Fetta, Haloumi & Other', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/fetta-haloumi-other' },
           { subId: '24025', childId: '24032', extensionCategory: 'Fruit & Flavoured Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/fruit-flavoured-cheese' },
           { subId: '24025', childId: '24032', extensionCategory: 'Goats Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/goats-cheese' },
           { subId: '24025', childId: '24032', extensionCategory: 'Hard Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/hard-cheese' },
           ],
       },
       {
         subCategory: 'Pre-Made Platters',
         childItems: [
           { subId: '24025', childId: '24034', extensionCategory: 'Deli Platter', url: 'https:www.coles.com.au/browse/deli/pre-made-platters/deli-platter' },
           ],
       },
       {
         subCategory: 'Ready to Eat',
         childItems: [
           { subId: '24026', childId: '24037', extensionCategory: 'Chilled Quiches & Pies', url: 'https:www.coles.com.au/browse/deli/ready-to-eat/chilled-quiches-pies' },
           { subId: '', childId: '', extensionCategory: 'Heat & Eat', url: 'https:www.coles.com.au/browse/deli/ready-to-eat/heat-eat' },
           { catId: '22713', subId: '23937', childId: '', extensionCategory: 'Hot Food', url: 'https:www.coles.com.au/browse/deli/ready-to-eat/hot-food' },
           ],
       },
     ],
   },
   {
     category: 'Drinks',
     id: '22164',
     subCategories: [
       {
         subCategory: 'Coffee Drinks',
         childItems: [
           { subId: '22908', childId: '22910', extensionCategory: 'Beans Coffee', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/beans-coffee' },
           { subId: '22908', childId: '22913', extensionCategory: 'Coffee Ground', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-ground' },

           { subId: '', childId: '', extensionCategory: 'Accessories Coffee', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/accessories-coffee' },
           { subId: '22170', childId: '22171', extensionCategory: 'Beans Coffee', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/beans-coffee' },
           { subId: '22170', childId: '22172', extensionCategory: 'Coffee Capsules', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-capsules' },
           { subId: '22908', childId: '22911', extensionCategory: 'Coffee Capsules', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-capsules' },
           
           { subId: '22170', childId: '22174', extensionCategory: 'Coffee Ground', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-ground' },
           { subId: '22170', childId: '22175', extensionCategory: 'Coffee Instant', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-instant' },
           { subId: '', childId: '', extensionCategory: 'Mixes Coffee', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/mixes-coffee' },
            ],
       },
       {
         subCategory: 'Cold Drinks',
         childItems: [
           { subId: '22165', childId: '23943', extensionCategory: 'Cold Soft Drinks', url: 'https:www.coles.com.au/browse/drinks/cold-drinks/cold-soft-drinks' },
           { subId: '22165', childId: '23942', extensionCategory: 'Cold Water', url: 'https:www.coles.com.au/browse/drinks/cold-drinks/cold-water' },
           { subId: '22165', childId: '22167', extensionCategory: 'Other Cold Drinks', url: 'https:www.coles.com.au/browse/drinks/cold-drinks/other-cold-drinks' },
            ],
       },
       {
         subCategory: 'Cordials',
         childItems: [
           { subId: '22176', childId: '22178', extensionCategory: 'All Cordials', url: 'https:www.coles.com.au/browse/drinks/cordials/all-cordials' },
            ],
       },
       {
         subCategory: 'Energy Drinks',
         childItems: [
           { subId: '22221', childId: '22222', extensionCategory: 'Multipack Cans', url: 'https:www.coles.com.au/browse/drinks/energy-drinks/multipack-cans' },
           { subId: '22221', childId: '22222', extensionCategory: 'Single Cans', url: 'https:www.coles.com.au/browse/drinks/energy-drinks/single-cans' },
            ],
       },
       {
         subCategory: 'Flavoured Milk',
         childItems: [
           { subId: '22187', childId: '22189', extensionCategory: 'Drinking Chocolate', url: 'https:www.coles.com.au/browse/drinks/flavoured-milk/drinking-chocolate' },
           { subId: '22187', childId: '22190', extensionCategory: 'Drinks & Powders', url: 'https:www.coles.com.au/browse/drinks/flavoured-milk/drinks-powders' },
           { subId: '22187', childId: '22192', extensionCategory: 'Kids Milk', url: 'https:www.coles.com.au/browse/drinks/flavoured-milk/kids-milk' },
            ],
       },
       {
         subCategory: 'Iced Tea',
         childItems: [
           { subId: '22176', childId: '22180', extensionCategory: 'Single & Multi Serve', url: 'https:www.coles.com.au/browse/drinks/iced-tea/single-multi-serve' },
            ],
       },
       {
         subCategory: 'Juice',
         childItems: [
           { subId: '22176', childId: '22181', extensionCategory: 'Canned Juices', url: 'https:www.coles.com.au/browse/drinks/juice/canned-juices' },
           { subId: '22176', childId: '22181', extensionCategory: 'Chilled Juice', url: 'https:www.coles.com.au/browse/drinks/juice/chilled-juice' },
           { subId: '22176', childId: '22177', extensionCategory: 'Chilled Juice', url: 'https:www.coles.com.au/browse/drinks/juice/chilled-juice' },
           { subId: '22176', childId: '22181', extensionCategory: 'Glass Juice Bottles', url: 'http:coles.com.au/browse/drinks/juice/glass-juice-bottles' },
           { subId: '22176', childId: '22181', extensionCategory: 'Multi Pack Juice', url: 'https:www.coles.com.au/browse/drinks/juice/multi-pack-juice' },
           { subId: '22176', childId: '22181', extensionCategory: 'Packs & Pouches', url: 'https:www.coles.com.au/browse/drinks/juice/packs-pouches' },
           { subId: '22176', childId: '22182', extensionCategory: 'Packs & Pouches', url: 'https:www.coles.com.au/browse/drinks/juice/packs-pouches' },
           { subId: '22176', childId: '22181', extensionCategory: 'Plastic Juice Bottles', url: 'https:www.coles.com.au/browse/drinks/juice/plastic-juice-bottles' },
            ],
       },
       {
         subCategory: 'Long-Life Milk',
         childItems: [
           { subId: '22199', childId: '22839', extensionCategory: 'Almond & Other Nut Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/almond-other-nut-milk' },
           { catId: '22089', subId: '22132', childId: '23985', extensionCategory: 'Lactose Free Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/lactose-free-milk' },
           { subId: '22199', childId: '23841', extensionCategory: 'Lactose Free Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/lactose-free-milk' },
           { subId: '', childId: '', extensionCategory: 'Long Life Flavoured Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/long-life-flavoured-milk' },
           { subId: '', childId: '', extensionCategory: 'Long Life Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/long-life-milk' },
           { subId: '22199', childId: '23843', extensionCategory: 'Oat Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/oat-milk' },
           { subId: '22199', childId: '23840', extensionCategory: 'Powdered Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/powdered-milk' },
           { subId: '22199', childId: '23842', extensionCategory: 'Soy Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/soy-milk' },
            ],
       },
       {
         subCategory: 'Non-Alcoholic',
         childItems: [
           { subId: '22213', childId: '22214', extensionCategory: 'Non-Alcoholic Drinks', url: 'https:www.coles.com.au/browse/drinks/non-alcoholic/non-alcoholic-drinks' },
            ],
       },
       {
         subCategory: 'Soft Drinks',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Kombucha & Other Drinks', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/kombucha-other-drinks' },
           { subId: '22216', childId: '22217', extensionCategory: 'Mixers', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/mixers' },
           { subId: '22216', childId: '22218', extensionCategory: 'Soft Drink Bottles', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/soft-drink-bottles' },
           { subId: '22216', childId: '22219', extensionCategory: 'Soft Drink Cans', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/soft-drink-cans' },
            ],
       },
       {
         subCategory: 'Sports Drinks',
         childItems: [
           { subId: '22221', childId: '22223', extensionCategory: 'All Iced Tea', url: 'https:www.coles.com.au/browse/drinks/sports-drinks/all-iced-tea' },
           { subId: '22221', childId: '22223', extensionCategory: 'Sport Drink Powders', url: 'https:www.coles.com.au/browse/drinks/sports-drinks/sport-drink-powders' },
           { subId: '22221', childId: '22223', extensionCategory: 'Sports Drink', url: 'https:www.coles.com.au/browse/drinks/sports-drinks/sports-drink' },
            ],
       },
       {
         subCategory: 'Tea Drinks',
         childItems: [
           { subId: '22225', childId: '23944', extensionCategory: 'Tea Black', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-black' },
           { catId: '22164', subId: '22187', childId: '22188', extensionCategory: 'Tea Bubble', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-bubble' },
           { subId: '', childId: '', extensionCategory: 'Tea Bubble', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-bubble' },
           { subId: '', childId: '', extensionCategory: 'Tea Chai', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-chai' },
           { subId: '22225', childId: '23946', extensionCategory: 'Tea Green', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-green' },
           { subId: '22225', childId: '22228', extensionCategory: 'Tea Herbal', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-herbal' },
           { subId: '', childId: '', extensionCategory: 'Tea Loose Leaf', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-loose-leaf' },
           { subId: '', childId: '', extensionCategory: 'Tea Organic', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-organic' },
            ],
       },
       {
         subCategory: 'Water',
         childItems: [
           { subId: '22230', childId: '22231', extensionCategory: 'Flavoured Water', url: 'https:www.coles.com.au/browse/drinks/water/flavoured-water' },
           { subId: '', childId: '', extensionCategory: 'Mineral Water', url: 'https:www.coles.com.au/browse/drinks/water/mineral-water' },
           { subId: '22230', childId: '22232', extensionCategory: 'Sparkling Water', url: 'https:www.coles.com.au/browse/drinks/water/sparkling-water' },
           { subId: '22230', childId: '22233', extensionCategory: 'Still Water', url: 'https:www.coles.com.au/browse/drinks/water/still-water' },
            ],
       },
     ],
   },
   {
     category: 'Frozen',
     id: '22280',
     subCategories: [
       {
         subCategory: 'Ice Cream',
         childItems: [
           { subId: '22334', childId: '23848', extensionCategory: 'Frozen Yoghurt', url: 'https:www.coles.com.au/browse/frozen/ice-cream/frozen-yoghurt' },
           { subId: '22334', childId: '22337', extensionCategory: 'Ice Cream Desserts', url: 'https:www.coles.com.au/browse/frozen/ice-cream/ice-cream-desserts' },
           { subId: '22334', childId: '22339', extensionCategory: 'Ice Cream Sticks', url: 'https:www.coles.com.au/browse/frozen/ice-cream/ice-cream-sticks' },
           { subId: '22334', childId: '22340', extensionCategory: 'Ice Cream Tubs', url: 'https:www.coles.com.au/browse/frozen/ice-cream/ice-cream-tubs' },
           { subId: '22334', childId: '22341', extensionCategory: 'Premium Ice Cream', url: 'https:www.coles.com.au/browse/frozen/ice-cream/premium-ice-cream' },
           { subId: '22334', childId: '22336', extensionCategory: 'Sorbet & Gelato', url: 'https:www.coles.com.au/browse/frozen/ice-cream/sorbet-gelato' },
           ],
       },
       {
         subCategory: 'Frozen Baby & Toddler Meals',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'All Baby & Toddler Meals', url: 'https:www.coles.com.au/browse/frozen/frozen-baby-toddler-meals/all-baby-toddler-meals' },
           ],
       },
       {
         subCategory: 'Frozen Chicken, Beef & Pork',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Beef & Pork', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/beef-pork' },
           { subId: '', childId: '', extensionCategory: 'Burgers', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/burgers' },
           { subId: '22305', childId: '22307', extensionCategory: 'Chicken Pieces & Nuggets', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/chicken-pieces-nuggets' },
           { subId: '22305', childId: '22310', extensionCategory: 'Chicken Wing & Nibbles', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/chicken-wing-nibbles' },
           { subId: '', childId: '', extensionCategory: 'Frozen Turkey', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/frozen-turkey' },
           ],
       },
       {
         subCategory: 'Frozen Chips & Wedges',
         childItems: [
           { subId: '22281', childId: '22282', extensionCategory: 'Chips', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/chips' },
           { subId: '22281', childId: '22284', extensionCategory: 'Hashbrowns', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/hashbrowns' },
           { subId: '', childId: '', extensionCategory: 'Oven Roasted', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/oven-roasted' },
           { subId: '22281', childId: '22285', extensionCategory: 'Wedges', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/wedges' },
           ],
       },
       {
         subCategory: 'Frozen Desserts',
         childItems: [
           { subId: '22287', childId: '22288', extensionCategory: 'Assorted Desserts', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/assorted-desserts' },
           { subId: '22287', childId: '22289', extensionCategory: 'Cakes & Cheesecakes', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/cakes-cheesecakes' },
           { subId: '22287', childId: '22290', extensionCategory: 'Dessert Pies', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/dessert-pies' },
           { subId: '22287', childId: '22289', extensionCategory: 'Ice Cream Cakes', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/ice-cream-cakes' },
           { subId: '22287', childId: '22292', extensionCategory: 'Pastries & Puddings', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/pastries-puddings' },
           ],
       },
       {
         subCategory: 'Frozen Fish & Seafood',
         childItems: [
           { subId: '22322', childId: '22323', extensionCategory: 'Fish Fillets', url: 'https:www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fillets' },
           { subId: '22322', childId: '22324', extensionCategory: 'Fish Fingers & Cakes', url: 'https:www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fingers-cakes' },
           { subId: '22322', childId: '22325', extensionCategory: 'Seafood Frozen', url: 'https:www.coles.com.au/browse/frozen/frozen-fish-seafood/seafood-frozen' },
           ],
       },
       {
         subCategory: 'Frozen Fruit',
         childItems: [
           { subId: '22293', childId: '22294', extensionCategory: 'Berries', url: 'https:www.coles.com.au/browse/frozen/frozen-fruit/berries' },
           { subId: '22293', childId: '22294', extensionCategory: 'Tropical', url: 'https:www.coles.com.au/browse/frozen/frozen-fruit/tropical' },
           ],
       },
       {
         subCategory: 'Frozen Gluten Free',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'All Gluten Free', url: 'https:www.coles.com.au/browse/frozen/frozen-gluten-free/all-gluten-free' },
           ],
       },
       {
         subCategory: 'Frozen Meals',
         childItems: [
           { subId: '22299', childId: '22300', extensionCategory: 'Convenience Meals', url: 'https:www.coles.com.au/browse/frozen/frozen-meals/convenience-meals' },
           { subId: '22299', childId: '23989', extensionCategory: 'Convenience Meals', url: 'https:www.coles.com.au/browse/frozen/frozen-meals/convenience-meals' },
           ],
       },
       {
         subCategory: 'Frozen Pastry & Party Food',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Asian Party Food', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/asian-party-food' },
           { subId: '22311', childId: '22312', extensionCategory: 'Party Food', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/party-food' },
           { subId: '22311', childId: '22315', extensionCategory: 'Pastries', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastries' },
           { subId: '22311', childId: '22314', extensionCategory: 'Pastry Sheets', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastry-sheets' },
           { subId: '22311', childId: '22315', extensionCategory: 'Pies & Quiches', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/pies-quiches' },
           { subId: '22316', childId: '22318', extensionCategory: 'Pies & Quiches', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/pies-quiches' },
           ],
       },
       {
         subCategory: 'Frozen Pizza & Bases',
         childItems: [
           { subId: '22319', childId: '22321', extensionCategory: 'Pizza Snacks', url: 'https:www.coles.com.au/browse/frozen/frozen-pizza-bases/pizza-snacks' },
           { subId: '22319', childId: '22321', extensionCategory: 'Pizzas', url: 'https:www.coles.com.au/browse/frozen/frozen-pizza-bases/pizzas' },
           ],
       },
       {
         subCategory: 'Frozen Vegan & Vegetarian',
         childItems: [
           { subId: '22299', childId: '22304', extensionCategory: 'All Plant Based', url: 'https:www.coles.com.au/browse/frozen/frozen-vegan-vegetarian/all-plant-based' },
           ],
       },
       {
         subCategory: 'Frozen Vegetables',
         childItems: [
           { subId: '22327', childId: '22328', extensionCategory: 'Beans', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/beans' },
           { subId: '22327', childId: '22328', extensionCategory: 'Corn', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/corn' },
           { subId: '22327', childId: '22331', extensionCategory: 'Mixed Vegetables', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/mixed-vegetables' },
           { subId: '22327', childId: '22332', extensionCategory: 'Other Vegetables', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/other-vegetables' },
           { subId: '', childId: '', extensionCategory: 'Oven Roast Potato', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/oven-roast-potato' },
           { subId: '', childId: '', extensionCategory: 'Peas', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/peas' },
           { subId: '22327', childId: '22333', extensionCategory: 'Steaming', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/steaming' },
           { subId: '', childId: '', extensionCategory: 'Stir Fry', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/stir-fry' },
           ],
       },
       {
         subCategory: 'Frozen World Food',
         childItems: [
           { subId: '22299', childId: '23292', extensionCategory: 'Frozen Asian Foods', url: 'https:www.coles.com.au/browse/frozen/frozen-world-food/frozen-asian-foods' },
           { subId: '', childId: '', extensionCategory: 'Frozen Indian Foods', url: 'https:www.coles.com.au/browse/frozen/frozen-world-food/frozen-indian-foods' },
           ],
       },
     ],
   },
   {
     category: 'Fruit & Vegetables',
     id: "22351",
     subCategories: [
       {
         subCategory: 'Fruit',
         childItems: [
           { subId: '22351', childId: '22353', extensionCategory: 'Apples', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/apples' },
           { subId: '22379', childId: '22380', extensionCategory: 'Avocados', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/avocados' },
           { subId: '22351', childId: '22354', extensionCategory: 'Bananas', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/bananas' },
           { subId: '22351', childId: '22355', extensionCategory: 'Berries & Cherries', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/berries-cherries' },
           { subId: '', childId: '', extensionCategory: 'Coconuts', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/coconuts' },
           { subId: '22351', childId: '22357', extensionCategory: 'Cut Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/cut-fruit' },
           { subId: '22352', childId: '22356', extensionCategory: 'Grapefruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/grapefruit' },
           { subId: '22351', childId: '22358', extensionCategory: 'Grapes', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/grapes' },
           { subId: '22351', childId: '22362', extensionCategory: 'Kiwi Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/kiwi-fruit' },
           { subId: '22352', childId: '22356', extensionCategory: 'Lemons & Limes', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/lemons-limes' },
           { subId: '22352', childId: '22356', extensionCategory: 'Mandarins', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/mandarins' },
           { subId: '22351', childId: '22359', extensionCategory: 'Mangoes', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/mangoes' },
           { subId: '22351', childId: '22359', extensionCategory: 'Melons', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/melons' },
           { subId: '22352', childId: '22356', extensionCategory: 'Oranges', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/oranges' },
           { subId: '', childId: '', extensionCategory: 'Organic Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/organic-fruit' },
           { subId: '', childId: '', extensionCategory: 'Passionfruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/passionfruit' },
           { subId: '', childId: '', extensionCategory: 'Peaches & Nectarines', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/peaches-nectarines' },
           { subId: '22351', childId: '22353', extensionCategory: 'Pears', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/pears' },
           { subId: '22351', childId: '22362', extensionCategory: 'Pineapples', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/pineapples' },
           { subId: '', childId: '', extensionCategory: 'Plums & Apricots', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/plums-apricots' },
           { subId: '22351', childId: '22364', extensionCategory: 'Tropical & Exotic Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/tropical-exotic-fruit' },
          ],
       },
       {
         subCategory: 'Vegetables',
         childItems: [
           { subId: '22379', childId: '22388', extensionCategory: 'Asparagus, Fennel & Artichokes', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/asparagus-fennel-artichokes' },
           { subId: '', childId: '', extensionCategory: 'Beetroot', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/beetroot' },
           { subId: '22379', childId: '22391', extensionCategory: 'Bok Choy & Asian Greens', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/bok-choy-asian-greens' },
           { subId: '22379', childId: '22381', extensionCategory: 'Broccoli & Cauliflower', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/broccoli-cauliflower' },
           { subId: '22379', childId: '22381', extensionCategory: 'Cabbage, Kale & Brussel Sprouts', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/cabbage-kale-brussel-sprouts' },
           { subId: '22379', childId: '22382', extensionCategory: 'Capsicum & Chillies', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/capsicum-chillies' },
           { subId: '22379', childId: '22383', extensionCategory: 'Carrots & Parsnips', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/carrots-parsnips' },
           { subId: '', childId: '', extensionCategory: 'Celery', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/celery' },
           { subId: '22379', childId: '22388', extensionCategory: 'Corn', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/corn' },
           { subId: '22379', childId: '22384', extensionCategory: 'Cucumber', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/cucumber' },
           { subId: '22379', childId: '22393', extensionCategory: 'Eggplant', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/eggplant' },
           { subId: '22379', childId: '22385', extensionCategory: 'Garlic & Ginger', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/garlic-ginger' },
           { subId: '', childId: '', extensionCategory: 'Lettuce', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/lettuce' },
           { subId: '', childId: '', extensionCategory: 'Mashed & Cut Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/mashed-cut-vegetables' },
           { subId: '22379', childId: '22382', extensionCategory: 'Mushrooms', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/mushrooms' },
           { subId: '22379', childId: '22386', extensionCategory: 'Onion & Leeks', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/onion-leeks' },
           { subId: '', childId: '', extensionCategory: 'Organic Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/organic-vegetables' },
           { subId: '22379', childId: '22388', extensionCategory: 'Peas, Beans & Okra', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/peas-beans-okra' },
           { subId: '22379', childId: '22389', extensionCategory: 'Potatoes', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/potatoes' },
           { subId: '22379', childId: '22389', extensionCategory: 'Pumpkin', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/pumpkin' },
           { subId: '22379', childId: '22391', extensionCategory: 'Spinach & Silverbeet', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/spinach-silverbeet' },
           { subId: '22379', childId: '22392', extensionCategory: 'Tomatoes', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/tomatoes' },
           { subId: '22379', childId: '22383', extensionCategory: 'Turnips & Root Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/turnips-root-vegetables' },
           { subId: '22379', childId: '22393', extensionCategory: 'Zucchini & Squash', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/zucchini-squash' },
          ],
       },
       {
         subCategory: 'Nuts & Dried Fruit',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Almonds', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/almonds' },
           { subId: '', childId: '', extensionCategory: 'Cashews', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/cashews' },
           { subId: '', childId: '', extensionCategory: 'Dates', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/dates' },
           { subId: '', childId: '', extensionCategory: 'Dried Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/dried-fruit' },
           { subId: '', childId: '', extensionCategory: 'Mixed Fruit & Nuts', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/mixed-fruit-nuts' },
           { subId: '', childId: '', extensionCategory: 'Other Nuts', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/other-nuts' },
           { subId: '', childId: '', extensionCategory: 'Peanuts', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/peanuts' },
           { subId: '', childId: '', extensionCategory: 'Pistachio', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/pistachio' },
           { subId: '', childId: '', extensionCategory: 'Pretzels & Party Mixes', url: 'https:www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit/pretzels-party-mixes' },
          ],
       },
       {
         subCategory: 'Organic Fruits & Vegetables',
         childItems: [
           { subId: '22368', childId: '22369', extensionCategory: 'Organic Fruits', url: 'https:www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-fruits' },
           { subId: '22368', childId: '23987', extensionCategory: 'Organic Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-vegetables' },
          ],
       },
       {
         subCategory: 'Packaged Salad',
         childItems: [
           { subId: '22368', childId: '22370', extensionCategory: 'Lettuce & Mixed Leaf', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/lettuce-mixed-leaf' },
           { subId: '22372', childId: '22374', extensionCategory: 'Lettuce & Mixed Leaf', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/lettuce-mixed-leaf' },
           { subId: '22372', childId: '22376', extensionCategory: 'Lettuce & Mixed Leaf', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/lettuce-mixed-leaf' },
           { subId: '', childId: '', extensionCategory: 'Lettuce & Mixed Leaf', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/lettuce-mixed-leaf' },
           { subId: '', childId: '', extensionCategory: 'Salad Bowls', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/salad-bowls' },
           { subId: '22372', childId: '22375', extensionCategory: 'Salads Dressed', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/salads-dressed' },
           { subId: '', childId: '', extensionCategory: 'Sauces & Salad Dressing', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/sauces-salad-dressing' },
           { subId: '', childId: '', extensionCategory: 'Slaws & Salad Kits', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/slaws-salad-kits' },
          ],
       },
       {
         subCategory: 'Prepared Vegetable',
         childItems: [
           { subId: '22379', childId: '22390', extensionCategory: 'Airfryer', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/airfryer' },
           { subId: '22379', childId: '22390', extensionCategory: 'Carb Clever Veggies', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/carb-clever-veggies' },
           { subId: '22379', childId: '22390', extensionCategory: 'Ready to Steam & Roast', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/ready-to-steam-roast' },
           { subId: '22379', childId: '22390', extensionCategory: 'Stir-Fry Veggie & Sauce', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/stir-fry-veggie-sauce' },
           { subId: '22379', childId: '22390', extensionCategory: 'Trimmed & Cut Veggies', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/trimmed-cut-veggies' },
          ],
       },
       {
         subCategory: 'Salad & Herbs',
         childItems: [
           { subId: '22372', childId: '22373', extensionCategory: 'Herbs', url: 'https:www.coles.com.au/browse/fruit-vegetables/salad-herbs/herbs' },
           { subId: '22372', childId: '22378', extensionCategory: 'Sprouts', url: 'https:www.coles.com.au/browse/fruit-vegetables/salad-herbs/sprouts' },
          ],
       },
       {
         subCategory: 'Scoop & Weigh',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Almond', url: 'https:www.coles.com.au/browse/fruit-vegetables/scoop-weigh/almond' },
           { subId: '', childId: '', extensionCategory: 'Cashew', url: 'https:www.coles.com.au/browse/fruit-vegetables/scoop-weigh/cashew' },
           { subId: '', childId: '', extensionCategory: 'Dry Fruits', url: 'https:www.coles.com.au/browse/fruit-vegetables/scoop-weigh/dry-fruits' },
           { subId: '', childId: '', extensionCategory: 'Macadamia, Hazelnuts & Pecans', url: 'https:www.coles.com.au/browse/fruit-vegetables/scoop-weigh/macadamia-hazelnuts-pecans' },
           { subId: '', childId: '', extensionCategory: 'Mixed Scoop & Weigh', url: 'https:www.coles.com.au/browse/fruit-vegetables/scoop-weigh/mixed-scoop-weigh' },
           { subId: '', childId: '', extensionCategory: 'Other Scoop & Weigh', url: 'https:www.coles.com.au/browse/fruit-vegetables/scoop-weigh/other-scoop-weigh' },
           { subId: '', childId: '', extensionCategory: 'Walnuts, Pistachio & Peanut', url: 'https:www.coles.com.au/browse/fruit-vegetables/scoop-weigh/walnuts-pistachio-peanut' },
          ],
       },
     ],
   },
   {
     category: 'Health & Beauty',
     id: "22394",
     subCategories: [
       {
         subCategory: 'Continence Care',
         childItems: [
           { subId: '22440', childId: '23922', extensionCategory: 'Continence Pads', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/continence-pads' },
           { subId: '22440', childId: '23922', extensionCategory: 'Female Washable Underwear', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/female-washable-underwear' },
           { subId: '22440', childId: '23922', extensionCategory: 'Liners', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/liners' },
           { subId: '22440', childId: '23922', extensionCategory: 'Male Pads', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/male-pads' },
           { subId: '22440', childId: '23922', extensionCategory: 'Male Pants', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/male-pants' },
           { subId: '22440', childId: '23922', extensionCategory: 'Male Washable Underwear', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/male-washable-underwear' },
           { subId: '22440', childId: '23922', extensionCategory: 'Mens Pouches & Shields', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/mens-pouches-shields' },
           { subId: '22440', childId: '23922', extensionCategory: 'Pants', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/pants' },
         ],
       },
       {
         subCategory: 'Cosmetics',
         childItems: [
           { subId: '22400', childId: '23853', extensionCategory: 'Blush', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/blush' },
           { subId: '22400', childId: '23853', extensionCategory: 'Brows', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/brows' },
           { subId: '22400', childId: '23853', extensionCategory: 'Brushes and Tools', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/brushes-and-tools' },
           { subId: '22400', childId: '23853', extensionCategory: 'Concealer & Foundation', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/concealer-foundation' },
           { subId: '22400', childId: '23851', extensionCategory: 'Eye Liner, Eye Shadow & Mascara', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/eye-liner-eye-shadow-mascara' },
           { subId: '22400', childId: '23851', extensionCategory: 'Lashes', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/lashes' },
           { subId: '22400', childId: '22402', extensionCategory: 'Lips', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/lips' },
           { subId: '22400', childId: '22403', extensionCategory: 'Nails', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/nails' },
         ],
       },
       {
         subCategory: 'Dental Care',
         childItems: [
           { subId: '22404', childId: '23817', extensionCategory: 'Dental Floss & Tape', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/dental-floss-tape' },
           { subId: '22404', childId: '23854', extensionCategory: 'Dental Whitening', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/dental-whitening' },
           { subId: '22404', childId: '22406', extensionCategory: 'Denture Care', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/denture-care' },
           { subId: '22404', childId: '23818', extensionCategory: 'Electric Toothbushes and Refills', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/electric-toothbushes-and-refills' },
           { subId: '', childId: '', extensionCategory: 'Kids Dental', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/kids-dental' },
           { subId: '22404', childId: '23817', extensionCategory: 'Mouthwash', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/mouthwash' },
           { subId: '22404', childId: '23855', extensionCategory: 'Sensitive Toothpaste', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/sensitive-toothpaste' },
           { subId: '22404', childId: '23818', extensionCategory: 'Toothbrushes', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/toothbrushes' },
           { subId: '22404', childId: '23855', extensionCategory: 'Toothpaste', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/toothpaste' },
         ],
       },
       {
         subCategory: 'First Aid & Medicinal',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Antacid & Indigestion', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/antacid-indigestion' },
           { subId: '22414', childId: '22415', extensionCategory: 'Antiseptic', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/antiseptic' },
           { subId: '22414', childId: '22416', extensionCategory: 'Bandages & Strapping', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/bandages-strapping' },
           { subId: '22414', childId: '22416', extensionCategory: 'Bandaids', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/bandaids' },
           { subId: '22414', childId: '22417', extensionCategory: 'Cold, Flu and Allergy', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/cold-flu-and-allergy' },
           { subId: '22414', childId: '22418', extensionCategory: 'Cotton Wool & Cotton Buds', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/cotton-wool-cotton-buds' },
           { subId: '', childId: '', extensionCategory: 'Eye & Ear Care', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/eye-ear-care' },
           { subId: '22414', childId: '23917', extensionCategory: 'Masks & Tests', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/masks-tests' },
           { subId: '23883', childId: '23888', extensionCategory: 'Masks & Tests', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/masks-tests' },
           { subId: '22414', childId: '22421', extensionCategory: 'Medicinal Oils & Ointments', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/medicinal-oils-ointments' },
           { subId: '', childId: '', extensionCategory: 'Other First Aid & Medicinal', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/other-first-aid-medicinal' },
           { subId: '', childId: '', extensionCategory: 'Pain Relief', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/pain-relief' },
           { subId: '22414', childId: '22422', extensionCategory: 'Quit Smoking', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/quit-smoking' },
         ],
       },
       {
         subCategory: 'Hair Care',
         childItems: [
           { subId: '22423', childId: '23903', extensionCategory: 'Colouring', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/colouring' },
           { subId: '', childId: '', extensionCategory: 'Dandruff', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/dandruff' },
           { subId: '', childId: '', extensionCategory: 'Dry Shampoo', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/dry-shampoo' },
           { subId: '22423', childId: '23905', extensionCategory: 'Gel, Mousse & Styling', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/gel-mousse-styling' },
           { subId: '', childId: '', extensionCategory: 'Hair Brushes, Combs & Accessories', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/hair-brushes-combs-accessories' },
           { subId: '', childId: '', extensionCategory: 'Kids Hair Care', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/kids-hair-care' },
           { subId: '', childId: '', extensionCategory: 'Lice Treatment', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/lice-treatment' },
           { subId: '22423', childId: '23924', extensionCategory: 'Mens Hair Care', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/mens-hair-care' },
           { subId: '22423', childId: '23904', extensionCategory: 'Shampoo & Conditioner', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/shampoo-conditioner' },
           { subId: '', childId: '', extensionCategory: 'Treatments', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/treatments' },
         ],
       },
       {
         subCategory: 'Period Care',
         childItems: [
           { subId: '23908', childId: '', extensionCategory: 'Accessories', url: 'https:www.coles.com.au/browse/health-beauty/period-care/accessories' },
           { subId: '23908', childId: '', extensionCategory: 'Liners', url: 'https:www.coles.com.au/browse/health-beauty/period-care/liners' },
           { subId: '23908', childId: '', extensionCategory: 'Pads', url: 'https:www.coles.com.au/browse/health-beauty/period-care/pads' },
           { subId: '23908', childId: '', extensionCategory: 'Reusables', url: 'https:www.coles.com.au/browse/health-beauty/period-care/reusables' },
           { subId: '23908', childId: '', extensionCategory: 'Tampons', url: 'https:www.coles.com.au/browse/health-beauty/period-care/tampons' },
         ],
       },
       // not scraped
       {
         subCategory: 'Personal Care',
         childItems: [
           { catId: '22015', subId: '24060', childId: '', extensionCategory: 'Pregnancy Tests', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/pregnancy-tests' },
           { catId: '22015', subId: '24060', childId: '', extensionCategory: 'Sexual Health', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/sexual-health' },
           
           { subId: '22440', childId: '23893', extensionCategory: 'Footcare', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/footcare' },
           { subId: '22440', childId: '23921', extensionCategory: 'Mens Deodorants', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/mens-deodorants' },
           { subId: '22440', childId: '23895', extensionCategory: 'Pregnancy Tests', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/pregnancy-tests' },
           { subId: '22440', childId: '23894', extensionCategory: 'Sexual Health', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/sexual-health' },
           { subId: '22440', childId: '23920', extensionCategory: 'Womens Deodorants', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/womens-deodorants' },
         ],
       },
       {
         subCategory: 'Shaving & Hair Removal',
         childItems: [
           { subId: '23864', childId: '23898', extensionCategory: 'After Shave Care', url: 'https:www.coles.com.au/browse/health-beauty/shaving-hair-removal/after-shave-care' },
           { subId: '', childId: '', extensionCategory: 'Razors & Blades', url: 'https:www.coles.com.au/browse/health-beauty/shaving-hair-removal/razors-blades' },
           { subId: '23864', childId: '23901', extensionCategory: 'Shave Gel & Foam', url: 'https:www.coles.com.au/browse/health-beauty/shaving-hair-removal/shave-gel-foam' },
           { subId: '', childId: '', extensionCategory: 'Wax, Cream & Bleach', url: 'https:www.coles.com.au/browse/health-beauty/shaving-hair-removal/wax-cream-bleach' },
         ],
       },
       {
         subCategory: 'Shower & Bath Care',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Bath Accessories', url: 'https:www.coles.com.au/browse/health-beauty/shower-bath-care/bath-accessories' },
           { subId: '', childId: '', extensionCategory: 'Body Lotion', url: 'https:www.coles.com.au/browse/health-beauty/shower-bath-care/body-lotion' },
           { subId: '', childId: '', extensionCategory: 'Body Wash', url: 'https:www.coles.com.au/browse/health-beauty/shower-bath-care/body-wash' },
           { subId: '', childId: '', extensionCategory: 'Bubble Bath & Salts', url: 'https:www.coles.com.au/browse/health-beauty/shower-bath-care/bubble-bath-salts' },
           { subId: '', childId: '', extensionCategory: 'Hand Santiser', url: 'https:www.coles.com.au/browse/health-beauty/shower-bath-care/hand-santiser' },
           { subId: '', childId: '', extensionCategory: 'Mens Body Wash', url: 'https:www.coles.com.au/browse/health-beauty/shower-bath-care/mens-body-wash' },
           { subId: '', childId: '', extensionCategory: 'Soap & Hand Wash', url: 'https:www.coles.com.au/browse/health-beauty/shower-bath-care/soap-hand-wash' },
         ],
       },
       {
         subCategory: 'Skin Care',
         childItems: [
           { subId: '23883', childId: '23885', extensionCategory: 'Body Moisturiser', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/body-moisturiser' },
           { subId: '23883', childId: '23887', extensionCategory: 'Cleansers & Skincare Wipes', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/cleansers-skincare-wipes' },
           { subId: '23883', childId: '23886', extensionCategory: 'Face Moisturiser', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/face-moisturiser' },
           { subId: '23883', childId: '23889', extensionCategory: 'Hand Moisturiser', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/hand-moisturiser' },
           { subId: '23883', childId: '23890', extensionCategory: 'Lip Care', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/lip-care' },
           { subId: '', childId: '', extensionCategory: 'Mens Skin', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/mens-skin' },
           { subId: '23883', childId: '23891', extensionCategory: 'Self-Tanning', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/self-tanning' },
         ],
       },
       {
         subCategory: 'Sun Protection',
         childItems: [
           { subId: '23883', childId: '23892', extensionCategory: 'After Sun', url: 'https:www.coles.com.au/browse/health-beauty/sun-protection/after-sun' },
           { subId: '23883', childId: '23892', extensionCategory: 'Sun Care', url: 'https:www.coles.com.au/browse/health-beauty/sun-protection/sun-care' },
         ],
       },
       {
         subCategory: 'Travel Packs and Minis',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Travel Packs and Accessories', url: 'https:www.coles.com.au/browse/health-beauty/travel-packs-and-minis/travel-packs-and-accessories' },
         ],
       },
       {
         subCategory: 'Vitamins & Supplements',
         childItems: [
           { subId: '22450', childId: '23916', extensionCategory: 'Bone and Joint Health', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/bone-and-joint-health' },
           { subId: '22450', childId: '23870', extensionCategory: 'Brain, Eye and Heart Health', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/brain-eye-and-heart-health' },
           { subId: '22450', childId: '23872', extensionCategory: 'Detox and Digestive Health', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/detox-and-digestive-health' },
           { subId: '22450', childId: '23916', extensionCategory: 'Energy Support', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/energy-support' },
           { subId: '22450', childId: '23916', extensionCategory: 'Essential Oils and Aroma Therapy', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/essential-oils-and-aroma-therapy' },
           { subId: '22450', childId: '23916', extensionCategory: 'Family Planning', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/family-planning' },
           { subId: '22450', childId: '23916', extensionCategory: 'Fish Oil', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/fish-oil' },
           { subId: '22450', childId: '22453', extensionCategory: 'Hair, Skin & Nails', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/hair-skin-nails' },
           { subId: '22450', childId: '23916', extensionCategory: 'Immune Support', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/immune-support' },
           { subId: '22450', childId: '23916', extensionCategory: 'Iron', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/iron' },
           { subId: '22450', childId: '23916', extensionCategory: `Kid's Health`, url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/kids-health' },
           { subId: '22450', childId: '23916', extensionCategory: 'Mens and Womens Multi Vitamins', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/mens-and-womens-multi-vitamins' },
           { subId: '22450', childId: '23916', extensionCategory: 'Other Vitamins', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/other-vitamins' },
         ],
       },
     ],
   },
  {
    category: 'Household',
    id: "22459",
    subCategories: [
      {
        subCategory: 'Air Fresheners & Home Fragrance',
        childItems: [
          { subId: '22475', childId: '22476', extensionCategory: 'All Airfreshners', url: 'https:www.coles.com.au/browse/household/air-fresheners-home-fragrance/all-airfreshners' },
        ],
      },
      {
        subCategory: 'Charity Donations',
        childItems: [
          { subId: '', childId: '', extensionCategory: 'Donations', url: 'https:www.coles.com.au/browse/household/charity-donations/donations' },
        ],
      },
      {
        subCategory: 'Cleaning Goods',
        childItems: [
          { subId: '22475', childId: '22477', extensionCategory: 'Bathroom Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/bathroom-cleaners' },
          { subId: '22475', childId: '22479', extensionCategory: 'Bleach', url: 'https:www.coles.com.au/browse/household/cleaning-goods/bleach' },
          { subId: '', childId: '', extensionCategory: 'Cleaning Accessories', url: 'https:www.coles.com.au/browse/household/cleaning-goods/cleaning-accessories' },
          { subId: '22475', childId: '22483', extensionCategory: 'Cleaning Gloves', url: 'https:www.coles.com.au/browse/household/cleaning-goods/cleaning-gloves' },
          { subId: '22475', childId: '22480', extensionCategory: 'Drain & Solvents', url: 'https:www.coles.com.au/browse/household/cleaning-goods/drain-solvents' },
          { subId: '22475', childId: '22481', extensionCategory: 'Fabric, Metal & Furniture', url: 'https:www.coles.com.au/browse/household/cleaning-goods/fabric-metal-furniture' },
          { subId: '22475', childId: '22482', extensionCategory: 'Floor & Carpet Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/floor-carpet-cleaners' },
          { subId: '22475', childId: '22484', extensionCategory: 'Kitchen Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/kitchen-cleaners' },
          { subId: '22475', childId: '22485', extensionCategory: 'Mops, Buckets & Brooms', url: 'https:www.coles.com.au/browse/household/cleaning-goods/mops-buckets-brooms' },
          { subId: '22475', childId: '22486', extensionCategory: 'Mould Killers & Disinfectants', url: 'https:www.coles.com.au/browse/household/cleaning-goods/mould-killers-disinfectants' },
          { subId: '22475', childId: '22487', extensionCategory: 'Multipurpose Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/multipurpose-cleaners' },
          { subId: '', childId: '', extensionCategory: 'Paper Towels, Sponges and Brushes', url: 'https:www.coles.com.au/browse/household/cleaning-goods/paper-towels-sponges-and-brushes' },
          { subId: '22475', childId: '22489', extensionCategory: 'Sponges, Cloths & Wipes', url: 'https:www.coles.com.au/browse/household/cleaning-goods/sponges-cloths-wipes' },
          { subId: '22462', childId: '22466', extensionCategory: 'Toilet Cleaning', url: 'https:www.coles.com.au/browse/household/cleaning-goods/toilet-cleaning' },
          { subId: '22475', childId: '22490', extensionCategory: 'Windows & Glass', url: 'https:www.coles.com.au/browse/household/cleaning-goods/windows-glass' },
        ],
      },
      {
        subCategory: 'Clothing & Accessories',
        childItems: [
          { catId: '22015', subId: '22016', childId: '22018', extensionCategory: 'Babywear', url: 'https:www.coles.com.au/browse/household/clothing-accessories/babywear' },
          { subId: '24061', childId: '24062', extensionCategory: `Children's Socks`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/childrens-socks' },
          { subId: '24061', childId: '24062', extensionCategory: `Men's Socks`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/mens-socks' },
          { subId: '24061', childId: '24064', extensionCategory: `Men's Underwear`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/mens-underwear' },
          { subId: '', childId: '', extensionCategory: 'Seasonal Accessories', url: 'https:www.coles.com.au/browse/household/clothing-accessories/seasonal-accessories' },
          { subId: '', childId: '', extensionCategory: 'Shoe Care and Footwear', url: 'https:www.coles.com.au/browse/household/clothing-accessories/shoe-care-and-footwear' },
          { subId: '24061', childId: '24061', extensionCategory: `Women's Hosiery`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/womens-hosiery' },
          { subId: '24061', childId: '24062', extensionCategory: `Women's Socks`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/womens-socks' },
          { subId: '24061', childId: '24064', extensionCategory: `Women's Underwear`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/womens-underwear' },
        ],
      },
      {
        subCategory: 'Craft, Toys & Games',
        childItems: [
          { subId: '22016', childId: '23823', extensionCategory: 'Baby Toys', url: 'https:www.coles.com.au/browse/household/craft-toys-games/baby-toys' },
          { subId: '', childId: '', extensionCategory: 'Games & Hobbies', url: 'https:www.coles.com.au/browse/household/craft-toys-games/games-hobbies' },
          { subId: '', childId: '', extensionCategory: 'Toys', url: 'https:www.coles.com.au/browse/household/craft-toys-games/toys' },
        ],
      },
      {
        subCategory: 'Dishwashing',
        childItems: [
          { subId: '22552', childId: '22555', extensionCategory: 'All Paper Towels', url: 'https:www.coles.com.au/browse/household/dishwashing/all-paper-towels' },
          { subId: '22552', childId: '22555', extensionCategory: 'Dishwasher Additives', url: 'https:www.coles.com.au/browse/household/dishwashing/dishwasher-additives' },
          { subId: '22552', childId: '22555', extensionCategory: 'Dishwasher Tablets, Powder & Gel', url: 'https:www.coles.com.au/browse/household/dishwashing/dishwasher-tablets-powder-gel' },
          { subId: '22552', childId: '22555', extensionCategory: 'Dishwashing Liquid', url: 'https:www.coles.com.au/browse/household/dishwashing/dishwashing-liquid' },
          { subId: '22552', childId: '23928', extensionCategory: 'Gloves', url: 'https:www.coles.com.au/browse/household/dishwashing/gloves' },
          { subId: '22552', childId: '22555', extensionCategory: 'Sponges & Scourers', url: 'https:www.coles.com.au/browse/household/dishwashing/sponges-scourers' },
        ],
      },
      {
        subCategory: 'Diy & Car',
        childItems: [
          { subId: '22530', childId: '22531', extensionCategory: 'Adhesives, Glues & Tapes', url: 'https:www.coles.com.au/browse/household/diy-car/adhesives-glues-tapes' },
          { subId: '', childId: '', extensionCategory: 'Car Care', url: 'https:www.coles.com.au/browse/household/diy-car/car-care' },
          { subId: '', childId: '', extensionCategory: 'Car Oil & Coolants', url: 'https:www.coles.com.au/browse/household/diy-car/car-oil-coolants' },
          { subId: '', childId: '', extensionCategory: 'Home Maintenance', url: 'https:www.coles.com.au/browse/household/diy-car/home-maintenance' },
          { subId: '22530', childId: '22534', extensionCategory: 'Hooks & Fasteners', url: 'https:www.coles.com.au/browse/household/diy-car/hooks-fasteners' },
          { subId: '', childId: '', extensionCategory: 'Security', url: 'https:www.coles.com.au/browse/household/diy-car/security' },
          { subId: '22530', childId: '22536', extensionCategory: 'Tools & Accessories', url: 'https:www.coles.com.au/browse/household/diy-car/tools-accessories' },
        ],
      },
       {
         subCategory: 'Electrical',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Batteries', url: 'https:www.coles.com.au/browse/household/electrical/batteries' },
           { subId: '', childId: '', extensionCategory: 'Extension Cords & Adapters', url: 'https:www.coles.com.au/browse/household/electrical/extension-cords-adapters' },
           { subId: '', childId: '', extensionCategory: 'Lighting', url: 'https:www.coles.com.au/browse/household/electrical/lighting' },
           { subId: '', childId: '', extensionCategory: 'Phone Accessories & Earphones', url: 'https:www.coles.com.au/browse/household/electrical/phone-accessories-earphones' },
           { subId: '', childId: '', extensionCategory: 'Torches', url: 'https:www.coles.com.au/browse/household/electrical/torches' },
         ],
       },
       {
         subCategory: 'Food Storage',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Containers & Tubs', url: 'https:www.coles.com.au/browse/household/food-storage/containers-tubs' },
           { subId: '', childId: '', extensionCategory: 'Freezer Bags & Sandwich', url: 'https:www.coles.com.au/browse/household/food-storage/freezer-bags-sandwich' },
           { subId: '', childId: '', extensionCategory: 'Plastic Wrap & Bags', url: 'https:www.coles.com.au/browse/household/food-storage/plastic-wrap-bags' },
         ],
       },
       {
         subCategory: 'Garden',
         childItems: [
           { subId: '22519', childId: '22525', extensionCategory: 'Gloves & Tools', url: 'https:www.coles.com.au/browse/household/garden/gloves-tools' },
           { subId: '22519', childId: '22526', extensionCategory: 'Insecticide & Weed Control', url: 'https:www.coles.com.au/browse/household/garden/insecticide-weed-control' },
           { subId: '22519', childId: '22527', extensionCategory: 'Lawncare & Plant Food', url: 'https:www.coles.com.au/browse/household/garden/lawncare-plant-food' },
           { subId: '22519', childId: '22528', extensionCategory: 'Potting Mix & Fertilizer', url: 'https:www.coles.com.au/browse/household/garden/potting-mix-fertilizer' },
           { subId: '22519', childId: '22529', extensionCategory: 'Seeds & Plants', url: 'https:www.coles.com.au/browse/household/garden/seeds-plants' },
           { subId: '22519', childId: '22523', extensionCategory: 'Watering', url: 'https:www.coles.com.au/browse/household/garden/watering' },
         ],
       },
       {
         subCategory: 'Homewares',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Appliances', url: 'https:www.coles.com.au/browse/household/homewares/appliances' },
           { subId: '', childId: '', extensionCategory: 'Cutlery & Servingware', url: 'https:www.coles.com.au/browse/household/homewares/cutlery-servingware' },
           { subId: '', childId: '', extensionCategory: 'Glassware', url: 'https:www.coles.com.au/browse/household/homewares/glassware' },
           { subId: '', childId: '', extensionCategory: 'Home Storage', url: 'https:www.coles.com.au/browse/household/homewares/home-storage' },
           { subId: '', childId: '', extensionCategory: 'Mugs & Cups', url: 'https:www.coles.com.au/browse/household/homewares/mugs-cups' },
           { subId: '', childId: '', extensionCategory: 'Plates & Bowls', url: 'https:www.coles.com.au/browse/household/homewares/plates-bowls' },
           { subId: '', childId: '', extensionCategory: 'Seasonal Decorations & Accessories', url: 'https:www.coles.com.au/browse/household/homewares/seasonal-decorations-accessories' },
           { subId: '', childId: '', extensionCategory: 'Sewing', url: 'https:www.coles.com.au/browse/household/homewares/sewing' },
           { subId: '', childId: '', extensionCategory: 'Tea Towels & Aprons', url: 'https:www.coles.com.au/browse/household/homewares/tea-towels-aprons' },
           { subId: '', childId: '', extensionCategory: 'Textiles & Accessories', url: 'https:www.coles.com.au/browse/household/homewares/textiles-accessories' },
           { subId: '22537', childId: '23979', extensionCategory: 'Water Filtration', url: 'https:www.coles.com.au/browse/household/homewares/water-filtration' },
         ],
       },
       {
         subCategory: 'Kitchen',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Baking Tins & Trays', url: 'https:www.coles.com.au/browse/household/kitchen/baking-tins-trays' },
           { subId: '22552', childId: '22553', extensionCategory: 'Foil, Baking Paper & Oven Bags', url: 'https:www.coles.com.au/browse/household/kitchen/foil-baking-paper-oven-bags' },
           { subId: '22552', childId: '22560', extensionCategory: 'Food Tubs & Containers', url: 'https:www.coles.com.au/browse/household/kitchen/food-tubs-containers' },
           { subId: '22552', childId: '22557', extensionCategory: 'Kitchen Tidy & Garbage Bags', url: 'https:www.coles.com.au/browse/household/kitchen/kitchen-tidy-garbage-bags' },
           { subId: '', childId: '', extensionCategory: 'Plastic Wraps & Bags', url: 'https:www.coles.com.au/browse/household/kitchen/plastic-wraps-bags' },
           { subId: '', childId: '', extensionCategory: 'Pots & Saucepans', url: 'https:www.coles.com.au/browse/household/kitchen/pots-saucepans' },
           { subId: '22552', childId: '22564', extensionCategory: 'Sandwich & Freezer Bags', url: 'https:www.coles.com.au/browse/household/kitchen/sandwich-freezer-bags' },
           { subId: '', childId: '', extensionCategory: 'Utensils & Gadgets', url: 'https:www.coles.com.au/browse/household/kitchen/utensils-gadgets' },
         ],
       },
       {
         subCategory: 'Laundry',
         childItems: [
           { subId: '22566', childId: '22567', extensionCategory: 'Fabric Softener', url: 'https:www.coles.com.au/browse/household/laundry/fabric-softener' },
           { subId: '22566', childId: '22568', extensionCategory: 'Ironing Aids', url: 'https:www.coles.com.au/browse/household/laundry/ironing-aids' },
           { subId: '', childId: '', extensionCategory: 'Laundry Accessories', url: 'https:www.coles.com.au/browse/household/laundry/laundry-accessories' },
           { subId: '22566', childId: '22569', extensionCategory: 'Laundry Liquid', url: 'https:www.coles.com.au/browse/household/laundry/laundry-liquid' },
           { subId: '22566', childId: '22570', extensionCategory: 'Laundry Powder', url: 'https:www.coles.com.au/browse/household/laundry/laundry-powder' },
           { subId: '22566', childId: '22572', extensionCategory: 'Pegs, Baskets & Hangers', url: 'https:www.coles.com.au/browse/household/laundry/pegs-baskets-hangers' },
           { subId: '22566', childId: '22573', extensionCategory: 'Stain Removal & Pre-Wash', url: 'https:www.coles.com.au/browse/household/laundry/stain-removal-pre-wash' },
         ],
       },
       {
         subCategory: 'Mobile & Tech Accessories',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Phones', url: 'https:www.coles.com.au/browse/household/mobile-tech-accessories/phones' },
         ],
       },
       {
         subCategory: 'Outdoors',
         childItems: [
           { subId: '22519', childId: '22520', extensionCategory: 'Automotive', url: 'https:www.coles.com.au/browse/household/outdoors/automotive' },
           { subId: '', childId: '', extensionCategory: 'Bbq', url: 'https:www.coles.com.au/browse/household/outdoors/bbq' },
           { subId: '', childId: '', extensionCategory: 'Camping & Fishing', url: 'https:www.coles.com.au/browse/household/outdoors/camping-fishing' },
           { subId: '', childId: '', extensionCategory: 'Matches & Lighters', url: 'https:www.coles.com.au/browse/household/outdoors/matches-lighters' },
         ],
       },
       {
         subCategory: 'Party Supplies',
         childItems: [
           { subId: '22579', childId: '22580', extensionCategory: 'Candles', url: 'https:www.coles.com.au/browse/household/party-supplies/candles' },
           { subId: '', childId: '', extensionCategory: 'Cups & Glasses', url: 'https:www.coles.com.au/browse/household/party-supplies/cups-glasses' },
           { subId: '22579', childId: '22581', extensionCategory: 'Decorations', url: 'https:www.coles.com.au/browse/household/party-supplies/decorations' },
           { subId: '', childId: '', extensionCategory: 'Disposable Plates & Bowls', url: 'https:www.coles.com.au/browse/household/party-supplies/disposable-plates-bowls' },
           { subId: '', childId: '', extensionCategory: 'Gift Wrap & Bags', url: 'https:www.coles.com.au/browse/household/party-supplies/gift-wrap-bags' },
           { subId: '', childId: '', extensionCategory: 'Paper & Plastic Cutlery', url: 'https:www.coles.com.au/browse/household/party-supplies/paper-plastic-cutlery' },
           { subId: '', childId: '', extensionCategory: 'Serviettes & Tablecloths', url: 'https:www.coles.com.au/browse/household/party-supplies/serviettes-tablecloths' },
         ],
       },
       {
         subCategory: 'Pest Control',
         childItems: [
           { subId: '22586', childId: '22587', extensionCategory: 'Crawling Insects', url: 'https:www.coles.com.au/browse/household/pest-control/crawling-insects' },
           { subId: '22586', childId: '22588', extensionCategory: 'Flying Insects', url: 'https:www.coles.com.au/browse/household/pest-control/flying-insects' },
           { subId: '22586', childId: '22589', extensionCategory: 'Garden Pests', url: 'https:www.coles.com.au/browse/household/pest-control/garden-pests' },
           { subId: '22586', childId: '22591', extensionCategory: 'Mosquitos', url: 'https:www.coles.com.au/browse/household/pest-control/mosquitos' },
           { subId: '22586', childId: '22593', extensionCategory: 'Rodents', url: 'https:www.coles.com.au/browse/household/pest-control/rodents' },
         ],
       },
       {
         subCategory: 'Reusable Shopping Bags',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Chiller Bags & Bags', url: 'https:www.coles.com.au/browse/household/reusable-shopping-bags/chiller-bags-bags' },
         ],
       },
       {
         subCategory: 'Sporting Essentials',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Sports Goods & Accessories', url: 'https:www.coles.com.au/browse/household/sporting-essentials/sports-goods-accessories' },
         ],
       },
       {
         subCategory: 'Stationery & Media',
         childItems: [
           { subId: '22594', childId: '', extensionCategory: 'Magazines', url: 'https:www.coles.com.au/browse/household/stationery-media/magazines' },
           { subId: '22594', childId: '', extensionCategory: 'Media', url: 'https:www.coles.com.au/browse/household/stationery-media/media' },
           { subId: '22594', childId: '', extensionCategory: 'Stationery', url: 'https:www.coles.com.au/browse/household/stationery-media/stationery' },
           { subId: '22594', childId: '', extensionCategory: 'Toys & Game', url: 'https:www.coles.com.au/browse/household/stationery-media/toys-game' },
         ],
       },
       {
         subCategory: 'Tech Accessories',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'All Accessories', url: 'https:www.coles.com.au/browse/household/tech-accessories/all-accessories' },
         ],
       },
       {
         subCategory: 'Toilet Paper, Tissues & Paper Towels',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Facial Tissues', url: 'https:www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/facial-tissues' },
           { subId: '', childId: '', extensionCategory: 'Flushable Wipes', url: 'https:www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/flushable-wipes' },
           { subId: '', childId: '', extensionCategory: 'Paper Towel', url: 'https:www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/paper-towel' },
           { subId: '', childId: '', extensionCategory: 'Toilet Tissues', url: 'https:www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels/toilet-tissues' },
         ],
       },
    ],
  },
   {
     category: 'Pantry',
     id: "22770",
     subCategories: [
       {
         subCategory: 'Baking',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Breadcrumbs & Stuffing', url: 'https:www.coles.com.au/browse/pantry/baking/breadcrumbs-stuffing' },
           { subId: '22771', childId: '22773', extensionCategory: 'Cake & Bread Mixes', url: 'https:www.coles.com.au/browse/pantry/baking/cake-bread-mixes' },
           { subId: '22771', childId: '22780', extensionCategory: 'Cake Decorating', url: 'https:www.coles.com.au/browse/pantry/baking/cake-decorating' },
           { subId: '22771', childId: '22775', extensionCategory: 'Cooking Chocolate & Cocoa', url: 'https:www.coles.com.au/browse/pantry/baking/cooking-chocolate-cocoa' },
           { subId: '22771', childId: '22776', extensionCategory: 'Dried Fruits & Fillings', url: 'https:www.coles.com.au/browse/pantry/baking/dried-fruits-fillings' },
           { subId: '22771', childId: '22777', extensionCategory: 'Essence & Food Colouring', url: 'https:www.coles.com.au/browse/pantry/baking/essence-food-colouring' },
           { subId: '22771', childId: '22778', extensionCategory: 'Flour', url: 'https:www.coles.com.au/browse/pantry/baking/flour' },
           { subId: '22771', childId: '22781', extensionCategory: 'Nuts for Baking', url: 'https:www.coles.com.au/browse/pantry/baking/nuts-for-baking' },
           { subId: '22771', childId: '22782', extensionCategory: 'Pancake & Dessert Mixes', url: 'https:www.coles.com.au/browse/pantry/baking/pancake-dessert-mixes' },
           { subId: '22771', childId: '22774', extensionCategory: 'Pancake & Dessert Mixes', url: 'https:www.coles.com.au/browse/pantry/baking/pancake-dessert-mixes' },
           { subId: '22771', childId: '22783', extensionCategory: 'Sugar & Sweeteners', url: 'https:www.coles.com.au/browse/pantry/baking/sugar-sweeteners' },
           { subId: '22771', childId: '22784', extensionCategory: 'Yeast & Baking Agents', url: 'https:www.coles.com.au/browse/pantry/baking/yeast-baking-agents' },
         ],
        },
        {
          subCategory: 'Breakfast',
          childItems: [
            { subId: '22785', childId: '22786', extensionCategory: 'Breakfast Cereal', url: 'https:www.coles.com.au/browse/pantry/breakfast/breakfast-cereal' },
            { subId: '22785', childId: '22791', extensionCategory: 'Breakfast Muesli', url: 'https:www.coles.com.au/browse/pantry/breakfast/breakfast-muesli' },
            { subId: '22785', childId: '22791', extensionCategory: 'Breakfast Oats', url: 'https:www.coles.com.au/browse/pantry/breakfast/breakfast-oats' },
            { subId: '22785', childId: '22786', extensionCategory: 'Family Favourites', url: 'https:www.coles.com.au/browse/pantry/breakfast/family-favourites' },
            { subId: '22785', childId: '22786', extensionCategory: 'Gluten Free Cereal', url: 'https:www.coles.com.au/browse/pantry/breakfast/gluten-free-cereal' },
            { subId: '22785', childId: '22786', extensionCategory: 'Healthier Start', url: 'https:www.coles.com.au/browse/pantry/breakfast/healthier-start' },
            { subId: '', childId: '', extensionCategory: 'On the Go', url: 'https:www.coles.com.au/browse/pantry/breakfast/on-the-go' },
          ],
        },
        {
          subCategory: 'Canned Food, Soups & Noodles',
          childItems: [
            { subId: '22796', childId: '22797', extensionCategory: 'Baked Beans & Spaghetti', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/baked-beans-spaghetti' },
            { subId: '22796', childId: '22798', extensionCategory: 'Canned Beans & Legumes', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-beans-legumes' },
            { subId: '22796', childId: '22800', extensionCategory: 'Canned Fruit', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-fruit' },
            { subId: '22796', childId: '22801', extensionCategory: 'Canned Meat', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-meat' },
            { subId: '22796', childId: '22807', extensionCategory: 'Canned Vegetables', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-vegetables' },
            { subId: '22796', childId: '22805', extensionCategory: 'Canned Vegetables', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-vegetables' },
            { catId: '22164', subId: '22199', childId: '22838', extensionCategory: 'Condensed & Evaporated Milk', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/condensed-evaporated-milk' },
            { subId: '', childId: '', extensionCategory: 'Condensed & Evaporated Milk', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/condensed-evaporated-milk' },
            { subId: '22796', childId: '22806', extensionCategory: 'Fish & Seafood', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/fish-seafood' },
            { subId: '22796', childId: '22803', extensionCategory: 'Fish & Seafood', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/fish-seafood' },
            { subId: '22796', childId: '22809', extensionCategory: 'Instant Meals & Sides', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/instant-meals-sides' },
            { subId: '22796', childId: '22802', extensionCategory: 'Instant Meals & Sides', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/instant-meals-sides' },
            { subId: '22796', childId: '22810', extensionCategory: 'Noodles', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/noodles' },
            { subId: '22796', childId: '22804', extensionCategory: 'Soups', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/soups' },
          ],
        },
        {
          subCategory: 'Coffee',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Capsules', url: 'https:www.coles.com.au/browse/pantry/coffee/capsules' },
            { subId: '', childId: '', extensionCategory: 'Coffee Accessories', url: 'https:www.coles.com.au/browse/pantry/coffee/coffee-accessories' },
            { subId: '', childId: '', extensionCategory: 'Coffee Beans', url: 'https:www.coles.com.au/browse/pantry/coffee/coffee-beans' },
            { subId: '', childId: '', extensionCategory: 'Coffee Mixes', url: 'https:www.coles.com.au/browse/pantry/coffee/coffee-mixes' },
            { subId: '', childId: '', extensionCategory: 'Ground Coffee', url: 'https:www.coles.com.au/browse/pantry/coffee/ground-coffee' },
            { subId: '', childId: '', extensionCategory: 'Instant Coffee', url: 'https:www.coles.com.au/browse/pantry/coffee/instant-coffee' },
          ],
        },
        {
          subCategory: 'Desserts',
          childItems: [
            { subId: '22821', childId: '22983', extensionCategory: 'Custard, Cream & Yoghurt Desserts', url: 'https:www.coles.com.au/browse/pantry/desserts/custard-cream-yoghurt-desserts' },
            { subId: '22821', childId: '23823', extensionCategory: 'Icecream Cones, Syrups & Toppings', url: 'https:www.coles.com.au/browse/pantry/desserts/icecream-cones-syrups-toppings' },
            { subId: '22821', childId: '22824', extensionCategory: 'Jelly', url: 'https:www.coles.com.au/browse/pantry/desserts/jelly' },
            { subId: '22821', childId: '22825', extensionCategory: 'Puddings', url: 'https:www.coles.com.au/browse/pantry/desserts/puddings' },
            { subId: '22821', childId: '22826', extensionCategory: 'ready-to-freeze Ice Blocks', url: 'https:www.coles.com.au/browse/pantry/desserts/ready-to-freeze-ice-blocks' },  
          ],
        },
        {
          subCategory: 'Health Foods',
          childItems: [

            { subId: '22832', childId: '22834', extensionCategory: 'Healthy Breakfasts', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-breakfasts' },
            { subId: '22832', childId: '22835', extensionCategory: 'Healthy Cooking', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-cooking' },
            { subId: '22832', childId: '22840', extensionCategory: 'Healthy Snacks', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-snacks' },  

            { subId: '24007', childId: '', extensionCategory: 'Healthy Breakfasts', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-breakfasts' },
            { subId: '24007', childId: '', extensionCategory: 'Healthy Cooking', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-cooking' },
            { subId: '24007', childId: '', extensionCategory: 'Healthy Snacks', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-snacks' },  
            
            { subId: '', childId: '', extensionCategory: 'Healthy Breakfasts', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-breakfasts' },
            { subId: '', childId: '', extensionCategory: 'Healthy Cooking', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-cooking' },
            { subId: '', childId: '', extensionCategory: 'Healthy Snacks', url: 'https:www.coles.com.au/browse/pantry/health-foods/healthy-snacks' },  
          ],
        },
        {
          subCategory: 'Health Foods Sports Nutrition & Diet',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Collagen', url: 'https:www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/collagen' },
            { subId: '', childId: '', extensionCategory: 'Diet Slimming Aids', url: 'https:www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/diet-slimming-aids' },
            { subId: '', childId: '', extensionCategory: 'Energy Gels/Tablets', url: 'https:www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/energy-gels-tablets' },
            { subId: '', childId: '', extensionCategory: 'Nutrition Powders', url: 'https:www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/nutrition-powders' },
            { subId: '', childId: '', extensionCategory: 'Protein Bars & Balls', url: 'https:www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/protein-bars-balls' },
            { subId: '', childId: '', extensionCategory: 'Rtd Protein Shakes', url: 'https:www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet/rtd-protein-shakes' }, 
          ],
        },
        {
          subCategory: 'Herbs & Spices',
          childItems: [
            { subId: '22842', childId: '22844', extensionCategory: 'Dried Herbs & Spices', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/dried-herbs-spices' },
            { subId: '', childId: '', extensionCategory: 'Dried Spices', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/dried-spices' },
            { subId: '22842', childId: '22845', extensionCategory: 'Jars & Pastes', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/jars-pastes' },
            { subId: '22842', childId: '22843', extensionCategory: 'Packet Seasonings', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/packet-seasonings' },
            { subId: '22842', childId: '22847', extensionCategory: 'Salt & Pepper', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/salt-pepper' },
          ],
        },
        {
          subCategory: 'International Foods',
          childItems: [
            { subId: '22848', childId: '22849', extensionCategory: 'Asian', url: 'https:www.coles.com.au/browse/pantry/international-foods/asian' },
            { subId: '22848', childId: '22850', extensionCategory: 'European', url: 'https:www.coles.com.au/browse/pantry/international-foods/european' },
            { subId: '22848', childId: '22851', extensionCategory: 'Indian', url: 'https:www.coles.com.au/browse/pantry/international-foods/indian' },
            { subId: '22848', childId: '22854', extensionCategory: 'Kosher', url: 'https:www.coles.com.au/browse/pantry/international-foods/kosher' },
            { subId: '', childId: '', extensionCategory: 'Mediterranean', url: 'https:www.coles.com.au/browse/pantry/international-foods/mediterranean' },
            { subId: '22848', childId: '22855', extensionCategory: 'Mexican', url: 'https:www.coles.com.au/browse/pantry/international-foods/mexican' },
            { subId: '22848', childId: '22856', extensionCategory: 'Middle Eastern', url: 'https:www.coles.com.au/browse/pantry/international-foods/middle-eastern' },
            { subId: '', childId: '', extensionCategory: 'New Zealand', url: 'https:www.coles.com.au/browse/pantry/international-foods/new-zealand' },
            { subId: '22848', childId: '22858', extensionCategory: 'South African', url: 'https:www.coles.com.au/browse/pantry/international-foods/south-african' },
            { subId: '22848', childId: '22859', extensionCategory: 'Uk', url: 'https:www.coles.com.au/browse/pantry/international-foods/uk' },
            { subId: '', childId: '', extensionCategory: 'Usa', url: 'https:www.coles.com.au/browse/pantry/international-foods/usa' },
          ],
        },
        {
          subCategory: 'Jams, Honey & Spreads',
          childItems: [
            { subId: '22785', childId: '22795', extensionCategory: 'Chocolate Spreads', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/chocolate-spreads' },
            { subId: '22785', childId: '22789', extensionCategory: 'Honey', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/honey' },
            { subId: '22785', childId: '22790', extensionCategory: 'Jams', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/jams' },
            { subId: '22785', childId: '22795', extensionCategory: 'Jams', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/jams' },
            { subId: '', childId: '', extensionCategory: 'Nut Spreads', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/nut-spreads' },
            { subId: '22785', childId: '22794', extensionCategory: 'Savoury Spreads', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/savoury-spreads' },
          ],
        },
        {
          subCategory: 'Local Foods',
          childItems: [
            { subId: '22785', childId: '22787', extensionCategory: 'Local Snacks & Drinks', url: 'https:www.coles.com.au/browse/pantry/local-foods/local-snacks-drinks' },
          ],
        },
        {
          subCategory: 'Oils & Vinegars',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Oil', url: 'https:www.coles.com.au/browse/pantry/oils-vinegars/oil' },
            { subId: '', childId: '', extensionCategory: 'Vinegar', url: 'https:www.coles.com.au/browse/pantry/oils-vinegars/vinegar' },
          ],
        },
        {
          subCategory: 'Pasta, Rice, Legumes & Grains',
          childItems: [
            { subId: '22868', childId: '22869', extensionCategory: 'Beans & Legumes', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/beans-legumes' },
            { subId: '22832', childId: '22835', extensionCategory: 'Fresh Pasta', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/fresh-pasta' },
            { subId: '22868', childId: '22876', extensionCategory: 'Microwave Rice', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/microwave-rice' },
            { subId: '22832', childId: '22835', extensionCategory: 'Pasta', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/pasta' },
            { subId: '22832', childId: '22870', extensionCategory: 'Pasta', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/pasta' },
            { subId: '22832', childId: '22870', extensionCategory: '22871', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/pasta' },
            { subId: '22868', childId: '22875', extensionCategory: 'Polenta & Other Grains', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/polenta-other-grains' },
            { subId: '22868', childId: '22876', extensionCategory: 'Rice', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/rice' },
          ],
        },
        {
          subCategory: 'Pickled Vegetables & Condiments',
          childItems: [
            { subId: '22811', childId: '22815', extensionCategory: 'Mayonnaise', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/mayonnaise' },
            { subId: '22811', childId: '22816', extensionCategory: 'Mustard', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/mustard' },
            { subId: '22811', childId: '22812', extensionCategory: 'Pickles, Chutney & Relish', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/pickles-chutney-relish' },
            { subId: '22811', childId: '22817', extensionCategory: 'Pickles, Chutney & Relish', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/pickles-chutney-relish' },
            { subId: '22811', childId: '22818', extensionCategory: 'Salad Dressings', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/salad-dressings' },
            { subId: '', childId: '', extensionCategory: 'Syrups & Toppings', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/syrups-toppings' },
            { subId: '22811', childId: '22820', extensionCategory: 'Tomato & Bbq Sauces', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/tomato-bbq-sauces' },
            { subId: '22811', childId: '22814', extensionCategory: 'Tomato & Bbq Sauces', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/tomato-bbq-sauces' },
          ],
        },
        {
          subCategory: 'Sauces',
          childItems: [
            { subId: '22878', childId: '22879', extensionCategory: 'Marinades', url: 'https:www.coles.com.au/browse/pantry/sauces/marinades' },
            { subId: '22811', childId: '22816', extensionCategory: 'Mustards', url: 'https:www.coles.com.au/browse/pantry/sauces/mustards' },
            { subId: '22878', childId: '22881', extensionCategory: 'Pizza & Pasta', url: 'https:www.coles.com.au/browse/pantry/sauces/pizza-pasta' },
            { subId: '22878', childId: '22883', extensionCategory: 'Recipe & Meal Bases', url: 'https:www.coles.com.au/browse/pantry/sauces/recipe-meal-bases' },
            { subId: '22878', childId: '22885', extensionCategory: 'Recipe & Meal Bases', url: 'https:www.coles.com.au/browse/pantry/sauces/recipe-meal-bases' },
            { subId: '22878', childId: '22884', extensionCategory: 'Soy & Asian', url: 'https:www.coles.com.au/browse/pantry/sauces/soy-asian' },
            { subId: '', childId: '', extensionCategory: 'Stir-Fry and Curries', url: 'https:www.coles.com.au/browse/pantry/sauces/stir-fry-and-curries' },
            { subId: '22878', childId: '22886', extensionCategory: 'Sweet Chilli & Hot', url: 'https:www.coles.com.au/browse/pantry/sauces/sweet-chilli-hot' },
            { subId: '22811', childId: '22819', extensionCategory: 'Sweet Chilli & Hot', url: 'https:www.coles.com.au/browse/pantry/sauces/sweet-chilli-hot' },
            { subId: '22811', childId: '22820', extensionCategory: 'Tomato & Bbq', url: 'https:www.coles.com.au/browse/pantry/sauces/tomato-bbq' },
          ],
        },
        {
          subCategory: 'Stocks & Gravy',
          childItems: [
            { subId: '22878', childId: '22885', extensionCategory: 'Dry Stock', url: 'https:www.coles.com.au/browse/pantry/stocks-gravy/dry-stock' },
            { subId: '22878', childId: '22885', extensionCategory: 'Gravy', url: 'https:www.coles.com.au/browse/pantry/stocks-gravy/gravy' },
            { subId: '22878', childId: '22885', extensionCategory: 'Liquid Stock', url: 'https:www.coles.com.au/browse/pantry/stocks-gravy/liquid-stock' },
          ],
        },
        {
          subCategory: 'Tea',
          childItems: [
            { subId: '22908', childId: '22909', extensionCategory: 'Black', url: 'https:www.coles.com.au/browse/pantry/tea/black' },
            { subId: '', childId: '', extensionCategory: 'Bubble Tea', url: 'https:www.coles.com.au/browse/pantry/tea/bubble-tea' },
            { subId: '', childId: '', extensionCategory: 'Chai', url: 'https:www.coles.com.au/browse/pantry/tea/chai' },
            { subId: '', childId: '22912', extensionCategory: 'Green', url: 'https:www.coles.com.au/browse/pantry/tea/green' },
            { subId: '', childId: '', extensionCategory: 'Herbal', url: 'https:www.coles.com.au/browse/pantry/tea/herbal' },
            { subId: '', childId: '', extensionCategory: 'Loose Leaf', url: 'https:www.coles.com.au/browse/pantry/tea/loose-leaf' },
            { subId: '', childId: '', extensionCategory: 'Organic', url: 'https:www.coles.com.au/browse/pantry/tea/organic' },
            { subId: '', childId: '', extensionCategory: 'White', url: 'https:www.coles.com.au/browse/pantry/tea/white' },
          ],
        },
     ],
   },
   {
    category: 'Chips, Chocolates & Snacks',
    id: "22770",
    subCategories: [
      {
        subCategory: 'Biscuits & Cookies',
        childItems: [
          { subId: '22889', childId: '22890', extensionCategory: 'Chocolate Biscuits', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies/chocolate-biscuits' },
          { subId: '22889', childId: '22890', extensionCategory: 'Cream & Plain Biscuits', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies/cream-plain-biscuits' },
          { subId: '22889', childId: '22890', extensionCategory: 'Multipack Biscuits', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies/multipack-biscuits' },
          ],
      },
      {
        subCategory: 'Chips',
        childItems: [
          { subId: '', childId: '', extensionCategory: 'Chips Multi Pack', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/chips-multi-pack' },
          { subId: '', childId: '', extensionCategory: 'Chips Sharing', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/chips-sharing' },
          { subId: '', childId: '', extensionCategory: 'Chips Single Pack', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/chips-single-pack' },
          { subId: '', childId: '', extensionCategory: 'Corn Chips & Salsa', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips/corn-chips-salsa' },
          ],
      },
      {
        subCategory: 'Chocolates',
        childItems: [
          { subId: '', childId: '23969', extensionCategory: 'Boxed Chocolate & Gifts', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/boxed-chocolate-gifts' },
          { subId: '', childId: '22894', extensionCategory: 'Chocolate Bars', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-bars' },
          { subId: '', childId: '', extensionCategory: 'Chocolate Bites', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-bites' },
          { subId: '', childId: '', extensionCategory: 'Chocolate Blocks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-blocks' },
          { subId: '', childId: '', extensionCategory: 'Chocolate Multipacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/chocolate-multipacks' },
          { subId: '', childId: '', extensionCategory: 'Seasonal Chocolates', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates/seasonal-chocolates' },
          ],
      },
      {
        subCategory: 'Crackers & Rice Cakes',
        childItems: [
          { subId: '', childId: '', extensionCategory: 'Crackers & Crispbreads', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/crackers-crispbreads' },
          { subId: '', childId: '', extensionCategory: 'Flavoured Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/flavoured-snacks' },
          { subId: '', childId: '', extensionCategory: 'Multipack Crackers', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/multipack-crackers' },
          { subId: '', childId: '', extensionCategory: 'Rice & Corn Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes/rice-corn-snacks' },
          ],
      },
      {
        subCategory: 'Gum, Mints & Lozenges',
        childItems: [
          { subId: '22889', childId: '23988', extensionCategory: 'Gum', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges/gum' },
          { subId: '22889', childId: '23988', extensionCategory: 'Medicated Lozenges', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges/medicated-lozenges' },
          { subId: '22889', childId: '23988', extensionCategory: 'Mints', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges/mints' },
          ],
      },
      {
        subCategory: 'Lollies & Licorice',
        childItems: [
          { subId: '22889', childId: '23970', extensionCategory: 'Licorice', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/lollies-licorice/licorice' },
          { subId: '22889', childId: '23970', extensionCategory: 'Lollies', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/lollies-licorice/lollies' },
          ],
      },
      {
        subCategory: 'Snacks',
        childItems: [
          { subId: '', childId: '22902', extensionCategory: 'Muesli Bars & Fruit Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/muesli-bars-fruit-snacks' },
          { subId: '', childId: '', extensionCategory: 'Nuts & Trail Mix', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/nuts-trail-mix' },
          { subId: '', childId: '', extensionCategory: 'Popcorn', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/popcorn' },
          { subId: '', childId: '', extensionCategory: 'Pretzels & Other Snacks', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks/pretzels-other-snacks' },
          ],
      },
    ],
  },
   {
     category: 'Pet',
     id: '22916',
     subCategories: [
       {
         subCategory: 'Birds',
         childItems: [
           { subId: '22917', childId: '22921', extensionCategory: 'Bird Food', url: 'https:www.coles.com.au/browse/pet/birds/bird-food' },
           { subId: '22917', childId: '22919', extensionCategory: 'Bird Treats', url: 'https:www.coles.com.au/browse/pet/birds/bird-treats' },
         ],
       },
       {
         subCategory: 'Cat & Kitten',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Cat Accessories, Grooming & Toys', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-accessories-grooming-toys' },
           { subId: '', childId: '', extensionCategory: 'Cat Flea & Worming', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-flea-worming' },
           { subId: '', childId: '', extensionCategory: 'Cat Litter', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-litter' },
           { subId: '', childId: '', extensionCategory: 'Cat Treats & Milk', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-treats-milk' },
           { subId: '23952', childId: '23954', extensionCategory: 'Chilled Cat Food', url: 'https:www.coles.com.au/browse/pet/cat-kitten/chilled-cat-food' },
           { subId: '23952', childId: '23953', extensionCategory: 'Dry Cat Food', url: 'https:www.coles.com.au/browse/pet/cat-kitten/dry-cat-food' },
           { subId: '23952', childId: '23957', extensionCategory: 'Kitten Food, Treats & Milk', url: 'https:www.coles.com.au/browse/pet/cat-kitten/kitten-food-treats-milk' },
           { subId: '', childId: '', extensionCategory: 'Trays & Cans Cat Food', url: 'https:www.coles.com.au/browse/pet/cat-kitten/trays-cans-cat-food' },
         ],
       },
       {
         subCategory: 'Dog & Puppy',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Dog Accessories, Grooming & Toys', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dog-accessories-grooming-toys' },
           { subId: '', childId: '', extensionCategory: 'Dog Flea & Worming', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dog-flea-worming' },
           { subId: '', childId: '', extensionCategory: 'Dog Treats & Milk', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dog-treats-milk' },
           { subId: '23373', childId: '23373', extensionCategory: 'Dry Dog Food', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dry-dog-food' },
           { subId: '23373', childId: '22939', extensionCategory: 'Puppy Food, Treats & Milk', url: 'https:www.coles.com.au/browse/pet/dog-puppy/puppy-food-treats-milk' },
           { subId: '23373', childId: '22939', extensionCategory: 'Trays & Cans Dog Food', url: 'https:www.coles.com.au/browse/pet/dog-puppy/trays-cans-dog-food' },
         ],
       },
       {
         subCategory: 'Fish Food & Accessories',
         childItems: [
           { subId: '22917', childId: '22921', extensionCategory: 'Fish Food', url: 'https:www.coles.com.au/browse/pet/fish-food-accessories/fish-food' },
         ],
       },
       {
         subCategory: 'Pet Scoop & Weigh',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Scoop & Weigh Treats', url: 'https:www.coles.com.au/browse/pet/pet-scoop-weigh/scoop-weigh-treats' },
         ],
       },
       {
         subCategory: 'Small Pets',
         childItems: [
           { subId: '22917', childId: '22921', extensionCategory: 'Small Pets Food', url: 'https:www.coles.com.au/browse/pet/small-pets/small-pets-food' },
         ],
       },
     ],
   },
   {
     category: 'Poultry, Meat & Seafood',
     id: '22713',
     subCategories: [
       {
         subCategory: 'Bbq, Sausages & Burgers',
         childItems: [
           { subId: '2714', childId: '22716', extensionCategory: 'Burgers & Rissoles', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/burgers-rissoles' },
           { subId: '22714', childId: '23935', extensionCategory: 'Kebabs', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/kebabs' },
           { subId: '', childId: '', extensionCategory: 'Meatballs', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/meatballs' },
           { subId: '', childId: '', extensionCategory: 'Sausage Mince', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausage-mince' },
           { subId: '24023', childId: '24030', extensionCategory: 'Sausages', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausages' },
         ],
       },
       {
         subCategory: 'Beef & Veal',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Beef & Veal Mince', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/beef-veal-mince' },
           { subId: '', childId: '', extensionCategory: 'Beef Bones & Offal', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/beef-bones-offal' },
           { subId: '', childId: '', extensionCategory: 'Beef Roasts', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/beef-roasts' },
           { subId: '', childId: '', extensionCategory: 'Beef Steaks', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/beef-steaks' },
           { subId: '', childId: '', extensionCategory: 'Crumbed Beef', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/crumbed-beef' },
           { subId: '', childId: '', extensionCategory: 'Graze Beef', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/graze-beef' },
           { subId: '', childId: '', extensionCategory: 'Slow Cook & Casserole Beef', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/slow-cook-casserole-beef' },
           { subId: '', childId: '', extensionCategory: 'Stir Fry & Diced Beef', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/stir-fry-diced-beef' },
           { subId: '', childId: '', extensionCategory: 'Veal', url: 'https:www.coles.com.au/browse/meat-seafood/beef-veal/veal' },
         ],
       },
       {
         subCategory: 'Coles Made Easy Range',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Easy Meals', url: 'https:www.coles.com.au/browse/meat-seafood/coles-made-easy-range/easy-meals' },
           { subId: '', childId: '', extensionCategory: 'Grill', url: 'https:www.coles.com.au/browse/meat-seafood/coles-made-easy-range/grill' },
           { subId: '', childId: '', extensionCategory: 'Pastry', url: 'https:www.coles.com.au/browse/meat-seafood/coles-made-easy-range/pastry' },
           { subId: '', childId: '', extensionCategory: 'Slow Cook', url: 'https:www.coles.com.au/browse/meat-seafood/coles-made-easy-range/slow-cook' },
         ],
       },
       {
         subCategory: 'Game',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Kangaroo', url: 'https:www.coles.com.au/browse/meat-seafood/game/kangaroo' },
           { subId: '', childId: '', extensionCategory: 'Other Game', url: 'https:www.coles.com.au/browse/meat-seafood/game/other-game' },
         ],
       },
       {
         subCategory: 'Ham',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Ham Portions', url: 'https:www.coles.com.au/browse/meat-seafood/ham/ham-portions' },
           { subId: '', childId: '', extensionCategory: 'Ham Shoulder & Steaks', url: 'https:www.coles.com.au/browse/meat-seafood/ham/ham-shoulder-steaks' },
         ],
       },
       {
         subCategory: 'Lamb',
         childItems: [
           { subId: '22719', childId: '', extensionCategory: 'Diced Lamb', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/diced-lamb' },
           { subId: '22719', childId: '', extensionCategory: 'Graze Grass-Fed Lamb', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/graze-grass-fed-lamb' },
           { subId: '22719', childId: '', extensionCategory: 'Lamb Chops', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-chops' },
           { subId: '22719', childId: '', extensionCategory: 'Lamb Cutlets', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-cutlets' },
           { subId: '22719', childId: '', extensionCategory: 'Lamb Offal', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-offal' },
           { subId: '22719', childId: '', extensionCategory: 'Lamb Roasts', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-roasts' },
           { subId: '22719', childId: '', extensionCategory: 'Lamb Shanks', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-shanks' },
           { subId: '22719', childId: '', extensionCategory: 'Lamb Steak', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-steak' },
         ],
       },
       {
         subCategory: 'Mince',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Beef & Veal Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/beef-veal-mince' },
           { subId: '22714', childId: '22717', extensionCategory: 'Chicken & Turkey Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/chicken-turkey-mince' },
           { subId: '', childId: '', extensionCategory: 'Kangaroo & Wallaby Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/kangaroo-wallaby-mince' },
           { subId: '22714', childId: '22719', extensionCategory: 'Lamb Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/lamb-mince' },
           { subId: '22714', childId: '22720', extensionCategory: 'Pork Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/pork-mince' },
           { subId: '', childId: '', extensionCategory: 'Sausage Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/sausage-mince' },
         ],
       },
        {
          subCategory: 'Organic Meat',
          childItems: [
            { subId: '24024', childId: '', extensionCategory: 'Organic Beef', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-beef' },
            { subId: '24024', childId: '', extensionCategory: 'Organic Lamb', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-lamb' },
            { subId: '24024', childId: '', extensionCategory: 'Organic Poultry', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-poultry' },
            { subId: '24024', childId: '', extensionCategory: 'Organic Sausages & Meatballs', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-sausages-meatballs' },
          ],
        },
        {
          subCategory: 'Pork',
          childItems: [
            { subId: '22714', childId: '22720', extensionCategory: 'Free Range Pork', url: 'https:www.coles.com.au/browse/meat-seafood/pork/free-range-pork' },
            { subId: '22714', childId: '22720', extensionCategory: 'Pork Chops', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-chops' },
            { subId: '22714', childId: '22720', extensionCategory: 'Pork Marinade', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-marinade' },
            { subId: '22714', childId: '22720', extensionCategory: 'Pork Mince', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-mince' },
            { subId: '22714', childId: '22720', extensionCategory: 'Pork Ribs', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-ribs' },
            { subId: '22714', childId: '22720', extensionCategory: 'Pork Roasts', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-roasts' },
            { subId: '22714', childId: '22720', extensionCategory: 'Pork Steaks', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-steaks' },
          ],
        },
        {
          subCategory: 'Poultry',
          childItems: [
            { subId: '24046', childId: '', extensionCategory: 'Breast Fillets', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/breast-fillets' },
            { subId: '24046', childId: '', extensionCategory: 'Chicken Offal', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/chicken-offal' },
            { subId: '24046', childId: '', extensionCategory: 'Chicken Wings', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/chicken-wings' },
            { subId: '24046', childId: '', extensionCategory: 'Crumbed Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/crumbed-chicken' },
            { subId: '24046', childId: '', extensionCategory: 'Diced, Stir-Fry & Tenders', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/diced-stir-fry-tenders' },
            { subId: '24046', childId: '', extensionCategory: 'Drumsticks & Maryland', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/drumsticks-maryland' },
            { subId: '24046', childId: '', extensionCategory: 'Duck', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/duck' },
            { subId: '24046', childId: '', extensionCategory: 'Free Range Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/free-range-chicken' },
            { subId: '24046', childId: '', extensionCategory: 'Kebabs & Bites', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/kebabs-bites' },
            { subId: '24046', childId: '', extensionCategory: 'Marinated & Roast Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/marinated-roast-chicken' },
            { subId: '24046', childId: '', extensionCategory: 'Poultry Deli', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/poultry-deli' },
            { subId: '24046', childId: '', extensionCategory: 'Thigh Fillets', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/thigh-fillets' },
            { subId: '24046', childId: '', extensionCategory: 'Turkey', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/turkey' },
            { subId: '24046', childId: '', extensionCategory: 'Whole Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/whole-chicken' },
          ],
        },
        {
          subCategory: 'Seafood',
          childItems: [
            { subId: '22758', childId: '22761', extensionCategory: 'Deli Fish', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/deli-fish' },
            { subId: '22758', childId: '22758', extensionCategory: 'Deli Marinara Mix and Other Seafood', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/deli-marinara-mix-and-other-seafood' },
            { subId: '22758', childId: '22766', extensionCategory: 'Deli Prawns', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/deli-prawns' },
            { subId: '22758', childId: '22667', extensionCategory: 'Prepacked Seafood', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/prepacked-seafood' },
            { subId: '22758', childId: '22761', extensionCategory: 'Smoked and Cured Fish', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/smoked-and-cured-fish' },
          ],
        },
     ],
   },
   {
     category: 'Back to School',
     subCategories: [
       {
         subCategory: 'BBQ Meat & Seafood',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'a', url: 'https:www.coles.com.au/browse/back-to-school/easy-school-night-dinners' },
           { subId: '', childId: '', extensionCategory: 'b', url: 'https:www.coles.com.au/browse/back-to-school/school-breakfast' },
           { subId: '', childId: '', extensionCategory: 'c', url: 'https:www.coles.com.au/browse/back-to-school/school-lunches-snacking' },
           { subId: '', childId: '', extensionCategory: 'd', url: 'https:www.coles.com.au/browse/back-to-school/school-stationery-accessories' },
         ],
       },
     ],
   },
   {
     category: 'Liquor',
     subCategories: [
       {
         subCategory: 'BBQ Meat & Seafood',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'a', url: 'https:www.coles.com.au/browse/liquor/beer' },
           { subId: '', childId: '', extensionCategory: 'b', url: 'https:www.coles.com.au/browse/liquor/cask-fortified-wine' },
           { subId: '', childId: '', extensionCategory: 'c', url: 'https:www.coles.com.au/browse/liquor/champagne-sparkling' },
           { subId: '', childId: '', extensionCategory: 'd', url: 'https:www.coles.com.au/browse/liquor/cider' },
           { subId: '', childId: '', extensionCategory: 'e', url: 'https:www.coles.com.au/browse/liquor/low-mid-strength' },
           { subId: '', childId: '', extensionCategory: 'f', url: 'https:www.coles.com.au/browse/liquor/premixed-drinks' },
           { subId: '', childId: '', extensionCategory: 'g', url: 'https:www.coles.com.au/browse/liquor/red-wine' },
           { subId: '', childId: '', extensionCategory: 'h', url: 'https:www.coles.com.au/browse/liquor/rose' },
           { subId: '', childId: '', extensionCategory: 'i', url: 'https:www.coles.com.au/browse/liquor/spirits' },
           { subId: '', childId: '', extensionCategory: 'j', url: 'https:www.coles.com.au/browse/liquor/white-wine' },
         ],
       },
     ],
   },
];

export default categories;
