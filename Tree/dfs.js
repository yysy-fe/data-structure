/**
 *             1
 *           2   7
 *          3   8 9
 *         4       10
 *        5 6     11 12
 */
const treeData = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 4,
        left: {
          value: 5
        },
        right: {
          value: 6
        },
      },
    },
  },
  right: {
    value: 7,
    right: {
      value: 9,
      right: {
        value: 10,
        left: {
          value: 11,
        },
        right: {
          value: 12
        },
      },
    },
    left: {
      value: 8
    }
  }
};

/**
 * 深度优先遍历递归版
 */
const recursiveDFS = (tree, result) => {
  result = result || [];
  result.push(tree.value);
  tree.left && recursiveDFS(tree.left, result);
  tree.right && recursiveDFS(tree.right, result);
  return result;
}

const res = recursiveDFS(treeData);
console.log(res);

/**
 * 深度优先遍历非递归版
 */

const dfs = tree => {
  let result = [];
  let stack = [];
  let current = tree;
  while (current || stack.length > 0) {

    // 先把left遍历完
    while (current) {
      stack.push(current);
      result.push(current.value);
      current = current.left;
    }
    
    // 栈后入先出，所以left全部遍历完后，取父节点的右孩子
    let parent = stack.pop();
    current = parent.right;
  }
  return result;
}

const result = dfs(treeData);
console.log(result)