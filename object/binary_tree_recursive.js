this.getHeight = function(root) {
    //node is null, no childen for parent
    if (root == undefined) {
        return -1;
    }
    // get the max of the between left and right
    var max = Math.max(this.getHeight(root.left), this.getHeight(root.right));

    return 1 + max;
}
