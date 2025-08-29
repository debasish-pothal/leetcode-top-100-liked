/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class Trie {
  constructor() {
    this.root = {};
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }

      node = node[char];
    }

    node.isEnd = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;

    for (const char of word) {
      if (!node[char]) {
        return false;
      }

      node = node[char];
    }

    return node.isEnd === true;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (!node[char]) {
        return false;
      }

      node = node[char];
    }

    return true;
  }
}
