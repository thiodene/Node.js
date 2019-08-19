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
        root.children[i] = new Node(children[i],[]);
      }
      return this.root;
    }
    else
    {

      // Look for which Child has same data number
      for (let m=0;m<=root.children.length - 1;m++)
      {
        console.log(root.children.length);
        if (root.children[m].data == data)
        {
          console.log(root.children[m].children.length);
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


}; // End of function NarySearchTree


function main(){
  var tree = new NarySearchTree();
  var root = null;

  root = tree.insert(root, 12,[]);
  console.log(root);
  root = tree.insert(root,12,[2,7,4]);
  console.log(root);
  root = tree.insert(root, 2, [5,6,7,8]);
  console.log(root);
  root = tree.insert(root, 7, [25,17]);
  console.log(root);
  root = tree.insert(root,4, [9,10,12,15]);
  console.log(JSON.stringify(root));

  //console.log(tree.maxDepth(root));
}

// MAIN-------------------------------------------------------------------------------------------------------------

main();


