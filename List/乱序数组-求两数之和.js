/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 */

/**
 * 想法
 * 设置一个 map 存遍历过的数字 key为值， value为角标
 * 遍历数组 寻找 map.get(target - arr[i]) 如果有角标 则返回[map.get(target - arr[i]), i]
 */

let testArr =  [2, 5, 15, 6, 11, 7];

const handler = (arr, target) => {
  let result = 'node';
  const map = new Map();
  for (let i = 0, len = arr.length; i < len; i++) {
    let num = arr[i];
    let diff = target - num;
    let findIndex = map.get(diff);
    if (findIndex !== undefined) {
      result = [findIndex, i];
      break;
    }
    else {
      map.set(num, i);
    }
  }

  return result;
}

const result = handler(testArr, 9);
console.log('result', result);