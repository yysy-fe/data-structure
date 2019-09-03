/**
 * 和为S的连续正整数序列
 * 输入一个正数S，打印出所有和为S的连续正数序列。
 * 例如：输入15，有序1+2+3+4+5 | 4+5+6 | 7+8 = 15 所以打印出3个连续序列1-5，5-6和7-8。
 */

/**
 * 想法
 * for 循环 index
 * 设置 nums 为当前累加的值的数组， sum 实时同步为nums所有值的和
 * 如果 sum > S 则nums移除第一个元素
 * 如果 sum < S 则nums加入下一个元素
 * 如果 sum === S 则 把sum添加到result中待返回； index 回到 nums第二个元素的位置； index = index - nums.length + 1;
 */

const handler = target => {
  let result = [];
  let nums = [];
  let sums = 0;
  for (let i = 1; i < target; i++) {
    if (sums === target) {
      result.push(nums);
      // 找到和为target的序列， i要从 nums 中第二个元素的角标开始循环
      i = i - nums.length;
      nums = [];
      sums = 0;
    }
    else if (sums < target) {
      // 如果 sums < target ；nums继续添加下一元素
      nums.push(i);
      sums += i;
    } else {
      // sums > target 时； nums 移除最小的头结点； sums也同步减去这个最小的值
      sums -= nums.shift();
    }
  }

  return result;
}

let result = handler(15);
console.log('result', result);