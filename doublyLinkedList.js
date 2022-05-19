class Node {
  constructor(element, previous = null, next = null) {
    this.element = element;
    this.previous = previous;
    this.next = next;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertFront(element) {
    const node = new Node(element);
    if (this.head) {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  insertLast(element) {
    const node = new Node(element);
    if (this.head) {
      let current = this.head;
      while (current) {
        if (!current.next) {
          node.previous = current;
          current.next = node;
          break;
        }
        current = current.next;
      }
    } else {
      this.head = node;
    }
  }

  insertAt(element, index) {
    let current = this.head;
    let node = new Node(element);
    let count = 0;
    let previousNode = null;
    if (!current) {
      this.head = node;
      return;
    }
    while (count <= index) {
      if (count === index) {
        node.next = current;
        node.previous = previousNode;
        if (current) current.previous = node;
        if (previousNode) previousNode.next = node;
        if (count === 0) this.head = node;
        break;
      }
      previousNode = current;
      current = current.next;
      count++;
    }
  }

  getAt(index) {
    let current = this.head;
    let count = 0;
    while (count <= index) {
      if (count === index) console.log(current.element);
      current = current.next;
      count++;
    }
  }

  removeAt(index) {
    let current = this.head;
    let count = 0;
    let previousNode = null;
    if (index === 0) {
      this.head = current.next;
      return;
    }
    while (count <= index) {
      if (count === index) {
        if (previousNode) previousNode.next = current ? current.next : null;
        current = current ? current.next : null;
        if (current) current.previous = previousNode;
        break;
      }
      previousNode = current;
      current = current.next;
      count++;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertFront(100);
doublyLinkedList.insertFront(50);
doublyLinkedList.insertFront(10);
doublyLinkedList.removeAt(2);
// doublyLinkedList.insertAt(125, 2);
// doublyLinkedList.getAt(0);
// doublyLinkedList.insertLast(120);
// doublyLinkedList.insertLast(150);
console.log(doublyLinkedList.printList());
