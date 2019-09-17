'use strict';

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinaryTree() {
    this.root;
    //CONSTRUCT TREE FROM TRAVERSAL---------------------------------------------------------------------------------------------
    // Given inorder and preorder traversals construct tree
    this.preIndex = 0;
    this.buildTree = function(ino, pre, inStrt, inEnd) {

      if (inStrt > inEnd)
        return null;

      console.log(this.preIndex);
      let tNode = new Node(pre[this.preIndex++]);
      //let tNode;
      //if (this.preIndex < pre.length - 1)
        //tNode = new Node(pre[this.preIndex++]);
      //else
        //return tNode;

      if (inStrt == inEnd)
        return tNode;

      let inIndex = this.search(ino, inStrt, inEnd, tNode.data);

      tNode.left = this.buildTree(ino, pre, inStrt, inIndex - 1) ;
      tNode.right = this.buildTree(ino, pre, inIndex + 1, inEnd) ;

      return tNode;
    };

    this.search = function(arr,strt, end, value){
      let i;
      for (i=strt;i<=end;i++)
      {
        if (arr[i] == value)
          return i;
      }
      return i;

    }

}; // End of function BinarySearchTree



function main(){
    var tree = new BinaryTree();

    var ino = ["D","B","E","A","F","C"];
    var pre = ["A","B","D","E","C","F"];
    var len = ino.length;
    root = tree.buildTree(ino,pre,0,len - 1);

    console.log(root);

    //char in[] = new char[] { 'D', 'B', 'E', 'A', 'F', 'C' };
    //char pre[] = new char[] { 'A', 'B', 'D', 'E', 'C', 'F' };
    //int len = in.length;
    //Node root = tree.buildTree(in, pre, 0, len - 1);

    // building the tree by printing inorder traversal
    //System.out.println("Inorder traversal of constructed tree is : ");
    //tree.printInorder(root);

}

// MAIN-------------------------------------------------------------------------------------------------------------

main();
