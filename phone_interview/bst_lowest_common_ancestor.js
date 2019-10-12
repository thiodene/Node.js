  // Least Common Ancestor for the current BST
  this.lowestCommonAncestor = function(root,p,q)
  {
    if (root === null)
      return;

    let parentVal = root.data;
    let pVal = p;
    let qVal = q;

    if (pVal > parentVal && qVal > parentVal)
    {
      // If both p and q are greater than parent
      return this.lowestCommonAncestor(root.right, p, q);
    }
    else if (pVal < parentVal && qVal < parentVal)
    {
      // If both p and q are lesser than parent
      return this.lowestCommonAncestor(root.left, p, q);
    }
    else
    {
      // We have found the split point, i.e. the LCA node.
      return root.data;
    }


  };
