const { log } = require("console");
const Linkedlist = require("./LinkedList")

const linkedlist = new Linkedlist();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(3);
linkedlist.add(4);

linkedlist.print()
linkedlist.removeAll(3);
linkedlist.print()
// linkedlist.addAt(5,3);

// linkedlist.print()

// linkedlist.deleteAt(3);
// linkedlist.removeFirstOcc(2);

// linkedlist.print()

// log(linkedlist.contains(2))

// linkedlist.addFirst(0)
// linkedlist.print()

// console.log(linkedlist.indexOf(3))