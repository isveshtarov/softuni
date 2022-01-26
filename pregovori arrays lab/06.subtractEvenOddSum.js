function solve (array) {
    let sumEven = 0
    let sumOdd = 0
    for (num of array) {
        if (num % 2 == 0) {
            sumEven += Number(num)
        } else {
            sumOdd += Number(num)
        }
    }
    console.log(sumEven - sumOdd)
}

solve([3, 5, 7, 9])