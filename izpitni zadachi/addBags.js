function addBags(input) {
    let luggageAboveTwenty = Number(input[0]);
    let bagsWeight = Number(input[1]);
    let daysLeft = Number(input[2]);
    let bagsAmount = Number(input[3]);

    let luggagePrice = 0;

    if (bagsWeight < 10) {
        luggagePrice = luggageAboveTwenty * 0.2;
    } else if (bagsWeight >= 10 && bagsWeight <= 20) {
        luggagePrice = luggageAboveTwenty * 0.5;
    } else {
        luggagePrice =  luggageAboveTwenty;
    }

    if (daysLeft > 30) {
        luggagePrice = luggagePrice * 1.1;
    } else if (daysLeft >= 7 && daysLeft <=30) {
        luggagePrice = luggagePrice * 1.15
    } else {
        luggagePrice = luggagePrice * 1.4
    }

    console.log(`The total price of bags is: ${(bagsAmount * luggagePrice).toFixed(2)} lv.`)
}

addBags (['30',
    '18',
    '15',
    '2'
    ])