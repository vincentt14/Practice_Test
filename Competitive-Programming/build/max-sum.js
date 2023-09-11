// return the max sum from arr with size
var q1 = [100, 200, 300, 400];
var q2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
var q3 = [-3, 4, 0, -2, 6, -1];
var maxSum = function (arr, size) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    temp = 0;
    for (var i = 0; i < size; i++) {
        temp += arr[i];
    }
    return temp;
};
console.log(maxSum(q1, 2));
console.log(maxSum(q2, 4));
console.log(maxSum(q3, 2));
//# sourceMappingURL=max-sum.js.map