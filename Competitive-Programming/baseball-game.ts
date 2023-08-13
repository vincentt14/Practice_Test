// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// 'x' = record new score x
// '+' = record new score that is the sum of the previous two score
// 'D' = record new score that is double of the previous score
// 'C' = removing previous score

const calPoints = (ops: string[]): number => {
  const result: number[] = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+") {
      result.push(result[result.length - 2] + result[result.length - 1]);
    } else if (ops[i] === "D") {
      result.push(result[result.length - 1] * 2);
    } else if (ops[i] === "C") {
      result.pop();
    } else {
      result.push(parseInt(ops[i]));
    }
  }
  return result.reduce((a, b) => a + b, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
