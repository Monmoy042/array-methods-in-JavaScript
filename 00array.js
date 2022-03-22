// Array in JavaScript
const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.log(numbers[3]);
console.log("The length of the numbers array: " + numbers.length); // find the length
console.log("The index Number of 3 is: " + numbers.indexOf(30)); // find the index of an element

const friends = ["Mashrafee", "Shakib", "Tamim", "Mushfiq", "Riyad"];
console.log(friends);
console.log(friends[0]);
console.log(friends.at(-1));

// Array with multiple data
const products = [1, 2, 3, true, { name: "Laptop", price: 1500 }, [10, 20]];
console.log(products);
console.log(typeof products[3]);
console.log(products[4]);
console.log(typeof products[4]);
console.log(typeof products);
