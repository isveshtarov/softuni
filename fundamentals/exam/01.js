function solve(input) {
    let index = 0;
    let numberOfCities = Number(input.shift());
    let cityCounter = 0;
    let totalProfit= 0 ;
    
    for (i = 0; i < numberOfCities; i++){
        let cityName = input[index];
        index++;
        let cityIncome = Number(input[index]);
        index++;
        let cityCost = Number(input[index]);
        index++;
        cityCounter++;
        if (cityCounter % 3 == 0 && cityCounter % 5 != 0) {
            cityCost = cityCost * 1.5;
        }
        if (cityCounter % 5 == 0) {
            cityIncome = cityIncome * 0.9;
        }
        let cityProfit = cityIncome - cityCost;
        totalProfit += cityProfit;
        console.log(`In ${cityName} Burger Bus earned ${cityProfit.toFixed(2)} leva.`)
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}

solve(["3",
"Sofia","895.67","213.50",
"Plovdiv","2563.20","890.26",
"Burgas","2360.55","600.00"])

solve(["15",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20",
"Montpellier",
"680.50",
"290.20",
"Montpellier",
"680.50",
"290.20"])