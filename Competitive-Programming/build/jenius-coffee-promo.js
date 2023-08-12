// Coffee Latte (L) : 20.000
// Coffee Americano (A) : 20.000
// Coffee Cappucino (C) : 25.000
// Water(W) : 5.000
// customers only have to pay 3k for 1 cup of the most expensive Coffee
// Promo only L, A and C
// must spend 50k to get Promo
var totalPayment = function (order) {
    var totalPay = 0;
    var lCount = 0;
    var aCount = 0;
    var cCount = 0;
    var wCount = 0;
    var orderArr = order.split('');
    for (var i = 0; i < orderArr.length; i++) {
        if (orderArr[i] === "A") {
            totalPay += 20000;
            aCount++;
        }
        else if (orderArr[i] === "L") {
            totalPay += 20000;
            lCount++;
        }
        else if (orderArr[i] === "C") {
            totalPay += 25000;
            cCount++;
        }
        else if (orderArr[i] === "W") {
            totalPay += 5000;
            wCount++;
        }
    }
    if (totalPay >= 50000) {
        if (cCount === 0 && lCount > 0 || aCount > 0) {
            totalPay -= 17000;
        }
        else if (cCount > 0) {
            totalPay -= 22000;
        }
    }
    else {
        console.log(totalPay);
    }
    console.log(aCount, cCount, lCount, wCount, totalPay);
    return -1;
};
totalPayment('L');
totalPayment('LCW');
totalPayment('ALA');
//# sourceMappingURL=jenius-coffee-promo.js.map