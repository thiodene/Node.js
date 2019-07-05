    //RIGHT LEAFS SUM---------------------------------------------------------------------------------------------
    this.rightsum = 0;
    this.rightLeafSum = function(root) {

        if(root === null)
            return;

        // Add your code here

        if (root.left) {
            this.rightLeafSum(root.left);
        }
        if (root.right) {
            this.rightsum += root.right.data;
            this.rightLeafSum(root.right);
        }


        if (this.rightsum > 0)
            return this.rightsum;
        else
            return false;


    };
