/**
 * 和为S的两个数字
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 */

/**
 * 想法
 * 比如两个数字和为10 乘积最小的一定是 0 * 10 最大的是 5 * 5
 * 所以设置两个指针left right
 * 如果 left + right 的值大于 S，则right--
 * 如果 left + right 的值小于 S，则left++
 * 如果相等则返回 left 和 right 的值
 */


let testArr = [1,2,3,4,5,6,9,10,11,15];

const handler = (arr, target) => {
  let result = 'none';
  const len = arr.length;
  let left = 0, right = len - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      result = [arr[left], arr[right]];
      break;
    } else if (sum > target) {
      // 如果两数之和大于目标，right--
      right--;
    } else {
      // 如果两数之和小于目标，right--
      left++;
    }
  }
  return result;
}

const result = handler(testArr, 10);
console.log('result', result);