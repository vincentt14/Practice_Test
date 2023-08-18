// given array coordinates[i] = [x, y], where [x, y] represents coordinates of a point. Check if these points make a staright line in the XY plane. Three or more points can be considered a straight line if they all form equal slopes.
var checkStraightLine = function (coordinates) {
    if (coordinates.length <= 1) {
        return false;
    }
    else if (coordinates.length <= 2) {
        return true;
    }
    var slope = 0;
    var slopeFound = false;
    var isInf = false;
    for (var i = 0; i < coordinates.length; i++) {
        var deltaX = coordinates[i + 1][0] - coordinates[i][0];
        var deltaY = coordinates[i + 1][1] - coordinates[i][1];
        if (slopeFound) {
            if (deltaX === 0) {
                if (!isInf) {
                    return false;
                }
            }
            else if (isInf || (1.0 * deltaY) / deltaX !== slope) {
                return false;
            }
        }
        else {
            slopeFound = true;
            if (deltaX === 0) {
                isInf = true;
            }
            else {
                slope = (1.0 * deltaY) / deltaX;
            }
        }
    }
    return true;
};
console.log(checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
]));
console.log(checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
]));
//# sourceMappingURL=straight-line.js.map