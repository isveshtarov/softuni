function solve(input) {
  let sortedArray = input.sort((a, b) => a - b).slice(Math.floor(input.length / 2))
  // let halfArray = sortedArray.slice(Math.floor(sortedArray.length / 2))
  // console.log(sortedArray)
  return sortedArray
}

solve([3, 19, 14, 7, 2, 19, 6])
solve([4, 7, 2, 5])