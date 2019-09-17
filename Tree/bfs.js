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
 * 广度优先遍历
 */
const bfs = tree => {
  let result = [];
  let queue = [];
  let current = tree;
  while (current) {
    result.push(current.value);
    current.left && queue.push(current.left);
    current.right && queue.push(current.right);
    current = queue.shift();
  }
  return result;
}

const res = bfs(treeData);
console.log(res);