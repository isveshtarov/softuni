function solve(input) {
  let sum = 0;
  let invSum = 0;
  let conc = ''
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    invSum += 1/input[i]
    conc += input[i].toString()
  }
  console.log(sum)
  console.log(invSum)
  console.log(conc)
}

solve([2, 4, 8, 16])