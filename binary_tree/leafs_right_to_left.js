    //LEAFS RIGHT TO LEFT---------------------------------------------------------------------------------------------
    this.leafListRToL = function(root) {

        if(root === null)
            return;

        // Add your code here
        if (root.left === null && root.right === null)
            console.log(root.data);

        if (root.left) {
            this.leafListRToL(root.right);
        }
        if (root.right) {
            this.leafListRToL(root.left);
        }


        return false;


    };
