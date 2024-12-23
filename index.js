const BST = require("./BST")

const bst = new BST();

bst.insert(40);
bst.insert(20);
bst.insert(60);
bst.insert(10);
bst.insert(30);
bst.insert(50);
bst.insert(70);


// bst.preOrder(bst.root)

// bst.remove(40)
// console.log();

// bst.insert(41)

// bst.preOrder(bst.root)

const find = bst.search(10);
console.log(typeof find);
