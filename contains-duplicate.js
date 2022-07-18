/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  const hashTable = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    if (hashTable.hasOwnProperty(nums[i])) {
      hashTable[nums[i]] = 2;
    } else {
      hashTable[nums[i]] = 1;
    }
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    if (hashTable.hasOwnProperty(nums[i]) && hashTable[nums[i]] === 2)
      return true;
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
