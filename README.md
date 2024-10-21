## find method

``` js
a = [5, 12, 8, 130, 44];

const found = a.find((el) => el === 12)
console.log(found) // 12

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const inv = inventory.find((el) => el.quantity === 5)
console.log(inv) // { name: 'cherries', quantity: 5 }
```
