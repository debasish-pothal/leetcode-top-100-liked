/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const map2 = new Map();

  for (const c of p) {
    map2.set(c, (map2.get(c) || 0) + 1);
  }

  const sameMap = (map1) => {
    if (map1.size !== map2.size) return false;

    for (let [key, value] of map1) {
      if (!map2.has(key)) return false;
      if (map2.get(key) !== value) return false;
    }

    return true;
  };

  const result = [];

  let left = 0;
  let right = p.length - 1;
  const sMap = new Map();

  for (let i = left; i <= right; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  if (sameMap(sMap)) {
    result.push(left);
  }

  while (right + 1 < s.length) {
    const lChar = s[left];

    sMap.set(lChar, sMap.get(lChar) - 1);

    if (sMap.get(lChar) <= 0) {
      sMap.delete(lChar);
    }

    left += 1;
    right += 1;

    const rChar = s[right];
    sMap.set(rChar, (sMap.get(rChar) || 0) + 1);

    if (sameMap(sMap)) {
      result.push(left);
    }
  }

  return result;
};
