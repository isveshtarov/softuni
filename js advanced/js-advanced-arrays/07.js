function solve(arr, startFlav, endFlav) {
  let start = arr.indexOf(startFlav)
  let end = arr.indexOf(endFlav)

  let result = arr.slice(start, end + 1)

  return result
}

solve(['Pumpkin Pie',
  'Key Lime Pie',
  'Cherry Pie',
  'Lemon Meringue Pie',
  'Sugar Cream Pie'],
  'Key Lime Pie',
  'Lemon Meringue Pie'
)

solve(['Apple Crisp',
  'Mississippi Mud Pie',
  'Pot Pie',
  'Steak and Cheese Pie',
  'Butter Chicken Pie',
  'Smoked Fish Pie'],
  'Pot Pie',
  'Smoked Fish Pie')