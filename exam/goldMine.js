function goldMine(input) {

    let index = 0;
    let locations = Number(input[index++]);

    for (let i = 1; i <= locations; i++) {
        let totalDiggedGold = 0;
        let expectedAverageGold = Number(input[index]);
        index++;
        let daysDigging = Number(input[index]);
        index++;
        for (j = 1; j <= daysDigging; j++) {
            let diggedGold = Number(input[index++])
            totalDiggedGold += diggedGold;
        }
        let averageDigged = (totalDiggedGold / daysDigging).toFixed(2)

        if (averageDigged >= expectedAverageGold) {
            console.log(`Good job! Average gold per day: ${averageDigged}.`)
        } else {
            console.log(`You need ${(expectedAverageGold - averageDigged).toFixed(2)} gold. `)
        }
    }
}

goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])