function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "Hello World";

  print() {
    console.log("Hola Mundo");
  }
}

console.log("SuperClass :", SuperClass);

const myClass = new SuperClass();
console.log("myClass :", myClass);
