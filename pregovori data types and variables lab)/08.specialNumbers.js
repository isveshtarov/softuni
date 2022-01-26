function solve (num) {
    num = num.toString()
    for (let i = 1; i <= num; i++) {
        let sum = 0
        let tempNum = i.toString()

        for (let j = 0; j < tempNum.length; j++) {
            sum += Number(tempNum[j])
        }
        
        let result 
        if (sum == 5 || sum == 7 || sum == 11) {
            result = 'True'
        } else {
            result = 'False'
        }
        console.log(`${i} -> ${result}`)
    }
}

solve(15)