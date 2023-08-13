// given integer n, return a string array 1 indexed
// i = FizzBuzz if i disible by 3 and 5
// i = Fizz if i divisible by 3
// i = Buzz if i divisible by 5
// i = i (as string) if none condition above are true

const fizzBuzzGenerator = (num : number): string[] => {
  let result: string[] = []
  for(let i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0){
      result.push("FizzBuzz")
    }else if (i % 3 === 0){
      result.push("Fizz")
    }else if( i % 5 === 0){
      result.push("Buzz")
    }else{
      result.push(`${i}`)
    }
  }

  return result
}

console.log(fizzBuzzGenerator(3))
console.log(fizzBuzzGenerator(5))
console.log(fizzBuzzGenerator(15))