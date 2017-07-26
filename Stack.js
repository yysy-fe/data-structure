class Stack {
    constructor() {
        this._stack = [];
        this._top = 0;
    }

    push(item) {
        this._stack[this._top++] = item;
    }

    pop() {
        return this._stack[this._top--];
    }

    peek() {
        return this._stack[this._top - 1];
    }

    clear() {
        this._top = 0;
    }

    length() {
        this._top = 0;
    }
}
