import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import RateLimiter from "../RateLimit/index.js";
import fs from "fs";
import safeNavigate from "./controllers/helpers/safeNavigate.js";
import handleSteps from "./controllers/helpers/steps.js";
import mongoose from "mongoose";
import Product from "./models/products.js";
import dbConnect from "./db/dbConnect.js";
// Add stealth plugin
puppeteer.use(StealthPlugin());
const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Version/14.1.2 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43",
  "Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (Android 11; Mobile; rv:109.0) Gecko/20100101 Firefox/109.0",
  "Mozilla/5.0 (Linux; Android 11; SM-A505F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 OPR/68.0.2254.63568",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Version/14.1.2 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43",
  "Mozilla/5.0 (Linux; Android 11; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (Android 11; Mobile; rv:109.0) Gecko/20100101 Firefox/109.0",
  "Mozilla/5.0 (Linux; Android 11; SM-A505F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 OPR/68.0.2254.63568",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Android 11; Mobile; rv:109.0) Gecko/20100101 Firefox/109.0",
  "Mozilla/5.0 (Linux; Android 11; SM-A505F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 OPR/68.0.2254.63568",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
];

const mylocation = ["nsw", "vic", "qld", "wa", "sa", "tas", "act", "nt"];
// const mylocation = ["nsw", "vic", "qld", "wa"];
// const mylocation = [ 'tas', 'act', 'nt'];

