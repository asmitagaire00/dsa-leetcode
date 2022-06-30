const intersection = (num1, num2) => {
  setNum1 = new Set(num1);
  setNum2 = new Set(num2);
  let res = [];
  let [minLoop, maxLoop] =
    setNum1.length < setNum2.length ? [setNum1, setNum2] : [setNum2, setNum1];

  minLoop.forEach((num) => {
    maxLoop.has(num) && res.push(num);
  });

  return res;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
