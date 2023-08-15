// virus can infect something that colose to it.
// we want to simulate the spreads of the virus by its hours infected

// notes:
// Code     Condition
// o        Normal
// *        Infected
// #        Immuned

// rules:
// - first line of input is the current conditions of the people
// - second line of input is the hours of the virus spreads
// - the output is the final condition of the people after hours they infected
// - every next hours:
//    - the Infected makes its Normal neighbors Infected
//    - the Infected become Immuned
//    - the Immuned will stay Immuned
// - only Infected people spreads virus

const virusSpread = (peopleCondition: string, hourInfected: number): string => {
  const arr = peopleCondition.split("");

  for (let i = 0; i < hourInfected; i++) {
    const dup = arr.map((item) => item);
    for (let j = 0; j < arr.length; j++) {
      if (dup[j] === "o" && dup[j - 1] === "*") {
        arr[j] = "*";
      } else if (dup[j] === "o" && dup[j + 1] === "*") {
        arr[j] = "*";
      } else if (dup[j] === "o") {
        arr[j] = "o";
      } else if (dup[j] === "*") {
        arr[j] = "#";
      } else if (dup[j] === "#") {
        arr[j] = "#";
      }
    }
    console.log(arr.join(""));
  }
  return "---";
};

console.log(virusSpread("*o##o", 2)); // #*##o -> ####o
console.log(virusSpread("o#*#o", 1)); // o###o
console.log(virusSpread("oo*oo", 3)); // o*#*o -> *###* => #####
console.log(virusSpread("o#*o*o", 1)); // o##*#*
