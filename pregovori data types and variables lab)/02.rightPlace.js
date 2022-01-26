function solve (string, char, checkString) {
    let correctWord = string.replace('_', char)
    console.log(correctWord === checkString ? 'Matched' : 'Not Matched')
}

solve('Str_ng', 'I', 'StrIng')