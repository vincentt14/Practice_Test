// given 2 integer num1 and num2
// merte into single array sorted in non-decreasing order
var merge = function (num1, m, num2, n) {
    var newN1 = new Array(m);
    var newN2 = new Array(n);
    // newN1.push(num1);
    return newN1.concat(newN2).sort();
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0))
// console.log(merge([0], 0, [1], 1))
//# sourceMappingURL=merge-sorted-array.js.map