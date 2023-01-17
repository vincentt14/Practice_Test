function test() {
  let a = 1;
  let b = 2;
  console.log(`a awal adalah = ${a}`);
  console.log(`b awal adalah = ${b}`);

  [a,b] = [b,a]

  console.log(`a akhir adalah = ${a}`);
  console.log(`b akhir adalah = ${b}`);
}

test();