    //LEFT HIGHEST---------------------------------------------------------------------------------------------
    this.leftnum = 0;
    this.leftHighest = function(root) {

        if(root === null)
            return;

        // Add your code here
        if (root.left) {
            if (root.left.data > this.leftnum)
                this.leftnum = root.left.data;
            this.leftHighest(root.left);
        }
        if (root.right) {
            this.leftHighest(root.right);
        }


        if (this.leftnum > 0)
            return this.leftnum;
        else
            return false;


    };
