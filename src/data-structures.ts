export class BinarySearchTree {
  root;
  constructor(value) {
    this.root = {
      value: value,
      left: null,
      right: null
    }
  }

  createNode(value) {
    return {
      value,
      left: null,
      right: null
    }
  }

  add(value) {
    if (isNaN(value)) throw new Error("Number not found");
    
    if (!this.root.value) {
      this.root = this.createNode(value);
      console.log('Root', this.root);
      return true;
    }

    let nodeToCheck = this.root;
    let stop = false;
    while (!stop) {
      if (value < nodeToCheck.value) {
        if (nodeToCheck.left) {
          nodeToCheck = nodeToCheck.left;
          continue;
        }
        nodeToCheck.left = this.createNode(value);
        stop = true;
      } else {
        if (nodeToCheck.right) {
          nodeToCheck = nodeToCheck.right;
          continue;
        }
        nodeToCheck.right = this.createNode(value);
        stop = true;
      }
      // console.log('Node To Check', nodeToCheck);
    }
    return true;
  }
  
  search(value) {
    console.log('--------------------------');
    console.log('Searching', value);
    if (isNaN(value)) throw new Error("Number not found");
    let stop = false;
    let nodeToCheck = this.root;
    while(nodeToCheck && nodeToCheck.value != value) {
      if (value < nodeToCheck.value) {
        nodeToCheck = nodeToCheck.left;
      } else {
        nodeToCheck = nodeToCheck.right;
      }
    }
    
    return nodeToCheck && nodeToCheck.value ? nodeToCheck : null;
  }
  
  getLowest(node) {
    console.log('---SEARCHING LOWEST---');
    if (!this.root) throw new Error('There are not value in root');
    let lowest = node ? node.value : this.root.value;
    let currentCheckNode = node ?? this.root;
    let parent = currentCheckNode;
    while(currentCheckNode.left) {
      parent = currentCheckNode;
      currentCheckNode = currentCheckNode.left;
    }
    return {
      parent: parent == currentCheckNode ? node : parent,
      lowest: currentCheckNode
    };
  }
  
  getHighest(node) {
    console.log('---SEARCHING HIGHEST---');
    if (!this.root) throw new Error('There are not value in root');
    let lowest = node ? node.value : this.root.value;
    let currentCheckNode = node ?? this.root;
    let parent = currentCheckNode;
    while(currentCheckNode.right) {
      parent = currentCheckNode;
      currentCheckNode = currentCheckNode.right;
    }
    return {
      parent: parent == currentCheckNode ? node : parent,
      highest: currentCheckNode};
  }
  
  change(value, newValue) {
    console.log('---CHANGE---');
    if (this.remove(value)) {
      this.add(newValue);
      return true;
    }
    return false;
  }
  
  remove(value) {
    console.log('---REMOVE---');
    if (isNaN(value)) throw new Error("Number not found");
    // let stop = false;
    let nodeToRemove = this.root;
    let parentNode = nodeToRemove;
    while(nodeToRemove && nodeToRemove.value != value) {
      parentNode = nodeToRemove;
      if (value < nodeToRemove.value) {
        nodeToRemove = nodeToRemove.left;
      } else {
        nodeToRemove = nodeToRemove.right;
      }
    }
    if (!nodeToRemove) return false;
    // 1. Without Childrens
    console.log('1. Without Childrens');
    if (!nodeToRemove.left && !nodeToRemove.right) {
      // Remove From Parent
      if (parentNode.left && parentNode.left.value == value) {
        parentNode.left = null;
      }
      if (parentNode.right && parentNode.right.value == value) {
        parentNode.right = null;
      }
      return true;
    }

    // Just One Children
    console.log('2. Just One Children');
    if (nodeToRemove.left && !nodeToRemove.right) {
      // Check parent left
      if (parentNode.left && parentNode.left.value == value) {
        parentNode.left = nodeToRemove.left;
      }

      if (parentNode.right && parentNode.right.value == value) {
        parentNode.right = nodeToRemove.left;
      }
      return true;
    }

    if (!nodeToRemove.left && nodeToRemove.right) {
      // Check parent Right
      if (parentNode.left && parentNode.left.value == value) {
        parentNode.left = nodeToRemove.right;
      }

      if (parentNode.right && parentNode.right.value == value) {
        parentNode.right = nodeToRemove.right;
      }
      return true;
    }

    // With Two Childrens
    console.log('3. With Two Childrens');
    // Check what direction is the best
    // Get the lowest from the right
    const right = this.getLowest(this.search(nodeToRemove.value));
    // Get the higest from the left
    const left = this.getHighest(this.search(nodeToRemove.value));

    // Check which one has not childrens
    let rightCount = 0;
    let leftCount = 0;

    if (right.lowest.left || right.lowest.right) {
      rightCount++;
    }

    if (right.lowest.left && right.lowest.right) {
      rightCount++;
    }

    if (left.highest.left || left.highest.right) {
      leftCount++;
    }

    if (left.highest.left && left.highest.right) {
      leftCount++;
    }

    if (rightCount <= leftCount) {
      console.log('Change Right');
      nodeToRemove.value = right.lowest.value;
      right.parent.left = right.lowest.right;
      return true;
    } else {
      console.log('Change Left');
      console.log(left);
      nodeToRemove.value = left.highest.value;
      left.parent.right = left.highest.left;
      return true;
    }
  }

  DFSRecursion(branch, valueToSearch) {
    if (branch.value == valueToSearch) {
      console.log('I FOUND IT', branch);
      return true;
    }
    
    // CHECK LEFT
    if (branch.left) {
      if (this.DFSRecursion(branch.left, valueToSearch)) return true
    }
    
    // CHECK RIGHT
    if (branch.right) {
      if (this.DFSRecursion(branch.right, valueToSearch)) return true
    }
    
    console.log('HA LLEGADO AL FINAL Y NO HA ENCONTRADO NADA');
    return false;
  },

  searchByPila(branch, valueToSearch) {
    let pila = [];
    let found = false;
    pila.push(branch);
    while(pila.length > 0 && !found) {
      const currentBranch = pila.pop();
      if (!currentBranch) continue;
      if (currentBranch.value == valueToSearch) {
        found = true;
        console.log('ENCONTRADO');
        return currentBranch;
      }
      if (currentBranch.left || currentBranch.right) {
        pila.push(currentBranch.left);
        pila.push(currentBranch.right);
      }
    }
    console.log('NO LO HA ENCONTRADO');
  }
}

const BST = new BinarySearchTree();
BST.add(10);
BST.add(5);
BST.add(15);
BST.add(7);
BST.add(3);
BST.add(5.9);
BST.add(6);
BST.add(9);
BST.add(8);

// let patata = BST.search(5);
// patata.value = 4;
// patata.value = 4;
// BST.add(9.5);
// BST.add(7.5);
// BST.add(8.5);
// BST.add(9);
// BST.add(45);
// BST.add(70);
// BST.add(58);
// BST.add(59);
// BST.add(56);





// BST.add(30);
// BST.add(31);
// BST.add(60);
// BST.add(20);
// BST.add(28);
// BST.add(25);
// BST.add(22);
// BST.add(72);
// BST.add(70);
// BST.add(64);
// BST.add(18);
// BST.add(23);
// BST.add(4);
// BST.add(24);
// BST.add(2);
// BST.add(100);
// BST.add(6);
// BST.add(7);
// BST.add(150);
// BST.add(8);
// BST.add(9);
// BST.add(1);

console.log('---ROOT---');
console.log(BST.root);

// BST.getLowest(BST.search(5));
// BST.getHighest(BST.search(5));

// BST.change(5, 17);
console.log('---ROOT AFTER REMOVE---');
console.log(BST.root);


