    //LEFT VIEW---------------------------------------------------------------------------------------------
    this.max_level = 0;
    // Start of LeftView
    this.leftView = function(root,level){
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
        this.leftView(root.left, level+1);
        this.leftView(root.right, level+1);
        return false;
    };
