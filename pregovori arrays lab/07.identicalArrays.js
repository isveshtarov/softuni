function solve (array1, array2) {
    let sum = 0
    let isIdentical = true
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isIdentical = false
            break;
        }
    }
    if (isIdentical) {
        for (let num of array1) {
            sum += Number(num)
        }
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

solve(['10','20','30'], ['10','20','30'])