    //SUBTREE AVERAGE---------------------------------------------------------------------------------------------
    this.average = 0;
    this.node = null;
    // Start Node average calculation
    this.nodeAverage = function(root){
       let rootval = 0;
       let leftval = 0;
       let rightval = 0;
       let averageval = 0;
       if (root === null)
            return;

       rootval = root.data;
       //console.log(rootval);
       if (root.left)
           leftval = root.left.data;
       if (root.right)
           rightval = root.right.data;

       averageval = (rootval+leftval+rightval)/3;
       //console.log(averageval);

       if(this.average < averageval)
       {
           this.average = averageval;
           this.node = rootval;
           //console.log(this.node);
       }

      this.nodeAverage(root.left);
      this.nodeAverage(root.right);

      return this.node;
      //return this.average;
    }
