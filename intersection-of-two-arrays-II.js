// Qn: https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1, nums2) => {
  const map = new Map();

  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  const res = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      res.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return res;
};
console.log(intersect([1, 2, 2, 1], [2, 2]));
