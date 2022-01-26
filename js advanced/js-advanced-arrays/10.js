function solve(array) {
  let firstSum = 0
  let secondSum = 0

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let j = i + 1
    firstSum += array[i][i] + array[array.length - j][array.length - j]
    secondSum += array[i][array.length - j] + array[array.length - j][i]
    if (array.length % 2 != 0) {
      firstSum += array[Math.floor(array.length / 2)][Math.floor(array.length / 2)]
      secondSum += array[Math.floor(array.length / 2)][Math.floor(array.length / 2)]
    }
  }
  console.log(firstSum + ' ' + secondSum)
  // console.log(secondSum)
}

solve([[20, 40],
[10, 60]]
)
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)