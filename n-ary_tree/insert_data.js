'use strict';

// Start of function Node
function Node(data,children) {
    this.data = data;
    this.children = children;
}; // End of function Node


// Start of function NarySearchTree
function NarySearchTree() {
    this.insert = function(root, data, children) {
        if (root === null) {
            this.root = new Node(data,children);

            return this.root;
        }

        for(let i=0;i<=children.length - 1;i++)
        {

            if (root.children[i]) {
                this.insert(children[i], children[i],[]);
            } else {
                root.children[i] = new Node(children[i],[]);
            }



        }

        return this.root;
    };


}; // End of function NarySearchTree


function main(){
    var tree = new NarySearchTree();
    var root = null;

    root = tree.insert(root, 12,[]);
    console.log(root);
    root = tree.insert(root,12,[2,3]);
    console.log(root);
    root = tree.insert(root,2, []);
    console.log(root);
    root = tree.insert(root, 2, [25,17]);
    console.log(root);
    //root = tree.insert(root, 40);
    //console.log(root);

    //console.log(tree.maxDepth(root));
}

// MAIN-------------------------------------------------------------------------------------------------------------

main();
