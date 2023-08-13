// team discipline by charging fines
// 1. first 3 delays member = pay 5000 / late
// 2. from the 4th delay member = pay 10000 / late
// 3. if the total fines in a month >= 50000 then fines * 2
// 4. number of days late is at least 0 <= 23 days
var iceCreamMeter = function (lateNum) {
    var temp = [];
    var totalPay = 0;
    if (lateNum === 0 || lateNum < 0) {
        return 0;
    }
    for (var i = 1; i <= lateNum; i++) {
        if (i === 0 || i <= 3) {
            temp.push(5000);
        }
        else if (i === 4 || i <= 23) {
            temp.push(10000);
        }
    }
    if (temp.reduce(function (a, b) { return a + b; }) >= 50000) {
        totalPay = temp.reduce(function (a, b) { return a + b; }) * 2;
    }
    else {
        totalPay = temp.reduce(function (a, b) { return a + b; });
    }
    return totalPay;
};
console.log(iceCreamMeter(-1));
console.log(iceCreamMeter(0));
console.log(iceCreamMeter(3));
console.log(iceCreamMeter(5));
console.log(iceCreamMeter(6));
console.log(iceCreamMeter(7));
console.log(iceCreamMeter(20));
console.log(iceCreamMeter(15));
console.log(iceCreamMeter(25));
//# sourceMappingURL=ice-cream-meter.js.map