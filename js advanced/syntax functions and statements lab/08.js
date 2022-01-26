function solve(month, year) {
  let getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
  }
  return getDaysInMonth(month, year);
}

solve(2, 2021)