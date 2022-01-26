function solve (array) {
    let sum = 0
    for (let num of array) {
        if (Number(num) % 2 == 0) {
            sum += Number(num)
        }
    }
    console.log(sum)
}

solve(['2', '4', '6', '8', '10'])