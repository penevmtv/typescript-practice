class MathUtils {
  static readonly PI = 3.14159;
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }
  static divide(a: number, b: number): number {
    if (b === 0) {
      console.warn('Divide by zero is not allowed!');
      return NaN;
    }
    return a / b;
  }
  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

const addResult = MathUtils.add(2, 3);
console.log('Add:' + addResult);

const subResult = MathUtils.subtract(5, 2);
console.log('Subtract:' + subResult);

const multiResult = MathUtils.multiply(3, 2);
console.log('Multiply:' + multiResult);

const divResult = MathUtils.divide(6, 3);
console.log('Divide:' + divResult);

const circleAreaValue = MathUtils.circleArea(5);
console.log('Circle Area:' + circleAreaValue);

class Circle {
  constructor(public radius: number) {}
  getArea(): number {
    return MathUtils.circleArea(this.radius);
  }
  getCircumference(): number {
    return 2 * MathUtils.PI * this.radius;
  }
  describe(): string {
    const radius = this.radius;
    const area = this.getArea();
    const circumference = this.getCircumference();
    return `Circle with radius ${radius} has area ${area.toFixed(2)} and circumference ${circumference.toFixed(2)}`;
  }
}
const someCircle = new Circle(5);

console.log(someCircle.describe());
