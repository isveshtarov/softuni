function divisibleByNine(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;

    let outputNumbers = '';

    for (i = startNum; i <= endNum; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (i = startNum; i <= endNum; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

divisibleByNine(['100', '200'])