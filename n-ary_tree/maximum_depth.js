/**
 * // Definition for a Node for N-ary Tree.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
 
  var maxDepth = function(root) {
    if(!root) return 0;
    let max = 0;

    root.children.forEach((child) => {
      max = Math.max(max, maxDepth(child));
    });

    return max + 1;
  };
