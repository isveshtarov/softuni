function change(input) {
    let neededChange = (Number(input[0]) * 100).toFixed(0);
    let coins = 0;

    while (neededChange > 0) {
        if (neededChange - 200 >= 0) {
            coins++;
            neededChange -= 200;
        } else if (neededChange - 100 >= 0) {
            coins++;
            neededChange -= 100;
        } else if (neededChange - 50 >= 0) {
            coins++;
            neededChange -= 50;
        } else if (neededChange - 20 >= 0) {
            coins++;
            neededChange -= 20;
        } else if (neededChange - 10 >= 0) {
            coins++;
            neededChange -= 10;
        } else if (neededChange - 5 >= 0) {
            coins++;
            neededChange -= 5;
        } else if (neededChange - 2 >= 0) {
            coins++;
            neededChange -= 2;
        } else if (neededChange - 1 >= 0) {
            coins++;
            neededChange -= 1;
        }
    }
    console.log(coins);
}

change(["5.73"])