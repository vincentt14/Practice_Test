// team discipline by charging fines
// 1. first 3 delays member = pay 5000 / late
// 2. from the 4th delay member = pay 10000 / late
// 3. if the total fines in a month >= 50000 then fines * 2
// 4. number of days late is at least 0 <= 23 days
// const iceCreamMeter = (lateNum: number): number => {
//   const temp: number[] = [];
//   let totalPay = 0;
//   if(lateNum === 0 || lateNum < 0){
//     return 0
//   }
//   for (let i = 1; i <= lateNum; i++) {
//     if (i === 0 || i <= 3) {
//       temp.push(5000);
//     } else if (i === 4 || i <= 23) {
//       temp.push(10000);
//     }
//   }
//   if (temp.reduce((a, b) => a + b) >= 50000) {
//     totalPay = temp.reduce((a, b) => a + b) * 2;
//   } else {
//     totalPay = temp.reduce((a, b) => a + b);
//   }
//   return totalPay;
// };
// optimize
var iceCreamMeter = function (lateNum) {
    if (lateNum <= 0) {
        return 0;
    }
    var temp = [];
    for (var i = 1; i <= lateNum; i++) {
        if (i <= 3) {
            temp.push(5000);
        }
        else if (i <= 23) {
            temp.push(10000);
        }
    }
    var totalPay = temp.reduce(function (a, b) { return a + b; });
    if (totalPay >= 50000) {
        return totalPay * 2;
    }
    else {
        return totalPay;
    }
};
console.log(iceCreamMeter(-1));
console.log(iceCreamMeter(0));
console.log(iceCreamMeter(3));
console.log(iceCreamMeter(5));
console.log(iceCreamMeter(6));
console.log(iceCreamMeter(7));
console.log(iceCreamMeter(20));
console.log(iceCreamMeter(15));
console.log(iceCreamMeter(23));
//# sourceMappingURL=ice-cream-meter.js.map