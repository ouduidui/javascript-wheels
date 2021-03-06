/**
 * reduce + includes 实现数组去重
 * @author 欧怼怼
 * @param arr {*[]}
 * @returns {*[]}
 */
function unique(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, []);
}

module.exports = unique;
