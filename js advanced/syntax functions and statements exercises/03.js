function solve(input) {
  let string = input.toString()
  let result = '';
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    let numToCheck = string[i]
    for (let j = 0; j < string.length; j++) {
      if (numToCheck !== string[j]) {
        result = 'false'
        break
      } else {
        result = 'true'
      }
    }
    sum += Number(string[i])
  }
  console.log(result);
  console.log(sum)
}

solve(2222222)
solve(1234)