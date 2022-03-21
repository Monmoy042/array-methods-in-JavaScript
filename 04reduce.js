// Reduce method in JavaScript
/*
======================================================================
Note: Reduce method will return a single value. It is also immutable. 
It will not change the actual array.
======================================================================
*/

// Sum of all elements of an array
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((accumulator, value, index, arr) => {
  return accumulator + value;
}, 0);
console.log(total);
// console.log(numbers);

// Find out the maximum number from an array
const max = numbers.reduce((accumulator, value, indx, arr) => {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}, -Infinity);
console.log(max);

// Apply reduce on an array of objects
let store = [
  { product: "Laptop", value: 1000, count: 3 },
  { product: "Desktop", value: 1500, count: 4 },
  { product: "Mobile", value: 500, count: 10 },
];

const totalValueStore = store.reduce((accumulator, item) => {
  return accumulator + item.value * item.count;
}, 0);
console.log(totalValueStore);
