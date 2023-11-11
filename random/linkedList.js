// class Node {
//   constructor(element, next = null) {
//     this.element = element;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // INSERT AT FRONT
//   insertFirst(element) {
//     this.head = new Node(element, this.head);
//     this.size++;
//   }

//   insertLast(element) {
//     const node = new Node(element);
//     let current;

//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

//   insertAt(element, index) {
//     let node = new Node(element);
//     let current = this.head;
//     let count = 0;
//     let previous = current;
//     if (index === 0) {
//       this.head = node;
//       node.next = current;
//       return;
//     }
//     while (count < index) {
//       previous = current;
//       current = current.next;
//       count++;
//     }
//     previous.next = node;
//     node.next = current;
//   }

//   getAt(index) {
//     let current = this.head;
//     let count = 0;
//     while (count < index) {
//       current = current.next;
//       count++;
//     }
//     console.log(current.element);
//   }

//   removeAt(index) {
//     let current = this.head;
//     let count = 0;
//     let previous = current;
//     if (index === 0) {
//       this.head = current.next;
//       return;
//     }
//     while (count < index) {
//       previous = current
//       current = current.next;
//       count++;
//     }
//     previous.next = current.next;
//   }

//   clearList() {
//     this.head = null;
//     this.size = 0;
//   }

//   printListElement() {
//     let current = this.head;

//     while (current) {
//       console.log(current.element);
//       current = current.next;
//     }
//   }
// }

// const ll = new LinkedList();
// ll.insertLast(100);
// ll.insertLast(200);
// ll.insertLast(300);
// ll.insertLast(400);
// ll.insertLast(500);
// // ll.getAt(4)
// ll.removeAt(1);
// ll.printListElement();

function Node(value) {
  this.value = value;
  this.next = null;
}

function List() {
  this.head = null;
  this.insert = function (value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          current.next = node;
          break;
        }
        current = current.next;
      }
    }
  };
  this.insertAt = function (value, index) {
    const node = new Node(value);
    let i = 0;
    let current = this.head;
    while (current) {
      if (index === 0) {
        node.next = current;
        this.head = node;
        break;
      }
      if (i === index - 1) {
        node.next = current.next;
        current.next = node;
        break;
      }
      i++;
      current = current.next;
    }
  };
  // removeAt
  this.removeAt = function (index) {
    let current = this.head;
    let i = 0;
    if (index === 0) {
      this.head = current.next;
      return;
    }
    let last;
    while (current) {
      i++;
      last = current;
      current = current.next;
      if (index === i) {
        last.next = current.next;
        break;
      }
    }
  };
  this.getIndex = function (index) {
    let i = 0;
    let current = this.head;
    if (index === 0) {
      console.log(current.value);
      return;
      s;
    }
    while (i !== index) {
      i++;
      current = current.next;
      if (i === index) {
        console.log(current.value);
      }
    }
  };
  this.getList = function () {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  };
}

const list = new List();
list.insert(10);
list.insert(20);
list.insert(40);
list.insertAt(30, 2);
list.removeAt(3);
list.getList();
