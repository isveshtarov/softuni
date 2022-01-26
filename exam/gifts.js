function gifts (input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magic = Number(input[2]);

    let buff = '';

    for (i = endNum; i >= startNum; i--) {
        if (i % 2 === 0 && i % 3 === 0){
            if(i != magic) {
                buff += "" + i + " ";
            } else {
                break;
            }
        }
    }
    console.log(buff)

}

gifts(["20",
"1000",
"36"])

