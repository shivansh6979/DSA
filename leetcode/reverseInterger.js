function reverse(x) {
  let result = 0;

  console.log("sssssssssssssssssssss", -(2 ** 31) <= x, x <= 2 ** 31 - 1);
  if (x < 0) {
    result = Math.abs(x).toString().split("");
    result = -Number(result.reverse().join(""));
  } else {
    result = Math.abs(x).toString().split("");
    result = Number(result.reverse().join(""));
  }

  if (!(-(2 ** 31) <= result && result <= 2 ** 31 - 1)) {
    return 0;
  }

  console.log("result", result);
  return result;
}

const x = 1534236469;
reverse(x);
