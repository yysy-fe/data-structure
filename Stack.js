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
    while(num > 0) {
        stack.push(num % base);
        num = Math.floor(num / base);
    }
    while(stack.length()) {
        str = str + stack.pop();
    }
    return str;
}

console.log(mulBase(8,2))
