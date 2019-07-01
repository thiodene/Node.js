    //PATH SUM---------------------------------------------------------------------------------------------
    this.pathSum = function(root,target)
    {
        let newtarget ;
        let nodeval = 0 ;
        if (root === null)
            return;

        nodeval = root.data;
        newtarget = target - nodeval;

        console.log(newtarget);

        if(newtarget == 0 && root.left === null && root.right === null)
            return true;

        if(root.left)
        {
            this.pathSum(root.left,newtarget);
        }

        if(root.right)
        {
            this.pathSum(root.right,newtarget);
        }

        return false;
        //return newtarget;
    }

