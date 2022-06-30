// Qn:https://leetcode.com/problems/roman-to-integer/

const romanToInteger = (s) => {
  const romanObj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    L: 50,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], s[i + 1]);
    if (romanObj[s[i]] < romanObj[s[i + 1]]) {
      total -= romanObj[s[i]];
    } else {
      total += romanObj[s[i]];
    }
  }
  return total;
};
console.log(romanToInteger("MCMXCIV"));
