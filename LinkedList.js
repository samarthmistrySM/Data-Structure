const Node = require("./Node");

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  addFirst(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
  }

  addAt(data, index) {
    if (index > this.size) {
      throw new Error("Index out of Bound");
    }
    const newNode = new Node(data);

    if (this.head === null) {
      newNode.next = this.head;
    } else {
      let curr = this.head;
      let currIndex = 0;
      let temp = null;
      while (currIndex < index) {
        temp = curr;
        curr = curr.next;
        currIndex++;
      }
      temp.next = newNode;
      newNode.next = curr;
    }
    this.size++;
  }

  deleteAt(index) {
    if (index > this.size) {
      throw new Error("Index out of Bound");
    }
    if (this.head === null) {
      throw new Error("Linkedlist is Empty");
    } else {
      let curr = this.head;
      let currIndex = 0;
      let prev = null;
      while (currIndex < index) {
        prev = curr;
        curr = curr.next;
        currIndex++;
      }
      prev.next = curr.next;
      this.size--;
    }
  }

  removeFirstOcc(data) {
    if (this.head === null) {
      throw new Error("Linkedlist is Empty");
    } else {
      let curr = this.head;
      let prev = null;
      while (curr.data != data) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.size--;
  }

  removeAll(data) {
    if (this.head === null) {
      throw new Error("Linkedlist is Empty");
    } else {
      let curr = this.head;
      let prev = null;

      while (curr != null) {
        if (curr.data === data) {
          prev.next = curr.next;
          this.size--;
        } else {
          prev = curr;
        }
        curr = curr.next;
      }
    }
  }

  removeDuplicates() {
    let curr = this.head;
    while (curr && curr.next) {
      if (curr.data === curr.next.data) {
        curr.next = curr.next.next;
        if (curr.next) {
          curr.next.prev = curr;
        }
      } else {
        curr = curr.next;
      }
    }
  }

  contains(data) {
    let curr = this.head;
    while (curr != null) {
      if (curr.data === data) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  indexOf(data) {
    let found = false;
    let currIndex = 0;
    let curr = this.head;
    while (curr.data != data) {
      curr = curr.next;
      currIndex++;
      found = true;
    }
    if (!found) {
      currIndex = -1;
    }
    return currIndex;
  }

  middle() {
    const targetIdx = Math.trunc(this.size / 2);
    let curr = this.head;
    for (let i = 0; i < targetIdx; i++) {
      curr = curr.next;
    }
    return curr;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next;

    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  sortLinkedList() {
    const arr = [];
    let curr = this.head;
    while (curr != null) {
      arr.push(curr.data);
      curr = curr.next;
    }
    arr.sort((a, b) => a - b);

    const newLinkedlist = new Linkedlist();

    arr.forEach((ele) => {
      newLinkedlist.add(ele);
    });

    this.head = newLinkedlist.head;
  }

  merge(newHead) {
    let curr = this.head;

    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newHead;
    this.sortLinkedList();
  }
  
  print() {
    let result = "";
    let curr = this.head;
    while (curr != null) {
      result += curr.data + " ";
      curr = curr.next;
    }
    console.log(result.trim());
  }
}

module.exports = Linkedlist;
