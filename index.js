const { log } = require("console");
const Linkedlist = require("./LinkedList")
const DoublyLinkedList = require("./DoublyLinkedList")

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.add(1)
doublyLinkedList.add(2)
doublyLinkedList.add(3)
doublyLinkedList.add(4)
doublyLinkedList.add(5)

// doublyLinkedList.addFirst(6)

doublyLinkedList.addAfter(7,3)

// doublyLinkedList.deleteFirst();
// doublyLinkedList.deleteLast();
// doublyLinkedList.deleteEle(7);
// log(doublyLinkedList.search(2));
doublyLinkedList.deleteAt(3);
doublyLinkedList.printForward()
doublyLinkedList.printBackwards()

// const linkedlist = new Linkedlist();

// linkedlist.add(1);
// linkedlist.add(2);
// linkedlist.add(3);
// linkedlist.add(3);
// linkedlist.add(4);
// linkedlist.add(5);

// linkedlist.print()

// log(linkedlist.middle().data)

// linkedlist.removeAll(3);
// linkedlist.reverse()
// linkedlist.print()
// linkedlist.addAt(5,3);

// linkedlist.print()

// linkedlist.deleteAt(3);
// linkedlist.removeFirstOcc(2);

// linkedlist.print()

// log(linkedlist.contains(2))

// linkedlist.addFirst(0)
// linkedlist.print()

// console.log(linkedlist.indexOf(3))


//merge2 linkedlist
// const linkedlist2 = new Linkedlist();
// linkedlist2.add(6)
// linkedlist2.add(5)
// linkedlist2.add(8)
// linkedlist2.add(9);
// linkedlist2.add(7)
// linkedlist2.print()

// linkedlist.merge(linkedlist2.head)
// linkedlist.print()

// linkedlist.removeDuplicates()
// linkedlist.print()