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
  constructor()
  {
    this.preList = [];
  }

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
  //this.preList = [];
  // PREORDER-----------------------------------------------------------------------
  preOrder(root)
  {
    if (root === null)
      return;

    //console.log(root.data);
    //this.preList.push(root.data);
    this.preList.push({"data":root.data,"parent":root.parent});

    // Recur from the left
    this.preOrder(root.left);
    // Recur from the right
    this.preOrder(root.right);

    return this.preList;

  }


  // CHECK PREORDER-----------------------------------------------------------------
  isPreOrder(order)
  {
    if (order === null)
      return ;

    let stack = [order[0].data];
    let i = 1;

    while (i < order.length)
    {
      if (stack == [])
        return false;

      if (stack[stack.length-1] == order[i].parent)
      {
        stack.push(order[i].data);
        i++;
        console.log(stack);
      }
      else
      {
        stack.pop();
        console.log(stack);
      }
    }
    return true;

  }
  // [ { data: 12, parent: null },
  //   { data: 10, parent: 12 },
  //   { data: 6, parent: 10 },
  //   { data: 11, parent: 10 },
  //   { data: 30, parent: 12 },
  //   { data: 25, parent: 30 },
  //   { data: 40, parent: 30 } ]

  //   [ 12, 10 ]
  //   [ 12, 10, 6 ]
  //   [ 12, 10 ]
  //   [ 12 ]
  //   []

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
  root = tree.insert(root, 6,10);
  console.log(root);
  root = tree.insert(root, 11,10);
  console.log(root);
  root = tree.insert(root, 30,12);
  console.log(root);
  root = tree.insert(root, 25,30);
  console.log(root);
  root = tree.insert(root, 40,30);
  console.log(root);

  //console.log(tree.preOrder(root));
  // Get the opreOrder in the form of array of objects [{data:12,parent:null}]
  var order = tree.preOrder(root);
  console.log(tree.isPreOrder(order));

  // Time complexity
  // For Stack Insertion/Deletion O(1)
  // Added to the while loop O(n) -> so globally O(n)

  // Space complexity
  // For Stack O(n)


}


// MAIN-----------------------------------------------------------------------

main();
