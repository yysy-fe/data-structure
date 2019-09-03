/**
 * 题目
 * 调整数组顺序使奇数位于偶数前面
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
 */

/**
 * 想法
 * 设置双指针： left right
 * 当left < right 时： 找到左面的偶数 & 找到右面的奇数 时交换left和right的元素
 * 知道left >= right 左面都是奇数 右面都是偶数
 */

let testArr = [1,2,3,4,5,6,7,8,9];

const handle = arr => {
  const len = arr.length;
  let left = 0, right = len - 1;
  while ( left < right ) {
    while (arr[left] % 2 === 1) {
      // 奇数的话 继续向后找
      left++;
    }
    
    while (arr[right] % 2 === 0) {
      // 偶数的话 继续向前找
      right--;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
    }
  }
  return arr;
}

const res = handle(testArr);
console.log('result', res);