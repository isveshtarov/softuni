// function squareArea (input) {
//     let a = Number(input[0]);
//     let result = a * a;
//     console.log(result);
// }

// squareArea([5]);

// function cmToInch (input) {
//     let a = Number(input[0]);
//     let result = a * 2.54;
//     console.log(result);
// }

// cmToInch([5]);

// function concTextAndNum (input) {
//     let firstName = input[0];
//     let lastName = input[1];
//     let age = Number(input[2]);
//     let town = input[3];

//     console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
// }

// function archProject (input) {
//     let name = input[0];
//     let projects = Number(input[1]);
//     let neededHours = projects * 3;
//     console.log(`The architect ${name} will need ${neededHours} hours to complete ${projects} project/s.`)
// }

// function petSupplies (input) {
//     let dogFoodCost = Number(input[0]) * 2.5;
//     let otherFoodCost = Number(input[1]) * 4;
//     let totalCost = dogFoodCost + otherFoodCost;

//     console.log(`${totalCost} lv.`)
// }

// function greenYard (input) {
//     let cost = Number(input[0]) * 7.61;
//     let discount = cost * 0.18;
//     let costAfterDisc = cost - discount;

//     console.log(`The final price is: ${costAfterDisc} lv.`);
//     console.log(`The discount is: ${discount} lv.`);
// }

// function usdToLv (input) {
//     let usd = Number(input[0])
//     let leva = usd * 1.79549;
//     console.log(leva);
// }

// function radToDeg (input) {
//     let radians = Number(input[0]);
//     let degrees = radians * 180 / Math.PI;
//     console.log(degrees.toFixed(0));
// }

// function bankDeposits (input) {
//     let deposit = Number(input[0]);
//     let depositTime = Number(input[1]);
//     let interest = Number(input[2]) / 100;
//     let availWithdraw = deposit + depositTime * ((deposit * interest) / 12);
//     console.log(availWithdraw);
// }

// function bookList (input) {
//     let bookPages = Number(input[0])
//     let pagesPerHour = Number(input[1])
//     let daysPerBook = Number(input[2])

//     pagesPerDay = bookPages / daysPerBook;
//     readingHoursPerDay = pagesPerDay / pagesPerHour;

//     console.log(readingHoursPerDay);
// }

// function birthdayParty(input) {
//     let rentCost = Number(input[0]);
//     let cakeCost = rentCost * 0.2;
//     let drinkCost = cakeCost - (cakeCost * 0.45);
//     let animator = rentCost / 3;
//     let totalCost = rentCost + cakeCost + drinkCost + animator;

//     console.log(totalCost);
// }

// function charity (input) {
//     let DayOfCharity = Number(input[0]);
//     let confMakers = Number(input[1]);
//     let cakesQ = Number(input[2]);
//     let wafflesQ = Number(input[3]);
//     let pancakesQ = Number(input[4]);
//     let totalPerDay = (cakesQ * 45 + pancakesQ * 3.2 + wafflesQ * 5.8) * confMakers;
//     let totalSum = totalPerDay * DayOfCharity;
//     let cost = totalSum / 8;
//     let charity = totalSum - cost;

//     console.log(charity)
// }

// function dietFruits (input) {
//     let strPrice = Number(input[0]);
//     let raspPrice = strPrice / 2;
//     let orangePrice = raspPrice - (raspPrice * 0.4);
//     let bananaPrice = raspPrice - (raspPrice * 0.8);

//     let bananaKgToBuy = Number(input[1]);
//     let orangeKgToBuy = Number(input[2]);
//     let raspberriesKgToBuy = Number(input[3]);
//     let strawberriesKgToBuy = Number(input[4]);

//     let strTotal = strPrice * strawberriesKgToBuy;
//     let oraTotal = orangePrice * orangeKgToBuy;
//     let rasTotal = raspPrice * raspberriesKgToBuy;
//     let banTotal = bananaPrice * bananaKgToBuy;

//     let totalMoneyNeeded = strTotal + oraTotal + banTotal + rasTotal;
//     console.log(totalMoneyNeeded);
// }

function aquarium (input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let sandPercentage = Number(input[3]) *.01;

    let aquariumAreaSqM = (length * width * heigth) * 0.001;

    let usableArea = aquariumAreaSqM - (aquariumAreaSqM * sandPercentage);

    console.log(usableArea);
}

aquarium(["85",
"75",
"47",
"17"])
