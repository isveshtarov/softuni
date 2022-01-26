function holiday(input) {
    let index = 0;
    let neededMoney = Number(input[index++]);
    let balance = Number(input[index++]);


    let daysCounter = 0;
    let spendCounter = 0;
    let savedMoney = 0;

    while (input[index] !== undefined) {
        switch (input[index]) {
            case "save":
                index++;
                savedMoney += Number(input[index]);
                break;
            case "spend":
                index++;
                savedMoney -= Number(input[index]);
                spendCounter++;
                break;
        }
        daysCounter++;
        index++;
    }
    if (spendCounter >= 5) {
        console.log(`You can't save the money.`)
        console.log(`${daysCounter}`)
    } else {
        console.log(`You saved the money for ${daysCounter} days.`)
    }
}

holiday(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])