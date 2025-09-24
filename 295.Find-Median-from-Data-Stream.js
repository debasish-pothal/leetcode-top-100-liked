/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
class MxHeap {
  constructor() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  peek() {
    return this.data.length ? this.data[0] : undefined;
  }
  push(val) {
    this.data.push(val);
    this._siftUp(this.data.length - 1);
  }
  pop() {
    if (!this.data.length) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length) {
      this.data[0] = last;
      this._siftDown(0);
    }
    return top;
  }
  _siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p] >= this.data[i]) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }
  _siftDown(i) {
    const n = this.data.length;
    while (true) {
      let l = 2 * i + 1,
        r = 2 * i + 2,
        largest = i;
      if (l < n && this.data[l] > this.data[largest]) largest = l;
      if (r < n && this.data[r] > this.data[largest]) largest = r;
      if (largest === i) break;
      [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
      i = largest;
    }
  }
}

class MnHeap {
  constructor() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  peek() {
    return this.data.length ? this.data[0] : undefined;
  }
  push(val) {
    this.data.push(val);
    this._siftUp(this.data.length - 1);
  }
  pop() {
    if (!this.data.length) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length) {
      this.data[0] = last;
      this._siftDown(0);
    }
    return top;
  }
  _siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p] <= this.data[i]) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }
  _siftDown(i) {
    const n = this.data.length;
    while (true) {
      let l = 2 * i + 1,
        r = 2 * i + 2,
        smallest = i;
      if (l < n && this.data[l] < this.data[smallest]) smallest = l;
      if (r < n && this.data[r] < this.data[smallest]) smallest = r;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
}

class MedianFinder {
  constructor() {
    this.maxHeap = new MxHeap();
    this.minHeap = new MnHeap();
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.maxHeap.push(num);
    const moved = this.maxHeap.pop();

    if (moved !== undefined) this.minHeap.push(moved);

    if (this.minHeap.size() > this.maxHeap.size()) {
      const back = this.minHeap.pop();
      if (back !== undefined) this.maxHeap.push(back);
    }
  }

  /**
   * @return {number}
   */
  findMedian() {
    const a = this.maxHeap.peek();
    const b = this.minHeap.peek();
    if (a === undefined && b === undefined) return null;
    if (this.maxHeap.size() > this.minHeap.size()) return a;
    return (a + b) / 2;
  }
}
