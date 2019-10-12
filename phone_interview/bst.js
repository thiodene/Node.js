'use strict';

// Start of function Node
function Node(data)
{
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree()
{
  this.insert = function(root, data)
  {
    if (root === null)
    {
      this.root = new Node(data);
      return this.root;
    }

    if (data <= root.data)
    {
      if (root.left)
        this.insert(root.left, data);
      else
        root.left = new Node(data);
    }
    else
    {
      if (root.right)
        this.insert(root.right, data);
      else
        root.right = new Node(data);
    }

    return this.root;
  };

}; // End of function BinarySearchTree


// Function to build main
function main()
{
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

}


// MAIN-----------------------------------------------------------------------

main();

