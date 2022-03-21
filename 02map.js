/*
Note: Map will return an Array. Each time it will call an element of the array and each time callback function executes the returned value is added to new array.
It is non mutable. That means it will not change the actual array.
*/

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
const double = numbers.map((value) => value * 2);
console.log(double);

// Map through in an array of multiple objects
const products = [
  {
    name: "Laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "Desktop",
    price: 2000,
    count: 10,
  },
  {
    name: "Phone",
    price: 500,
    count: 20,
  },
];

let product = products.map((item) => {
  //   let totalProductPrice = item.price * item.count;
  //   return totalProductPrice;
  return {
    name: item.name,
    totalPrice: item.price * item.count,
  };
});

console.log(product);

// convert array of strings into array of numbers
const str = ["1", "2", "3", "4", "5"];
const nums = str.map(Number);
console.log(nums, typeof nums);
