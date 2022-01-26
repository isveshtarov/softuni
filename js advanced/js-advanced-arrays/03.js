// function solve(input) {
//   firstElement = Number(input.shift());
//   lastElement = Number(input.pop()) || 0;

//   return firstElement + lastElement;
// }

function solve(input) {
  return Number(input[0]) + Number(input[input.length - 1])
}