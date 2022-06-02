function Node(element) {
  this.element = element;
  this.next = null;
}

function Stack() {
  this.head = null;
  this.insert = function (value) {
    const NODE = new Node(value);
    if (!this.head) {
      this.head = NODE;
      return;
    }
    NODE.next = this.head;
    this.head = NODE;
  };
  this.removeAt = function (index) {
    let current = this.head;
    if (index === 0) {
      this.head = current.next ? current.next : null;
      return;
    }
    let count = 0;
    while (count < index) {
      count++;
      if (count === index) break;
      current = current.next;
    }
    current.next = current.next.next ? current.next.next : null
  };
  this.list = function () {
    let current = this.head;
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  };
}

(() => {
  const STACK = new Stack();
  STACK.insert(1);
  STACK.insert(2);
  STACK.insert(3);
  STACK.removeAt(2);
  STACK.list();
})();
