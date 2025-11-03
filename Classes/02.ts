//Class inheritance:
class Person {
  constructor(protected name: string, protected age: number) {};
  introduce(): string {
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  }
}

class Student extends Person {
  readonly major: string;
  constructor(name: string, age: number, major: string) {
    super(name,age);
    this.major = major;
  }
  study(): string {
    return `I'm studying ${this.major}.`;
  }
}
const someStudent = new Student('Ivana', 44, 'Computer Science');
console.log(someStudent.introduce());
console.log(someStudent.study());
