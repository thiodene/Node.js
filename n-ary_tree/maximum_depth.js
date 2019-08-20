/**
 * // Definition for a Node for N-ary Tree.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
 
'use strict';

// Start of function Node
function Node(data,children) {
  this.data = data;
  this.children = children;
}; // End of function Node


// Start of function NarySearchTree
function NarySearchTree() {
  this.insert = function(root, data, children) {
    if (root === null) {
      this.root = new Node(data,children);
      return this.root;
    }

    if (data == root.data)
    {
      for(let i=0;i<=children.length - 1;i++)
      {
        // Create a new child Node for Root
        //console.log("OK Data");
        root.children[i] = new Node(children[i],[]);
      }
      return this.root;
    }
    else
    {

      // Look for which Child has same data number
      for (let m=0;m<=root.children.length - 1;m++)
      {
        //console.log(root.children.length);
        if (root.children[m].data == data)
        {
          //console.log(root.children[m].children.length);
          for(let n=0;n<= children.length - 1;n++)
          {
            // Create a child node for this data
            root.children[m].children[n] = new Node(children[n],[]);
          }
           //If the element to alter has been found return the new root
          return this.root;
        }


      }
    }

      return this.root;
  };

   // Calculate the Max depth of that N-ary tree
  this.maxDepth = function(root)
  {
    if(!root) return 0;
    let max = 0;

    root.children.forEach((child) => {
      max = Math.max(max, this.maxDepth(child));
    });

    return max + 1;
  };



}; // End of function NarySearchTree


function main(){
  var tree = new NarySearchTree();
  var root = null;

  //// N-ary tree 1
  //root = tree.insert(root, 12,[]);
  //root = tree.insert(root,12,[2,7,4]);
  //root = tree.insert(root, 2, [5,6,7,8]);
  //root = tree.insert(root, 7, [25,17]);
  //root = tree.insert(root,4, [9,10,12,15]);
  //console.log(JSON.stringify(root));

  //// N-ary tree 2
  //root = tree.insert(root, 1,[]);
  //root = tree.insert(root,1,[-5,13,4]);
  //root = tree.insert(root, -5, [1,2]);
  //root = tree.insert(root, 13, [4,-2]);
  //console.log(JSON.stringify(root));

  // N-ary tree 3
  root = tree.insert(root, 1,[]);
  root = tree.insert(root,1,[-5,21,5,-1]);
  console.log(JSON.stringify(root));

  console.log(tree.maxDepth(root));
}

// MAIN-------------------------------------------------------------------------------------------------------------

main();

