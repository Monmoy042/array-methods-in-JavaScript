// Filter Method in JavaScript

/*
=============================================================================
Note: Filter method also non-mutable. It will not change the actual array.
It will also  return an array.
=============================================================================
*/

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// Pass only even numbers from an array
const evenNums = numbers.filter((value) => value % 2 == 0);
// console.log(evenNums);
// console.log(numbers);

// Apply filter method on an array with multiple objects
const people = [
  { name: "John", age: 26 },
  { name: "Jane", age: 28 },
  { name: "Ivan", age: 16 },
  { name: "Florine", age: 15 },
];

const adult = people.filter((person) => person.age > 18);
console.log(adult);

// Eliminate the duplicate elements from an array
const nums = [1, 2, 3, 2, 4, 5, 1, 2, 3, 9];
const series = nums.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(series);
