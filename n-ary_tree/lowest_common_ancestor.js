
  // LEAST/LOWEST COMMON ANCESTOR-------------------------------------------------------------------------------------------------
  this.lowestCommonAncestor = function(root, p, q) {

    // Value of current node or parent node.
    let rootval = root.data;

    // Check if rootval equals p or q
    if (rootval == p || rootval == q)
      return rootval;

    let temp = null;
    let count = 0;
    let res;

    for (let i = 0;i<=root.children.length - 1;i++)
    {
      res = this.lowestCommonAncestor(root.children[i],p,q);
      if (res !== null)
      {
        temp = res;
        count++;
      }
    }

    if (count == 2)
      return rootval;

    return temp;

  };
