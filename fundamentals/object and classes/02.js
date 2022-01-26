function solve(city) {
    let cityEntries = Object.entries(city);
    console.log(cityEntries)
    for ([cityKey, cityValue] of cityEntries) {
        console.log(`${cityKey} -> ${cityValue}`);
    }
}


// function solve(city) {
//     let cityKeys = Object.keys(city);
//     for (let kur of cityKeys) {
//         console.log(`${kur} -> ${city[kur]}`);
//     }
// }


// function solve(city) {
//     for (let kur in city) {
//         console.log(`${kur} -> ${city[kur]}`);
//     }
// }

solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})