function adultChristmas(input) {
    index = 0;
    let command = input[index++]
    let counterAdults = 0;
    let counterKids = 0;

    while (command !== 'Christmas') {
        let personAge = Number(command);

        if (personAge <= 16) {
            counterKids++;
        } else {
            counterAdults++;
        }
        command = input[index++];
    }
    console.log(`Number of adults: ${counterAdults}`)
    console.log(`Number of kids: ${counterKids}`)
    console.log(`Money for toys: ${counterKids * 5}`)
    console.log(`Money for sweaters: ${counterAdults * 15}`)
}

adultChristmas(["18",
    "20",
    "48",
    "45",
    "56",
    "37",
    "12",
    "14",
    "Christmas"])