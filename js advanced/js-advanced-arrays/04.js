function solve(input) {
  let newArr = []
  let inputL = input.length

  for (i = 0; i < inputL; i++) {
    if (input[i] < 0) {
      newArr.unshift(input[i])
    } else {
      newArr.push(input[i])
    }
  }
  console.log(newArr.join('\n'))
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])