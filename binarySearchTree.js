//The Binary Search Tree Constructor is made up of a root node
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

//let bst = new BinarySearchTree();
let node = new Node();

console.log(node, bst); // Node { value: undefined, left: null, right: null } BST { root: null }

//insertion

BinarySearchTree.prototype.insert = function(value) {
  let node = new Node(value);
  if (!this.root) this.root = node;
  else {
    let current = this.root;
    while (!!current) {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
  return this;
};

let bst = new BinarySearchTree(); bst.insert(25); // BST { root: Node { value: 25, left: null, right: null } }

bst
  .insert(40)
  .insert(20)
  .insert(9)
  .insert(32)
  .insert(15)
  .insert(8)
  .insert(27);

console.log(node, bst);
  //BST { root:  Node { value: 25, left: Node { value: 20, left: [Object], right: null }, right: Node { value: 40, left: [Object], right: null } } }

  BinarySearchTree.prototype.contains = function(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      if (value > current.value) current = current.right;
    }
    return false;
  };

  BinarySearchTree.prototype.getMin = function(node) {
    if (!node) node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  };

  BinarySearchTree.prototype.getMax = function(node) {
    if (!node) node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  };

BinarySearchTree.prototype.removeNode = function(node, value){
  if(!node){
    return null;
  }
  if(value === node.value){
// no children
    if(!node.left && !node.right) return null;
// one child and it’s the right
    if(!node.left) node.right;
// one child and it’s the left
   if(!node.right) node.left;
// two kids
     const temp = this.getMin(node.right);
      node.value = temp;
     node.right = this.removeNode(node.right, temp);
     return node;
    } else if (value < node.value) {
     node.left = this.removeNode(node.left, value);
     return node;
    }  else  {
      node.right = this.removeNode(node.right, value);
     return node;
    }
};

BinarySearchTree.prototype.remove = function(value) {
  this.root = this.removeNode(this.root, value);
};
