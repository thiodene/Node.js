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
      //console.log(this.root);
      return this.root;
    }

    if (data == root.data)
    {
      for(let i=0;i<=children.length - 1;i++)
      {

        if (root.children[i]) {
          //console.log(root.children[i].data)
          this.insert(root.children[i],root.children[i],[]);
        } else {
          root.children[i] = new Node(children[i],[]);
        }

      }
    }
    else
    {
      //console.log("Not Root");
      //console.log(data);
      // Look for which Child has same data number
      root.children.forEach(function (element){
        //console.log(element);
        if (element.data == data)
        {
          //console.log(children.length);
          for(let j=0;j<=children.length - 1;j++)
          {
            //console.log(j);
            if (element.children[j]) {
              //console.log(element.children[j].data)
              this.insert(element.children[j],element.children[j],[]);
            } else {
              element.children[j] = new Node(children[j],[]);
            }

          }
        }
      });
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
  console.log(JSON.stringify(root));
  //root = tree.insert(root, 2, [25,17]);
  //console.log(root);
  //root = tree.insert(root, 40);
  //console.log(root);

  //console.log(tree.maxDepth(root));
}

// MAIN-------------------------------------------------------------------------------------------------------------

main();

