function solve(input) {
    // let firstElement = input.shift();
    // let lastElement = input.pop();

    let firstNumber = Number(input.shift());
    let lastNumber = Number(input.pop());

    let sum = firstNumber + lastNumber;

    return sum;
}

let result = solve(['20', '30', '40']);

console.log(result);
