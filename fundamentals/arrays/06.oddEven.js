function solve(num) {
    let sumEven = 0;
    let sumOdd = 0
    for (number of num) {
        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}