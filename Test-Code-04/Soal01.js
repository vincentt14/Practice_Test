/*
  given a string 
  reverse it
  reverse('apple')=== 'elppa';
  reverse('Greetings!')= '!sgniteerG';
*/

const buah = "apple";
let hasil = "";

for (let i = buah.length - 1; i >= 0; i--) {
  hasil += buah[i];
}
console.log(hasil);

// cara kedua
const putarBalik = (kata) => {
  const arr = kata.split("");
  arr.reverse();
  kata = arr.join("");
  console.log(kata);
};

putarBalik("ayam");