const { log } = require("console");
const Queue = require("./Queue")

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);

queue.print()

queue.deQueue(5);

queue.print()

log(queue.isEmpty())
log(queue.front())
log(queue.size())