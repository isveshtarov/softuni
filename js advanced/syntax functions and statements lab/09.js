function solve(input) {
  if (input != undefined) {
    for (let i = 1; i <= Number(input); i++) {
      console.log('* '.repeat(Number(input)))
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      console.log('* '.repeat(5))
    }
  }
}

solve(7)