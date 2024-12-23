const Node = require("./Node")
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    pop() {
        const poppedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return poppedNode.value;
    }

    peek() {
        return this.head.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print(){
        let curr = this.head;
        let result = "--------------\n"

        while (curr!=null) {
            result += ` ${curr.data} \n--------------\n`;
            curr = curr.next;
        }
        console.log(result);
    }
}

module.exports = Stack;