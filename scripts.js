// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. ForEach Basics
console.log("Names:");
names.forEach((name) => console.log(name));

console.log("\nProvinces:");
provinces.forEach((province) => console.log(province));

console.log("\nNames with matching provinces:");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
const remainingProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(remainingProvinces.length);

// 6. Finding 'S'
const hasSInName = names.map((name) => name.toLowerCase().includes("s"));
console.log(hasSInName);

// 7. Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercises (Single console.log execution)

// 1. Log Products
console.log("Products:");
products.forEach((product) => console.log(product.product));

// 2. Filter by Name Length
const filteredProductsByNameLength = products.filter(
  (product) => product.product.length <= 5
);
console.log(filteredProductsByNameLength);

// 3. Price Manipulation
const totalPrice = products
  .filter((product) => product.price !== " " && product.price !== "")
  .map((product) => ({
    ...product,
    price: Number(product.price),
  }))
  .reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice);

// 4. Concatenate Product Names
const concatenatedProductNames = products.reduce(
  (acc, product) => acc + product.product,
  ""
);
console.log(concatenatedProductNames);

// 5. Find Extremes in Prices
const prices = products
  .filter((product) => product.price !== " " && product.price !== "")
  .map((product) => Number(product.price));

const highest = Math.max(...prices);
const lowest = Math.min(...prices);

console.log(`Highest: ${highest}. Lowest: ${lowest}.`);

// 6. Object Transformation
const transformedProducts = products.reduce((acc, product) => {
  acc.push({ name: product.product, cost: Number(product.price) });
  return acc;
}, []);

console.log(transformedProducts);
