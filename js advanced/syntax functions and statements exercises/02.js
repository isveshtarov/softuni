//1

function solve(num1, num2) {
  while(num2) {
    let buff = num2;
    num2 = num1 % num2;
    num1 = buff;
  }
  console.log(num1)
}

solve(20, 28)

//2

function solve(num1, num2) {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2
    }else {
      num2 -= num1
    }
  }
  console.log(num1)
}

solve(20, 28)