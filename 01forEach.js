const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

numbers.forEach((item, index, arr) => {
  //   console.log(item);
  //   console.log(index);
  //   console.log(arr);
});
// console.log(numbers);

// Calculate Sum of an array
let numbers2 = [6, 7, 8, 9, 10];
let sum = 0;
numbers2.forEach((item) => {
  sum = sum + item;
});
// console.log(sum);

// Count letter of an array
let letters = ["a", "b", "a", "b", "c", "d", "a", "c"];
let count = {};
letters.forEach((item) => {
  if (count[item]) {
    // count[item] = count[item] + 1;
    // count[item] += 1;
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count);
