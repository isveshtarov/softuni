function solve (yield) {
    let daysCounter = 0
    let totalMined = 0

    while (yield >= 100) {
        totalMined += (yield -26)
        daysCounter++
        yield -= 10
    }

    if(totalMined >= 26) {
        totalMined = totalMined -26
    }

    console.log(daysCounter)
    console.log(totalMined)
}

solve(450)