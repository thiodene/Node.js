/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(sides_array) {
        //this.sides = sides_array.length;
        this.perimeter = function () {
            let perim = 0;
            let sides = sides_array.length;
            for (let i = 0; i <= sides - 1; i++)
                perim += sides_array[i];
            return perim;
        }
    }
}

//----------------------------------------------------------------------------------------------

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
