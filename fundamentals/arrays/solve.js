// function smallestNum(num1, num2, num3) {
    
//     let result = Math.min(num1, num2, num3);
//     console.log(result);
// }

// smallestNum(9, 5, 2)

// function printResult(num1, num2, num3) {
    
//     let sum = sumOfTwoNumbers(num1, num2);       
//     let finalResult = subtract(sum, num3)
    
//     console.log(finalResult)    
// }

// function sumOfTwoNumbers(firstNum, secondNum) {
//     return firstNum + secondNum;
// }

// function subtract(sum, lastNumber) {
//     return sum - lastNumber;        
// }

// printResult(23, 6, 10)

// function printCharacters(char1, char2) {

//     let firstCharAsNumber = char1.charCodeAt(0);
//     let secondCharAsNumber = char2.charCodeAt(0);
//     let smallestRepresent = Math.min(firstCharAsNumber, secondCharAsNumber);
//     let biggestRepresent = Math.max(firstCharAsNumber, secondCharAsNumber);
//     let result = [];

//     for (let i = smallestRepresent + 1; i < biggestRepresent; i++) {
//             let currentElement = String.fromCharCode(i);
//             result.push(currentElement);
//         }
//         console.log(result.join(' '))
// }

// printCharacters('a', 'd')



function oddEvenSum(num) {
    let inputAsString = num.toString();

    let oddSum = function (numAsString) {
        
    }

    let evensum = (numAsString) => {
        return numAsString;
    }

    console.log(evensum(inputAsString))
}

oddEvenSum(1000435)