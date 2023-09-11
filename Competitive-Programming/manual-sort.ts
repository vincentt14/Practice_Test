// sort an array without any js method (manual) descending

const input = [1, 2, 4, 3, 5, 3, 2, 1];
const input2 = [500, 465, 10, 2, 501, 501];

const selectionSortDescending = (arr: number[]): number[] => {
  let temp: number = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(selectionSortDescending(input2));
