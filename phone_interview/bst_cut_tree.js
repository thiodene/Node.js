  // CUT BST----------------------------------------------------
  this.cut_tree = function (root,index)
  {
    if (root === null)
      return [null, null];

    if (root.data > index)
    {
      let l = this.cut_tree(root.left, index);
      root.left = l[1];
      return [l[0], root];
    }
    else
    {
      let r = this.cut_tree(root.right, index);
      root.right = r[0];
      return [root,r[1]];
    }

  }
