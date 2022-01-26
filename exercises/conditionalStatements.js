// function classGrade (input) {
//     let grade = Number(input[0]);
//     if (grade >= 5.5) {
//         console.log('Excellent!')
//     }
// }

// function largerNum (input) {
//     let numA = Number(input[0]);
//     let numB = Number(input[1]);
//     if (numA > numB) {
//         console.log(numA);
//     } else {
//         console.log(numB);
//     }
// }

// function evenOdd (input) {
//     let num = Number(input[0]);
//     if (num % 2 == 0) {
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
// }

// function randomNum (input) {
//     let num = Number(input[0])
//     if (num < 100) {
//         console.log('Less than 100');
//     } else if (num >= 100 && num <= 200) {
//         console.log('Between 100 and 200');
//     } else {
//         console.log('Greater than 200');
//     }
// }

// function passwordCheck (input) {
//     let password = 's3cr3t!P@ssw0rd';
//     if (password === input[0]) {
//         console.log('Welcome');
//     } else {
//         console.log('Wrong password!');
//     }
// }

// function shapeArea (input) {
//     let shape = input[0];
//     let sideA = Number(input[1]);
//     let sideB = Number(input[2]);
//     if (shape === 'square') {
//         let area = sideA * sideA;
//         console.log(area.toFixed(3));
//     }
//     if (shape === 'rectangle') {
//         let area = sideA * sideB;
//         console.log(area.toFixed(3));
//     }
//     if (shape === 'circle') {
//         let area = Math.PI * (sideA * sideA);
//         console.log(area.toFixed(3));
//     }
//     if (shape === 'triangle') {
//         let area = (sideA * sideB) / 2;
//         console.log(area.toFixed(3));
//     }
// }

// function holiday (input) {
//     let holidayPrice = Number(input[0]);
//     let puzzlesQ = Number(input[1]);
//     let dollsQ = Number(input[2]);
//     let teddyBearsQ = Number(input[3]);
//     let minionsQ = Number(input[4]);
//     let trucksQ = Number(input[5]);
//     let puzzleIncome = puzzlesQ * 2.6;
//     let dollsIncome = dollsQ * 3;
//     let teddyIncome = teddyBearsQ * 4.1;
//     let minionIncome = minionsQ * 8.2;
//     let trucksIncome = trucksQ * 2;
//     let totalToysSold = puzzlesQ + dollsQ + teddyBearsQ + minionsQ + trucksQ;
//     let totalIncome = puzzleIncome + dollsIncome + teddyIncome + minionIncome + trucksIncome;
//     if (totalToysSold >= 50) {
//         totalIncome = totalIncome * 0.75;
//     }

//     let profit = totalIncome * 0.9;



//     // let result = profit - holidayPrice;

//     // if (result >= 0) {
//     //     console.log(`Yes! ${ result.toFixed(2) } lv left.`)
//     // } else {
//     //     console.log(`Not enough money! ${ Math.abs(result).toFixed(2) } lv needed.`)
//     // }


//     if (profit >= holidayPrice) {
//         let result = profit - holidayPrice;
//         console.log(`Yes! ${ result.toFixed(2) } lv left.`);
//     } else if (profit < holidayPrice) {
//         let result = holidayPrice - profit;
//         console.log(`Not enough money! ${ result.toFixed(2) } lv needed.`)
//     }





// }




// SWITCH CASE

// function dayOfWeek (input) {
//     let day = Number(input[0]);
//     switch (day) {
//         case 1:
//             console.log('Monday'); break;
//         case 2:
//             console.log('Tuesday'); break;
//         case 3:
//             console.log('Wednesday'); break;
//         case 4:
//             console.log('Thursday'); break;
//         case 5:
//             console.log('Friday'); break;
//         case 6:
//             console.log('Saturday'); break;
//         case 7:
//             console.log('Sunday'); break;
//         default:
//             console.log('Error'); break;
//     }
// }

// dayOfWeek ([5])

// function weekOrWorkDay (input) {
//     let day = input[0];
//     switch (day) {
//         case 'Monday':
//         case 'Tuesday':
//         case 'Wednesday':
//         case 'Thursday':
//         case 'Friday': console.log('Working day'); break;
//         case 'Saturday':
//         case 'Sunday':console.log('Weekend'); break;
//         default: console.log('Error');
//     }
// }

// weekOrWorkDay(['Thursday'])



// function mammalAnimal (input) {
//     let animal = input[0];
//     switch (animal) {
//         case 'dog': console.log('mammal'); break;
//         case 'crocodile':
//         case 'tortoise':
//         case 'snake': console.log('reptile'); break;
//         default: console.log('unknown');
//     }
// }

