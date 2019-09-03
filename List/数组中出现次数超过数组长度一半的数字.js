/**+
 * 数组中出现次数超过数组长度一半的数字
 * 数组中有的数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */

/**
 * 想法
 * 设置一个 map 存每个元素出现的次数
 * 遍历arr map.set 之后判断该值 出现次数 - 数组长度的一半 如果等于1 则添加到结果中
 */


let testArr = [1,2,2,2,4,1,5,6,8,7,3,3,3,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];

const handler = (arr, target) => {
  let result = [];
  let map = new Map();
  for (let i = 0, len = arr.length; i < len; i++) {
    let node = arr[i];
    if (map.get(node)) {
      let times = map.get(node) + 1;
      map.set(node, times);
      if (times - target === 1) {
        result.push(node);
      }
    } else {
      map.set(node, 1);
    }
  }
  return result;
};

const result = handler(testArr, Math.floor(testArr.length / 2));
console.log('result', result);