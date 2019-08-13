'use strict';

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
    //SUBTREE AVERAGE---------------------------------------------------------------------------------------------
    this.average = 0;
    this.node = null;
    // Start Node average calculation
    this.nodeAverage = function(root){
       let rootval = 0;
       let leftval = 0;
       let rightval = 0;
       let averageval = 0;
       if (root === null)
            return;

       rootval = root.data;
       //console.log(rootval);
       if (root.left)
           leftval = root.left.data;
       if (root.right)
           rightval = root.right.data;

       averageval = (rootval+leftval+rightval)/3;
       //console.log(averageval);

       if(this.average < averageval)
       {
           this.average = averageval;
           this.node = rootval;
           //console.log(this.node);
       }

      this.nodeAverage(root.left);
      this.nodeAverage(root.right);

      return this.node;
      //return this.average;
    }


}; // End of function BinarySearchTree


function main(){
    var tree = new BinarySearchTree();
    var root = null;

    root = tree.insert(root, 12);
    console.log(root);
    root = tree.insert(root, 10);
    console.log(root);
    root = tree.insert(root, 30);
    console.log(root);
    root = tree.insert(root, 25);
    console.log(root);
    root = tree.insert(root, 40);
    console.log(root);

    console.log(tree.nodeAverage(root));
}

// MAIN-------------------------------------------------------------------------------------------------------------

main();
