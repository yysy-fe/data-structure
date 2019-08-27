class Stack {
  constructor() {
    this._stack = [];
    this._top = 0;
  }

  push(item) {
    this._stack[this._top++] = item;
  }

  pop() {
    return this._stack[--this._top];
  }

  peek() {
    return this._stack[this._top - 1];
  }

  clear() {
    this._top = 0;
  }

  length() {
    return this._top;
  }
}


//数制转换demo

function mulBase(num, base) {
  let stack = new Stack;
  let str = '';
  while (num > 0) {
    stack.push(num % base);
    num = Math.floor(num / base);
  }
  while (stack.length()) {
    str = str + stack.pop();
  }
  return str;
}

console.log(mulBase(8, 2));

// 判断是否是回文  dad racecar

function reStr(str) {
  let finalStr = '';
  let stack = new Stack;
  str += '';
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (stack.length()) {
    finalStr += stack.pop();
  }

  return str === finalStr;
}

console.log(reStr('racecar'))
