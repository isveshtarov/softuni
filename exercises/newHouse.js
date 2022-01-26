function newHouse(input) {
    let type = input[0];
    let flowersQ = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    switch (type) {
        case 'Roses':
            totalPrice = flowersQ * 5;
            if (flowersQ > 80) {
                totalPrice = totalPrice * 0.9;
            }
            break;
        case 'Dahlias':
            totalPrice = flowersQ * 3.8;
            if (flowersQ > 90) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case 'Tulips':
            totalPrice = flowersQ * 2.8;
            if (flowersQ > 80) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case 'Narcissus':
            totalPrice = flowersQ * 3;
            if (flowersQ < 120) {
                totalPrice = totalPrice * 1.15;
            }
            break;
        case 'Gladiolus':
            totalPrice = flowersQ * 2.5;
            if (flowersQ < 80) {
                totalPrice = totalPrice * 1.2;
            }
            break;
    }

    if (totalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowersQ} ${type} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Roses",
"55",
"250"])


// Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left.

// "Not enough money, you need {нужната сума} leva more."