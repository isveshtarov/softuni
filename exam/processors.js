function processors(input) {
    let neededProcessors = Number(input[0]);
    let employees = Number(input[1]);
    let workingDays = Number(input[2]);

    let totalWorkingHours = employees * workingDays * 8;

    let totalProcessorsMade = Math.floor(totalWorkingHours / 3);

    if(totalProcessorsMade >= neededProcessors){
        console.log(`Profit: -> ${ ((totalProcessorsMade * 110.10) - (neededProcessors * 110.10)).toFixed(2) } BGN`)
    } else {
        console.log(`Losses: -> ${ ((neededProcessors * 110.10) - (totalProcessorsMade * 110.10)).toFixed(2) } BGN`)
    }
}

processors([150,
    7,
    18])