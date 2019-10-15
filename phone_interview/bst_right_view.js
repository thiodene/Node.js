  // RIGHT VIEW
  this.max_level = 0;
  this.view_list = [];
  this.right_view = function(root,level)
  {
    if (root === null )
      return;

    if (this.max_level < level)
    {
      //console.log(root.data);
      this.view_list.push(root.data);
      this.max_level = level;
    }

    this.right_view(root.right,level+1);
    this.right_view(root.left,level+1);
    //return false;
    return this.view_list;
  }
