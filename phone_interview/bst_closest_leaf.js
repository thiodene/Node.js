  // CLOSEST LEAF---------------------------------------------------------
  // Source: https://www.geeksforgeeks.org/find-closest-leaf-binary-tree/
  this.findClosestLeaf = function (root,k)
  {

    // Make a list of Ancestors
    let ancestors = [];

    // Use the findClosestUtil
    return this.findClosestUtil(root,k, ancestors,0);
  } 

  // Returns distance to the closest leaf of a given k
  this.findClosestUtil = function(root, k, ancestors, index)
  {

    if (root === null)
      return;

    //console.log(ancestors);
    // Search for the node of k value first before looking for its closest leaf
    if (root.data == k)
    {
      // Find the closest leaf under the subtree
      let res = this.closestDown(root);

      // Traverse the ancestors and seed if any give a shorter distance to leaf
      for (let i = index - 1; i >= 0; i--)
      {
        res = this.getMin(res, index - i + this.closestDown(ancestors[i]));
      }
      return res;
    }

    ancestors[index] = root;
    return this.getMin(this.findClosestUtil(root.left, k, ancestors, index + 1), this.findClosestUtil(root.right,k,ancestors, index + 1));

  }

  // This function finds distance of the closest leaf of the tree under given root
  this.closestDown = function(root)
  {
    if (root === null)
      return ;

    if (root.left == null && root.right == null)
      return 0;

    // Return minimum of left and right + 1
    return 1 + this.getMin(this.closestDown(root.left), this.closestDown(root.right));

  }

  // Utility function to ifind the minimum between x and y
  this.getMin = function (x,y)
  {
    return (x < y) ? x : y;

  }
