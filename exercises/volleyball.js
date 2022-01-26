function volleyball (input) {
    let year = input[0];
    let celebrations = Number(input[1]);
    let weekendOutOfTown = Number(input[2]);

    let playWeekendsSofia = (48 - weekendOutOfTown) * 0.75;
    let playCelebrations = celebrations * 2 / 3;

    let totalGames = playWeekendsSofia + playCelebrations + weekendOutOfTown;

    if (year === 'normal') {
        console.log(Math.floor(totalGames));
    } else {
        totalGames = totalGames * 1.15;
        console.log(Math.floor(totalGames));
    }
}