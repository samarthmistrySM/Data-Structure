const Node = require("./Node")

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.rear) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        const dequeuedNode = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return dequeuedNode.value;
    }

    peek() {
        return this.front.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print(){
        let curr = this.front;
        let result = "\n| "
        while (curr != null) {
            result += `${curr.data} | `
            curr = curr.next;
        }
        console.log(result+ "\n");
        
    }
}

module.exports = Queue;