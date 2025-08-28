
export class Person {
  public name: string;
  private age: number;
  private address?: string;

  constructor(name: string, age: number, address: string = "No address") {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

//export class Hero extends Person {
//
//    public alterEgo: string;
//
//        constructor(name: string, age: number, alterEgo: string, address?: string) {
//            super(name, age, address);
//            this.alterEgo = alterEgo;
//        }
//}

export class Hero {
  public person: Person;
  public alterEgo: string;

  constructor(alterEgo: string, person: Person) {
    this.person = person;
    this.alterEgo = alterEgo;
  }
}

const tony = new Person("Tony", 45, "New York");

const ironman = new Hero("Ironman", tony);
console.log(ironman);
