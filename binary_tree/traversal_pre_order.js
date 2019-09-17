
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
