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