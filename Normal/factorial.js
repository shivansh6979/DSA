// factorial of a number - My approach
function factorial(n) {
  if (n <= 0) {
    throw new Error("Please enter a valid positive number");
  }
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

let num = 2;
const result = factorial(num);
console.log(`The factorial of ${num} :`, result);
