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


    //POSTORDER TRAVERSAL---------------------------------------------------------------------------------------------
    // Given a binary tree, print its nodes according to the
    // "bottom-up" postorder traversal.
    this.printPostOrder = function(root) {

      if (root === null)
        return;

      // first recur on left subtree
      this.printPostOrder(root.left);

      // then recur on right subtree
      this.printPostOrder(root.right);

      // Now display the right data
      console.log(root.data);

    };


    //INORDER TRAVERSAL---------------------------------------------------------------------------------------------
    // Given a binary tree, print its nodes in inorder
    this.printInOrder = function(root) {

      if (root === null)
        return;

      // first recur on left subtree
      this.printInOrder(root.left);

      // Now display the right data
      console.log(root.data);

      // then recur on right subtree
      this.printInOrder(root.right);

    };


    //PREORDER TRAVERSAL---------------------------------------------------------------------------------------------
    // Given a binary tree, print its nodes in preorder
    this.printPreOrder = function(root) {

      if (root === null)
        return;

      // Now display the right data
      console.log(root.data);

      // first recur on left subtree
      this.printPreOrder(root.left);

      // then recur on right subtree
      this.printPreOrder(root.right);

    };


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

    //console.log(tree.getHeight(root));
    //console.log(tree.leftView(root,1));
    //tree.leftView(root,1);
    tree.printPostOrder(root);
    tree.printInOrder(root);
    tree.printPreOrder(root);
}

// MAIN-------------------------------------------------------------------------------------------------------------

main();
