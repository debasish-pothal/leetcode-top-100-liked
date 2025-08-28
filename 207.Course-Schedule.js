/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const preReqMap = new Map();

  for (let i = 0; i < numCourses; i++) {
    preReqMap.set(i, []);
  }

  for (const [crs, pre] of prerequisites) {
    preReqMap.set(crs, [...preReqMap.get(crs), pre]);
  }

  const visited = new Set();

  const dfs = (crs) => {
    if (visited.has(crs)) {
      return false;
    }

    if (preReqMap.get(crs).length === 0) {
      return true;
    }

    visited.add(crs);

    for (const pre of preReqMap.get(crs)) {
      if (!dfs(pre)) {
        return false;
      }
    }

    visited.delete(crs);
    preReqMap.set(crs, []);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};
