const BST = require("./BST")
const Node = require("./Node")

const bst = new BST();
// const bst2 = new BST();

bst.insert(40);
bst.insert(20);
bst.insert(60);
bst.insert(10);
bst.insert(30);
bst.insert(50);
bst.insert(70);

// bst2.insert(40);
// bst2.insert(20);
// bst2.insert(60);
// bst2.insert(10);
// bst2.insert(30);
// bst2.insert(50);
// bst2.insert(70);


// bst.preOrder(bst.root)

// bst.remove(40)
// console.log();

// bst.insert(41)

// bst.preOrder(bst.root)

// const find = bst.search();
// const height = bst.height(bst.root);
// console.log(height);

// const isIdentical = bst.isIdentical(bst2.root)

// console.log(isIdentical)

// bst.preOrder(bst.root)

// console.log();

// const mirror = bst.mirrorTree();

// bst.preOrder(mirror)

// console.log(bst.isSymmetric(bst.root));
// console.log(bst.isSum(bst.root))

const arrToTree = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const bst = new BST();
    const done = bst.arrToTree(arr, 0, arr.length - 1);
    bst.preOrder(done)
}

arrToTree();