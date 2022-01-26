function factoriel(input) {
    let num = Number(input[0]);
    let factorial = 1;

    for (i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

factoriel(["4"])