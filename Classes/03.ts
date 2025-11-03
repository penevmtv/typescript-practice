//Abstract class:
abstract class Shape {
  abstract getArea(): number;
  describe(): string {
    return 'This is a shape.';
  }
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
const someCircle = new Circle(5);
console.log(someCircle.describe());
console.log('Area:', someCircle.getArea());