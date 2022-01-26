function solve(words, str) {
    let wordsArray = words.split(", ")

    for (let word of wordsArray) {
        let template = "*".repeat(word.length)
        str = str.replace(template, word)
    }
    console.log(str)
}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages')