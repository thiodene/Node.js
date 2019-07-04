    //RIGHT HIGHEST---------------------------------------------------------------------------------------------
    this.rightnum = 0;
    this.rightHighest = function(root) {

        if(root === null)
            return;

        // Add your code here
        if (root.left) {
            this.rightHighest(root.left);
        }
        if (root.right) {
            if (root.right.data > this.rightnum)
                this.rightnum = root.right.data;
            this.rightHighest(root.right);
        }


        if (this.rightnum > 0)
            return this.rightnum;
        else
            return false;


    };
