function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    function aparatmentCalc() {
        if (nights > 14) {
            priceApartment = priceApartment * 0.9;
        }
    }

    switch (month) {
        case 'May':
        case 'October':
            priceStudio = 50;
            priceApartment = 65;
            if (nights > 7 && nights <= 14) {
                priceStudio = priceStudio * 0.95;
            } else if (nights > 14) {
                priceStudio = priceStudio * 0.7;
            }
            aparatmentCalc();
            break;
        case 'June':
        case 'September':
            priceStudio = 75.2;
            priceApartment = 68.7;
            if (nights > 14) {
                priceStudio = priceStudio * 0.8;
            }
            aparatmentCalc();
            break;
        case 'July':
        case 'August':
            priceStudio = 76;
            priceApartment = 77;
            aparatmentCalc();
            break;
    }

    console.log(`Apartment: ${(priceApartment * nights).toFixed(2)} lv.`)
    console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`)

}