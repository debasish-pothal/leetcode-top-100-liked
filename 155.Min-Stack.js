/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
  constructor() {
    this.index = -1;
    this.stack = [];
    this.min = [];
  }

  push(val) {
    const top = this.min[this.index] ?? Infinity;
    this.stack.push(val);
    this.min.push(Math.min(top, val));
    this.index += 1;
  }

  pop() {
    this.stack.pop();
    this.min.pop();
    this.index -= 1;
  }

  top() {
    return this.stack[this.index];
  }

  getMin() {
    return this.min[this.index];
  }
}
