/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
/**
 * @param {number} capacity
 */
/**
 * @param {number} key
 * @return {number}
 */
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      const val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val);

      return val;
    }

    return -1;
  }

  put(key, value) {
    if (this.get(key) === -1) {
      if (this.capacity === this.map.size) {
        for (const [key, val] of this.map) {
          this.map.delete(key);
          break;
        }
      }
    }

    this.map.set(key, value);
  }
}
