const categories = [
  {
    category: 'Baby',
    subCategories: [
      {
        subCategory: 'Baby Accessories',
        childItems: [
          { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/baby/nappies-nappy-pants' },
          { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/baby/baby-wipes' },
          { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/baby/baby-formula' },
          { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/baby/baby-feeding' },
          { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/baby/baby-accessories' },
          { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/baby/baby-toddler-food' },
          { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/baby/baby-meal-time' },
          { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/baby/bottles-feeding' },
          { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/baby/bath-skincare' },
          { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/baby/dummies-teething' },
          { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/baby/baby-clothing' },
          { extensionCategory: 'l', url: 'https://www.coles.com.au/browse/baby/postpartum-care' }, // 12
        ],
      },
    ],
  },
  {
    category: 'Bakery',
    subCategories: [
      {
        subCategory: 'In-Store Bakery',
        childItems: [
          { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts' },
          { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/bakery/easter-bakery' },
          { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/bakery/gluten-free-range' },
          { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-breads-and-rolls' },
          { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/bakery/instore-bakery-sweet-treats' },
          { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/bakery/packaged-bread-rolls-and-buns' },
          { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/bakery/packaged-breads' },
          { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/bakery/packaged-breakfast-snacks' },
          { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/bakery/packaged-cakes-sweet-treats' },
          { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/bakery/packaged-flat-bread-wraps-and-pizza-bases' },
          { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/bakery/vegan-range' }, // 11
        ],
      },
    ],
  },
  {
    category: 'Dairy, Eggs & Fridge',
    subCategories: [
      {
        subCategory: 'Cheese',
        childItems: [
          { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/butter-margarine' },
          { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cheese' },
          { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/cream-custard' },
          // { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dairy-desserts' },
          // { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dairy-world-foods' },
          // { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/dips-pate' },
          // { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/eggs' },
          // { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/fresh-pasta-sauces' },
          // { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/garlic-bread-pastry-sheets' },
          // { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/long-life-milk' },
          // { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/milk' },
          // { extensionCategory: 'l', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/packaged-deli-meats' },
          // { extensionCategory: 'm', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/ready-to-eat-meals' },
          // { extensionCategory: 'n', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/vegetarian-vegan' },
          // { extensionCategory: 'o', url: 'https://www.coles.com.au/browse/dairy-eggs-fridge/yoghurt' },
        ],
      },
    ],
  },
  // {
  //   category: 'Deli & Chilled Meats',
  //   subCategories: [
  //     {
  //       subCategory: 'Deli Meats',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/deli/deli-meats' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/deli/deli-packaged-meat' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/deli/deli-poultry' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/deli/deli-seafood' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/deli/entertaining' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/deli/gourmet-cheese' },
  //         { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/deli/pre-made-platters' },
  //         { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/deli/ready-to-eat' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Drinks',
  //   subCategories: [
  //     {
  //       subCategory: 'Chilled Drinks',
  //       childItems: [
  //         // { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/drinks/coffee-drinks' },
  //         // { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/drinks/cold-drinks' },
  //         // { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/drinks/cordials' },
  //         // { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/drinks/energy-drinks' },
  //         // { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/drinks/flavoured-milk' },
  //         // { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/drinks/iced-tea' },
  //         // { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/drinks/juice' },
  //         // { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/drinks/long-life-milk' },
  //         // { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/drinks/non-alcoholic' },
  //         { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/drinks/soft-drinks' },
  //         { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/drinks/sports-drinks' },
  //         { extensionCategory: 'l', url: 'https://www.coles.com.au/browse/drinks/tea-drinks' },
  //         { extensionCategory: 'm', url: 'https://www.coles.com.au/browse/drinks/water' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Freezer',
  //   subCategories: [
  //     {
  //       subCategory: 'Chips & Wedges',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/frozen/ice-cream' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/frozen/frozen-baby-toddler-meals' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/frozen/frozen-chicken-beef-pork' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/frozen/frozen-chips-wedges' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/frozen/frozen-desserts' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/frozen/frozen-fish-seafood' },
  //         { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/frozen/frozen-fruit' },
  //         { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/frozen/frozen-gluten-free' },
  //         { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/frozen/frozen-meals' },
  //         { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/frozen/frozen-pastry-party-food' },
  //         { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/frozen/frozen-pizza-bases' },
  //         { extensionCategory: 'l', url: 'https://www.coles.com.au/browse/frozen/frozen-vegan-vegetarian' },
  //         { extensionCategory: 'm', url: 'https://www.coles.com.au/browse/frozen/frozen-vegetables' },
  //         { extensionCategory: 'n', url: 'https://www.coles.com.au/browse/frozen/frozen-world-food' }, // 14
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Fruit & Veg',
  //   subCategories: [
  //     {
  //       subCategory: 'Organic',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/fruit-vegetables/fruit' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/fruit-vegetables/vegetables' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/fruit-vegetables/nuts-dried-fruit' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/fruit-vegetables/organic-fruits-vegetables' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/fruit-vegetables/packaged-salad' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/fruit-vegetables/prepared-vegetable' },
  //         { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/fruit-vegetables/salad-herbs' },
  //         { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/fruit-vegetables/scoop-weigh' }, // 8
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Health & Beauty',
  //   subCategories: [
  //     {
  //       subCategory: 'Cosmetics',
  //       childItems: [
  //         // { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/health-beauty/continence-care' },
  //         // { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/health-beauty/cosmetics' },
  //         // { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/health-beauty/dental-care' },
  //         // { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/health-beauty/first-aid-medicinal' },
  //         // { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/health-beauty/hair-care' },
  //         // { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/health-beauty/period-care' },
  //         // { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/health-beauty/personal-care' },
  //         // { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/health-beauty/shaving-hair-removal' },
  //         // { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/health-beauty/shower-bath-care' },
  //         { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/health-beauty/skin-care' },
  //         { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/health-beauty/sun-protection' },
  //         { extensionCategory: 'l', url: 'https://www.coles.com.au/browse/health-beauty/travel-packs-and-minis' },
  //         { extensionCategory: 'm', url: 'https://www.coles.com.au/browse/health-beauty/vitamins-supplements' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Household',
  //   subCategories: [
  //     {
  //       subCategory: 'Homewares',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/household/air-fresheners-home-fragrance' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/household/charity-donations' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/household/cleaning-goods' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/household/clothing-accessories' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/household/craft-toys-games' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/household/dishwashing' },
  //         { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/household/diy-car' },
  //         { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/household/electrical' },
  //         { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/household/food-storage' },
  //         { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/household/garden' },
  //         { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/household/gifting' },
  //         { extensionCategory: 'l', url: 'https://www.coles.com.au/browse/household/homewares' },
  //         { extensionCategory: 'm', url: 'https://www.coles.com.au/browse/household/kitchen' },
  //         { extensionCategory: 'n', url: 'https://www.coles.com.au/browse/household/laundry' },
  //         { extensionCategory: 'o', url: 'https://www.coles.com.au/browse/household/mobile-tech-accessories' },
  //         { extensionCategory: 'p', url: 'https://www.coles.com.au/browse/household/outdoors' },
  //         { extensionCategory: 'q', url: 'https://www.coles.com.au/browse/household/party-supplies' },
  //         { extensionCategory: 'r', url: 'https://www.coles.com.au/browse/household/pest-control' },
  //         { extensionCategory: 's', url: 'https://www.coles.com.au/browse/household/reusable-shopping-bags' },
  //         { extensionCategory: 't', url: 'https://www.coles.com.au/browse/household/sporting-essentials' },
  //         { extensionCategory: 'u', url: 'https://www.coles.com.au/browse/household/stationery-media' },
  //         { extensionCategory: 'v', url: 'https://www.coles.com.au/browse/household/tech-accessories' },
  //         { extensionCategory: 'w', url: 'https://www.coles.com.au/browse/household/toilet-paper-tissues-paper-towels' }, // 23
  //       ],
  //     },
  //   ],
  // },
  {
    category: 'Pantry',
    subCategories: [
      {
        subCategory: 'Baking',
        childItems: [
          { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/pantry/baking' },
          { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/pantry/breakfast' },
          { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/pantry/canned-food-soups-noodles' },
          { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/pantry/coffee' },
          // { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/pantry/desserts' },
          // { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/pantry/health-foods' },
          // { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/pantry/health-foods-sports-nutrition-diet' },
          // { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/pantry/herbs-spices' },
          // { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/pantry/international-foods' },
          // { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/pantry/jams-honey-spreads' },
          // { extensionCategory: 'l', url: 'https://www.coles.com.au/browse/pantry/local-foods' },
          // { extensionCategory: 'm', url: 'https://www.coles.com.au/browse/pantry/oils-vinegars' },
          // { extensionCategory: 'n', url: 'https://www.coles.com.au/browse/pantry/pasta-rice-legumes-grains' },
          // { extensionCategory: 'o', url: 'https://www.coles.com.au/browse/pantry/pickled-vegetables-condiments' },
          // { extensionCategory: 'p', url: 'https://www.coles.com.au/browse/pantry/sauces' },
          // { extensionCategory: 'q', url: 'https://www.coles.com.au/browse/pantry/stocks-gravy' },
          // { extensionCategory: 'r', url: 'https://www.coles.com.au/browse/pantry/tea' },
          // { extensionCategory: 's', url: 'https://www.coles.com.au/browse/pantry/chips-crackers-snacks' }, // remove
          // confectionery
          // { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/biscuits-cookies' },
          // { extensionCategory: 't', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chips' },
          // { extensionCategory: 'u', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/chocolates' },
          // { extensionCategory: 'v', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/crackers-rice-cakes' },
          // { extensionCategory: 'w', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/gum-mints-lozenges' },
          // { extensionCategory: 'x', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/lollies-licorice' },
          // { extensionCategory: 'y', url: 'https://www.coles.com.au/browse/chips-chocolates-snacks/snacks' },
        ],
      },
    ],
  },
  // {
  //   category: 'Pet',
  //   subCategories: [
  //     {
  //       subCategory: 'Birds',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/pet/birds' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/pet/cat-kitten' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/pet/dog-puppy' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/pet/fish-food-accessories' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/pet/pet-scoop-weigh' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/pet/small-pets' }, // 6
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Poultry, Meat & Seafood',
  //   subCategories: [
  //     {
  //       subCategory: 'BBQ Meat & Seafood',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/meat-seafood/game' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/meat-seafood/ham' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/meat-seafood/lamb' },
  //         { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/meat-seafood/mince' },
  //         { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat' },
  //         { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/meat-seafood/pork' },
  //         { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/meat-seafood/poultry },
  //         { extensionCategory: 'k', url: 'https://www.coles.com.au/browse/meat-seafood/seafood' }, // 11
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Back to School',
  //   subCategories: [
  //     {
  //       subCategory: 'BBQ Meat & Seafood',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/back-to-school/easy-school-night-dinners' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/back-to-school/school-breakfast' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/back-to-school/school-lunches-snacking' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/back-to-school/school-stationery-accessories' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: 'Liquor',
  //   subCategories: [
  //     {
  //       subCategory: 'BBQ Meat & Seafood',
  //       childItems: [
  //         { extensionCategory: 'a', url: 'https://www.coles.com.au/browse/liquor/beer' },
  //         { extensionCategory: 'b', url: 'https://www.coles.com.au/browse/liquor/cask-fortified-wine' },
  //         { extensionCategory: 'c', url: 'https://www.coles.com.au/browse/liquor/champagne-sparkling' },
  //         { extensionCategory: 'd', url: 'https://www.coles.com.au/browse/liquor/cider' },
  //         { extensionCategory: 'e', url: 'https://www.coles.com.au/browse/liquor/low-mid-strength' },
  //         { extensionCategory: 'f', url: 'https://www.coles.com.au/browse/liquor/premixed-drinks' },
  //         { extensionCategory: 'g', url: 'https://www.coles.com.au/browse/liquor/red-wine' },
  //         { extensionCategory: 'h', url: 'https://www.coles.com.au/browse/liquor/rose' },
  //         { extensionCategory: 'i', url: 'https://www.coles.com.au/browse/liquor/spirits' },
  //         { extensionCategory: 'j', url: 'https://www.coles.com.au/browse/liquor/white-wine' },
  //       ],
  //     },
  //   ],
  // },
];

export default categories;
