function solve (dayAsNumber) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]

    if (dayAsNumber > 7 || dayAsNumber < 1) {
        console.log('Invalid day!')
    } else {
        console.log(days[dayAsNumber - 1])
    }
}

solve(7)