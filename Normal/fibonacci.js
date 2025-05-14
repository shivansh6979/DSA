// fibbonacci series - My solution
function fibbonacci(n) {
  let result;
  if (n <= 0) {
    throw new Error("Please enter a valid positive number");
  } else if (n == 1) {
    result = [0];
    return result;
  } else if (n == 2) {
    result = [0, 1];
  } else {
    let temp = [];

    for (let i = 0; i < n; i++) {
      if (i == 0) {
        temp.push(0);
      } else if (i == 1) {
        temp.push(1);
      } else {
        let num = temp[i - 1] + temp[i - 2];
        temp.push(num);
      }
    }
    result = temp;
  }

  return result;
}

const data = fibbonacci(166690);
console.log("The result is ", data);

// More accurate and efficient solution
// function fibbonacci(n) {
//   let fibb = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fibb[i] = fibb[i - 2] + fibb[i - 2];
//   }
//   return fibb;
// }
