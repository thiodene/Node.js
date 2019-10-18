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

  // PREORDER TRAVERSAL-------------------------------------------------------------------------
  // Given a binary tree, print its nodes in preorder
  this.preList = [];
  this.preOrder = function(root)
  {
    if (root === null)
      return ;

    // Put the preOrder in an array
    this.preList.push(root.data);

    // first recur of the left subtree
    this.preOrder(root.left);

    // And then recur on the right subtree
    this.preOrder(root.right);

    // Return result
    return this.preList;

  }


  // INORDER TRAVERSAL---------------------------------------------------------------------------
  // Given a binary tree, print its nodes in inorder
  this.inList = [];
  this.inOrder = function(root)
  {
    if (root === null)
      return;

    // first recur of the left subtree
    this.inOrder(root.left);

    // Put the preOrder in an array
    this.inList.push(root.data);

    // And then recur on the right subtree
    this.inOrder(root.right);

    // Return result
    return this.inList;
  }


  // POSTORDER TRAVERSAL------------------------------------------------------------------------
  // Given a binary tree, print its nodes according to the
  // "bottom-up" postorder traversal.
  this.postList = [];
  this.postOrder = function(root)
  {
    if (root === null)
      return;

    // first recur of the left subtree
    this.postOrder(root.left);

    // And then recur on the right subtree
    this.postOrder(root.right);

    // Put the preOrder in an array
    this.postList.push(root.data);

    // Return result
    return this.postList;
  }

  // LEVELORDER TRAVERSAL----------------------------------------------------------------------
  this.levelList = [];
  this.levelOrder = function(root)
  {
    let h = this.height(root);
    let i;
    for (i = 1;i<=h;i++)
    {
      this.levelOrderPrint(root,i);
    }

    return this.levelList;
  }

  this.levelOrderPrint = function(root,level)
  {
    if (root === null )
      return;

    if (level == 1)
    {
      //console.log(root.data);
      this.levelList.push(root.data);
    }
    else
    {
      this.levelOrderPrint(root.left, level - 1)
      this.levelOrderPrint(root.right, level - 1)
    }

  }

  this.height = function (root)
  {
    if (root === null)
      return 0;

    let lheight = this.height(root.left);
    let rheight = this.height(root.right);

    return (lheight > rheight) ? lheight + 1 : rheight + 1;

  }

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
  root = tree.insert(root, 6);
  console.log(root);
  root = tree.insert(root, 11);
  console.log(root);
  root = tree.insert(root, 30);
  console.log(root);
  root = tree.insert(root, 25);
  console.log(root);
  root = tree.insert(root, 40);
  console.log(root);

  // PreOrder
  console.log("PreOrder");
  console.log(tree.preOrder(root));
  // InOrder
  console.log("InOrder");
  console.log(tree.inOrder(root));
  // PostOrder
  console.log("PostOrder");
  console.log(tree.postOrder(root));
  // Time complexity of 3 main traversals
  // Source: https://stackoverflow.com/questions/4547012/complexities-of-binary-tree-traversals/28498337
  // on Simplifying (1) you can prove that the traversal(either inorder or preorder or post order) is of order O(n).
  //Travesal is O(n) for any order - because you are hitting each node once.


  // LevelOrder
  console.log("LevelOrder");
  console.log(tree.levelOrder(root));
  // Time Complexity of level order Traversal
  // Source: https://www.geeksforgeeks.org/level-order-tree-traversal/
  // O(n^2) in worst case. For a skewed tree, printGivenLevel() takes O(n) time where n is the number of nodes in the skewed tree.
  // So time complexity of printLevelOrder() is O(n) + O(n-1) + O(n-2) + .. + O(1) which is O(n^2).
}


// MAIN-----------------------------------------------------------------------

main();

