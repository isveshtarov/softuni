function solve(array) {
    let assocArr = {};
    for (entry of array) {
        entry = entry.split(" ");
        assocArr[entry[0]] = entry[1];
    }

    for (key in assocArr) {
        console.log(`${key} -> ${assocArr}`)
    }
}

// function solve(array) {
//     let assocArr = {};
//     for (entry of array) {
//         entry = entry.split(" ");
//         assocArr[entry[0]] = entry[1];
//     }
//     let newArray = Object.entries(assocArr);
    
//     for (let [key, value] of newArray) {
//         console.log(`${key} -> ${value}`)
//     }
// }

solve(['Tim 0834212554', 'Peter 0877547887', 'Jim 0896543112', 'Tim 0876566344'])