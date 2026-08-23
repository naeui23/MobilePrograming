// 11. Base class Animal, extended by Dog and Cat with bark() and meow()
console.log("== Câu 11 ==");
class Animal11 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class Dog11 extends Animal11 {
  bark(): void {
    console.log(`${this.name}: Woof! Woof!`);
  }
}
class Cat11 extends Animal11 {
  meow(): void {
    console.log(`${this.name}: Meow! Meow!`);
  }
}
//e.g:
const myDog = new Dog11("Buddy");
const myCat = new Cat11("Kitty");
myDog.bark();
myCat.meow();

// 12. Interfaces Flyable & Swimmable implemented in Bird and Fish
console.log("\n== Câu 12 ==");
interface Flyable {
  fly(): void;
}
interface Swimmable {
  swim(): void;
}
class Bird implements Flyable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fly(): void {
    console.log(`${this.name} is flying high.`);
  }
}

class Fish implements Swimmable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  swim(): void {
    console.log(`${this.name} is swimming in the water.`);
  }
}
//e.g:
const pelican = new Bird("Eagle");
const salmon = new Fish("Salmon");
pelican.fly();
salmon.swim();
// 13. Abstract class Shape with method area(), implemented by Square and Circle
console.log("\n== Câu 13 ==");
abstract class Shape13 {
  abstract area(): number;
}

class Square extends Shape13 {
  side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape13 {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
//e.g:
const square = new Square(5);
const circle = new Circle(12);
console.log(`Square Area (side=${square.side}): ${square.area()}`);
console.log(`Circle Area (radius=${circle.radius}): ${circle.area().toFixed(2)}`);

// 14. Base class Employee, extended by Manager and Developer
console.log("\n== Câu 14 ==");
class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`${this.name} is managing the project development team.`);
  }
}

class Developer extends Employee {
  writeCode(): void {
    console.log(`${this.name} is writing TypeScript code.`);
  }
}
//e.g:
const mgr = new Manager("Alice", 3000);
const dev = new Developer("Bob", 2000);
mgr.manageTeam();
dev.writeCode();

// 15. Library class storing Book and User objects, with addBook() method
console.log("\n== Câu 15 ==");
class Book15 {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

class User15 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Library {
  books: Book15[] = [];
  users: User15[] = [];

  addBook(book: Book15): void {
    this.books.push(book);
    console.log(`Added "${book.title}" by ${book.author} to library.`);
  }

  addUser(user: User15): void {
    this.users.push(user);
    console.log(`Registered user: ${user.name}`);
  }
}
//e.g:
const lib = new Library();
lib.addBook(new Book15("Design Patterns", "Gang of Four"));
lib.addUser(new User15("Charlie"));
