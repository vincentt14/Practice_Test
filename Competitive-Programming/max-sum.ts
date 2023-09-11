// return the max sum from arr with size

const q1 = [100, 200, 300, 400];
const q2 = [1, 4, 2, 10, 23, 3, 1, 0, 20]
const q3 = [-3, 4, 0, -2, 6, -1]

const maxSum = (arr: number[], size: number) => {
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

  temp = 0;
  for(let i = 0; i < size; i++){
    temp += arr[i] 
  }

  return temp;
};

console.log(maxSum(q1, 2));
console.log(maxSum(q2, 4));
console.log(maxSum(q3, 2));
