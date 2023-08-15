// virus can infect something that colose to it.
// we want to simulate the spreads of the virus by its hours infected
// notes:
// Code          Condition
// o             Normal
// *             Infected
// #             Immuned
// rules:
// - first line of input is the current conditions of the people
// - second line of input is the hours of the virus spreads
// - the output is the final condition of the people after hours they infected
// - every next hours:  
//    - the Infected makes its Normal neighbors Infected
//    - the Infected become Immuned
//    - the Immuned will stay Immuned
// - only Infected people spreads virus
var virusSpread = function (peopleCondition, hourInfected) {
    var arr = peopleCondition.split('');
    // let newCondition = '';
    for (var i = 0; i < hourInfected; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === 'o' && arr[j - 1] === '*' || arr[j + 1] === '*') {
                arr[j] = '*';
            }
            else if (arr[j] === '0') {
                arr[j] = 'o';
            }
            else if (arr[j] === '*') {
                arr[j] = '#';
            }
            else if (arr[j] === '#') {
                arr[j] = '#';
            }
        }
        console.log(arr.join(''));
    }
    return '---';
};
console.log(virusSpread('*o##o', 1)); // #*##o
console.log(virusSpread('o##o', 2)); // o##o
console.log(virusSpread('oo*oo', 2)); // o*#*o -> *###*
console.log(virusSpread('o#*o*o', 1)); // o##*#*
//# sourceMappingURL=virus-spreads.js.map