function smartLilly(input) {
    let age = Number(input[0]);
    let washMachPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let totalToys = 0;
    let sumMoney = 0;
    let nextMoney = 10;

    for (i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            totalToys++;
        } else {
            sumMoney += nextMoney;
            nextMoney += 10;
            sumMoney--;
        }
    }

    let totalMoney = toyPrice * totalToys + sumMoney;
    let diff = Math.abs(washMachPrice - totalMoney)

    if (washMachPrice <= totalMoney) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}

smartLilly(["10", "170", "6"])