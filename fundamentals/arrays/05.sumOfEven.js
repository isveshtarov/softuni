function solve(num) {
    let sum = 0;
    for (unparsed of num) {
        let number = Number(unparsed);
        if (number % 2 === 0) {
            sum += number
        }
    }
    console.log(sum)
}