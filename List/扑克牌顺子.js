/**
 * 扑克牌顺子
 * 扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。
 */

/**
 * 1. 数组排序， 设置 kingSum大小王数量， diffSum差值总和
 * 2. 遍历数组
 * 3. 如果 元素===0 则kingSum ++
 * 4. diffSum +=next - current
 * 5. 如果 next === current 且 current !== 0 则不是顺子
 * 6. 遍历后如果 diffSum <= kingSum 则是顺子。 否则不是顺子
 */


// let testArr = [5, 9, 6, 7, 8];
let testArr = [5, 9, 0, 0, 8];
const handler = arr => {
  let diffSum = 0, kingSum = 0;
  arr = arr.sort((a, b) => a - b > 0);
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    if (next === current && current !== 0) {
      return false;
    }
    if (current === 0) {
      kingSum++;
    } else if (next !== 0) {
      diffSum += next - current - 1;
    }
  }
  return diffSum <= kingSum;
};

const result = handler(testArr);
console.log('result', result);