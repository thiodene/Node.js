// Initializing a class
class rec {
    Rectangle(length, height) {
        this.length = length;
        this.height = height;
    }

    // Adding a method to the constructor
    area() {
        return this.height * this.length ;
    }
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

// Creating a new class from the parent
class sqr extends rec {
    Square(length) {
        // Chain constructor with super
        //super(length);
        this.length = length;

    }

    area() {
        return this.length * this.length;
    }
}
