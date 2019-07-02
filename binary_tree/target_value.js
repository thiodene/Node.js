    //PATH SUM---------------------------------------------------------------------------------------------
    this.pathSum = function(root,target)
    {
        let newtarget ;
        let nodeval = 0 ;
        let ans = false ;
        if (root === null)
            return;

        nodeval = root.data;
        newtarget = target - nodeval;

        console.log(newtarget);

        //if(newtarget == 0 && root.left === null && root.right === null)
        if(newtarget == 0 && !root.left && !root.right)
            return true;

        if(root.left)
        {
            ans = ans || this.pathSum(root.left,newtarget);
        }

        if(root.right)
        {
            ans = ans || this.pathSum(root.right,newtarget);
        }

        console.log(newtarget);
        return ans;
        //return false;
        //return newtarget;
    }


