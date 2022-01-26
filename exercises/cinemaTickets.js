function cinemaTickets(input) {

    let  index = 0;
    let name = input[index++];

    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;

    while (name !== 'Finish') {
        let freeSpace = Number(input[index++]);
        let counterTicket = 0;
        let command = input[index++];

        while (command !== 'End') {
            let type = command;
            if (type === 'student') {
                studentCounter++;
            } else if (type === 'standard') {
                standardCounter++
            } else if (type === 'kid') {
                kidCounter++;
            }
            counterTicket++;
            if (freeSpace == counterTicket) {
                break;
            }
            command = input[index++]
        }
        let percentage = (counterTicket / freeSpace) * 100;
        console.log(`${name} - ${percentage.toFixed(2)}% full.`)


        name = input[index++];
    }

    let totalTickets = studentCounter + standardCounter + kidCounter;

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentCounter / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])