/**
 * 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在三个元素a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

/**
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */


/**
 * 想法
 * 第一层遍历 设置i 和 start = i + 1;
 * 从start -> len 第二层遍历： 第二层遍历中求三数之和
 * 设置一个 map 存遍历过的数字 key为值， value为角标
 *  寻找 map.get(target - arr[start] - arr[i]) 如果有角标 则返回[i, map.get(target - arr[start] - arr[i]), start]
 */

let testArr = [-1, 0, 1, 2, -1, -4];

const handler = (arr, target) => {
  let result = [];
  let repeatStrArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let start = i + 1;
    let map = new Map();
    for (let j = start; j < len; j++) {
      const diff = target - arr[i] - arr[j];
      const findIndex = map.get(diff);
      if (findIndex === undefined) {
        map.set(arr[j], j)
      } else {
        let res = [arr[i], arr[findIndex], arr[j]];
        let str = res.sort().join("");
        if (repeatStrArr.indexOf(str) < 0) {
          repeatStrArr.push(str)
          result.push(res);
        }
      }
    }
  }
  return result;
};

const result = handler(testArr, 0);
console.log('result', result);