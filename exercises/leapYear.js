function leapYear(input) {
    let startYear = Number(input[0]);
    let endYear = Number(input[1]);
    for (i = startYear; i <= endYear; i += 4) {
        console.log(i);
    }
}