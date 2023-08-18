// you are tasked for implementing point system for ur company upcoming shooter game
// to encourage player spend more ammo, your company implement rule "point bracket"

// Point Bracket
// 1. bracket total kill 10 point multiplier x1
// 2. bracket total kill 20 point multiplier x2
// 3. bracket total kill 30 point multiplier x3
// 4. bracket total kill 40 point multiplier x4
// 5. bracket total kill 50 point multiplier x5
// 5. bracket total kill above 50 point multiplier x6

const calculatePoint = (totalKill: number): number => {
  if (totalKill <= 10) {
    return 10;
  }

  let result = 0;
  let multi = 1;
  while (totalKill > 0) {
    if (totalKill > 10) {
      result += 10 * multi;
    } else {
      result += totalKill * multi;
    }
    totalKill -= 10;
    if (totalKill < 6) {
      multi++;
    }
  }
  return result;
};

console.log(calculatePoint(10))
console.log(calculatePoint(27))
console.log(calculatePoint(33))
console.log(calculatePoint(120))
console.log(calculatePoint(60))