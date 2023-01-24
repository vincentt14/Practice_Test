/*
  create a fizzbuzz loop
  kelipatan 3 = fizz
  kelipatan 5 = buzz
  kelipatan 3 dan 5 = fizzbuzz
*/

for (let n = 1; n <= 15; n++) {
  if (n % 3 === 0) {
    console.log("fizz");
  }
  else if (n % 5 === 0) {
    console.log("buzz");
  }
  else if (n % 3 === 0 && 5 === 0) {
    console.log("fizzbuzz");
  } else {
    console.log(n);
  }
}
