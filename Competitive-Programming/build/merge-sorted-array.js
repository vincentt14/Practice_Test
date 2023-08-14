// remove number zero in the array
// new arr 1 & 2 = number n & m
// given 2 integer num1 and num2, m = items on num1 arr, n = items on num 2 arr
// merge into single array sorted in non-decreasing order
var merge = function (num1, m, num2, n) {
    for (var i = 0; i < num1.length; i++) {
        if (num1[i] === 0) {
            console.log(i);
            num1.splice(i, 1);
        }
    }
    console.log(num1);
    return num2;
    // return newN1.concat(newN2).sort();
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0))
// console.log(merge([0], 0, [1], 1))
//# sourceMappingURL=merge-sorted-array.js.map