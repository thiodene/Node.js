    //POSTORDER TRAVERSAL---------------------------------------------------------------------------------------------
    // Given a binary tree, print its nodes according to the
    // "bottom-up" postorder traversal.
    this.printPostOrder = function(root) {

      if (root === null)
        return;

      // first recur on left subtree
      this.printPostOrder(root.left);

      // then recur on right subtree
      this.printPostOrder(root.right);

      // Now display the right data
      console.log(root.data);

    };
