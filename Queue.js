class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  #head = null;
  add(value) {
    let current = this.#head;
    const NODE = new Node(value);
    if (!current) {
      this.#head = NODE;
      return;
    }
    while (current) {
      if (!current.next) break;
      current = current.next;
    }
    current.next = NODE;
  }
  removeAt(index) {
    let current = this.#head;
    if (index === 0) {
      this.#head = current.next;
      return;
    }
    let count = 0;
    while (current) {
      count++;
      if (count === index) break;
      current = current.next;
    }
    current.next = current.next.next;
  }
  list() {
    let current = this.#head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
(() => {
  const QUEUE = new Queue();
  QUEUE.add(1);
  QUEUE.add(2);
  QUEUE.add(3);
  QUEUE.removeAt(2);
  QUEUE.list();
})();
