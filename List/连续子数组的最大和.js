/**
 * 连续子数组的最大和
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值，要求时间复杂度为O(n)
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 */

/**
 * 循环数组向 child 中添加元素
 * max 为当前最大的子数组和 & start为子数组开始角标 & end为子数组结束角标
 * sum 为子数组的合，如果sum小于0 说明对后面没有意义， 清空child 并 重置sum为0
 */

let testArr = [6,-3,-2,7,-15,1,2,2];

const handler = (arr) => {
  let child = [], childSum = 0, maxSum = 0, start = 0, end = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    let node = arr[i];
    if (childSum < 0) {
      childSum = 0;
      child = [];
    }

    child.push(node);
    childSum += node;
    if (childSum > maxSum) {
      maxSum = childSum;
      end = i;
      start = i - child.length + 1;
    }
  }
  return {
    start,
    end,
    maxSum
  }
};

const result = handler(testArr);
console.log('result', result);