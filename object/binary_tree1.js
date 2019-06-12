// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    //BEGIN CODE----------------------------------------------------------------------------
    
    // Start of function getHeight
    this.getHeight = function(root) {
        let height_left = 0;
        let height_right = 0;
        // Add your code here
        if (root.left) {
            //height++;
            height_left = 1 + this.getHeight(root.left);
        }
        if (root.right) {
            //height++;
            height_right = 1 + this.getHeight(root.right);
        }
        //else {
            //return +1;
        //}


        if (height_left > height_right)
            return height_left;
        else
            return height_right;

    }; // End of function getHeight
    //END CODE----------------------------------------------------------------------------
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    console.log(tree.getHeight(root));
});
