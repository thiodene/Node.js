  // LEFT VIEW
  this.max_level = 0;
  this.view_list = [];
  this.left_view = function(root,level)
  {
    if (root === null )
      return;

    if (this.max_level < level)
    {
      //console.log(root.data);
      this.view_list.push(root.data);
      this.max_level = level;
    }

    this.left_view(root.left,level+1);
    this.left_view(root.right,level+1);
    //return false;
    return this.view_list;
  }

