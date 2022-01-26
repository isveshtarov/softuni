function solve(input) {
  let inputL = input.length
  let newArr = []

  for (i = 0; i < inputL; i++) {
    let currentElement = 0
    if (i != 0 && i % 2 != 0) {
      currentElement = input[i] * 2
      newArr.push(currentElement)
    }
  }
  return newArr.reverse().join(' ')
}

solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])