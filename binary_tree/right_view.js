    //RIGHT VIEW---------------------------------------------------------------------------------------------
    this.max_level = 0;
    // Start of LeftView
    this.rightView = function(root,level){
        //let max_level = 0;
        if(root === null){
            //console.log("End");
            return;
        }

        if (this.max_level < level)
        {
            console.log(root.data);
            this.max_level = level;
            //console.log("After");
        }
        this.rightView(root.right, level+1);
        this.rightView(root.left, level+1);
        return false;
    };
