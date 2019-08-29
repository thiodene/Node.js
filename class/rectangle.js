'use strict';

class Rectangle
{
  constructor(width,length)
  {
    this.width = width;
    this.length = length;
  }

  Area()
  {

    this.area = this.width * this.length;

    return this.area;
  }

}


// Execute-----------------------------------

var myRectangle = new Rectangle(4,5);

console.log(myRectangle.Area());
