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
