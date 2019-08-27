// 支持存储简单数据类型

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.element != item && currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(item, after) {
    let newNode = new Node(item);
    let afterNode = this.find(after);
    newNode.next = afterNode.next;
    afterNode.next = newNode;
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }

  findPre(item) {
    let currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(item) {
    let prevNode = this.findPre(item);
    if (prevNode.next != null) {
      prevNode.next = prevNode.next.next;
    }
  }
}

let llist = new LList();
llist.insert('a', 'head');
llist.insert('b', 'a');
llist.insert('c', 'b');
llist.insert('d', 'c');
llist.insert('e', 'd');
llist.insert('f', 'e');
llist.insert('g', 'f');
// llist.remove('e')
// llist.display();

// 找到倒数第3个节点
function findLastKNode(llist, k) {
  let currentNode = llist.head;
  let resNode = llist.head;
  let flag = 0;
  while (currentNode.next != null) {
    if (flag >= k - 1) {
      resNode = resNode.next;
    }
    currentNode = currentNode.next;
    flag++;
  }
  return resNode;
};

// findLastKNode(llist, 3);

//链表反转
function reverseLList(llist) {
  let headNode = llist.head;
  let currentNode = llist.head.next;
  let nextNode = currentNode.next;
  let flag = 0;
  while (nextNode) {
    currentNode.next = nextNode.next;
    nextNode.next = headNode.next;
    headNode.next = nextNode;
    nextNode = currentNode.next;
  }

  //first
  // currentNode.next = nextNode.next;
  // nextNode.next = headNode.next;
  // headNode.next = nextNode;
  // nextNode = currentNode.next;
  // console.log(JSON.stringify(headNode))

  //second
  // currentNode.next = nextNode.next;
  // nextNode.next = headNode.next;
  // headNode.next = nextNode;
  // nextNode = currentNode.next;
  // console.log(JSON.stringify(headNode))
}

reverseLList(llist);
llist.display();



class Node1 {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLList {
  constructor() {
    this.head = new Node1('head');
  }

  find(item) {
    let currentNode = this.head;
    let res = false;
    while (currentNode.element != item && currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(item, after) {
    let newNode = new Node1(item);
    let currentNode = this.find(after);
    newNode.next = currentNode.next;
    if (currentNode.next != null) {
      currentNode.next.prev = newNode;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;
  }

  remove(item) {
    let currentNode = this.find(item);
    if (currentNode && currentNode.next != null) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
  }

  findLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  displayReverse() {
    let currentNode = this.findLast();
    while (currentNode.prev != null) {
      console.log(currentNode.element);
      currentNode = currentNode.prev;
    }
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }
}

let doublyLList = new DoublyLList();
doublyLList.insert('a', 'head');
doublyLList.insert('b', 'a');
doublyLList.insert('c', 'b');
// doublyLList.displayReverse();
