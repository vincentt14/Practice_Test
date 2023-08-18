// given array coordinates[i] = [x, y], where [x, y] represents coordinates of a point. Check if these points make a staright line in the XY plane. Three or more points can be considered a straight line if they all form equal slopes.

const checkStraightLine = (coordinates: number[][]) => {
  if (coordinates.length <= 1) {
    return false;
  } else if (coordinates.length <= 2) {
    return true;
  }

  let slope = 0;
  let slopeFound = false;
  let isInf = false;
  for (let i = 0; i < coordinates.length; i++) {
    let deltaX = coordinates[i + 1][0] - coordinates[i][0];
    let deltaY = coordinates[i + 1][1] - coordinates[i][1];
    if (slopeFound) {
      if (deltaX === 0) {
        if (!isInf) {
          return false;
        }
      } else if (isInf || (1.0 * deltaY) / deltaX !== slope) {
        return false;
      }
    } else {
      slopeFound = true;
      if (deltaX === 0) {
        isInf = true;
      } else {
        slope = (1.0 * deltaY) / deltaX;
      }
    }
  }
  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
