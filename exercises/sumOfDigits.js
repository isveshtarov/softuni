function sumOfDigits (input) {
    let number = input[0] + "";
    let result = 0;

    for (i = 0; i < number.length; i++ ) {
        result += Number(number[i]);
    }

    console.log(`The sum of the digits is:${result}`);
}