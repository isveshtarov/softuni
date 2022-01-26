function solve(params) {
  let productObject = {};
  let paramsL = params.length;

  for (let i = 0; i < paramsL; i+=2) {
    productObject[params[i]] = params[i + 1]
  }
  console.log(productObject)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])