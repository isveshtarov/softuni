function solve(input) {
  let inputType = typeof (input)
  if (inputType != 'number') {
    console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
  } else {
    let area = Math.PI * (Math.pow(input, 2))
    console.log(area.toFixed(2))
  }
}

solve('pesho')
solve(5)