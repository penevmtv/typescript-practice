class Person {
  name: string;
  age: number;
  
  constructor (someName: string, someAge: number) {
    this.name = someName;
    this.age = someAge;
  }
  introduce(): string {
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  }
}
const somePerson = new Person(Maria, 35);
console.log(somePerson.introduce());

//Using a shorthand constructor:
class Person {
  constructor(public name: string, public age: number) {};
  introduce(): string {
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  }
}
const somePerson = new Person(Maria, 35);
console.log(somePerson.introduce());
