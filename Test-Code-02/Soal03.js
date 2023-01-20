const numbers = [-3, -10, 5, 10, 21, -50, 7, 2, 53, 9];

const ascending = numbers.slice().sort((a, b) => a - b);
const descending = numbers.slice().sort((a, b) => b - a);

console.log(`origininal : ${numbers}`);
console.log(`sorted ascending: ${ascending}`);
console.log(`sorted ascending: ${descending}`);