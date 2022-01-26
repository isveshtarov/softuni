// function reverseArrays(n, inputArray) {

//     let arr = [];
//     let finalArr = [];

//     for (i = 0; i < n; i++) {
//         arr.push(inputArray[i]);
//     }
//     for (j = arr.length - 1; j >= 0; j--) {
//         finalArr.push(arr[j]);
//     }

//     console.log(finalArr.toString(' '));
// }

// reverseArrays(2, [10, 15, 20, 25])

// function reverse (n, arr) {
//     let newArr = [];
//     let revArr = [];
//     for (i = 0; i < n; i++) {
//         newArr.push(arr[i]);
//     }
//     for (j = newArr.length -1; j >= 0; j--){
//         revArr.push(newArr[j]);
//     }
//     console.log(revArr.join(' '));
// }

// reverse(3, [10, 20, 30, 40])


// REVERSE ARRAY WITHOUT CREATING A NEW ONE

function reverse (arr) {
    let revArr = [];
    
    for (i = 0; i < arr.length / 2; i++){
        let buffer = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = buffer; 
    }
    console.log(arr.join(' '));
}

reverse(['a', 'b', 'c', 'd', 'e'])
reverse(['a', 'b', 'c', 'd'])