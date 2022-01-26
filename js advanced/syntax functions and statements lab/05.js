// function solve(num1, num2, operator) {
//   let result
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     case '%':
//       result = num1 % num2;
//       break;
//     case '**':
//       result = num1 ** num2;
//       break;
//   }

//   console.log(result);
// }

function solve(num1, num2, operator) {
  console.log(eval(num1 + operator + num2))
}

solve(3, 8, '**')