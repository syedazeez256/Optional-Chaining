"use strict";

const resturant = {
  name: "Classico Italian",
  location: "581 B Gulshan Ravi",
  categories: ["italian", "fast food", "chinese", "vegetarian"],
  startmenu: ["garlic", "bread", "caprese salad"],
  mainmenu: ["pizza", "pasta", "risoto"],
  timings: {
    thur: {
      open: "12",
      close: "22",
    },
    fri: {
      open: "11",
      close: "23",
    },
    sat: {
      open: "0",
      close: "24",
    },
  },
  order(starterindex, mainindex) {
    return [this.startmenu[starterindex], this.mainmenu[mainindex]];
  },
  orderDelievery({
    startIndex = 1,
    mainIndex = 0,
    address = "Sanda",
    time = "20.00",
  }) {
    console.log(
      `Order Deliever! ${this.startmenu[startIndex]} and ${this.mainmenu[mainIndex]} will be delieverd to ${address} at ${time}`
    );
  },
};

const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

for (const day of days) {
  const open = resturant.timings[day]?.open ?? "closed";
  console.log(`${day} opens at ${open} `);
}

console.log(resturant.order?.(0, 1) ?? "Method does'nt exist");
console.log(resturant.orderYes?.(0, 1) ?? "Method does'nt exist");

// Object Keys
const opens = Object.keys(resturant.timings);
console.log(opens);

let openstr = `We are open at ${opens.length}:`;
for (const i of opens) {
  openstr += `${i}, `;
  console.log(openstr);
}

// Object Values

const values = Object.values(resturant.timings);
console.log(values);

const entries = Object.entries(resturant.timings);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
