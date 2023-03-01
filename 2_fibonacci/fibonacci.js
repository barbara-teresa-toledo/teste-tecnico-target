function fibonacci(n) {
  let arrayFibonacci = [0, 1];
  let isNumberInFibonacci = false;

  for (let i = 2; i <= n; i++) {
    arrayFibonacci.push(arrayFibonacci[i - 1] + arrayFibonacci[i - 2]);
  }

  isNumberInFibonacci = arrayFibonacci.includes(n);

  return [arrayFibonacci[n], isNumberInFibonacci];
}

console.log(fibonacci(3));
