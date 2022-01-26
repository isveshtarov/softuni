function solve(num, str1, str2, str3, str4, str5) {
  let number = Number(num)
  let kitchen = {
    chop: function name(kur) {
      number = number / 2
      console.log(number)
    },
    dice: function name(kur) {
      number = Math.sqrt(number)
      console.log(number)
    },
    spice: function name(kur) {
      number += 1
      console.log(number)
    },
    bake: function name(kur) {
      number = number * 3
      console.log(number)
    },
    fillet: function name(kur) {
      number = number - (number * 0.2)
      console.log(number)
    }
  }
  kitchen[str1](number)
  kitchen[str2](number)
  kitchen[str3](number)
  kitchen[str4](number)
  kitchen[str5](number)
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')