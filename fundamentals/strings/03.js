function solve(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, "*".repeat(word.length))
    }
    console.log(text)
}

solve("This is a town with town for town", "town")