function cinemaProfits(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalIncome = 0;

    let totalSeats = rows * columns;

    // switch (type) {
    //     case 'Premiere':
    //         totalIncome = totalSeats * 12;
    //         break;
    //     case 'Normal':
    //         totalIncome = totalSeats * 7.5;
    //         break;
    //     case 'Discount':
    //         totalIncome = totalSeats * 5;
    //         break;
    // }
    // console.log(`${totalIncome.toFixed(2)} leva`)

    if (type === 'Premiere') {
        totalIncome = totalSeats * 12;
    } else if (type === 'Normal') {
        totalIncome = totalSeats * 7.5;
    } else if (type === 'Discount') {
        totalIncome = totalSeats * 5;
    }

    console.log(`${totalIncome.toFixed(2)} leva`);
}