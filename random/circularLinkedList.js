// 1. Circular Singly Linked List
// 2. Circular Doubly Linked List
function Node(value) {
  this.value = value;
  this.next = null;
}

function CircularLinkedList() {
  this.head = null;
  this.insert = function (value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.head.next = this.head;
    } else {
      let current = this.head;
      if (current.next === this.head) {
        current.next = node;
        node.next = this.head;
      } else {
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = node;
        node.next = this.head;
      }
    }
  };
  this.insertAt = function (value, index) {
    const node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
      this.head.next = this.head;
    } else {
      let count = 0;
      if (index === 0) {
        do {
          current = current.next;
        } while (current.next !== this.head);
        current.next = node;
        node.next = this.head;
        this.head = node;
        return;
      }
      while (count < index) {
        count++;
        if (count === index) break;
        current = current.next;
      }
      if (current.next !== this.head) {
        console.log("1");
        node.next = current.next;
        current.next = node;
      } else {
        current.next = node;
        node.next = this.head;
      }
    }
  };
  this.removeAt = function (index) {
    let current = this.head;
    if (index === 0) {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = current.next;
      return;
    }
    let count = 0;
    while (count < index) {
      count++;
      if (count === index) break;
      current = current.next;
    }
    if (current.next !== this.head) {
      current.next = current.next.next;
    } else {
      current.next = this.head;
    }
  };
  this.list = function () {
    let current = this.head;
    do {
      console.log(current.value);
      current = current.next;
    } while (current !== this.head);
  };
  this.get = function (index) {
    let current = this.head;
    let count = 0;
    if (index === 0) {
      console.log(current.value);
      return;
    }
    while (count < index) {
      count++;
      current = current.next;
      if (count === index) {
        console.log(current.value);
        break;
      }
    }
  };
}

(() => {
  const circularLinkedList = new CircularLinkedList();
  circularLinkedList.insert(10);
  circularLinkedList.insert(20);
  circularLinkedList.insert(30);
  circularLinkedList.insert(40);
  circularLinkedList.insert(50);
  // circularLinkedList.insertAt(45, 4);
  // circularLinkedList.removeAt(4);
  // circularLinkedList.insertAt(20, 1);
  // circularLinkedList.list();
  circularLinkedList.get(5);
})();
