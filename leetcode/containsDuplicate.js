/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const temp = new Set(nums);

  if (temp.size == nums.length) {
    return false;
  } else {
    return true;
  }
};

const result = containsDuplicate([1, 2, 3, 1]);
console.log("result", result);
