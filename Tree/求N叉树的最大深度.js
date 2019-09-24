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
          value: 7,
          children: [
            {
              value: 9
            }
          ]
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
 *             9
 */

const fn1 = tree => {
  if (!tree) return 0;
  if (!tree.children || tree.children.length === 0) return 1;
  return Math.max(...tree.children.map(v => fn1(v))) + 1;
}
console.log("递归版：", fn1(testTree));

const fn2 = tree => {
  if (!tree) return 0;
  if (!tree.children || tree.children.length === 0) return 1;
  let stack = [{currentDetph: 1, node: tree}];
  let maxDepth = 1;
  while (stack.length > 0) {
    let { node, currentDetph } = stack.pop();
    maxDepth = Math.max(maxDepth, currentDetph);
    let children = node.children || [];
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push({
        node: children[i],
        currentDetph: currentDetph + 1
      })
    }
  }
  return maxDepth;
}

console.log("非递归版", fn2(testTree));