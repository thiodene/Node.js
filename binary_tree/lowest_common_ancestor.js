    // LEAST/LOWEST COMMON ANCESTOR
    this.lowestCommonAncestor = function(root, p, q) {

      // Value of current node or parent node.
      let parentVal = root.data;

      // Value of p
      let pVal = p;

      // Value of q;
      let qVal = q;

      if (pVal > parentVal && qVal > parentVal) {
        // If both p and q are greater than parent
        return this.lowestCommonAncestor(root.right, p, q);
      } else if (pVal < parentVal && qVal < parentVal) {
        // If both p and q are lesser than parent
        return this.lowestCommonAncestor(root.left, p, q);
      } else {
        // We have found the split point, i.e. the LCA node.
        return root.data;
      }

    };
