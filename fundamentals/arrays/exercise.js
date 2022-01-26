function vowelsAndConsonants(s) {
    let i = 0;
    let word = s;
    for (i = 0; i < word.length; i++) {
        if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
            console.log(word[i]);
        }
    }
    for (i = 0; i < word.length; i++) {
        if (word[i] != "a" && word[i] != "e" && word[i] != "i" && word[i] != "o" && word[i] != "u") {
            console.log(word[i]);
        }
    }
}

vowelsAndConsonants('javascriptloops')