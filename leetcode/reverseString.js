var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  return s;
};

const result = reverseString(["h", "e", "l", "l", "o"]);
