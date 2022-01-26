function catCreator(array) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age,
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`)
            }
        }
    }

    for (let currentString of array) {
        let currentData = currentString.split(" ");
        let curerntCat = new Cat(currentData[0], currentData[1])
        curerntCat.meow()
    }
}

catCreator(['Candy 1', 'Poppy 3', 'Nyx 2'])