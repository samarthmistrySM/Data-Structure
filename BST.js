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

  height(root=this.root){
    if(root === null){
        return -1;
    }

    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  isIdentical(r2,r1=this.root){

    if(r1===null && r2 === null){
        return true;
    }

    if(r1===null || r2 === null){
        return false;
    }

    if(r1.data===r2.data && this.isIdentical(r2.left,r1.left) && this.isIdentical(r2.right,r1.right)){
        return true;
    }else{
        return false;
    }

  }

  mirrorTree(root = this.root){

    if(root === null){
        return null;
    }
    const left = this.mirrorTree(root.left)
    const right = this.mirrorTree(root.right)

    root.left = right;
    root.right = left;

    return root;
  }

  isMirror(left,right){
    if (left === null && right === null) {
        return true;
    }


    if (left === null || right === null) {
        return false;
    }

    if(left.data === right.data && this.isMirror(left.left,right.right) && this.isMirror(left.left,right.right) ){
        return true;
    }else{
        return false;
    }
  }

  isSymmetric(root=this.root){
    if(root == null){
        return true;
    }else{
        return this.isMirror(root.left,root.right);
    }
  }

  isSum(root = this.root){
    if (root === null || (root.left === null && root.right === null)){
        return 1;
    }

    let sum = 0;
    if (root.left !== null){
        sum += root.left.data;
    }

    if (root.right !== null){
        sum += root.right.data;
    }

    if(sum === root.data && this.isSum(root.left) && this.isSum(root.right)){
        return true;
    }else{
        return false;
    }
  }

  arrToTree(arr, start, end){
    if(start > end){
        return null;
    }

    let mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.arrToTree(arr, start, mid - 1);
    node.right = this.arrToTree(arr, mid + 1, end);

    return node;
  }
}

// Helper function
// getRootNode()
// search(node, data)

module.exports = BST;
