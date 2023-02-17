const arr1 = [1, 2, 3, 4, 5, 1, 1, 2, 4];
// n = 2

const chunkSize = 2;

for (let i = 0; i < arr1.length; i += chunkSize) {
  const chunk = arr1.slice(i, i + chunkSize);
  console.log(chunk);
}
