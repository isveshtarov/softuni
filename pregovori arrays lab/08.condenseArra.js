function solve (array) {
    let sum = 0
    while (array.length > 1) {
        let condensed = []
        for (let i = 0; i < array.length - 1; i++) {
            sum = array[i] + array[i+1]
            condensed.push(sum)
        }
        array = condensed
    }
    console.log(array[0])
}

solve([2,10,3])