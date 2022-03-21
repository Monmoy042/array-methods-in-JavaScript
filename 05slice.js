/*
=============================================================
## Slice method in JavaScript ##
Note: The slice method returns an array. 
It is also immutable. It will not change the actual array
=============================================================
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers);
// console.log(numbers);

const slicedFromLast = numbers.slice(-3);
console.log(slicedFromLast);

const participants = ["John", "Jane", "Jake", "Florine", "Ivan"];
const winners = participants.slice(0, 3);
console.log(winners);
