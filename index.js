const { log } = require("console");
const Queue = require("./Queue")
const Queue2 = require("./QueueLinkedList")
const queue = new Queue();

// queue.enQueue(1);
// queue.enQueue(2);
// queue.enQueue(3);
// queue.enQueue(4);
// queue.enQueue(5);

// queue.print()

// queue.deQueue(5);

// queue.print()

// log(queue.isEmpty())
// log(queue.front())
// log(queue.size())

const queue2 = new Queue2();

queue2.enqueue(1)
queue2.enqueue(2)
queue2.enqueue(3)
queue2.enqueue(4)

queue2.print()