function solve (arr) {
    while (arr.length > 1) {
        let condensed = [];
        for (i = 0; i < arr.length - 1; i++) {
            let num1 = arr[i];
            let num2 = arr[i+1];
            let sum = num1 + num2;
            condensed.push(sum);
        }

        arr = condensed;
    }
    console.log(arr[0])
}