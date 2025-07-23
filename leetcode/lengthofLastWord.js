const lengthOfLastWord = (s) => {
  const temp = s.trim().split(" ");
  let string = temp[temp.length - 1].length;
  return string;
};

var result = lengthOfLastWord("   fly me   to   the moon  ");
console.log("result", result);
