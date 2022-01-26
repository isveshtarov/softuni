function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMen = Number(input[2]);

    let shipPrice = 0;
    let price = 0;

    function shipPriceCalc() {
        if (fisherMen <= 6) {
            shipPrice = price * 0.9;
        } else if (fisherMen >= 7 && fisherMen <= 11) {
            shipPrice = price * 0.85;
        } else if (fisherMen > 11) {
            shipPrice = price * 0.75;
        }
    }

    switch (season) {
        case 'Spring':
            price = 3000;
            shipPriceCalc();
            // if (fisherMen <= 6) {
            //     shipPrice = 3000 * 0.9;
            // } else if (fisherMen >= 7 && fisherMen <= 11) {
            //     shipPrice = 3000 * 0.85;
            // } else if (fisherMen > 11) {
            //     shipPrice = 3000 * 0.75;
            // }
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            shipPriceCalc();

            // if (fisherMen <= 6) {
            //     shipPrice = 4200 * 0.9;
            // } else if (fisherMen >= 7 && fisherMen <= 11) {
            //     shipPrice = 4200 * 0.85;
            // } else if (fisherMen > 11) {
            //     shipPrice = 4200 * 0.75;
            // }
            break;
        case 'Winter':
            price = 2600;
            shipPriceCalc();

            if (fisherMen <= 6) {
                shipPrice = 2600 * 0.9;
            } else if (fisherMen >= 7 && fisherMen <= 11) {
                shipPrice = 2600 * 0.85;
            } else if (fisherMen > 11) {
                shipPrice = 2600 * 0.75;
            }
            break;
    }

    if (fisherMen % 2 === 0 && season != 'Autumn') {
        shipPrice = shipPrice * 0.95;
    }

    if (budget >= shipPrice) {
        console.log(`Yes! You have ${(budget - shipPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(shipPrice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000",
    "Summer",
    "11"])
