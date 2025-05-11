interface INode {
  value: number;
  left: INode | null;
  right: INode | null;
}
/**
 * @description It is a BinaryTree Structure with functions to search by low or high values, recursive DFS or Pile DFS
 * @param number - The first number you want to insert
 */
export class BinaryTree {
  root: INode;
  constructor(value: number) {
    this.root = {
      value: value,
      left: null,
      right: null
    }
  }

  createNode(value: number): INode {
    return {
      value,
      left: null,
      right: null
    }
  }

  add(value: number) {
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
  // Left is lower than value
  // Right is higher than value
  search(value: number): INode | null {
    console.log('---SEARCHING---');
    console.log('Searching', value);
    if (isNaN(value)) throw new Error("Number not found");
    let stop = false;
    let nodeToCheck: INode | null = this.root;
    while(nodeToCheck && nodeToCheck.value != value) {
      if (value < nodeToCheck.value) {
        nodeToCheck = nodeToCheck.left;
      } else {
        nodeToCheck = nodeToCheck.right;
      }
    }
    
    return nodeToCheck && nodeToCheck.value ? nodeToCheck : null;
  }
  /**
   * 
   * @param node
   * @returns object { parent: node, lowest: the lowest node }
   */
  getLowest(node: INode | null) {
    console.log('---SEARCHING LOWEST---');
    if (!this.root) throw new Error('There are not value in root');
    if (node === null) throw Error('The parameter is null');
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
  
  getHighest(node: INode | null) {
    console.log('---SEARCHING HIGHEST---');
    if (!this.root) throw new Error('There are not value in root');
    if (node === null) throw Error('The parameter is null');
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
  
  change(value: number, newValue: number) {
    console.log('---CHANGE---');
    if (this.remove(value)) {
      this.add(newValue);
      return true;
    }
    return false;
  }
  
  remove(value: number) {
    console.log('---REMOVE---');
    if (isNaN(value)) throw new Error("Number not found");
    // let stop = false;
    let nodeToRemove: INode | null = this.root;
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
  // Here you can search by DFS (Depth First Search) using functions (Recursion)
  DFSRecursion(branch: INode, valueToSearch: number) {
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
  }

  // Here you can search by DFS (Depth First Search) using a pile (it is by saving the branch in a array)
  searchByPila(branch: INode, valueToSearch: number) {
    let pila: INode[] = [];
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
      if (currentBranch.left) {
        pila.push(currentBranch.left);
      }
      if (currentBranch.right) {
        pila.push(currentBranch.right);
      }
    }
    console.log('NO LO HA ENCONTRADO');
  }
}