const getPrices = (location, priceInCents, priceInCentsPerUnits, unit) => {
  const prices = [];
  if (priceInCents) {
    if (location === "nsw") {
      prices.push({
        state: "nsw".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
    if (location === "vic") {
      prices.push({
        state: "vic".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
    if (location === "qld") {
      prices.push({
        state: "qld".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
    if (location === "wa") {
      prices.push({
        state: "wa".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
    if (location === "sa") {
      prices.push({
        state: "sa".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
    if (location === "tas") {
      prices.push({
        state: "tas".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
    if (location === "act") {
      prices.push({
        state: "act".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
    if (location === "nt") {
      prices.push({
        state: "nt".toUpperCase(),
        price: priceInCents ? parseFloat(Number(priceInCents).toFixed(2)) : null,
        price_per_unit: priceInCentsPerUnits ? parseFloat(Number(priceInCentsPerUnits).toFixed(2)) : null,
        price_unit: unit ? unit : "",
      });
    }
  }

  return prices;
};

let pageReset = 0;
let booool = false;
const WOOLWORTHS_API_ENDPOINT = "https://www.woolworths.com.au/apis/ui/browse/category";
const CATEGORIES = [
  // { id: '1_717A94B', name: 'Baby', url: '/shop/browse/baby', location: '/shop/browse/baby' },
  // { id: '1_DEB537E', name: 'Bakery', url: '/shop/browse/bakery', location: '/shop/browse/bakery' },
  // { id: '1_6E4F4E4', name: 'Dairy, Eggs & Fridge', url: '/shop/browse/dairy-eggs-fridge', location: '/shop/browse/dairy-eggs-fridge' },
  // { id: '1_3151F6F', name: 'Deli & Chilled Meats', url: '/shop/browse/deli-chilled-meals', location: '/shop/browse/deli-chilled-meals' },
  // { id: '1_5AF3A0A', name: 'Drinks', url: '/shop/browse/drinks', location: '/shop/browse/drinks' },
  // { id: '1_ACA2FC2', name: 'Freezer', url: '/shop/browse/freezer', location: '/shop/browse/freezer' },
  // { id: '1-E5BEE36E', name: 'Fruit & Veg', url: '/shop/browse/fruit-veg', location: '/shop/browse/fruit-veg' },
  // { id: '1_894D0A8', name: 'Health & Beauty', url: '/shop/browse/beauty-personal-care', location: '/shop/browse/beauty-personal-care' },
  // { id: '1_9851658', name: 'Health & Wellness', url: '/shop/browse/health-wellness', location: '/shop/browse/health-wellness' },
  // { id: '1_D5A2236', name: 'Poultry, Meat & Seafood', url: '/shop/browse/poultry-meat-seafood', location: '/shop/browse/poultry-meat-seafood' },
  // { id: '1_2432B58', name: 'Household', url: '/shop/browse/cleaning-maintenance', location: '/shop/browse/cleaning-maintenance' },
  // { id: '1_39FD49C', name: 'Pantry', url: '/shop/browse/pantry', location: '/shop/browse/pantry' },
  // { id: '1_61D6FEB', name: 'Pet', url: '/shop/browse/pet', location: '/shop/browse/pet' },
  // { id: '1_DEA3ED5', name: 'Home & Lifestyle', url: '/shop/browse/home-lifestyle', location: '/shop/browse/home-lifestyle' },
  // { id: '1_717445A', name: 'Snacks & Confectionery', url: '/shop/browse/snacks-confectionery', location: '/shop/browse/snacks-confectionery' },
  { id: '1_9E92C35', name: 'Back to School', url: '/shop/browse/back-to-school', location: '/shop/browse/back-to-school' },
  { id: '1_8E4DA6F', name: 'Beer, Wine & Spirits', url: '/shop/browse/beer-wine-spirits', location: '/shop/browse/beer-wine-spirits' },
];
const WOOLWORTHS_URL = "https://www.woolworths.com.au";
const SPEED_LIMIT = 20;

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
(async () => {
  await dbConnect();
  const name = "Woolworths";
  const rateLimit = new RateLimiter(SPEED_LIMIT, 5);
  const browser2 = await puppeteer.launch({
    headless: false,
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    userDataDir: "C:\\Users\\OBI - Raymond\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1",
  });

  for (let i = 0; i < mylocation.length; i++) {
    const page = (await browser2.newPage()).removeAllListeners("request");
    // const page = await browser2.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43");
    await page.setExtraHTTPHeaders({
      Referer: "https://www.woolworths.com.au/",
    });
    const loadedCookies = JSON.parse(fs.readFileSync("./woolworths/cookies.json", "utf-8"));
    await page.setCookie(...loadedCookies);
    await safeNavigate(page, "https://www.woolworths.com.au");
    // await delay(60000)
    // await delay(60000)
    // await delay(60000)
    // await delay(60000)
    await delay(2000);
    await page.reload();
    await delay(3000);
    await page.reload();
    await delay(3000);
    // await delay(60000)
    // await delay(60000)
    if (!booool) {
      console.log("1");
      booool = true;
    } else {
      await delay(5000);
      for (let i = 1; i > 5; i++) {
        await delay(3000);
        await page.reload();
      }
      await delay(20000);
      console.log("2");
    }
    await handleSteps(page, mylocation[i], "https://www.woolworths.com.au");
    // const cookies = await page.cookies();
    // console.log('Extracted Cookies:', cookies);

    // Save cookies to a file or database (optional)
    // fs.writeFileSync('./woolworths/cookies.json', JSON.stringify(cookies, null, 2));
    // await delay(60000);

    await Promise.allSettled(
      CATEGORIES.map(async (category, index) => {
        let page2;
        page2 = (await browser2.newPage()).removeAllListeners("request");
        const randomUserAgent = userAgents[index];
        await page2.setUserAgent(randomUserAgent);
        await page2.setExtraHTTPHeaders({
          Referer: "https://www.woolworths.com.au/",
        });
        await safeNavigate(page2, "https://www.woolworths.com.au");
        await delay(20000);

        // const content = await page2.evaluate(() => document.body.innerText);

        const htmlOnly = async (page) => {
          await page.removeAllListeners("request");
          await page.setRequestInterception(true);
          page.on("request", (req) => {
            if (!["document", "xhr", "fetch"].includes(req.resourceType())) {
              return req.abort();
            }
            req.continue();
          });
        };
        await htmlOnly(page2);

        try {
          await safeNavigate(page2, WOOLWORTHS_URL);
        } catch (err) {
          console.log("Failed to load page: ", err);
          await browser2.close();
          return [];
        }

        await page2.setBypassCSP(true);

        const products = await scrapeCategory(page2, category, mylocation[i], page, browser2);
        console.log("category:", category, "Number of products:", products.length);
        await page2.close();
      })
    );
    console.log("all done in location:", mylocation[i]);
    // await browser2.close();
    await delay(3000);
    console.log("1");
    await delay(3000);
    console.log("2");
  }
  console.log("all is done");
})();

const scrapeCategory = async (page, category, myloc, p, browser) => {
  console.log("Scraping category: ", category.name);

  const body = {
    categoryId: category.id,
    pageNumber: 1,
    pageSize: 36,
    sortType: "Name",
    url: category.url,
    location: category.location,
    formatObject: `{\"name\":\"${category.name}\"}`,
    isSpecial: false,
    isBundle: false,
    isMobile: false,
    filters: [],
    token: "",
    gpBoost: 0,
    isHideUnavailableProducts: true,
    isRegisteredRewardCardPromotion: false,
    enableAdReRanking: false,
    // sortType: 'TraderRelevance',
    groupEdmVariants: true,
    categoryVersion: "v2",
  };

  const res = await callFetch(page, body);
  // console.log('First category response:', res);

  const numProducts = res.TotalRecordCount || 0;
  const numPages = Math.ceil(numProducts / 36);
  console.log("Products: ", numProducts, "Pages: ", numPages);
  console.log("Pages: ", numPages);

  const productRes = [];

  for (let i = 1; i <= numPages; i++) {
    console.log("pageResetvalue", pageReset);
    if (pageReset > 250) {
      const loadedCookies = JSON.parse(fs.readFileSync("./woolworths/cookies.json", "utf-8"));
      await page.setCookie(...loadedCookies);
      await safeNavigate(page, "https://www.woolworths.com.au");
      // await page.goto('https://www.woolworths.com.au', { waitUntil: 'domcontentloaded' });
      // await delay(20000)
      for (let i = 1; i > 5; i++) {
        await delay(4000);
        await p.reload();
      }
      await delay(20000);
      for (let i = 1; i > 3; i++) {
        await delay(2500);
        await page.reload();
      }
      console.log("creating new page");
      await delay(5000);
      page.removeAllListeners("request");
      const content = await page.evaluate(() => document.body.innerText);
      const htmlOnly = async (page) => {
        await page.setRequestInterception(true);
        page.on("request", (req) => {
          if (!["document", "xhr", "fetch"].includes(req.resourceType())) {
            return req.abort();
          }
          req.continue();
        });
      };
      await htmlOnly(page);

      try {
        await safeNavigate(page, WOOLWORTHS_URL);
      } catch (err) {
        console.log("Failed to load page: ", err);
        // await browser2.close();
        // return [];
      }

      await page.setBypassCSP(true);
      pageReset = 0;
    }
    pageReset = pageReset + 1;
    body.pageNumber = i;
    body.location = `${category.location}?pageNumber=${i}`;
    body.url = `${category.url}?pageNumber=${i}`;
    const products = await scrapeURL(page, body, myloc);
    console.log("Number of products:", products.length, "on page:", i);
    if (products && products.length === 0) {
      console.log("No more products:");
      break;
    }
    productRes.push(...products);
    // await delay(1000)
  }
  // if (productRes && productRes.length > 0) console.log('all products', productRes.length)
  return productRes;
};

const scrapeURL = async (page, request, myloc) => {
  const res = await callFetch(page, request);

  if (!res.Bundles) {
    console.log("Failed to scrape category: ", request.categoryId, res);
    return [];
  }

  const products = res.Bundles.map((bundle) => {
    const product = bundle.Products[0];

    const location = myloc;
    const inputString = product.CupMeasure || "";

    // Extract values
    const price = parseFloat(product.InstorePrice || product.Price);
    // const priceOnly = price.replace("$", "");
    const price2 = parseFloat(product.CupPrice || product.InstoreCupPrice);
    const priceInCents = parseFloat(price) * 100;
    const priceInCentsPerUnits = parseFloat(price2) * 100;
    // Remove numbers and keep only letters
    const unit = inputString.replace(/[0-9]/g, "");
    return {
      name: product.DisplayName,
      discounted_from: product.WasPrice,
      image_url: product.DetailsImagePaths[0],
      shop: "Woolworths",
      source_url: `https://www.woolworths.com.au/shop/productdetails/${product.Stockcode}/${product.UrlFriendlyName}`,
      retailer_product_id: product.Stockcode,
      barcode: product.Barcode,
      name: product.DisplayName,
      realName: product.name,
      isNew: product.IsNew,
      weight: product.CupMeasure,
      category: product.AdditionalAttributes.piesdepartmentnamesjson,
      subCategory: product.AdditionalAttributes.piescategorynamesjson,
      extensionCategory: product.AdditionalAttributes.piessubcategorynamesjson,
      prices: getPrices(location, priceInCents, priceInCentsPerUnits, unit),
    };
  });
  if (products.length > 0) {
    for (const data of products) {
      const q = await Product.findOne({ retailer_product_id: data.retailer_product_id });
      if (!q) {
        // console.log('Product not found. Creating new product:', { ...data });
        const createdProduct = await Product.create({ ...data });
        // console.log('Created product:', createdProduct);
      } else {
        const updatedPrices = [...q.prices];
        let priceUpdated = false;

        // Compare and update prices
        for (let i = 0; i < updatedPrices.length; i++) {
          if (data.prices > 0 && updatedPrices > 0) {
            if (updatedPrices[i].state.toLowerCase() === data.prices[0].state.toLowerCase()) {
              // Compare location
              updatedPrices[i].price = data.prices[0].price;
              updatedPrices[i].price_per_unit = data.prices[0].price_per_unit;
              updatedPrices[i].price_unit = data.prices[0].price_unit;
              priceUpdated = true;
              break;
            }
          }
        }

        // If no match, push the new price data
        if (!priceUpdated) {
          updatedPrices.push(data.prices[0]);
        }
        await Product.findByIdAndUpdate(q._id, { $set: { prices: updatedPrices } }, { new: true });
      }
    }
  }
  return products;
};

const callFetch = async (page, request) => {
  const retries = 99999;
  for (let i = 0; i < retries; i++) {
    try {
      const a = await page.evaluate(
        async (request, url) => {
          return await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
          })
            .then((res) => res.json())
            .catch((err) => ({ error: err.message }));
        },
        request,
        WOOLWORTHS_API_ENDPOINT
      );
      if (a.error || !a || a === undefined) {
        console.error("Error in fetch:", a.error);
        throw new Error("");
      }
      return a;
    } catch (err) {
      console.error(`Attempt ${i + 1} failed: ${err}`);
      if (i === retries - 1) throw err;
      await delay(2000);
    }
  }
};
