function rig (input) {

    gpuPrice = Number(input[0]);
    riserprice = Number(input[1]);
    electricityPerDay = Number(input[2]);
    gpuProfit = Number(input[3]);

    totalCost = 13 * gpuPrice + 13 * riserprice + 1000;
    profitPerDay = 13 * (gpuProfit - electricityPerDay);
    estDays = Math.ceil(totalCost/profitPerDay);

    console.log(totalCost);
    console.log(estDays);

}

rig([800,
    10,
    0.32,
    6.4
    ])