import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsFile = path.join(__dirname, 'assets', 'assets.js');
let content = fs.readFileSync(assetsFile, 'utf8');

const usedImages = new Set([
  // Used in JSX
  'companyLogo1', 'companyLogo2', 'companyLogo3', 'companyLogo4', 'companyLogo5',
  'logo_black', 'logo_light', 'final_bg', 'allvegs',
  
  // Used in categories
  'organic_vegitable_image', 'fresh_fruits_image', 'bottles_image', 'maggi_image',
  'dairy_product_image', 'bakery_image', 'grain_image', 'namkeen1',
  
  // Used in dummyProducts
  'apple_image', 'banana_image_1', 'mango_image_1', 'potato_image_1', 'tomato_image',
  'amul_milk_image', 'onion_image_1', 'basmati_rice_image', 'grapes_image_1', 'yippee_image',
  
  // Used in products
  'AgedGouda', 'Anchovies', 'Apples', 'Baguette', 'BananaBread', 'Bananas', 'BellPeppers',
  'Broccoli', 'Butter', 'Carrots', 'CheddarCheese', 'ChocolateBar', 'ChocolateDonut',
  'CoconutWater', 'Coffee', 'Cola', 'Cookies', 'Crab', 'Cucumber', 'DragonFruit',
  'DuckBreast', 'Eclair', 'EnergyDrink', 'EspressoBeanClusters', 'EthiopianInjera',
  'Focaccia', 'Garlic', 'Ghee', 'GranolaBars', 'Grapes', 'HimalayanYak',
  'HoneycombCrunchBrittle', 'IceCream', 'IndianNaan', 'JapaneseMilkBread', 'KingCrab',
  'KiwanoMelon', 'Kiwi', 'LadyFinger', 'LambChops', 'Lassi', 'LavenderGoat', 'Lobster',
  'Mangosteen', 'Meatballs', 'MexicanConcha', 'Milk', 'MixedNuts', 'Mussels', 'Onion',
  'OrangeJuice', 'Oranges', 'Oysters', 'Paneer', 'Papaya', 'PassionFruit', 'Persimmon',
  'Pomelo', 'Popcorn', 'PorkRibs', 'Potato', 'PotatoChips', 'PoundCake', 'Pretzels',
  'Rambutan', 'RaspberryRoseBonbons', 'SaffronManchego', 'SaltedCaramelTruffles',
  'Scallops', 'SingleOriginChocolateBar', 'SourCream', 'SpicedOrangeChocolateBark',
  'Spinach', 'StarFruit', 'Strawberries', 'Tea', 'Tomatoes', 'TrailMix', 'TruffleBrie',
  'TurkeyBreast', 'TurkishSimit', 'VealCutlet', 'Water', 'WhiskeyCheddar', 'Yogurt'
]);

// 1. Remove unused imports
content = content.replace(/import\s+([A-Za-z0-9_]+)\s+from\s+["'](.+?)["'];\n?/g, (match, name) => {
  if (usedImages.has(name)) {
    return match; // keep it
  }
  return ''; // remove it
});

// 2. Remove unused from export const images = { ... }
let imagesExportRegex = /export const images = \{([\s\S]*?)\};/;
content = content.replace(imagesExportRegex, (match, inner) => {
  // Split inner by comma
  const items = inner.split(',').map(s => s.trim()).filter(Boolean);
  const usedItems = items.filter(name => usedImages.has(name));
  return 'export const images = {\n  ' + usedItems.join(',\n  ') + '\n};';
});

// Remove excessive newlines
content = content.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(assetsFile, content);
console.log('Done cleaning assets.js');
