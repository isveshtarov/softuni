function solve(n, k) {
  let arr = [];
  arr[0] = 1;

  for (let i = 1; i < n; i++) {
    j = i - 1;
    count = 0;
    sum = 0;

    while (j >= 0 && count < k) {
      sum += arr[j]
      j--
      count++
    }

    arr.push(sum)
  }

  return arr
}

solve(8, 2)