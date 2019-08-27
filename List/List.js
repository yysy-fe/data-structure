class List {
  constructor() {
    this._list = [];
    this._pos = 0;
    this._length = 0;
  }

  toString() {
    return this._list;
  }

  append(item) {
    this._list[this._length++] = item;
  }

  remove(item) {
    if (this._list.indexOf(item) > -1) {
      this._length--;
      return this._list.splice(this._list.indexOf(item), 1)
    }
    else {
      return false;
    }
  }

  insert(item, after) {
    if (this._list.indexOf(after) > -1) {
      this._length++;
      return this._list.splice(this._list.indexOf(after) + 1, 0, item);
    }
    else {
      return false;
    }
  }

  clear() {
    this._length = 0;
    this._pos = 0;
    this._list = [];
  }

  length() {
    return this._length;
  }

  pos() {
    return this.pos;
  }

  currPos() {
    return this._pos;
  }

  front() {
    this._pos = 0;
  }

  end() {
    this._pos = this._length - 1;
  }

  prev() {
    if (this._pos > 0) {
      return --this._pos;
    }
    else {
      return false;
    }
  }

  next() {
    if (this._pos + 1 < this._length) {
      return ++this._pos;
    }
    else {
      return false;
    }
  }

  moveTo(pos) {
    this._pos = pos;
  }

  getElement() {
    return this._list[this._pos];
  }
}

let list = new List();
list.append(1);
list.append(2);
list.append(3);
list.remove(0);
print(list.toString())
