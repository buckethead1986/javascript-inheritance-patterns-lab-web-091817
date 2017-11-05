function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
};

function Shape() {}

function Side(length) {
  this.length = length;
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
};

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
};

function Circle(radius) {
  Shape.call(this); //inherits from Shape
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return Math.PI * this.radius ** 2;
};

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
};

Circle.prototype.diameter = function() {
  return this.radius * 2;
};

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  let perimeter = 0;
  for (const side of this.sides) {
    perimeter += side.length;
  }
  return perimeter;
};

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
};

function Quadrilateral(sideA, sideB, sideC, sideD) {
  Polygon.call(this, [
    new Side(sideA),
    new Side(sideB),
    new Side(sideC),
    new Side(sideD)
  ]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength);
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for (const prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(prop + " " + this[prop]);
    }
  }
};

function Triangle(sideA, sideB, sideC) {
  Polygon.call(this, [new Side(sideA), new Side(sideB), new Side(sideC)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
