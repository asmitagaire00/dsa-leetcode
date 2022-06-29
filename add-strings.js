//Qn: https://leetcode.com/problems/add-strings/


const addStrings = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0,
    res = "";

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    let sum = (parseInt(num1[i]) || 0) + (parseInt(num2[j]) || 0) + carry;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    res = `${sum}${res}`;
  }
  return res;
};

console.log(addStrings("123456789", "987654321"));

