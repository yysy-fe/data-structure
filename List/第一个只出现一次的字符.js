/**
 * 第一个只出现一次的字符
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）。
 */

/**
 * 方法1：第一次遍历：map存每个元素的出现次数；第二次遍历数组：找到第一个 map中value为1的元素
 */

let testArr = [2,3,4,4,5,5,3,2,2,3,4,4,5,5,6,0];

const handler = arr => {
  let map = new Map();
  for (let i = 0, len = arr.length; i < len; i++) {
    let cur = arr[i];
    let showTimes = map.get(cur);
    if (showTimes) {
      map.set(cur, showTimes + 1)
    } else {
      map.set(cur, 1);
    }
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    if (map.get(arr[i]) === 1) {
      return {
        index: i,
        value: arr[i]
      };
    }
  }
};

let result = handler(testArr);
console.log('result', result);
