function solve (firstArray, secondArray) {
    let arrayL = firstArray.length
    let newArray = []
    let kur
    for (let i = 0; i < arrayL; i++) {
        kur = i % 2 == 0 ? newArray.push(Number(firstArray[i]) + Number(secondArray[i])) :
        newArray.push(firstArray[i] + secondArray[i])
        // if (i % 2 == 0) {
        //     newArray.push(Number(firstArray[i]) + Number(secondArray[i]))
        // } else {
        //     newArray.push(firstArray[i] + secondArray[i])
        // }
    }
    console.log(newArray.join(' - '))
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])