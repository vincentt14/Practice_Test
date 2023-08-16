// remove number zero in the array
// new arr 1 & 2 = number n & m
// given 2 integer num1 and num2, m = items on num1 arr, n = items on num 2 arr
// merge into single array sorted in non-decreasing order
// num1 has a length of m + n, where the m elements denote the elements that should be merge, and the last n elements are set to 0 and should be ignored. num2 has a length of n
var merge = function (nums1, m, nums2, n) {
    var index = nums1.length - n;
    for (var i = index; i < nums1.length; i++) {
        nums1[i] = nums2[i - index];
    }
    return nums1.sort(function (a, b) { return a - b; });
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
//# sourceMappingURL=merge-sorted-array.js.map