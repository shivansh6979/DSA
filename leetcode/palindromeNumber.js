var isPalindrome = function (x) {
  const flag = false;
  if (x < 0) return flag;
  const temp = x.toString().split("").reverse().join("");
  if (temp == x) return true;
  return false;
};

const result = isPalindrome(121);
console.log("result", result);
