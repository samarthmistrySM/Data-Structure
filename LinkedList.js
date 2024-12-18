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

  print() {
    let result = "";
    let curr = this.head;
    while (curr != null) {
      result += curr.data + " ";
      curr = curr.next;
    }
    console.log(result.trim());
  }

  addAt(data, index) {
    if(index > this.size){
      throw new Error("Index out of Bound");
    }
    const newNode = new Node(data);
    
    if (this.head === 0) {
      newNode.next = this.head;
    } else {
      let curr = this.head;
      let currIndex = 0;
      let temp = null;
      while(currIndex <index){
        temp = curr;
        curr = curr.next;
        currIndex++;
      }
      temp.next = newNode;
      newNode.next = curr;
    }
    this.size++;
  }
}

module.exports = Linkedlist;