// function personalTitles (input) {
//     let age = Number(input[0]);
//     let sex = input[1];

//     switch (sex) {
//         case 'm':
//             if (age >= 16) {
//                 console.log('Mr.');
//             } else {
//                 console.log('Master');
//             }; break;
//         case 'f':
//             if (age >= 16) {
//                 console.log('Ms.');
//             } else {
//                 console.log('Miss');
//             }; break;
//     }
// }

// function fruitOrVeggie (input) {
//     let product = input[0];
//     // banana, apple, kiwi, cherry, lemon и grapes
//     // tomato, cucumber, pepper и carrot
//     switch(product) {
//         case 'banana':
//         case 'apple':
//         case 'kiwi':
//         case 'cherry':
//         case 'lemon':
//         case 'grapes': console.log('fruit'); break;
//         case 'tomato':
//         case 'cucumber':
//         case 'pepper':
//         case 'carrot': console.log('vegetable'); break;
//         default: console.log('unknown'); break;
//     }
// }

// function personalTitles (input) {
//     let age = Number(input[0]);
//     let sex = input[1];

//     if (sex == 'm') {
//         if (age >= 16) {
//             console.log('Mr.');
//         } else {
//             console.log('Master');
//         }
//     } else {
//         if (age >= 16) {
//             console.log('Ms.');
//         } else {
//             console.log('Miss');
//         }
//     }
// }

// function smallShop(input) {
//     let product = input[0];
//     let city = input[1];
//     let quantity = Number(input[2]);

//     let result = 0;

//     switch (product) {
//         case 'coffee':
//             switch (city) {
//                 case 'Sofia':
//                     result = quantity * 0.50;
//                     break;
//                 case 'Plovdiv':
//                     result = quantity * 0.40;
//                     break;
//                 case 'Varna':
//                     result = quantity * 0.45;
//                     break;
//             }
//             break;
//         case 'water':
//             switch (city) {
//                 case 'Sofia':
//                     result = quantity * 0.80;
//                     break;
//                 case 'Plovdiv':
//                     result = quantity * 0.70;
//                     break;
//                 case 'Varna':
//                     result = quantity * 0.70;
//                     break;
//             }
//             break;
//         case 'beer':
//             switch (city) {
//                 case 'Sofia':
//                     result = quantity * 1.2;
//                     break;
//                 case 'Plovdiv':
//                     result = quantity * 1.15;
//                     break;
//                 case 'Varna':
//                     result = quantity * 1.1;
//                     break;
//             }
//             break;
//         case 'sweets':
//             switch (city) {
//                 case 'Sofia':
//                     result = quantity * 1.45;
//                     break;
//                 case 'Plovdiv':
//                     result = quantity * 1.3;
//                     break;
//                 case 'Varna':
//                     result = quantity * 1.35;
//                     break;
//             }
//             break;
//         case 'peanuts':
//             switch (city) {
//                 case 'Sofia':
//                     result = quantity * 1.6;
//                     break;
//                 case 'Plovdiv':
//                     result = quantity * 1.5;
//                     break;
//                 case 'Varna':
//                     result = quantity * 1.55;
//                     break;
//             }
//             break;
//     }
//     console.log(result);
// }

// function numbInRange (input) {
//     let number = Number(input[0])
//     if (number >= -100 && number <= 100 && number !=0){
//         console.log('Yes');
//     } else {
//         console.log('No')
//     }
// }

// function cinemaTickets (input) {
//     let day = input[0];

//     if (day == 'Monday' || day == 'Tuesday' || day == 'Friday'){
//         console.log(12);
//     } else if (day == 'Wednesday' || day == 'Thursday') {
//         console.log(14);
//     } else {
//         console.log(16);
//     }
// }

function skiTrip (input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];

    let result = 0;

    switch (room) {
        case 'room for one person':
            result = (days - 1) * 18;
        break;
        case 'apartment':
            result = (days - 1) * 25;
            if (days < 10){
                result = result * 0.7;
            } else if(days >= 10 && days <= 15) {
                result = result * 0.65;
            } else {
                result = result * 0.5;
            }
        break;
        case 'president apartment':
            result = (days - 1) * 35;
            if (days < 10){
                result = result * 0.9;
            } else if(days >= 10 && days <= 15) {
                result = result * 0.85;
            } else {
                result = result * 0.8;
            }
        break;
    }

    if (grade == 'positive') {
        result = result * 1.25;
    } else {
        result = result * 0.9;
    }

    console.log(result.toFixed(2));
}