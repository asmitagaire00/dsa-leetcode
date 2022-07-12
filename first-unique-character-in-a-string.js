/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let hashTable = {};

  for (let i = 0; i <= s.length - 1; i++) {
    if (hashTable.hasOwnProperty(s[i])) {
      hashTable[s[i]] = 2;
    } else {
      hashTable[s[i]] = 1;
    }
  }

  for (let i = 0; i <= s.length - 1; i++) {
    if (hashTable.hasOwnProperty(s[i]) && hashTable[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

// time co: O(n)
// space compl: O(n)

console.log(firstUniqChar("loveleetcode"));
