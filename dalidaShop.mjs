#! /usr/bin/env node

// Dalida's shop

// import/export


import { pushFunc as myFunc, shiftFunc as myShift, unShiftFunc as myUnshift } from "./functions.mjs";
// Variables let/const

let currentOwner = 'Dalida';
let shopName = `${currentOwner}'s shop`;

// Data Types, Objects, Arrays

const goods = [
    {
        name: 'apple',
        expirenceDate: '08/06',
        amount: 12,
        country: 'Uzbekistan',
        available: true,
    },
    {
        name: 'banana',
        expirenceDate: '09/06',
        amount: undefined,
        country: 'Kyrgystan',
        available: true,
    },
    {
        name: 'pinemelon',
        expirenceDate: '11/06',
        amount: null,
        country: 'Kazakhstan',
        available: false,
    },
];

// Dalida's shop is ready!
const shop = {};
shop["name"] = shopName;
shop.products = goods;

// Check from console
console.log("Shop name: " + shop["name"] + "\n");
console.log("Products info: ");

for (let i = 0; i < shop["products"].length; i++) {
    console.log('-------------------------------------------');
    console.log(`Product name: ${shop.products[i].name}`);
    console.log(`Date of expirence: ${shop.products[i].expirenceDate}`);
    console.log(`Amount: ${shop.products[i].amount}`);
    console.log(`Country: ${shop.products[i].country}`);
    console.log(`Availability: ${shop.products[i].available ? 'available' : 'out of stock'}`);
}
console.log('-------------------------------------------\n');

// Add new product

const newGood = {
    name: 'armani parfume',
    expirenceDate: '31/12',
    amount: 3,
    country: 'France',
    available: true,
}

myFunc(shop.products, newGood);
console.log('New added product:\n', shop.products[shop.products.length - 1]);

// Delete first element of array

console.log('\nRemove of first first product:\n');
myShift(shop.products);
for (let i = 0; i < shop["products"].length; i++) {
    console.log('-------------------------------------------');
    console.log(`Product name: ${shop.products[i].name}`);
    console.log(`Date of expirence: ${shop.products[i].expirenceDate}`);
    console.log(`Amount: ${shop.products[i].amount}`);
    console.log(`Country: ${shop.products[i].country}`);
    console.log(`Availability: ${shop.products[i].available ? 'available' : 'out of stock'}`);
}
console.log('-------------------------------------------\n');

// Show products which country's name ends with 'stan'

console.log('Products from countries which name ends with \'stan\':');
const stans = shop.products.filter(product => product.country.slice(-4) === 'stan');
console.log(stans, '\n');





