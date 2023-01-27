const string1 = "babayaga";
const string2 = "yuhhuuuuu";

let kebalik = "";

const reverse = (kata) => {
  kebalik = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    kebalik += kata[i];
  }
};

reverse(string1);
console.log(kebalik);

// cara 2
const muterin = (kata) => {
  const kataBaru = kata.split("").reverse().join("");
  console.log(kataBaru);
};

muterin(string2);

// palindrome checkker

const iniKata1 = "haha";
const iniKata2 = "racecar";
const iniKata3 = "eye";

const palindromeCheck = (kata) => {
  const kataBuset = kata.split("").reverse().join("");
  return kata === kataBuset ? true : false;
};

console.log(palindromeCheck(iniKata3));

// fizz buzz

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else console.log(i);
}

// cari berapa kali dia muncul dan tampilkan g paling banyak muncul

const katapanjang = "dsadsevd123#%%2";

const pengecek = (kata) => {
  const berapaKali = kata.split("");
  for(berapaKali as a){
    console.log(a);
  }
  // console.log(berapaKali);
};

console.log(pengecek(katapanjang));
