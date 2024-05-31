class Shape {
  constructor() {
    if (new.target === Shape)
    throw new Error("Shape is an abstract class. Object cannot be created.")
  }

  area() {
    throw new Error("Shape is an abstract class. Object cannot be created.")
  }

  perimeter () {
    throw new Error("Shape is an abstract class. Object cannot be created.")
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter () {
    return this.side * 4;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius;
  }

  area () {
    return Math.PI*Math.pow(this.radius, 2);
  }

  perimeter () {
    return Math.PI*2*this.radius;
  }
}

try {
  const shape = new Shape();
} catch (e) {
  console.log(e);
}

const square = new Square(3);
console.log (square.area());
console.log(square.perimeter());

const circle = new Circle(3);
console.log(circle.area());
console.log(circle.perimeter());