    //TARGET VALUE---------------------------------------------------------------------------------------------
    this.nodesum = [] ;
    this.nodeSummation = function(root,target)
    {
        let rootval ;
        if (root === null)
            return;

        rootval = root.data;

        this.nodeSummation(root.left,target);
        this.nodeSummation(root.right,target);

        if(this.nodesum.indexOf(target))
            return true;
        else
            return false;

    }
