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
           { subId: '', childId: '', extensionCategory: 'A2 Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/a2-formula' },
           { subId: '', childId: '', extensionCategory: 'Cow Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/cow-formula' },
           { subId: '', childId: '', extensionCategory: 'Goat Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/goat-formula' },
           { subId: '', childId: '', extensionCategory: 'Organic Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/organic-formula' },
           { subId: '22027', childId: '23830', extensionCategory: 'Specialty Formula', url: 'https:www.coles.com.au/browse/baby/baby-formula/specialty-formula' },
        ],
       },
       {
         subCategory: 'Nappies & Nappy Pants',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Nappies', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappies' },
           { subId: '22048', childId: '22054', extensionCategory: 'Nappy Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/nappy-pants' },
           { subId: '', childId: '', extensionCategory: 'Night Pants', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/night-pants' },
           { subId: '22048', childId: '22058', extensionCategory: 'Swimmers', url: 'https:www.coles.com.au/browse/baby/nappies-nappy-pants/swimmers' },
         ],
       },
       {
         subCategory: 'Baby Wipes',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Extra Large Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/extra-large-pack' },
           { subId: '', childId: '', extensionCategory: 'Large Pack', url: 'http:coles.com.au/browse/baby/baby-wipes/large-pack' },
           { subId: '', childId: '', extensionCategory: 'Medium Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/medium-pack' },
           { subId: '', childId: '', extensionCategory: 'Refill Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/refill-pack' },
           { subId: '', childId: '', extensionCategory: 'Small Pack', url: 'https:www.coles.com.au/browse/baby/baby-wipes/small-pack' },
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
           { subId: '', childId: '', extensionCategory: 'Baby & Toddler Snacks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-toddler-snacks' },
           { subId: '', childId: '', extensionCategory: 'Baby Cereals', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-cereals' },
           { subId: '', childId: '', extensionCategory: 'Baby Food Jars', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-jars' },
           { subId: '', childId: '', extensionCategory: 'Baby Food Pouches', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-food-pouches' },
           { subId: '', childId: '', extensionCategory: 'Baby Pasta', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-pasta' },
           { subId: '', childId: '', extensionCategory: 'Baby Rusks', url: 'https:www.coles.com.au/browse/baby/baby-toddler-food/baby-rusks' },
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
       ],
       },
       {
         subCategory: 'Instore Bakery Breads and Rolls',
         childItems: [
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
           { subId: '22074', childId: '22088', extensionCategory: 'Naan Bread and Gyros', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/naan-bread-and-gyros' },
           { subId: '22074', childId: '22088', extensionCategory: 'Other Flat Breads', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/other-flat-breads' },
           { subId: '22074', childId: '22086', extensionCategory: 'Pizza Bases', url: 'https:www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases/pizza-bases' },
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
           { subId: '', childId: '', extensionCategory: 'Cheddar & Tasty Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/cheddar-tasty-cheese' },
           { subId: '22090', childId: '22100', extensionCategory: 'Cheese Snacks', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/cheese-snacks' },
           { subId: '22090', childId: '22098', extensionCategory: 'Cream Cheese & Spreads', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/cream-cheese-spreads' },
           { subId: '22090', childId: '22095', extensionCategory: 'Feta Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/feta-cheese' },
           { subId: '', childId: '', extensionCategory: 'Firm Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/firm-cheese' },
           { subId: '', childId: '', extensionCategory: 'Gourmet Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/gourmet-cheese' },
           { subId: '22090', childId: '22096', extensionCategory: 'Grated Cheese', url: 'https:www.coles.com.au/browse/dairy-eggs-fridge/cheese/grated-cheese' },
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
     subCategories: [
       {
         subCategory: 'Deli Meats',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Beef & Lamb', url: 'https:www.coles.com.au/browse/deli/deli-meats/beef-lamb' },
           { subId: '', childId: '', extensionCategory: 'Chicken & Turkey', url: 'https:www.coles.com.au/browse/deli/deli-meats/chicken-turkey' },
           { subId: '', childId: '', extensionCategory: 'Deli Bacon', url: 'https:www.coles.com.au/browse/deli/deli-meats/deli-bacon' },
           { subId: '', childId: '', extensionCategory: 'Ham', url: 'https:www.coles.com.au/browse/deli/deli-meats/ham' },
           { subId: '', childId: '', extensionCategory: 'Kabana, Pancetta & Mortdella', url: 'https:www.coles.com.au/browse/deli/deli-meats/kabana-pancetta-mortdella' },
           { subId: '', childId: '', extensionCategory: 'Other Sliced Meats', url: 'https:www.coles.com.au/browse/deli/deli-meats/other-sliced-meats' },
           { subId: '', childId: '', extensionCategory: 'Salami', url: 'https:www.coles.com.au/browse/deli/deli-meats/salami' },
           { subId: '', childId: '', extensionCategory: 'Sausages, Frankfurts & Kransky', url: 'https:www.coles.com.au/browse/deli/deli-meats/sausages-frankfurts-kransky' },
           ],
       },
       {
         subCategory: 'Deli Packaged Meat',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Frankfurts & Kransky Packaged', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/frankfurts-kransky-packaged' },
           { subId: '', childId: '', extensionCategory: 'Meat Packaged', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/meat-packaged' },
           { subId: '', childId: '', extensionCategory: 'Packaged Bacon', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/packaged-bacon' },
           { subId: '', childId: '', extensionCategory: 'Packaged Ham', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/packaged-ham' },
           { subId: '', childId: '', extensionCategory: 'Salami & Kabana Packaged', url: 'https:www.coles.com.au/browse/deli/deli-packaged-meat/salami-kabana-packaged' },
           ],
       },
       {
         subCategory: 'Deli Poultry',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Breast & Thigh Fillets', url: 'https:www.coles.com.au/browse/deli/deli-poultry/breast-thigh-fillets' },
           { subId: '', childId: '', extensionCategory: 'Diced & Tenders', url: 'https:www.coles.com.au/browse/deli/deli-poultry/diced-tenders' },
           { subId: '', childId: '', extensionCategory: 'Kebabs, Nibbles & Crumbed', url: 'https:www.coles.com.au/browse/deli/deli-poultry/kebabs-nibbles-crumbed' },
           { subId: '', childId: '', extensionCategory: 'Wings & Drumsticks', url: 'https:www.coles.com.au/browse/deli/deli-poultry/wings-drumsticks' },
           ],
       },
       {
         subCategory: 'Deli Seafood',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Fish', url: 'https:www.coles.com.au/browse/deli/deli-seafood/fish' },
           { subId: '', childId: '', extensionCategory: 'Marinara Mix', url: 'https:www.coles.com.au/browse/deli/deli-seafood/marinara-mix' },
           { subId: '', childId: '', extensionCategory: 'Prawn & Crustaceans', url: 'https:www.coles.com.au/browse/deli/deli-seafood/prawn-crustaceans' },
           { subId: '', childId: '', extensionCategory: 'Prepackaged Seafood', url: 'https:www.coles.com.au/browse/deli/deli-seafood/prepackaged-seafood' },
           ],
       },
       {
         subCategory: 'Entertaining',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Antipasto', url: 'https:www.coles.com.au/browse/deli/entertaining/antipasto' },
           { subId: '', childId: '', extensionCategory: 'Crackers, Dips & Pate', url: 'https:www.coles.com.au/browse/deli/entertaining/crackers-dips-pate' },
           { subId: '', childId: '', extensionCategory: 'Olives', url: 'https:www.coles.com.au/browse/deli/entertaining/olives' },
           { subId: '', childId: '', extensionCategory: 'Prepacked Olives & Antipasto', url: 'https:www.coles.com.au/browse/deli/entertaining/prepacked-olives-antipasto' },
           ],
       },
       {
         subCategory: 'Gourmet Cheese',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Brie & Camembert', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/brie-camembert' },
           { subId: '', childId: '', extensionCategory: 'Cheddar', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/cheddar' },
           { subId: '', childId: '', extensionCategory: 'Deli Blue Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/deli-blue-cheese' },
           { subId: '', childId: '', extensionCategory: 'Fetta, Haloumi & Other', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/fetta-haloumi-other' },
           { subId: '', childId: '', extensionCategory: 'Fruit & Flavoured Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/fruit-flavoured-cheese' },
           { subId: '', childId: '', extensionCategory: 'Goats Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/goats-cheese' },
           { subId: '', childId: '', extensionCategory: 'Hard Cheese', url: 'https:www.coles.com.au/browse/deli/gourmet-cheese/hard-cheese' },
           ],
       },
       {
         subCategory: 'Pre-Made Platters',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Deli Platter', url: 'https:www.coles.com.au/browse/deli/pre-made-platters/deli-platter' },
           ],
       },
       {
         subCategory: 'Ready to Eat',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Chilled Quiches & Pies', url: 'https:www.coles.com.au/browse/deli/ready-to-eat/chilled-quiches-pies' },
           { subId: '', childId: '', extensionCategory: 'Heat & Eat', url: 'https:www.coles.com.au/browse/deli/ready-to-eat/heat-eat' },
           { subId: '', childId: '', extensionCategory: 'Hot Food', url: 'https:www.coles.com.au/browse/deli/ready-to-eat/hot-food' },
           ],
       },
     ],
   },
   {
     category: 'Drinks',
     subCategories: [
       {
         subCategory: 'Coffee Drinks',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Accessories Coffee', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/accessories-coffee' },
           { subId: '', childId: '', extensionCategory: 'Beans Coffee', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/beans-coffee' },
           { subId: '', childId: '', extensionCategory: 'Coffee Capsules', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-capsules' },
           { subId: '', childId: '', extensionCategory: 'Coffee Ground', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-ground' },
           { subId: '', childId: '', extensionCategory: 'Coffee Instant', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/coffee-instant' },
           { subId: '', childId: '', extensionCategory: 'Mixes Coffee', url: 'https:www.coles.com.au/browse/drinks/coffee-drinks/mixes-coffee' },
            ],
       },
       {
         subCategory: 'Cold Drinks',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Cold Soft Drinks', url: 'https:www.coles.com.au/browse/drinks/cold-drinks/cold-soft-drinks' },
           { subId: '', childId: '', extensionCategory: 'Cold Water', url: 'https:www.coles.com.au/browse/drinks/cold-drinks/cold-water' },
           { subId: '', childId: '', extensionCategory: 'Other Cold Drinks', url: 'https:www.coles.com.au/browse/drinks/cold-drinks/other-cold-drinks' },
            ],
       },
       {
         subCategory: 'Cordials',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'All Cordials', url: 'https:www.coles.com.au/browse/drinks/cordials/all-cordials' },
            ],
       },
       {
         subCategory: 'Energy Drinks',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Multipack Cans', url: 'https:www.coles.com.au/browse/drinks/energy-drinks/multipack-cans' },
           { subId: '', childId: '', extensionCategory: 'Single Cans', url: 'https:www.coles.com.au/browse/drinks/energy-drinks/single-cans' },
            ],
       },
       {
         subCategory: 'Flavoured Milk',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Drinking Chocolate', url: 'https:www.coles.com.au/browse/drinks/flavoured-milk/drinking-chocolate' },
           { subId: '', childId: '', extensionCategory: 'Drinks & Powders', url: 'https:www.coles.com.au/browse/drinks/flavoured-milk/drinks-powders' },
           { subId: '', childId: '', extensionCategory: 'Kids Milk', url: 'https:www.coles.com.au/browse/drinks/flavoured-milk/kids-milk' },
            ],
       },
       {
         subCategory: 'Iced Tea',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Single & Multi Serve', url: 'https:www.coles.com.au/browse/drinks/iced-tea/single-multi-serve' },
            ],
       },
       {
         subCategory: 'Juice',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Canned Juices', url: 'https:www.coles.com.au/browse/drinks/juice/canned-juices' },
           { subId: '', childId: '', extensionCategory: 'Chilled Juice', url: 'https:www.coles.com.au/browse/drinks/juice/chilled-juice' },
           { subId: '', childId: '', extensionCategory: 'Glass Juice Bottles', url: 'http:coles.com.au/browse/drinks/juice/glass-juice-bottles' },
           { subId: '', childId: '', extensionCategory: 'Multi Pack Juice', url: 'https:www.coles.com.au/browse/drinks/juice/multi-pack-juice' },
           { subId: '', childId: '', extensionCategory: 'Packs & Pouches', url: 'https:www.coles.com.au/browse/drinks/juice/packs-pouches' },
           { subId: '', childId: '', extensionCategory: 'Plastic Juice Bottles', url: 'https:www.coles.com.au/browse/drinks/juice/plastic-juice-bottles' },
            ],
       },
       {
         subCategory: 'Long-Life Milk',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Almond & Other Nut Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/almond-other-nut-milk' },
           { catId: '22089', subId: '22132', childId: '23985', extensionCategory: 'Lactose Free Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/lactose-free-milk' },
           { subId: '', childId: '', extensionCategory: 'Lactose Free Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/lactose-free-milk' },
           { subId: '', childId: '', extensionCategory: 'Long Life Flavoured Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/long-life-flavoured-milk' },
           { subId: '', childId: '', extensionCategory: 'Long Life Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/long-life-milk' },
           { subId: '', childId: '', extensionCategory: 'Oat Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/oat-milk' },
           { subId: '', childId: '', extensionCategory: 'Powdered Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/powdered-milk' },
           { subId: '', childId: '', extensionCategory: 'Soy Milk', url: 'https:www.coles.com.au/browse/drinks/long-life-milk/soy-milk' },
            ],
       },
       {
         subCategory: 'Non-Alcoholic',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Non-Alcoholic Drinks', url: 'https:www.coles.com.au/browse/drinks/non-alcoholic/non-alcoholic-drinks' },
            ],
       },
       {
         subCategory: 'Soft Drinks',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Kombucha & Other Drinks', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/kombucha-other-drinks' },
           { subId: '', childId: '', extensionCategory: 'Mixers', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/mixers' },
           { subId: '', childId: '', extensionCategory: 'Soft Drink Bottles', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/soft-drink-bottles' },
           { subId: '', childId: '', extensionCategory: 'Soft Drink Cans', url: 'https:www.coles.com.au/browse/drinks/soft-drinks/soft-drink-cans' },
            ],
       },
       {
         subCategory: 'Sports Drinks',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'All Iced Tea', url: 'https:www.coles.com.au/browse/drinks/sports-drinks/all-iced-tea' },
           { subId: '', childId: '', extensionCategory: 'Sport Drink Powders', url: 'https:www.coles.com.au/browse/drinks/sports-drinks/sport-drink-powders' },
           { subId: '', childId: '', extensionCategory: 'Sports Drink', url: 'https:www.coles.com.au/browse/drinks/sports-drinks/sports-drink' },
            ],
       },
       {
         subCategory: 'Tea Drinks',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Tea Black', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-black' },
           { subId: '', childId: '', extensionCategory: 'Tea Bubble', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-bubble' },
           { subId: '', childId: '', extensionCategory: 'Tea Chai', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-chai' },
           { subId: '', childId: '', extensionCategory: 'Tea Green', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-green' },
           { subId: '', childId: '', extensionCategory: 'Tea Herbal', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-herbal' },
           { subId: '', childId: '', extensionCategory: 'Tea Loose Leaf', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-loose-leaf' },
           { subId: '', childId: '', extensionCategory: 'Tea Organic', url: 'https:www.coles.com.au/browse/drinks/tea-drinks/tea-organic' },
            ],
       },
       {
         subCategory: 'Water',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Flavoured Water', url: 'https:www.coles.com.au/browse/drinks/water/flavoured-water' },
           { subId: '', childId: '', extensionCategory: 'Mineral Water', url: 'https:www.coles.com.au/browse/drinks/water/mineral-water' },
           { subId: '', childId: '', extensionCategory: 'Sparkling Water', url: 'https:www.coles.com.au/browse/drinks/water/sparkling-water' },
           { subId: '', childId: '', extensionCategory: 'Still Water', url: 'https:www.coles.com.au/browse/drinks/water/still-water' },
            ],
       },
     ],
   },
   {
     category: 'Frozen',
     subCategories: [
       {
         subCategory: 'Ice Cream',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Frozen Yoghurt', url: 'https:www.coles.com.au/browse/frozen/ice-cream/frozen-yoghurt' },
           { subId: '', childId: '', extensionCategory: 'Ice Cream Desserts', url: 'https:www.coles.com.au/browse/frozen/ice-cream/ice-cream-desserts' },
           { subId: '', childId: '', extensionCategory: 'Ice Cream Sticks', url: 'https:www.coles.com.au/browse/frozen/ice-cream/ice-cream-sticks' },
           { subId: '', childId: '', extensionCategory: 'Ice Cream Tubs', url: 'https:www.coles.com.au/browse/frozen/ice-cream/ice-cream-tubs' },
           { subId: '', childId: '', extensionCategory: 'Premium Ice Cream', url: 'https:www.coles.com.au/browse/frozen/ice-cream/premium-ice-cream' },
           { subId: '', childId: '', extensionCategory: 'Sorbet & Gelato', url: 'https:www.coles.com.au/browse/frozen/ice-cream/sorbet-gelato' },
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
           { subId: '', childId: '', extensionCategory: 'Chicken Pieces & Nuggets', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/chicken-pieces-nuggets' },
           { subId: '', childId: '', extensionCategory: 'Chicken Wing & Nibbles', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/chicken-wing-nibbles' },
           { subId: '', childId: '', extensionCategory: 'Frozen Turkey', url: 'https:www.coles.com.au/browse/frozen/frozen-chicken-beef-pork/frozen-turkey' },
           ],
       },
       {
         subCategory: 'Frozen Chips & Wedges',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Chips', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/chips' },
           { subId: '', childId: '', extensionCategory: 'Hashbrowns', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/hashbrowns' },
           { subId: '', childId: '', extensionCategory: 'Oven Roasted', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/oven-roasted' },
           { subId: '', childId: '', extensionCategory: 'Wedges', url: 'https:www.coles.com.au/browse/frozen/frozen-chips-wedges/wedges' },
           ],
       },
       {
         subCategory: 'Frozen Desserts',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Assorted Desserts', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/assorted-desserts' },
           { subId: '', childId: '', extensionCategory: 'Cakes & Cheesecakes', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/cakes-cheesecakes' },
           { subId: '', childId: '', extensionCategory: 'Dessert Pies', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/dessert-pies' },
           { subId: '', childId: '', extensionCategory: 'Ice Cream Cakes', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/ice-cream-cakes' },
           { subId: '', childId: '', extensionCategory: 'Pastries & Puddings', url: 'https:www.coles.com.au/browse/frozen/frozen-desserts/pastries-puddings' },
           ],
       },
       {
         subCategory: 'Frozen Fish & Seafood',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Fish Fillets', url: 'https:www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fillets' },
           { subId: '', childId: '', extensionCategory: 'Fish Fingers & Cakes', url: 'https:www.coles.com.au/browse/frozen/frozen-fish-seafood/fish-fingers-cakes' },
           { subId: '', childId: '', extensionCategory: 'Seafood Frozen', url: 'https:www.coles.com.au/browse/frozen/frozen-fish-seafood/seafood-frozen' },
           ],
       },
       {
         subCategory: 'Frozen Fruit',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Berries', url: 'https:www.coles.com.au/browse/frozen/frozen-fruit/berries' },
           { subId: '', childId: '', extensionCategory: 'Tropical', url: 'https:www.coles.com.au/browse/frozen/frozen-fruit/tropical' },
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
           { subId: '', childId: '', extensionCategory: 'Convenience Meals', url: 'https:www.coles.com.au/browse/frozen/frozen-meals/convenience-meals' },
           ],
       },
       {
         subCategory: 'Frozen Pastry & Party Food',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Asian Party Food', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/asian-party-food' },
           { subId: '', childId: '', extensionCategory: 'Party Food', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/party-food' },
           { subId: '', childId: '', extensionCategory: 'Pastries', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastries' },
           { subId: '', childId: '', extensionCategory: 'Pastry Sheets', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/pastry-sheets' },
           { subId: '', childId: '', extensionCategory: 'Pies & Quiches', url: 'https:www.coles.com.au/browse/frozen/frozen-pastry-party-food/pies-quiches' },
           ],
       },
       {
         subCategory: 'Frozen Pizza & Bases',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Pizza Snacks', url: 'https:www.coles.com.au/browse/frozen/frozen-pizza-bases/pizza-snacks' },
           { subId: '', childId: '', extensionCategory: 'Pizzas', url: 'https:www.coles.com.au/browse/frozen/frozen-pizza-bases/pizzas' },
           ],
       },
       {
         subCategory: 'Frozen Vegan & Vegetarian',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'All Plant Based', url: 'https:www.coles.com.au/browse/frozen/frozen-vegan-vegetarian/all-plant-based' },
           ],
       },
       {
         subCategory: 'Frozen Vegetables',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Beans', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/beans' },
           { subId: '', childId: '', extensionCategory: 'Corn', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/corn' },
           { subId: '', childId: '', extensionCategory: 'Mixed Vegetables', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/mixed-vegetables' },
           { subId: '', childId: '', extensionCategory: 'Other Vegetables', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/other-vegetables' },
           { subId: '', childId: '', extensionCategory: 'Oven Roast Potato', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/oven-roast-potato' },
           { subId: '', childId: '', extensionCategory: 'Peas', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/peas' },
           { subId: '', childId: '', extensionCategory: 'Steaming', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/steaming' },
           { subId: '', childId: '', extensionCategory: 'Stir Fry', url: 'https:www.coles.com.au/browse/frozen/frozen-vegetables/stir-fry' },
           ],
       },
       {
         subCategory: 'Frozen World Food',
         childItems: [
           { catId: '', subId: '', childId: '22121', extensionCategory: 'Frozen Asian Foods', url: 'https:www.coles.com.au/browse/frozen/frozen-world-food/frozen-asian-foods' },
           { subId: '', childId: '', extensionCategory: 'Frozen Indian Foods', url: 'https:www.coles.com.au/browse/frozen/frozen-world-food/frozen-indian-foods' },
           ],
       },
     ],
   },
   {
     category: 'Fruit & Vegetables',
     subCategories: [
       {
         subCategory: 'Fruit',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Apples', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/apples' },
           { subId: '', childId: '', extensionCategory: 'Avocados', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/avocados' },
           { subId: '', childId: '', extensionCategory: 'Bananas', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/bananas' },
           { subId: '', childId: '', extensionCategory: 'Berries & Cherries', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/berries-cherries' },
           { subId: '', childId: '', extensionCategory: 'Coconuts', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/coconuts' },
           { subId: '', childId: '', extensionCategory: 'Cut Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/cut-fruit' },
           { subId: '', childId: '', extensionCategory: 'Grapefruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/grapefruit' },
           { subId: '', childId: '', extensionCategory: 'Grapes', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/grapes' },
           { subId: '', childId: '', extensionCategory: 'Kiwi Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/kiwi-fruit' },
           { subId: '', childId: '', extensionCategory: 'Lemons & Limes', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/lemons-limes' },
           { subId: '', childId: '', extensionCategory: 'Mandarins', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/mandarins' },
           { subId: '', childId: '', extensionCategory: 'Mangoes', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/mangoes' },
           { subId: '', childId: '', extensionCategory: 'Melons', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/melons' },
           { subId: '', childId: '', extensionCategory: 'Oranges', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/oranges' },
           { subId: '', childId: '', extensionCategory: 'Organic Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/organic-fruit' },
           { subId: '', childId: '', extensionCategory: 'Passionfruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/passionfruit' },
           { subId: '', childId: '', extensionCategory: 'Peaches & Nectarines', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/peaches-nectarines' },
           { subId: '', childId: '', extensionCategory: 'Pears', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/pears' },
           { subId: '', childId: '', extensionCategory: 'Pineapples', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/pineapples' },
           { subId: '', childId: '', extensionCategory: 'Plums & Apricots', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/plums-apricots' },
           { subId: '', childId: '', extensionCategory: 'Tropical & Exotic Fruit', url: 'https:www.coles.com.au/browse/fruit-vegetables/fruit/tropical-exotic-fruit' },
          ],
       },
       {
         subCategory: 'Vegetables',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Asparagus, Fennel & Artichokes', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/asparagus-fennel-artichokes' },
           { subId: '', childId: '', extensionCategory: 'Beetroot', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/beetroot' },
           { subId: '', childId: '', extensionCategory: 'Bok Choy & Asian Greens', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/bok-choy-asian-greens' },
           { subId: '', childId: '', extensionCategory: 'Broccoli & Cauliflower', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/broccoli-cauliflower' },
           { subId: '', childId: '', extensionCategory: 'Cabbage, Kale & Brussel Sprouts', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/cabbage-kale-brussel-sprouts' },
           { subId: '', childId: '', extensionCategory: 'Capsicum & Chillies', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/capsicum-chillies' },
           { subId: '', childId: '', extensionCategory: 'Carrots & Parsnips', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/carrots-parsnips' },
           { subId: '', childId: '', extensionCategory: 'Celery', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/celery' },
           { subId: '', childId: '', extensionCategory: 'Corn', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/corn' },
           { subId: '', childId: '', extensionCategory: 'Cucumber', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/cucumber' },
           { subId: '', childId: '', extensionCategory: 'Eggplant', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/eggplant' },
           { subId: '', childId: '', extensionCategory: 'Garlic & Ginger', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/garlic-ginger' },
           { subId: '', childId: '', extensionCategory: 'Lettuce', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/lettuce' },
           { subId: '', childId: '', extensionCategory: 'Mashed & Cut Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/mashed-cut-vegetables' },
           { subId: '', childId: '', extensionCategory: 'Mushrooms', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/mushrooms' },
           { subId: '', childId: '', extensionCategory: 'Onion & Leeks', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/onion-leeks' },
           { subId: '', childId: '', extensionCategory: 'Organic Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/organic-vegetables' },
           { subId: '', childId: '', extensionCategory: 'Peas, Beans & Okra', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/peas-beans-okra' },
           { subId: '', childId: '', extensionCategory: 'Potatoes', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/potatoes' },
           { subId: '', childId: '', extensionCategory: 'Pumpkin', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/pumpkin' },
           { subId: '', childId: '', extensionCategory: 'Spinach & Silverbeet', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/spinach-silverbeet' },
           { subId: '', childId: '', extensionCategory: 'Tomatoes', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/tomatoes' },
           { subId: '', childId: '', extensionCategory: 'Turnips & Root Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/turnips-root-vegetables' },
           { subId: '', childId: '', extensionCategory: 'Zucchini & Squash', url: 'https:www.coles.com.au/browse/fruit-vegetables/vegetables/zucchini-squash' },
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
           { subId: '', childId: '', extensionCategory: 'Organic Fruits', url: 'https:www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-fruits' },
           { subId: '', childId: '', extensionCategory: 'Organic Vegetables', url: 'https:www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables/organic-vegetables' },
          ],
       },
       {
         subCategory: 'Packaged Salad',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Lettuce & Mixed Leaf', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/lettuce-mixed-leaf' },
           { subId: '', childId: '', extensionCategory: 'Salad Bowls', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/salad-bowls' },
           { subId: '', childId: '', extensionCategory: 'Salads Dressed', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/salads-dressed' },
           { subId: '', childId: '', extensionCategory: 'Sauces & Salad Dressing', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/sauces-salad-dressing' },
           { subId: '', childId: '', extensionCategory: 'Slaws & Salad Kits', url: 'https:www.coles.com.au/browse/fruit-vegetables/packaged-salad/slaws-salad-kits' },
          ],
       },
       {
         subCategory: 'Prepared Vegetable',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Airfryer', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/airfryer' },
           { subId: '', childId: '', extensionCategory: 'Carb Clever Veggies', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/carb-clever-veggies' },
           { subId: '', childId: '', extensionCategory: 'Ready to Steam & Roast', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/ready-to-steam-roast' },
           { subId: '', childId: '', extensionCategory: 'Stir-Fry Veggie & Sauce', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/stir-fry-veggie-sauce' },
           { subId: '', childId: '', extensionCategory: 'Trimmed & Cut Veggies', url: 'https:www.coles.com.au/browse/fruit-vegetables/prepared-vegetable/trimmed-cut-veggies' },
          ],
       },
       {
         subCategory: 'Salad & Herbs',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Herbs', url: 'https:www.coles.com.au/browse/fruit-vegetables/salad-herbs/herbs' },
           { subId: '', childId: '', extensionCategory: 'Sprouts', url: 'https:www.coles.com.au/browse/fruit-vegetables/salad-herbs/sprouts' },
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
     subCategories: [
       {
         subCategory: 'Continence Care',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Continence Pads', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/continence-pads' },
           { subId: '', childId: '', extensionCategory: 'Female Washable Underwear', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/female-washable-underwear' },
           { subId: '', childId: '', extensionCategory: 'Liners', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/liners' },
           { subId: '', childId: '', extensionCategory: 'Male Pads', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/male-pads' },
           { subId: '', childId: '', extensionCategory: 'Male Pants', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/male-pants' },
           { subId: '', childId: '', extensionCategory: 'Male Washable Underwear', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/male-washable-underwear' },
           { subId: '', childId: '', extensionCategory: 'Mens Pouches & Shields', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/mens-pouches-shields' },
           { subId: '', childId: '', extensionCategory: 'Pants', url: 'https:www.coles.com.au/browse/health-beauty/continence-care/pants' },
         ],
       },
       {
         subCategory: 'Cosmetics',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Blush', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/blush' },
           { subId: '', childId: '', extensionCategory: 'Brows', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/brows' },
           { subId: '', childId: '', extensionCategory: 'Brushes and Tools', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/brushes-and-tools' },
           { subId: '', childId: '', extensionCategory: 'Concealer & Foundation', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/concealer-foundation' },
           { subId: '', childId: '', extensionCategory: 'Eye Liner, Eye Shadow & Mascara', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/eye-liner-eye-shadow-mascara' },
           { subId: '', childId: '', extensionCategory: 'Lashes', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/lashes' },
           { subId: '', childId: '', extensionCategory: 'Lips', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/lips' },
           { subId: '', childId: '', extensionCategory: 'Nails', url: 'https:www.coles.com.au/browse/health-beauty/cosmetics/nails' },
         ],
       },
       {
         subCategory: 'Dental Care',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Dental Floss & Tape', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/dental-floss-tape' },
           { subId: '', childId: '', extensionCategory: 'Dental Whitening', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/dental-whitening' },
           { subId: '', childId: '', extensionCategory: 'Denture Care', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/denture-care' },
           { subId: '', childId: '', extensionCategory: 'Electric Toothbushes and Refills', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/electric-toothbushes-and-refills' },
           { subId: '', childId: '', extensionCategory: 'Kids Dental', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/kids-dental' },
           { subId: '', childId: '', extensionCategory: 'Mouthwash', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/mouthwash' },
           { subId: '', childId: '', extensionCategory: 'Sensitive Toothpaste', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/sensitive-toothpaste' },
           { subId: '', childId: '', extensionCategory: 'Toothbrushes', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/toothbrushes' },
           { subId: '', childId: '', extensionCategory: 'Toothpaste', url: 'https:www.coles.com.au/browse/health-beauty/dental-care/toothpaste' },
         ],
       },
       {
         subCategory: 'First Aid & Medicinal',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Antacid & Indigestion', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/antacid-indigestion' },
           { subId: '', childId: '', extensionCategory: 'Antiseptic', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/antiseptic' },
           { subId: '', childId: '', extensionCategory: 'Bandages & Strapping', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/bandages-strapping' },
           { subId: '', childId: '', extensionCategory: 'Bandaids', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/bandaids' },
           { subId: '', childId: '', extensionCategory: 'Cold, Flu and Allergy', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/cold-flu-and-allergy' },
           { subId: '', childId: '', extensionCategory: 'Cotton Wool & Cotton Buds', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/cotton-wool-cotton-buds' },
           { subId: '', childId: '', extensionCategory: 'Eye & Ear Care', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/eye-ear-care' },
           { subId: '', childId: '', extensionCategory: 'Masks & Tests', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/masks-tests' },
           { subId: '', childId: '', extensionCategory: 'Medicinal Oils & Ointments', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/medicinal-oils-ointments' },
           { subId: '', childId: '', extensionCategory: 'Other First Aid & Medicinal', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/other-first-aid-medicinal' },
           { subId: '', childId: '', extensionCategory: 'Pain Relief', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/pain-relief' },
           { subId: '', childId: '', extensionCategory: 'Quit Smoking', url: 'https:www.coles.com.au/browse/health-beauty/first-aid-medicinal/quit-smoking' },
         ],
       },
       {
         subCategory: 'Hair Care',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Colouring', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/colouring' },
           { subId: '', childId: '', extensionCategory: 'Dandruff', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/dandruff' },
           { subId: '', childId: '', extensionCategory: 'Dry Shampoo', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/dry-shampoo' },
           { subId: '', childId: '', extensionCategory: 'Gel, Mousse & Styling', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/gel-mousse-styling' },
           { subId: '', childId: '', extensionCategory: 'Hair Brushes, Combs & Accessories', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/hair-brushes-combs-accessories' },
           { subId: '', childId: '', extensionCategory: 'Kids Hair Care', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/kids-hair-care' },
           { subId: '', childId: '', extensionCategory: 'Lice Treatment', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/lice-treatment' },
           { subId: '', childId: '', extensionCategory: 'Mens Hair Care', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/mens-hair-care' },
           { subId: '', childId: '', extensionCategory: 'Shampoo & Conditioner', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/shampoo-conditioner' },
           { subId: '', childId: '', extensionCategory: 'Treatments', url: 'https:www.coles.com.au/browse/health-beauty/hair-care/treatments' },
         ],
       },
       {
         subCategory: 'Period Care',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Accessories', url: 'https:www.coles.com.au/browse/health-beauty/period-care/accessories' },
           { subId: '', childId: '', extensionCategory: 'Liners', url: 'https:www.coles.com.au/browse/health-beauty/period-care/liners' },
           { subId: '', childId: '', extensionCategory: 'Pads', url: 'https:www.coles.com.au/browse/health-beauty/period-care/pads' },
           { subId: '', childId: '', extensionCategory: 'Reusables', url: 'https:www.coles.com.au/browse/health-beauty/period-care/reusables' },
           { subId: '', childId: '', extensionCategory: 'Tampons', url: 'https:www.coles.com.au/browse/health-beauty/period-care/tampons' },
         ],
       },
       // not scraped
       {
         subCategory: 'Personal Care',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Footcare', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/footcare' },
           { subId: '', childId: '', extensionCategory: 'Mens Deodorants', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/mens-deodorants' },
           { subId: '24060', childId: '', extensionCategory: 'Pregnancy Tests', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/pregnancy-tests' },
           { subId: '24060', childId: '', extensionCategory: 'Sexual Health', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/sexual-health' },
           { subId: '', childId: '', extensionCategory: 'Womens Deodorants', url: 'https://www.coles.com.au/browse/health-beauty/personal-care/womens-deodorants' },
         ],
       },
       {
         subCategory: 'Shaving & Hair Removal',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'After Shave Care', url: 'https:www.coles.com.au/browse/health-beauty/shaving-hair-removal/after-shave-care' },
           { subId: '', childId: '', extensionCategory: 'Razors & Blades', url: 'https:www.coles.com.au/browse/health-beauty/shaving-hair-removal/razors-blades' },
           { subId: '', childId: '', extensionCategory: 'Shave Gel & Foam', url: 'https:www.coles.com.au/browse/health-beauty/shaving-hair-removal/shave-gel-foam' },
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
           { subId: '', childId: '', extensionCategory: 'Body Moisturiser', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/body-moisturiser' },
           { subId: '', childId: '', extensionCategory: 'Cleansers & Skincare Wipes', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/cleansers-skincare-wipes' },
           { subId: '', childId: '', extensionCategory: 'Face Moisturiser', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/face-moisturiser' },
           { subId: '', childId: '', extensionCategory: 'Hand Moisturiser', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/hand-moisturiser' },
           { subId: '', childId: '', extensionCategory: 'Lip Care', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/lip-care' },
           { subId: '', childId: '', extensionCategory: 'Mens Skin', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/mens-skin' },
           { subId: '', childId: '', extensionCategory: 'Self-Tanning', url: 'https:www.coles.com.au/browse/health-beauty/skin-care/self-tanning' },
         ],
       },
       {
         subCategory: 'Sun Protection',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'After Sun', url: 'https:www.coles.com.au/browse/health-beauty/sun-protection/after-sun' },
           { subId: '', childId: '', extensionCategory: 'Sun Care', url: 'https:www.coles.com.au/browse/health-beauty/sun-protection/sun-care' },
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
           { subId: '', childId: '', extensionCategory: 'Bone and Joint Health', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/bone-and-joint-health' },
           { subId: '', childId: '', extensionCategory: 'Brain, Eye and Heart Health', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/brain-eye-and-heart-health' },
           { subId: '', childId: '', extensionCategory: 'Detox and Digestive Health', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/detox-and-digestive-health' },
           { subId: '', childId: '', extensionCategory: 'Energy Support', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/energy-support' },
           { subId: '', childId: '', extensionCategory: 'Essential Oils and Aroma Therapy', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/essential-oils-and-aroma-therapy' },
           { subId: '', childId: '', extensionCategory: 'Family Planning', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/family-planning' },
           { subId: '', childId: '', extensionCategory: 'Fish Oil', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/fish-oil' },
           { subId: '', childId: '', extensionCategory: 'Hair, Skin & Nails', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/hair-skin-nails' },
           { subId: '', childId: '', extensionCategory: 'Immune Support', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/immune-support' },
           { subId: '', childId: '', extensionCategory: 'Iron', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/iron' },
           { subId: '', childId: '', extensionCategory: `Kid's Health`, url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/kids-health' },
           { subId: '', childId: '', extensionCategory: 'Mens and Womens Multi Vitamins', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/mens-and-womens-multi-vitamins' },
           { subId: '', childId: '', extensionCategory: 'Other Vitamins', url: 'https:www.coles.com.au/browse/health-beauty/vitamins-supplements/other-vitamins' },
         ],
       },
     ],
   },
  {
    category: 'Household',
    subCategories: [
      {
        subCategory: 'Air Fresheners & Home Fragrance',
        childItems: [
          { subId: '', childId: '', extensionCategory: 'All Airfreshners', url: 'https:www.coles.com.au/browse/household/air-fresheners-home-fragrance/all-airfreshners' },
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
          { subId: '', childId: '', extensionCategory: 'Bathroom Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/bathroom-cleaners' },
          { subId: '', childId: '', extensionCategory: 'Bleach', url: 'https:www.coles.com.au/browse/household/cleaning-goods/bleach' },
          { subId: '', childId: '', extensionCategory: 'Cleaning Accessories', url: 'https:www.coles.com.au/browse/household/cleaning-goods/cleaning-accessories' },
          { subId: '', childId: '', extensionCategory: 'Cleaning Gloves', url: 'https:www.coles.com.au/browse/household/cleaning-goods/cleaning-gloves' },
          { subId: '', childId: '', extensionCategory: 'Drain & Solvents', url: 'https:www.coles.com.au/browse/household/cleaning-goods/drain-solvents' },
          { subId: '', childId: '', extensionCategory: 'Fabric, Metal & Furniture', url: 'https:www.coles.com.au/browse/household/cleaning-goods/fabric-metal-furniture' },
          { subId: '', childId: '', extensionCategory: 'Floor & Carpet Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/floor-carpet-cleaners' },
          { subId: '', childId: '', extensionCategory: 'Kitchen Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/kitchen-cleaners' },
          { subId: '', childId: '', extensionCategory: 'Mops, Buckets & Brooms', url: 'https:www.coles.com.au/browse/household/cleaning-goods/mops-buckets-brooms' },
          { subId: '', childId: '', extensionCategory: 'Mould Killers & Disinfectants', url: 'https:www.coles.com.au/browse/household/cleaning-goods/mould-killers-disinfectants' },
          { subId: '', childId: '', extensionCategory: 'Multipurpose Cleaners', url: 'https:www.coles.com.au/browse/household/cleaning-goods/multipurpose-cleaners' },
          { subId: '', childId: '', extensionCategory: 'Paper Towels, Sponges and Brushes', url: 'https:www.coles.com.au/browse/household/cleaning-goods/paper-towels-sponges-and-brushes' },
          { subId: '', childId: '', extensionCategory: 'Sponges, Cloths & Wipes', url: 'https:www.coles.com.au/browse/household/cleaning-goods/sponges-cloths-wipes' },
          { subId: '', childId: '', extensionCategory: 'Toilet Cleaning', url: 'https:www.coles.com.au/browse/household/cleaning-goods/toilet-cleaning' },
          { subId: '', childId: '', extensionCategory: 'Windows & Glass', url: 'https:www.coles.com.au/browse/household/cleaning-goods/windows-glass' },
        ],
      },
      {
        subCategory: 'Clothing & Accessories',
        childItems: [
          { catId: '22015', subId: '22016', childId: '22018', extensionCategory: 'Babywear', url: 'https:www.coles.com.au/browse/household/clothing-accessories/babywear' },
          { subId: '', childId: '', extensionCategory: `Children's Socks`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/childrens-socks' },
          { subId: '', childId: '', extensionCategory: `Men's Socks`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/mens-socks' },
          { subId: '', childId: '', extensionCategory: `Men's Underwear`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/mens-underwear' },
          { subId: '', childId: '', extensionCategory: 'Seasonal Accessories', url: 'https:www.coles.com.au/browse/household/clothing-accessories/seasonal-accessories' },
          { subId: '', childId: '', extensionCategory: 'Shoe Care and Footwear', url: 'https:www.coles.com.au/browse/household/clothing-accessories/shoe-care-and-footwear' },
          { subId: '', childId: '', extensionCategory: `Women's Hosiery`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/womens-hosiery' },
          { subId: '', childId: '', extensionCategory: `Women's Socks`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/womens-socks' },
          { subId: '', childId: '', extensionCategory: `Women's Underwear`, url: 'https:www.coles.com.au/browse/household/clothing-accessories/womens-underwear' },
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
          { subId: '', childId: '', extensionCategory: 'All Paper Towels', url: 'https:www.coles.com.au/browse/household/dishwashing/all-paper-towels' },
          { subId: '', childId: '', extensionCategory: 'Dishwasher Additives', url: 'https:www.coles.com.au/browse/household/dishwashing/dishwasher-additives' },
          { subId: '', childId: '', extensionCategory: 'Dishwasher Tablets, Powder & Gel', url: 'https:www.coles.com.au/browse/household/dishwashing/dishwasher-tablets-powder-gel' },
          { subId: '', childId: '', extensionCategory: 'Dishwashing Liquid', url: 'https:www.coles.com.au/browse/household/dishwashing/dishwashing-liquid' },
          { subId: '', childId: '', extensionCategory: 'Gloves', url: 'https:www.coles.com.au/browse/household/dishwashing/gloves' },
          { subId: '', childId: '', extensionCategory: 'Sponges & Scourers', url: 'https:www.coles.com.au/browse/household/dishwashing/sponges-scourers' },
        ],
      },
      {
        subCategory: 'Diy & Car',
        childItems: [
          { subId: '', childId: '', extensionCategory: 'Adhesives, Glues & Tapes', url: 'https:www.coles.com.au/browse/household/diy-car/adhesives-glues-tapes' },
          { subId: '', childId: '', extensionCategory: 'Car Care', url: 'https:www.coles.com.au/browse/household/diy-car/car-care' },
          { subId: '', childId: '', extensionCategory: 'Car Oil & Coolants', url: 'https:www.coles.com.au/browse/household/diy-car/car-oil-coolants' },
          { subId: '', childId: '', extensionCategory: 'Home Maintenance', url: 'https:www.coles.com.au/browse/household/diy-car/home-maintenance' },
          { subId: '', childId: '', extensionCategory: 'Hooks & Fasteners', url: 'https:www.coles.com.au/browse/household/diy-car/hooks-fasteners' },
          { subId: '', childId: '', extensionCategory: 'Security', url: 'https:www.coles.com.au/browse/household/diy-car/security' },
          { subId: '', childId: '', extensionCategory: 'Tools & Accessories', url: 'https:www.coles.com.au/browse/household/diy-car/tools-accessories' },
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
           { subId: '', childId: '', extensionCategory: 'Gloves & Tools', url: 'https:www.coles.com.au/browse/household/garden/gloves-tools' },
           { subId: '', childId: '', extensionCategory: 'Insecticide & Weed Control', url: 'https:www.coles.com.au/browse/household/garden/insecticide-weed-control' },
           { subId: '', childId: '', extensionCategory: 'Lawncare & Plant Food', url: 'https:www.coles.com.au/browse/household/garden/lawncare-plant-food' },
           { subId: '', childId: '', extensionCategory: 'Potting Mix & Fertilizer', url: 'https:www.coles.com.au/browse/household/garden/potting-mix-fertilizer' },
           { subId: '', childId: '', extensionCategory: 'Seeds & Plants', url: 'https:www.coles.com.au/browse/household/garden/seeds-plants' },
           { subId: '', childId: '', extensionCategory: 'Watering', url: 'https:www.coles.com.au/browse/household/garden/watering' },
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
           { subId: '', childId: '', extensionCategory: 'Water Filtration', url: 'https:www.coles.com.au/browse/household/homewares/water-filtration' },
         ],
       },
       {
         subCategory: 'Kitchen',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Baking Tins & Trays', url: 'https:www.coles.com.au/browse/household/kitchen/baking-tins-trays' },
           { subId: '', childId: '', extensionCategory: 'Foil, Baking Paper & Oven Bags', url: 'https:www.coles.com.au/browse/household/kitchen/foil-baking-paper-oven-bags' },
           { subId: '', childId: '', extensionCategory: 'Food Tubs & Containers', url: 'https:www.coles.com.au/browse/household/kitchen/food-tubs-containers' },
           { subId: '', childId: '', extensionCategory: 'Kitchen Tidy & Garbage Bags', url: 'https:www.coles.com.au/browse/household/kitchen/kitchen-tidy-garbage-bags' },
           { subId: '', childId: '', extensionCategory: 'Plastic Wraps & Bags', url: 'https:www.coles.com.au/browse/household/kitchen/plastic-wraps-bags' },
           { subId: '', childId: '', extensionCategory: 'Pots & Saucepans', url: 'https:www.coles.com.au/browse/household/kitchen/pots-saucepans' },
           { subId: '', childId: '', extensionCategory: 'Sandwich & Freezer Bags', url: 'https:www.coles.com.au/browse/household/kitchen/sandwich-freezer-bags' },
           { subId: '', childId: '', extensionCategory: 'Utensils & Gadgets', url: 'https:www.coles.com.au/browse/household/kitchen/utensils-gadgets' },
         ],
       },
       {
         subCategory: 'Laundry',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Fabric Softener', url: 'https:www.coles.com.au/browse/household/laundry/fabric-softener' },
           { subId: '', childId: '', extensionCategory: 'Ironing Aids', url: 'https:www.coles.com.au/browse/household/laundry/ironing-aids' },
           { subId: '', childId: '', extensionCategory: 'Laundry Accessories', url: 'https:www.coles.com.au/browse/household/laundry/laundry-accessories' },
           { subId: '', childId: '', extensionCategory: 'Laundry Liquid', url: 'https:www.coles.com.au/browse/household/laundry/laundry-liquid' },
           { subId: '', childId: '', extensionCategory: 'Laundry Powder', url: 'https:www.coles.com.au/browse/household/laundry/laundry-powder' },
           { subId: '', childId: '', extensionCategory: 'Pegs, Baskets & Hangers', url: 'https:www.coles.com.au/browse/household/laundry/pegs-baskets-hangers' },
           { subId: '', childId: '', extensionCategory: 'Stain Removal & Pre-Wash', url: 'https:www.coles.com.au/browse/household/laundry/stain-removal-pre-wash' },
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
           { subId: '', childId: '', extensionCategory: 'Automotive', url: 'https:www.coles.com.au/browse/household/outdoors/automotive' },
           { subId: '', childId: '', extensionCategory: 'Bbq', url: 'https:www.coles.com.au/browse/household/outdoors/bbq' },
           { subId: '', childId: '', extensionCategory: 'Camping & Fishing', url: 'https:www.coles.com.au/browse/household/outdoors/camping-fishing' },
           { subId: '', childId: '', extensionCategory: 'Matches & Lighters', url: 'https:www.coles.com.au/browse/household/outdoors/matches-lighters' },
         ],
       },
       {
         subCategory: 'Party Supplies',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Candles', url: 'https:www.coles.com.au/browse/household/party-supplies/candles' },
           { subId: '', childId: '', extensionCategory: 'Cups & Glasses', url: 'https:www.coles.com.au/browse/household/party-supplies/cups-glasses' },
           { subId: '', childId: '', extensionCategory: 'Decorations', url: 'https:www.coles.com.au/browse/household/party-supplies/decorations' },
           { subId: '', childId: '', extensionCategory: 'Disposable Plates & Bowls', url: 'https:www.coles.com.au/browse/household/party-supplies/disposable-plates-bowls' },
           { subId: '', childId: '', extensionCategory: 'Gift Wrap & Bags', url: 'https:www.coles.com.au/browse/household/party-supplies/gift-wrap-bags' },
           { subId: '', childId: '', extensionCategory: 'Paper & Plastic Cutlery', url: 'https:www.coles.com.au/browse/household/party-supplies/paper-plastic-cutlery' },
           { subId: '', childId: '', extensionCategory: 'Serviettes & Tablecloths', url: 'https:www.coles.com.au/browse/household/party-supplies/serviettes-tablecloths' },
         ],
       },
       {
         subCategory: 'Pest Control',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Crawling Insects', url: 'https:www.coles.com.au/browse/household/pest-control/crawling-insects' },
           { subId: '', childId: '', extensionCategory: 'Flying Insects', url: 'https:www.coles.com.au/browse/household/pest-control/flying-insects' },
           { subId: '', childId: '', extensionCategory: 'Garden Pests', url: 'https:www.coles.com.au/browse/household/pest-control/garden-pests' },
           { subId: '', childId: '', extensionCategory: 'Mosquitos', url: 'https:www.coles.com.au/browse/household/pest-control/mosquitos' },
           { subId: '', childId: '', extensionCategory: 'Rodents', url: 'https:www.coles.com.au/browse/household/pest-control/rodents' },
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
           { subId: '', childId: '', extensionCategory: 'Magazines', url: 'https:www.coles.com.au/browse/household/stationery-media/magazines' },
           { subId: '', childId: '', extensionCategory: 'Media', url: 'https:www.coles.com.au/browse/household/stationery-media/media' },
           { subId: '', childId: '', extensionCategory: 'Stationery', url: 'https:www.coles.com.au/browse/household/stationery-media/stationery' },
           { subId: '', childId: '', extensionCategory: 'Toys & Game', url: 'https:www.coles.com.au/browse/household/stationery-media/toys-game' },
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
     subCategories: [
       {
         subCategory: 'Baking',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Breadcrumbs & Stuffing', url: 'https:www.coles.com.au/browse/pantry/baking/breadcrumbs-stuffing' },
           { subId: '', childId: '', extensionCategory: 'Cake & Bread Mixes', url: 'https:www.coles.com.au/browse/pantry/baking/cake-bread-mixes' },
           { subId: '', childId: '', extensionCategory: 'Cake Decorating', url: 'https:www.coles.com.au/browse/pantry/baking/cake-decorating' },
           { subId: '', childId: '', extensionCategory: 'Cooking Chocolate & Cocoa', url: 'https:www.coles.com.au/browse/pantry/baking/cooking-chocolate-cocoa' },
           { subId: '', childId: '', extensionCategory: 'Dried Fruits & Fillings', url: 'https:www.coles.com.au/browse/pantry/baking/dried-fruits-fillings' },
           { subId: '', childId: '', extensionCategory: 'Essence & Food Colouring', url: 'https:www.coles.com.au/browse/pantry/baking/essence-food-colouring' },
           { subId: '', childId: '', extensionCategory: 'Flour', url: 'https:www.coles.com.au/browse/pantry/baking/flour' },
           { subId: '', childId: '', extensionCategory: 'Nuts for Baking', url: 'https:www.coles.com.au/browse/pantry/baking/nuts-for-baking' },
           { subId: '', childId: '', extensionCategory: 'Pancake & Dessert Mixes', url: 'https:www.coles.com.au/browse/pantry/baking/pancake-dessert-mixes' },
           { subId: '', childId: '', extensionCategory: 'Sugar & Sweeteners', url: 'https:www.coles.com.au/browse/pantry/baking/sugar-sweeteners' },
           { subId: '', childId: '', extensionCategory: 'Yeast & Baking Agents', url: 'https:www.coles.com.au/browse/pantry/baking/yeast-baking-agents' },
         ],
       },
        {
          subCategory: 'Breakfast',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Breakfast Cereal', url: 'https:www.coles.com.au/browse/pantry/breakfast/breakfast-cereal' },
            { subId: '', childId: '', extensionCategory: 'Breakfast Muesli', url: 'https:www.coles.com.au/browse/pantry/breakfast/breakfast-muesli' },
            { subId: '', childId: '', extensionCategory: 'Breakfast Oats', url: 'https:www.coles.com.au/browse/pantry/breakfast/breakfast-oats' },
            { subId: '', childId: '', extensionCategory: 'Family Favourites', url: 'https:www.coles.com.au/browse/pantry/breakfast/family-favourites' },
            { subId: '', childId: '', extensionCategory: 'Gluten Free Cereal', url: 'https:www.coles.com.au/browse/pantry/breakfast/gluten-free-cereal' },
            { subId: '', childId: '', extensionCategory: 'Healthier Start', url: 'https:www.coles.com.au/browse/pantry/breakfast/healthier-start' },
            { subId: '', childId: '', extensionCategory: 'On the Go', url: 'https:www.coles.com.au/browse/pantry/breakfast/on-the-go' },
          ],
        },
        {
          subCategory: 'Canned Food, Soups & Noodles',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Baked Beans & Spaghetti', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/baked-beans-spaghetti' },
            { subId: '', childId: '', extensionCategory: 'Canned Beans & Legumes', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-beans-legumes' },
            { subId: '', childId: '', extensionCategory: 'Canned Fruit', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-fruit' },
            { subId: '', childId: '', extensionCategory: 'Canned Meat', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-meat' },
            { subId: '', childId: '', extensionCategory: 'Canned Vegetables', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/canned-vegetables' },
            { subId: '', childId: '', extensionCategory: 'Condensed & Evaporated Milk', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/condensed-evaporated-milk' },
            { subId: '', childId: '', extensionCategory: 'Fish & Seafood', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/fish-seafood' },
            { subId: '', childId: '', extensionCategory: 'Instant Meals & Sides', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/instant-meals-sides' },
            { subId: '', childId: '', extensionCategory: 'Noodles', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/noodles' },
            { subId: '', childId: '', extensionCategory: 'Soups', url: 'https:www.coles.com.au/browse/pantry/canned-food-soups-noodles/soups' },
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
            { subId: '', childId: '', extensionCategory: 'Custard, Cream & Yoghurt Desserts', url: 'https:www.coles.com.au/browse/pantry/desserts/custard-cream-yoghurt-desserts' },
            { subId: '', childId: '', extensionCategory: 'Icecream Cones, Syrups & Toppings', url: 'https:www.coles.com.au/browse/pantry/desserts/icecream-cones-syrups-toppings' },
            { subId: '', childId: '', extensionCategory: 'Jelly', url: 'https:www.coles.com.au/browse/pantry/desserts/jelly' },
            { subId: '', childId: '', extensionCategory: 'Puddings', url: 'https:www.coles.com.au/browse/pantry/desserts/puddings' },
            { subId: '', childId: '', extensionCategory: 'ready-to-freeze Ice Blocks', url: 'https:www.coles.com.au/browse/pantry/desserts/ready-to-freeze-ice-blocks' },  
          ],
        },
        {
          subCategory: 'Health Foods',
          childItems: [
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
            { subId: '', childId: '', extensionCategory: 'Dried Herbs & Spices', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/dried-herbs-spices' },
            { subId: '', childId: '', extensionCategory: 'Dried Spices', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/dried-spices' },
            { subId: '', childId: '', extensionCategory: 'Jars & Pastes', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/jars-pastes' },
            { subId: '', childId: '', extensionCategory: 'Packet Seasonings', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/packet-seasonings' },
            { subId: '', childId: '', extensionCategory: 'Salt & Pepper', url: 'https:www.coles.com.au/browse/pantry/herbs-spices/salt-pepper' },
          ],
        },
        {
          subCategory: 'International Foods',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Asian', url: 'https:www.coles.com.au/browse/pantry/international-foods/asian' },
            { subId: '', childId: '', extensionCategory: 'European', url: 'https:www.coles.com.au/browse/pantry/international-foods/european' },
            { subId: '', childId: '', extensionCategory: 'Indian', url: 'https:www.coles.com.au/browse/pantry/international-foods/indian' },
            { subId: '', childId: '', extensionCategory: 'Kosher', url: 'https:www.coles.com.au/browse/pantry/international-foods/kosher' },
            { subId: '', childId: '', extensionCategory: 'Mediterranean', url: 'https:www.coles.com.au/browse/pantry/international-foods/mediterranean' },
            { subId: '', childId: '', extensionCategory: 'Mexican', url: 'https:www.coles.com.au/browse/pantry/international-foods/mexican' },
            { subId: '', childId: '', extensionCategory: 'Middle Eastern', url: 'https:www.coles.com.au/browse/pantry/international-foods/middle-eastern' },
            { subId: '', childId: '', extensionCategory: 'New Zealand', url: 'https:www.coles.com.au/browse/pantry/international-foods/new-zealand' },
            { subId: '', childId: '', extensionCategory: 'South African', url: 'https:www.coles.com.au/browse/pantry/international-foods/south-african' },
            { subId: '', childId: '', extensionCategory: 'Uk', url: 'https:www.coles.com.au/browse/pantry/international-foods/uk' },
            { subId: '', childId: '', extensionCategory: 'Usa', url: 'https:www.coles.com.au/browse/pantry/international-foods/usa' },
          ],
        },
        {
          subCategory: 'Jams, Honey & Spreads',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Chocolate Spreads', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/chocolate-spreads' },
            { subId: '', childId: '', extensionCategory: 'Honey', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/honey' },
            { subId: '', childId: '', extensionCategory: 'Jams', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/jams' },
            { subId: '', childId: '', extensionCategory: 'Nut Spreads', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/nut-spreads' },
            { subId: '', childId: '', extensionCategory: 'Savoury Spreads', url: 'https:www.coles.com.au/browse/pantry/jams-honey-spreads/savoury-spreads' },
          ],
        },
        {
          subCategory: 'Local Foods',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Local Snacks & Drinks', url: 'https:www.coles.com.au/browse/pantry/local-foods/local-snacks-drinks' },
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
            { subId: '', childId: '', extensionCategory: 'Beans & Legumes', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/beans-legumes' },
            { subId: '', childId: '', extensionCategory: 'Fresh Pasta', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/fresh-pasta' },
            { subId: '', childId: '', extensionCategory: 'Microwave Rice', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/microwave-rice' },
            { subId: '', childId: '', extensionCategory: 'Pasta', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/pasta' },
            { subId: '', childId: '', extensionCategory: 'Polenta & Other Grains', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/polenta-other-grains' },
            { subId: '', childId: '', extensionCategory: 'Rice', url: 'https:www.coles.com.au/browse/pantry/pasta-rice-legumes-grains/rice' },
          ],
        },
        {
          subCategory: 'Pickled Vegetables & Condiments',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Mayonnaise', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/mayonnaise' },
            { subId: '', childId: '', extensionCategory: 'Mustard', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/mustard' },
            { subId: '', childId: '', extensionCategory: 'Pickles, Chutney & Relish', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/pickles-chutney-relish' },
            { subId: '', childId: '', extensionCategory: 'Salad Dressings', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/salad-dressings' },
            { subId: '', childId: '', extensionCategory: 'Syrups & Toppings', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/syrups-toppings' },
            { subId: '', childId: '', extensionCategory: 'Tomato & Bbq Sauces', url: 'https:www.coles.com.au/browse/pantry/pickled-vegetables-condiments/tomato-bbq-sauces' },
          ],
        },
        {
          subCategory: 'Sauces',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Marinades', url: 'https:www.coles.com.au/browse/pantry/sauces/marinades' },
            { subId: '', childId: '', extensionCategory: 'Mustards', url: 'https:www.coles.com.au/browse/pantry/sauces/mustards' },
            { subId: '', childId: '', extensionCategory: 'Pizza & Pasta', url: 'https:www.coles.com.au/browse/pantry/sauces/pizza-pasta' },
            { subId: '', childId: '', extensionCategory: 'Recipe & Meal Bases', url: 'https:www.coles.com.au/browse/pantry/sauces/recipe-meal-bases' },
            { subId: '', childId: '', extensionCategory: 'Soy & Asian', url: 'https:www.coles.com.au/browse/pantry/sauces/soy-asian' },
            { subId: '', childId: '', extensionCategory: 'Stir-Fry and Curries', url: 'https:www.coles.com.au/browse/pantry/sauces/stir-fry-and-curries' },
            { subId: '', childId: '', extensionCategory: 'Sweet Chilli & Hot', url: 'https:www.coles.com.au/browse/pantry/sauces/sweet-chilli-hot' },
            { subId: '', childId: '', extensionCategory: 'Tomato & Bbq', url: 'https:www.coles.com.au/browse/pantry/sauces/tomato-bbq' },
          ],
        },
        {
          subCategory: 'Stocks & Gravy',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Dry Stock', url: 'https:www.coles.com.au/browse/pantry/stocks-gravy/dry-stock' },
            { subId: '', childId: '', extensionCategory: 'Gravy', url: 'https:www.coles.com.au/browse/pantry/stocks-gravy/gravy' },
            { subId: '', childId: '', extensionCategory: 'Liquid Stock', url: 'https:www.coles.com.au/browse/pantry/stocks-gravy/liquid-stock' },
          ],
        },
        {
          subCategory: 'Tea',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Black', url: 'https:www.coles.com.au/browse/pantry/tea/black' },
            { subId: '', childId: '', extensionCategory: 'Bubble Tea', url: 'https:www.coles.com.au/browse/pantry/tea/bubble-tea' },
            { subId: '', childId: '', extensionCategory: 'Chai', url: 'https:www.coles.com.au/browse/pantry/tea/chai' },
            { subId: '', childId: '', extensionCategory: 'Green', url: 'https:www.coles.com.au/browse/pantry/tea/green' },
            { subId: '', childId: '', extensionCategory: 'Herbal', url: 'https:www.coles.com.au/browse/pantry/tea/herbal' },
            { subId: '', childId: '', extensionCategory: 'Loose Leaf', url: 'https:www.coles.com.au/browse/pantry/tea/loose-leaf' },
            { subId: '', childId: '', extensionCategory: 'Organic', url: 'https:www.coles.com.au/browse/pantry/tea/organic' },
            { subId: '', childId: '', extensionCategory: 'White', url: 'https:www.coles.com.au/browse/pantry/tea/white' },
          ],
        },
     ],
   },
   {
     category: 'Pet',
     subCategories: [
       {
         subCategory: 'Birds',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Bird Food', url: 'https:www.coles.com.au/browse/pet/birds/bird-food' },
           { subId: '', childId: '', extensionCategory: 'Bird Treats', url: 'https:www.coles.com.au/browse/pet/birds/bird-treats' },
         ],
       },
       {
         subCategory: 'Cat & Kitten',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Cat Accessories, Grooming & Toys', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-accessories-grooming-toys' },
           { subId: '', childId: '', extensionCategory: 'Cat Flea & Worming', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-flea-worming' },
           { subId: '', childId: '', extensionCategory: 'Cat Litter', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-litter' },
           { subId: '', childId: '', extensionCategory: 'Cat Treats & Milk', url: 'https:www.coles.com.au/browse/pet/cat-kitten/cat-treats-milk' },
           { subId: '', childId: '', extensionCategory: 'Chilled Cat Food', url: 'https:www.coles.com.au/browse/pet/cat-kitten/chilled-cat-food' },
           { subId: '', childId: '', extensionCategory: 'Dry Cat Food', url: 'https:www.coles.com.au/browse/pet/cat-kitten/dry-cat-food' },
           { subId: '', childId: '', extensionCategory: 'Kitten Food, Treats & Milk', url: 'https:www.coles.com.au/browse/pet/cat-kitten/kitten-food-treats-milk' },
           { subId: '', childId: '', extensionCategory: 'Trays & Cans Cat Food', url: 'https:www.coles.com.au/browse/pet/cat-kitten/trays-cans-cat-food' },
         ],
       },
       {
         subCategory: 'Dog & Puppy',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Dog Accessories, Grooming & Toys', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dog-accessories-grooming-toys' },
           { subId: '', childId: '', extensionCategory: 'Dog Flea & Worming', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dog-flea-worming' },
           { subId: '', childId: '', extensionCategory: 'Dog Treats & Milk', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dog-treats-milk' },
           { subId: '', childId: '', extensionCategory: 'Dry Dog Food', url: 'https:www.coles.com.au/browse/pet/dog-puppy/dry-dog-food' },
           { subId: '', childId: '', extensionCategory: 'Puppy Food, Treats & Milk', url: 'https:www.coles.com.au/browse/pet/dog-puppy/puppy-food-treats-milk' },
           { subId: '', childId: '', extensionCategory: 'Trays & Cans Dog Food', url: 'https:www.coles.com.au/browse/pet/dog-puppy/trays-cans-dog-food' },
         ],
       },
       {
         subCategory: 'Fish Food & Accessories',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Fish Food', url: 'https:www.coles.com.au/browse/pet/fish-food-accessories/fish-food' },
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
           { subId: '', childId: '', extensionCategory: 'Small Pets Food', url: 'https:www.coles.com.au/browse/pet/small-pets/small-pets-food' },
         ],
       },
     ],
   },
   {
     category: 'Poultry, Meat & Seafood',
     subCategories: [
       {
         subCategory: 'Bbq, Sausages & Burgers',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Burgers & Rissoles', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/burgers-rissoles' },
           { subId: '', childId: '', extensionCategory: 'Kebabs', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/kebabs' },
           { subId: '', childId: '', extensionCategory: 'Meatballs', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/meatballs' },
           { subId: '', childId: '', extensionCategory: 'Sausage Mince', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausage-mince' },
           { subId: '', childId: '', extensionCategory: 'Sausages', url: 'https:www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausages' },
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
           { subId: '', childId: '', extensionCategory: 'Diced Lamb', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/diced-lamb' },
           { subId: '', childId: '', extensionCategory: 'Graze Grass-Fed Lamb', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/graze-grass-fed-lamb' },
           { subId: '', childId: '', extensionCategory: 'Lamb Chops', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-chops' },
           { subId: '', childId: '', extensionCategory: 'Lamb Cutlets', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-cutlets' },
           { subId: '', childId: '', extensionCategory: 'Lamb Offal', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-offal' },
           { subId: '', childId: '', extensionCategory: 'Lamb Roasts', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-roasts' },
           { subId: '', childId: '', extensionCategory: 'Lamb Shanks', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-shanks' },
           { subId: '', childId: '', extensionCategory: 'Lamb Steak', url: 'https:www.coles.com.au/browse/meat-seafood/lamb/lamb-steak' },
         ],
       },
       {
         subCategory: 'Mince',
         childItems: [
           { subId: '', childId: '', extensionCategory: 'Beef & Veal Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/beef-veal-mince' },
           { subId: '', childId: '', extensionCategory: 'Chicken & Turkey Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/chicken-turkey-mince' },
           { subId: '', childId: '', extensionCategory: 'Kangaroo & Wallaby Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/kangaroo-wallaby-mince' },
           { subId: '', childId: '', extensionCategory: 'Lamb Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/lamb-mince' },
           { subId: '', childId: '', extensionCategory: 'Pork Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/pork-mince' },
           { subId: '', childId: '', extensionCategory: 'Sausage Mince', url: 'https:www.coles.com.au/browse/meat-seafood/mince/sausage-mince' },
         ],
       },
        {
          subCategory: 'Organic Meat',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Organic Beef', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-beef' },
            { subId: '', childId: '', extensionCategory: 'Organic Lamb', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-lamb' },
            { subId: '', childId: '', extensionCategory: 'Organic Poultry', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-poultry' },
            { subId: '', childId: '', extensionCategory: 'Organic Sausages & Meatballs', url: 'https:www.coles.com.au/browse/meat-seafood/organic-meat/organic-sausages-meatballs' },
          ],
        },
        {
          subCategory: 'Pork',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Free Range Pork', url: 'https:www.coles.com.au/browse/meat-seafood/pork/free-range-pork' },
            { subId: '', childId: '', extensionCategory: 'Pork Chops', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-chops' },
            { subId: '', childId: '', extensionCategory: 'Pork Marinade', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-marinade' },
            { subId: '', childId: '', extensionCategory: 'Pork Mince', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-mince' },
            { subId: '', childId: '', extensionCategory: 'Pork Ribs', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-ribs' },
            { subId: '', childId: '', extensionCategory: 'Pork Roasts', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-roasts' },
            { subId: '', childId: '', extensionCategory: 'Pork Steaks', url: 'https:www.coles.com.au/browse/meat-seafood/pork/pork-steaks' },
          ],
        },
        {
          subCategory: 'Poultry',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Breast Fillets', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/breast-fillets' },
            { subId: '', childId: '', extensionCategory: 'Chicken Offal', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/chicken-offal' },
            { subId: '', childId: '', extensionCategory: 'Chicken Wings', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/chicken-wings' },
            { subId: '', childId: '', extensionCategory: 'Crumbed Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/crumbed-chicken' },
            { subId: '', childId: '', extensionCategory: 'Diced, Stir-Fry & Tenders', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/diced-stir-fry-tenders' },
            { subId: '', childId: '', extensionCategory: 'Drumsticks & Maryland', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/drumsticks-maryland' },
            { subId: '', childId: '', extensionCategory: 'Duck', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/duck' },
            { subId: '', childId: '', extensionCategory: 'Free Range Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/free-range-chicken' },
            { subId: '', childId: '', extensionCategory: 'Kebabs & Bites', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/kebabs-bites' },
            { subId: '', childId: '', extensionCategory: 'Marinated & Roast Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/marinated-roast-chicken' },
            { subId: '', childId: '', extensionCategory: 'Poultry Deli', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/poultry-deli' },
            { subId: '', childId: '', extensionCategory: 'Thigh Fillets', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/thigh-fillets' },
            { subId: '', childId: '', extensionCategory: 'Turkey', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/turkey' },
            { subId: '', childId: '', extensionCategory: 'Whole Chicken', url: 'https:www.coles.com.au/browse/meat-seafood/poultry/whole-chicken' },
          ],
        },
        {
          subCategory: 'Seafood',
          childItems: [
            { subId: '', childId: '', extensionCategory: 'Deli Fish', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/deli-fish' },
            { subId: '', childId: '', extensionCategory: 'Deli Marinara Mix and Other Seafood', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/deli-marinara-mix-and-other-seafood' },
            { subId: '', childId: '', extensionCategory: 'Deli Prawns', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/deli-prawns' },
            { subId: '', childId: '', extensionCategory: 'Prepacked Seafood', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/prepacked-seafood' },
            { subId: '', childId: '', extensionCategory: 'Smoked and Cured Fish', url: 'https:www.coles.com.au/browse/meat-seafood/seafood/smoked-and-cured-fish' },
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
