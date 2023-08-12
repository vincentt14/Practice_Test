// make a string to palindrome
// return -1 if palindrome = true
// if palindrome = false, then return the i of char that need to remove
// return -2 if not a palindrome

const palindromeCheck = (query: string): number => {
  let reverse = query.split('').reverse().join('');

  if(reverse === query){
    return -1
  }else {
    for(let i = 0; i < query.length; i++){
      const dup = query.split("").map(item => item);
      dup.splice(i, 1)

      if(dup.join('') === dup.reverse().join('')){
        return i
      }
    }
    return -2
  }
}

console.log(palindromeCheck('aaab'))
console.log(palindromeCheck('bcbc'))
console.log(palindromeCheck('aaa'))
console.log(palindromeCheck('klok'))
console.log(palindromeCheck('bkdekb'))
console.log(palindromeCheck('bkdesdkb'))
console.log(palindromeCheck('vincent'))