function solve(num) {
    num = num.toString()
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }

    let isContaingNine =  sum.toString().includes('9')
    let result = isContaingNine ?
        `${num} Amazing? True` :
        `${num} Amazing? False`

    console.log(result)
}

solve(2233)