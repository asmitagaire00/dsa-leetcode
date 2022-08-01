//QN:https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/882/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    if (hashTable.hasOwnProperty(s[i])) {
      hashTable[s[i]]++;
    } else {
      hashTable[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (hashTable.hasOwnProperty(t[i]) && hashTable[t[i]] >= 1) {
      hashTable[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("aacc", "ccac"));
