function solve(input) {
  let newArr = input.sort((a, b) => a - b).slice(0, 2).join(' ')

  console.log(newArr)
}

solve([30, 15, 50, 5])
solve([3, 0, 10, 4, 7, 3])