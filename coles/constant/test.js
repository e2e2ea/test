const categories = [
    {
      category: 'Baby',
      subCategories: [
        {
          subCategory: 'Baby Accessories',
          childItems: [
            { extensionCategory: 'Baby Grooming & Oral Care', url: 'https://www.coles.com.au/browse/baby/baby-accessories/baby-grooming-oral-care' },
            { extensionCategory: 'Baby Health & Safety', url: 'https://www.coles.com.au/browse/baby/baby-accessories/baby-health-safety' },
            { extensionCategory: 'Nappy Change Accessories', url: 'https://www.coles.com.au/browse/baby/baby-accessories/nappy-change-accessories' },
          ],
        },
        {
          subCategory: 'Baby Formula',
          childItems: [
            { extensionCategory: 'A2 Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/a2-formula' },
            { extensionCategory: 'Cow Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/cow-formula' },
            { extensionCategory: 'Goat Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/goat-formula' },
            { extensionCategory: 'Organic Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/organic-formula' },
            { extensionCategory: 'Specialty Formula', url: 'https://www.coles.com.au/browse/baby/baby-formula/specialty-formula' },
        ],
        },
        {
          subCategory: 'Nappies & Nappy Pants',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Baby Wipes',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Baby Feeding',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Baby & Toddler Food',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Baby Meal Time',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Bottles & Feeding',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Bath & Skincare',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Dummies & Teething',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Postpartum Care',
          childItems: [
            { extensionCategory: '', url: '' },
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
            { extensionCategory: 'Chilled Cakes & Desserts', url: 'https://www.coles.com.au/browse/bakery/chilled-cakes-desserts' },
            { extensionCategory: 'Chilled Cakes & Desserts', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
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
    {
      category: 'Pet',
      subCategories: [
        {
          subCategory: 'Birds',
          childItems: [
            { extensionCategory: 'Bird Food', url: 'https://www.coles.com.au/browse/pet/birds/bird-food' },
            { extensionCategory: 'Bird Treats', url: 'https://www.coles.com.au/browse/pet/birds/bird-treats' },
          ],
        },
        {
          subCategory: 'Cat & Kitten',
          childItems: [
            { extensionCategory: 'Cat Accessories, Grooming & Toys', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-accessories-grooming-toys' },
            { extensionCategory: 'Cat Flea & Worming', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-flea-worming' },
            { extensionCategory: 'Cat Litter', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-litter' },
            { extensionCategory: 'Cat Treats & Milk', url: 'https://www.coles.com.au/browse/pet/cat-kitten/cat-treats-milk' },
            { extensionCategory: 'Chilled Cat Food', url: 'https://www.coles.com.au/browse/pet/cat-kitten/chilled-cat-food' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: '',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: '',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: '',
          childItems: [
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: '',
          childItems: [
            { extensionCategory: '', url: '' },
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
            { extensionCategory: 'Burgers & Rissoles', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/burgers-rissoles' },
            { extensionCategory: 'Kebabs', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/kebabs' },
            { extensionCategory: 'Meatballs', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/meatballs' },
            { extensionCategory: 'Sausage Mince', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausage-mince' },
            { extensionCategory: 'Sausages', url: 'https://www.coles.com.au/browse/meat-seafood/bbq-sausages-burgers/sausages' },
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Beef & Veal',
          childItems: [
            { extensionCategory: 'Beef & Veal Mince', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-veal-mince' },
            { extensionCategory: 'Beef Bones & Offal', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-bones-offal' },
            { extensionCategory: 'Beef Roasts', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-roasts' },
            { extensionCategory: 'Beef Steaks', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/beef-steaks' },
            { extensionCategory: 'Crumbed Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/crumbed-beef' },
            { extensionCategory: 'Graze Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/graze-beef' },
            { extensionCategory: 'Slow Cook & Casserole Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/slow-cook-casserole-beef' },
            { extensionCategory: 'Stir Fry & Diced Beef', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/stir-fry-diced-beef' },
            { extensionCategory: 'Veal', url: 'https://www.coles.com.au/browse/meat-seafood/beef-veal/veal' },
          ],
        },
        {
          subCategory: 'Coles Made Easy Range',
          childItems: [
            { extensionCategory: 'Easy Meals', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/easy-meals' },
            { extensionCategory: 'Grill', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/grill' },
            { extensionCategory: 'Pastry', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/pastry' },
            { extensionCategory: 'Slow Cook', url: 'https://www.coles.com.au/browse/meat-seafood/coles-made-easy-range/slow-cook' },
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Game',
          childItems: [
            { extensionCategory: 'Kangaroo', url: 'https://www.coles.com.au/browse/meat-seafood/game/kangaroo' },
            { extensionCategory: 'Other Game', url: 'https://www.coles.com.au/browse/meat-seafood/game/other-game' },
          ],
        },
        {
          subCategory: 'Ham',
          childItems: [
            { extensionCategory: 'Ham Portions', url: 'https://www.coles.com.au/browse/meat-seafood/ham/ham-portions' },
            { extensionCategory: 'Ham Shoulder & Steaks', url: 'https://www.coles.com.au/browse/meat-seafood/ham/ham-shoulder-steaks' },
          ],
        },
        {
          subCategory: 'Lamb',
          childItems: [
            { extensionCategory: 'Diced Lamb', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/diced-lamb' },
            { extensionCategory: 'Graze Grass-Fed Lamb', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/graze-grass-fed-lamb' },
            { extensionCategory: 'Lamb Chops', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-chops' },
            { extensionCategory: 'Lamb Cutlets', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-cutlets' },
            { extensionCategory: 'Lamb Offal', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-offal' },
            { extensionCategory: 'Lamb Roasts', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-roasts' },
            { extensionCategory: 'Lamb Shanks', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-shanks' },
            { extensionCategory: 'Lamb Steak', url: 'https://www.coles.com.au/browse/meat-seafood/lamb/lamb-steak' },
          ],
        },
        {
          subCategory: 'Mince',
          childItems: [
            { extensionCategory: 'Beef & Veal Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/beef-veal-mince' },
            { extensionCategory: 'Chicken & Turkey Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/chicken-turkey-mince' },
            { extensionCategory: 'Kangaroo & Wallaby Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/kangaroo-wallaby-mince' },
            { extensionCategory: 'Lamb Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/lamb-mince' },
            { extensionCategory: 'Pork Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/pork-mince' },
            { extensionCategory: 'Sausage Mince', url: 'https://www.coles.com.au/browse/meat-seafood/mince/sausage-mince' },
          ],
        },
        {
          subCategory: 'Organic Meat',
          childItems: [
            { extensionCategory: 'Organic Beef', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-beef' },
            { extensionCategory: 'Organic Lamb', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-lamb' },
            { extensionCategory: 'Organic Poultry', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-poultry' },
            { extensionCategory: 'Organic Sausages & Meatballs', url: 'https://www.coles.com.au/browse/meat-seafood/organic-meat/organic-sausages-meatballs' },
          ],
        },
        {
          subCategory: 'Pork',
          childItems: [
            { extensionCategory: 'Free Range Pork', url: 'https://www.coles.com.au/browse/meat-seafood/pork/free-range-pork' },
            { extensionCategory: 'Pork Chops', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-chops' },
            { extensionCategory: 'Pork Marinade', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-marinade' },
            { extensionCategory: 'Pork Mince', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-mince' },
            { extensionCategory: 'Pork Ribs', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-ribs' },
            { extensionCategory: 'Pork Roasts', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-roasts' },
            { extensionCategory: 'Pork Steaks', url: 'https://www.coles.com.au/browse/meat-seafood/pork/pork-steaks' },
            { extensionCategory: '', url: '' },
          ],
        },
        {
          subCategory: 'Poultry',
          childItems: [
            { extensionCategory: 'Breast Fillets', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/breast-fillets' },
            { extensionCategory: 'Chicken Offal', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/chicken-offal' },
            { extensionCategory: 'Chicken Wings', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/chicken-wings' },
            { extensionCategory: 'Crumbed Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/crumbed-chicken' },
            { extensionCategory: 'Diced, Stir-Fry & Tenders', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/diced-stir-fry-tenders' },
            { extensionCategory: 'Drumsticks & Maryland', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/drumsticks-maryland' },
            { extensionCategory: 'Duck', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/duck' },
            { extensionCategory: 'Free Range Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/free-range-chicken' },
            { extensionCategory: 'Kebabs & Bites', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/kebabs-bites' },
            { extensionCategory: 'Marinated & Roast Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/marinated-roast-chicken' },
            { extensionCategory: 'Poultry Deli', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/poultry-deli' },
            { extensionCategory: 'Thigh Fillets', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/thigh-fillets' },
            { extensionCategory: 'Turkey', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/turkey' },
            { extensionCategory: 'Whole Chicken', url: 'https://www.coles.com.au/browse/meat-seafood/poultry/whole-chicken' },
          ],
        },
        {
          subCategory: 'Seafood',
          childItems: [
            { extensionCategory: 'Deli Fish', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/deli-fish' },
            { extensionCategory: 'Deli Marinara Mix and Other Seafood', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/deli-marinara-mix-and-other-seafood' },
            { extensionCategory: 'Deli Prawns', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/deli-prawns' },
            { extensionCategory: 'Prepacked Seafood', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/prepacked-seafood' },
            { extensionCategory: 'Smoked and Cured Fish', url: 'https://www.coles.com.au/browse/meat-seafood/seafood/smoked-and-cured-fish' },
          ],
        },
      ],
    },
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
  