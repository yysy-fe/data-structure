/**
 * 堆 是基于完全二叉树实现的
 * 若设二叉树的深度为h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，
 * 第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。
 * 
 * 堆可以用数组表示
 * 特性：第n个节点的左子节点为2n+1  右子节点为2n+2
 * 如果想找到最后一个非叶子节点
 * 1）最后一个非叶子节点只有左孩子  节点总数为偶数
 * 2）最后一个非叶子节点有左右孩子  节点总数为奇数
 * 
 * 1) 左孩子为 length - 1; length - 1 = 2n + 1   -->   n = (length - 2) / 2    
 * 2) 左孩子为 length - 2; length - 2 = 2n + 1   -->   n = (length - 3) / 2  length为奇数  等价于 Math.floor((length - 3 + 1) / 2)
 * 
 * 所以最后一个非叶子节点n 为 n = Math.floor((length - 3 + 1) / 2);
 */

const testArr = [7,6,8,3,9,5,10,2,4,1,11,2,6,8,6];

const creatMaxHeap = (arr) => {
  let len = arr.length;
  let lastRootNodeIndex = Math.floor((len - 3 + 1) / 2) / 2;
  for (let i = lastRootNodeIndex; i >= 0; i--) { 
    // 从最后一个非叶子节点往前遍历知道根节点0，判断父节点和最大且大于自己的子节点交换位置
    let leftChildIndex = 2 * i + 1;
    let rightChildIndex = 2 * i + 2;

    // 判断孩子中最大的值是否大于父节点
    if (Math.max(arr[leftChildIndex], arr[rightChildIndex]) > arr[i]) { 

      //取最大的子节点和父元素交换位置
      if (arr[leftChildIndex] > arr[rightChildIndex]) {
        [arr[i], arr[leftChildIndex]] = [arr[leftChildIndex], arr[i]];
      } else {
        [arr[i], arr[rightChildIndex]] = [arr[rightChildIndex], arr[i]];
      }
    }
  }
  return arr;
}
const result = creatMaxHeap(testArr);
console.log(result)


