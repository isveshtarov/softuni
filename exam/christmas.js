function christmas(input) {
    let type = input[0];
    let quantityOrdered = Number(input[1]);
    let date = Number(input[2]);
    let totalCost = 0;

    switch (type) {
        case 'Cake':
            if (date <= 15) {
                totalCost = quantityOrdered * 24;
            } else {
                totalCost = quantityOrdered * 28.7;
            }
            if (date <= 22) {
                if (totalCost >= 100 && totalCost <= 200) {
                    totalCost = totalCost * 0.85;
                } else if (totalCost > 200) {
                    totalCost = totalCost * 0.75;
                }
            }
            break;
        case 'Souffle':
            if (date <= 15) {
                totalCost = quantityOrdered * 6.66;
            } else if (date > 15) {
                totalCost = quantityOrdered * 9.8;
            }
            if (date <= 22) {
                if (totalCost >= 100 && totalCost <= 200) {
                    totalCost = totalCost * 0.85;
                } else if (totalCost > 200) {
                    totalCost = totalCost * 0.75;
                }
            }
            break;
        case 'Baklava':
            if (date <= 15) {
                totalCost = quantityOrdered * 12.6;
            } else {
                totalCost = quantityOrdered * 16.98;
            }
            if (date <= 22) {
                if (totalCost >= 100 && totalCost <= 200) {
                    totalCost = totalCost * 0.85;
                } else if (totalCost > 200) {
                    totalCost = totalCost * 0.75;
                }
            }
            break;
    }
    if (date <= 15) {
        totalCost = totalCost * 0.9;
    }
    console.log(totalCost.toFixed(2))
}

christmas(["Cake",
    "5",
    "12"])

