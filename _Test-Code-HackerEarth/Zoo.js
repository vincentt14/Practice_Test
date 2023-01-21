const x = "o";
const y = "z";

const test1 = "zzoooo";
const test2 = "zzzoooo";
const test3 = "zzzoooooo";

let jumlahZ = 0;
let jumlahO = 0;

const pengecekHandal = (testCase) => {
  jumlahZ = jumlahO = 0;
  for (let i = testCase.length - 1; i >= 0; i--) {
    if (testCase[i] === "z") {
      jumlahZ++;
    } else jumlahO++;
  }

  if (jumlahZ * 2 === jumlahO) {
    return true;
  }
  return false;
};

console.log(pengecekHandal(test1));
console.log(pengecekHandal(test2));
console.log(pengecekHandal(test3));
