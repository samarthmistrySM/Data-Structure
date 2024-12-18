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
        if(curr.data === data){
          prev.next = curr.next;
          this.size--;
        }
        else{
          prev = curr;
        }
        curr = curr.next; 
      }
    }
  }

  contains(data){
    let curr = this.head;
    while (curr != null) {
      if(curr.data === data){
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  addFirst(data){
    const newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
    }else{
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
  }
  
  indexOf(data){
    let found = false;
    let currIndex = 0;
    let curr = this.head;
    while(curr.data != data){
      curr = curr.next;
      currIndex++;
      found=true;
    }
    if(!found){
      currIndex = -1;
    }
    return currIndex;
  }


}

module.exports = Linkedlist