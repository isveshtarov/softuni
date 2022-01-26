function bookIsFound(input) {
    index = 0;
    let requestedBook = input[index];
    index++;
    let nextBookName = input[index];
    index++;

    isBookFound = false;

    while (nextBookName !== "No More Books") {
        if (requestedBook === nextBookName) {
            isBookFound = true;
            break;
        }

        nextBookName = input[index];
        index++;
    }

    if (isBookFound) {
        console.log(`You checked ${index - 2} books and found it.`)
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 2} books.`)
    }
}

bookIsFound