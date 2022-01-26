function solve(text, word) {
    let newText = text.split(" ")
    let count = 0
    for (currentWord of newText) {
        if (currentWord === word) {
            count++
        }
    }
    console.log(count)
}

solve("This is a town with town for town", "is")