const { log } = require("console");
const Linkedlist = require("./LinkedList")

const linkedlist = new Linkedlist();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);

linkedlist.print()

linkedlist.addAt(5,3);

linkedlist.print()