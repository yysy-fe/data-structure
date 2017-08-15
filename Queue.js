class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(item) {
        this._queue.push(item);
    }

    dequeue() {
        return this._queue.shift();
    }

    front() {
        return this._queue[0];
    }

    back() {
        return this._queue[this._queue.length - 1];
    }

    empty() {
        return this._queue.length === 0;
    }

    toString() {
        return this._queue.join(',');
    }
}
