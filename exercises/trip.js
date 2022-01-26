function trip(input) {
    budget = Number(input[0]);
    season = input[1];
    let destination;
    let tripType;
    let price = 0;

    function priceCalc(input) {
        if (budget <= 100) {
            destination = 'Bulgaria';
            price = budget * Number(input[0]);
        } else if (budget > 100 && budget <= 1000) {
            destination = 'Balkans';
            price = budget * Number(input[1]);
        } else {
            destination = 'Europe';
            price = budget * Number(input[2]);
        }
    }

    switch (season) {
        case 'summer':
            priceCalc([0.3, 0.4, 0.9])
            break;
        case 'winter':
            priceCalc([0.7, 0.8, 0.9])
            break;
    }

    if (season === 'summer' && destination != 'Europe') {
        tripType = 'Camp';
    } else {
        tripType = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${tripType} - ${(price).toFixed(2)}`);
}