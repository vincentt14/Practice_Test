/*
  32ddsseew2
  ayamgoreng12333
*/

const kata1 = "32ddsseew2";
const kata2 = "ayamgoreng12333";
const kata3 = "HELLL00$$p";

const pemecah = (kata) => {
  let objek = {};
  for (let char of kata) !objek[char] ? (objek[char] = 1) : objek[char]++;

  let maxNum = 0;
  let maxChar = "";

  for (let char in objek) {
    if (objek[char] >= maxNum) {
      maxNum = objek[char];
      maxChar = char;
    }
  }

  console.log(`${maxChar} muncul ${maxNum} kali`)
};

pemecah(kata3);
