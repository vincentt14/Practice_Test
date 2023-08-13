// check palindrome
// remove all non-alphanumeric char
var isValidPalindrome = function (s) {
    var reverse = s.toLowerCase().split('').reverse().join('');
    if (s.toLowerCase() === reverse) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isValidPalindrome('raceCar'));
console.log(isValidPalindrome('toto'));
console.log(isValidPalindrome('Amore, Roma'));
console.log(isValidPalindrome(''));
//# sourceMappingURL=validate-palindrome.js.map