/*
  create a palindrome checkker
  "abba" = true
  'abcdefg = false
*/

const kata1 = "abba";
const kata2 = "kayak";
const kata3 = "tolalit";
const kata4 = "racecar";
const kata5 = "kambeng";

let reversed = "";
const palindromeCheck = (kata) => {
  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i];
  }
  if (reversed === kata) {
    return true;
  }
  return false;
};

console.log(palindromeCheck(kata5));

// cara kedua buat reverse
const cekPalindrom = (apapun) => {
  const reverseKata = apapun.split("").reverse().join("");
  if (reverseKata === apapun) {
    return true;
  }
  return false;
};

console.log(cekPalindrom(kata3));
