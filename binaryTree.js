function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this.root = null;

    this.insert = function(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (current) {
                if (current.value > value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    this.inOrder = function(callback) {
        const traverse = function(node) {
            if (node !== null) {
                traverse(node.left);
                callback(node.value);
                traverse(node.right);
            }
        }
        traverse(this.root);
    }

    this.preOrder = function(callback) {
        const traverse = function(node) {
            if (node !== null) {
                callback(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        }
        traverse(this.root);
    }

    this.postOrder = function(callback) {
        const traverse = function(node) {
            if (node !== null) {
                traverse(node.left);
                traverse(node.right);
                callback(node.value);
            }
        }
        traverse(this.root);
    }

    // this.levelOrder = function(callback) {}

    this.search = function(value) {
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            } else if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    this.remove = function(value) {
        const removeNode = function(node, value) {
            if (node === null) {
                return null;
            }
            if (node.value === value) {
                node.value = null;
                if (node.left === null && node.right === null) {
                    // return null;
                    // return node;
                } else if (node.left === null) {
                    node.value = node.right.value;
                } else if (node.right === null) {
                    node.value = node.left.value;
                } else {
                    // const rightMin = findMin(node.right);
                    // node.value = rightMin.value;
                    // removeNode(node.right, rightMin.value);

                }
            } else if (node.value > value) {
                removeNode(node.left, value);
            } else {
                removeNode(node.right, value);
            }
        }

        const findMin = function(node) {
            if (node.left === null) {
                return node;
            } else {
                return findMin(node.left);
            }
        }

        removeNode(this.root, value);
    }

    this.size = function() {
        let size = 0;
        const traverse = function(node) {
            if (node !== null) {
                size++;
                traverse(node.left);
                traverse(node.right);
            }
        }
        traverse(this.root);
        return size;
    }

    this.isEmpty = function() {
        return this.root === null;
    }

    this.clear = function() {
        this.root = null;
    }

    this.min = function() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    this.max = function() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

    this.height = function() {
        const height = function(node) {
            if (node === null) {
                return -1;
            }
            let leftHeight = height(node.left);
            let rightHeight = height(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
        return height(this.root);
    }
}

(() => {
    const tree = new BinaryTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);
    tree.insert(13);
    tree.insert(17);
    tree.insert(1);
    tree.insert(6);
    tree.insert(8);
    tree.insert(11);
    tree.insert(14);
    tree.insert(16);
    tree.insert(19);
    tree.insert(12);
    tree.insert(4);
    tree.insert(2);
    tree.insert(9);

    tree.inOrder((val) => {console.log(val)});
})()

/*

1. In Order (Left, Root, Right)
2. Pre Order (Root, Left, Right)
3. Post Order (Left, Right, Root)
4. Level Order (Breadth First Search)

*/