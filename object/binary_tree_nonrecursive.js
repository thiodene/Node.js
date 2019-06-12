this.getHeight = function (root) {
    let height = -1, nodeCount;
    const visiting = [root];

    while (nodeCount = visiting.length) {
        height++;
        while (nodeCount-- > 0) {
            const node = visiting.shift();
            if (node.left) visiting.push(node.left);
            if (node.right) visiting.push(node.right);
        }
    }

    return height;
};
