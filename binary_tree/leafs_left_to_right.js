    //LEAFS LEFT TO RIGHT---------------------------------------------------------------------------------------------
    this.leafListLToR = function(root) {

        if(root === null)
            return;

        // Add your code here
        if (root.left === null && root.right === null)
            console.log(root.data);

        if (root.left) {
            this.leafListLToR(root.left);
        }
        if (root.right) {
            this.leafListLToR(root.right);
        }


        return false;


    };
