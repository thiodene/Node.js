    //LEFT LEAFS SUM---------------------------------------------------------------------------------------------
    this.leftsum = 0;
    this.leftLeafSum = function(root) {

        if(root === null)
            return;

        // Add your code here

        if (root.left) {
            this.leftsum += root.left.data;
            this.leftLeafSum(root.left);
        }
        if (root.right) {
            this.leftLeafSum(root.right);
        }


        if (this.leftsum > 0)
            return this.leftsum;
        else
            return false;


    };
