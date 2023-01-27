let variabel1 = "ini variabel";
let variabel2 = 42;

[variabel1, variabel2] = [variabel2, variabel1];

console.log(variabel1);
console.log(variabel2);

const array1 = ["babon", 52, true];
const array2 = [11, "nasi tumpeng"];

const gabungan = array1.concat(array2);

console.log(gabungan);

const nomor = [6, 3, 1, 9, 10, 50, -2];

const urut = nomor.sort((a, b) => a - b);
console.log(urut);
