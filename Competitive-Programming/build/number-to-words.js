// func to converts num to words
// input will range 0 to 9999
// there will no negative number as the input
// returned value = all lowercase
var numberToWords = function (number) {
    var stringArrNum = number.toString().split("");
    var length = stringArrNum.length;
    var words = "";
    var breakpoint = 0;
    if (length >= 2) {
        var puluhan = stringArrNum[length - 2] + stringArrNum[length - 1];
        if (puluhan === "00") {
            breakpoint = 2;
        }
        else if (+puluhan < 20 || +puluhan % 10 === 0) {
            words += vocab(+puluhan);
            if (length >= 3) {
                words += "and " + words;
                stringArrNum.pop();
                stringArrNum.pop();
                breakpoint = 2;
            }
        }
        var j = 0;
        for (var i = length - 1 - breakpoint; i >= 0; i--) {
            if (j === 2) {
                words = "and " + words;
                j++;
            }
            if (+stringArrNum[i] === 0) {
                continue;
            }
            words = vocab(+stringArrNum[i] * Math.pow(10, length - i - 1)) + " " + words;
        }
        return words;
    }
};
var vocab = function (num) {
    var temp = "";
    if (num > 99) {
        var stringArrNum = num.toString().split("");
        var zeroTrailing = stringArrNum.length - 1;
        temp = "".concat(under100(+stringArrNum[0]), " ").concat(above99(zeroTrailing));
    }
    else {
        temp = under100(num);
    }
    return temp;
};
var under100 = function (num) {
    var temp = "";
    switch (num) {
        case 0:
            temp += "zero";
            break;
        case 1:
            temp += "one";
            break;
        case 2:
            temp += "two";
            break;
        case 3:
            temp += "three";
            break;
        case 4:
            temp += "four";
            break;
        case 5:
            temp += "five";
            break;
        case 6:
            temp += "six";
            break;
        case 7:
            temp += "seven";
            break;
        case 8:
            temp += "eight";
            break;
        case 9:
            temp += "nine";
            break;
        case 10:
            temp += "ten";
            break;
        case 11:
            temp += "eleven";
            break;
        case 12:
            temp += "twelve";
            break;
        case 13:
            temp += "thirteen";
            break;
        case 14:
            temp += "fourteen";
            break;
        case 15:
            temp += "fifteen";
            break;
        case 16:
            temp += "sixteen";
            break;
        case 17:
            temp += "seventeen";
            break;
        case 18:
            temp += "eighteen";
            break;
        case 19:
            temp += "nineteen";
            break;
        case 20:
            temp += "twenty";
            break;
        case 30:
            temp += "thrity";
            break;
        case 40:
            temp += "fourty";
            break;
        case 50:
            temp += "fifty";
            break;
        case 60:
            temp += "sixty";
            break;
        case 70:
            temp += "seventy";
            break;
        case 80:
            temp += "eighty";
            break;
        case 90:
            temp += "ninety";
            break;
        default:
            temp += "";
            break;
    }
    return temp;
};
var above99 = function (zeroTrailing) {
    switch (zeroTrailing) {
        case 2:
            return "hundred";
        case 3:
            return "thousand";
        default:
            return "";
    }
};
[
    0,
    8,
    10,
    5,
    42,
    33,
    21,
    11,
    65,
    11,
    88,
    9,
    99,
    100,
    301,
    456,
    125,
    735,
    999,
    1097,
    1347,
    9865,
    6735,
    6782,
    9009, /// Ribuan
].forEach(function (e) { return console.log(numberToWords(e)); });
// 9909 = "nine thousand nine hundred ninety eight"
// 200 = "two hundred"
// 0 = "zero"
// 11 = "eleven"
// 1111 = "one thousand one hundred eleven"
//# sourceMappingURL=number-to-words.js.map