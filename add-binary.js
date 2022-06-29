// Qn: https://leetcode.com/problems/add-binary/

const addBinary = (a, b) => {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0,
    res = "";

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    let sum = (parseInt(a[i]) || 0) + (parseInt(b[j]) || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    res = `${sum}${res}`;
  }
  return res;
};

console.log(addBinary("1010", "1011"));
