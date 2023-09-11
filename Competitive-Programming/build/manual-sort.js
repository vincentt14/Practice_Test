// sort an array without any js method (manual) descending
var input = [1, 2, 4, 3, 5, 3, 2, 1];
var input2 = [500, 465, 10, 2, 501, 501];
var selectionSortDescending = function (arr) {
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
    return arr;
};
console.log(selectionSortDescending(input2));
//# sourceMappingURL=manual-sort.js.map