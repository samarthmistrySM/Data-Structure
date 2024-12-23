const Node = require("./Node");
class BST {
  constructor() {
    this.root = null;
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  findMinNode(root) {
    if (root.left === null) return root;
    else return this.findMinNode(root.left);
  }

  removeNode(root, data) {
    if (root === null) {
      return null;
    } else if (data < root.data) {
      root.left = this.removeNode(root.left, data);
      return root;
    } else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }
      if (root.left === null) {
        root = root.right;
        return root;
      } else if (root.right === null) {
        root = root.left;
        return root;
      }

      const temp = this.findMinNode(root.right);
      root.data = temp.data;

      root.right = this.removeNode(root.right, temp.data);
      return root;
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  getRootNode() {
    return this.root;
  }

  inOrder(root) {
    if (root != null) {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root != null) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root != null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }

  search(root, data) {
    if (root === null) {
      return null;
    } else if (data < root.data) {
      return this.search(root.left, data);
    } else if (data > root.data) {
      return this.search(root.right, data);
    } else return root;
  }
}

// Helper function
// getRootNode()
// search(node, data)

module.exports = BST;
