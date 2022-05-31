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
//   this.removeAt = function (index) {
//     let current = this.head;
//     let count = 0;
//     while (count <= index) {
//       if (count === index) break;
//       count++;
//       current = current.next;
//     }
//     console.log("remove - ", current.element);
//   };
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
  STACK.list();
//   STACK.removeAt(1);
})();
