// check palindrome
// remove all non-alphanumeric char

const isValidPalindrome = (s: string): boolean => {
  let reverse = s.toLowerCase().split('').reverse().join('').replace(/[^a-z0-9]/gi, '')

  if(s.toLowerCase().replace(/[^a-z0-9]/gi, '') === reverse){
    return true
  }else {
    return false
  }
}

console.log(isValidPalindrome('raceCar'))
console.log(isValidPalindrome('toto'))
console.log(isValidPalindrome('Amore, Roma'))
console.log(isValidPalindrome('Ba/2aB'))
console.log(isValidPalindrome(''))