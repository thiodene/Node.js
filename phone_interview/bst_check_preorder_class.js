'use strict';

// Start of function Node
class Node
{
  constructor (data,parent)
  {
    this.data = data;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}; // End of function Node

// Start of function BinarySearchTree
class BinarySearchTree
{
  constructor() {}

  insert(root, data, parent)
  {
    if (root === null)
    {
      root = new Node(data,parent);
      return root;
    }

    if (data <= root.data)
    {
      if (root.left)
        this.insert(root.left, data, parent);
      else
        root.left = new Node(data,parent);
    }
    else
    {
      if (root.right)
        this.insert(root.right, data, parent);
      else
        root.right = new Node(data,parent);
    }

    return root;

  }

}; // End of function BinarySearchTree


// Function to build main
function main()
{
  var tree = new BinarySearchTree();
  var root = null;

  root = tree.insert(root, 12,null);
  console.log(root);
  root = tree.insert(root, 10,12);
  console.log(root);
  root = tree.insert(root, 30,12);
  console.log(root);
  root = tree.insert(root, 25,30);
  console.log(root);
  root = tree.insert(root, 40,30);

  console.log(root);

}


// MAIN-----------------------------------------------------------------------

main();
