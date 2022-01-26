function solve(input) {

    let result = [];
    let final = []

    for (let element of input.split(" ")) {
        if (element[0] === "#" && element.length > 1) {
            result.push(element.substring(1))
        }
    }

    for (let el of result) {
        let array = el.split("");
        let arrL = array.length;
        let flag = true;

        for (i = 0; i < arrL; i++) {
            let currentChar = array[i].charCodeAt(0)
            if ((currentChar < 97 || currentChar > 122) && 
                (currentChar < 65 || currentChar > 90)) {
                flag = false
            }
        }
        if (flag == true) {
            final.push(el)
        }
    }
    final.forEach(en => console.log(en))
}

solve('The symbol # is known #vari%usly in English-speaking #regions as the #number sign')