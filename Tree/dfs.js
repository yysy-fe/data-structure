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
  let current = tree;
  let stack = [current];
  while (stack.length > 0) {
    current = stack.pop();
    result.push(current.value);
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
  }
  return result;
}

const result = dfs(treeData);
console.log('二叉树', result)

const testTree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 5,
        },
        {
          value: 6
        }
      ]
    },
    {
      value: 3,
      children: [
        {
          value: 7
        }
      ]
    },
    {
      value: 4,
      children: [
        {
          value: 8
        }
      ]
    }
  ]
};

/**
 *             1
 *          2  3  4
 *         5 6 7  8
 */

const dfs1 = tree => {
  let current = tree, stack = [current], result = [];
  while (stack.length > 0) {

    // 推出栈尾，为父元素的正序孩子
    current = stack.pop();
    result.push(current.value);
    let children = current.children || [];
    for (let i = children.length - 1; i >= 0; i--) {
      // 栈是children倒序
      stack.push(children[i]);
    }
  }
  return result;
}

const result1 = dfs1(testTree);
console.log('N叉树', result1);
