export {};

// 26. Class Order with list of products and method to calculate total price
console.log("== Câu 26 ==");
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }
}
//e.g:
const order = new Order();
order.addProduct(new Product("RAM 16GB", 60));
order.addProduct(new Product("SSD 1TB", 90));
console.log(`Total order price: $${order.calculateTotal()}`);

// 27. Class Teacher extending Person with subject attribute and introduce method
console.log("\n=== Câu 27 ===");
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }

  introduce(): void {
    console.log(`Hello, I am ${this.name}, ${this.age} years old, teaching ${this.subject}.`);
  }
}
//e.g:
const teacher = new Teacher("Dr. Smith", 45, "Computer Architecture");
teacher.introduce();

// 28. Class Animal with protected method makeSound() overridden by Dog and Cat
console.log("\n=== Câu 28 ===");
class Animal {
  protected makeSound(): string {
    return "Generic animal sound";
  }

  public emitSound(): void {
    console.log(this.makeSound());
  }
}

class Dog extends Animal {
  protected override makeSound(): string {
    return "Dog: Woof woof!";
  }
}

class Cat extends Animal {
  protected override makeSound(): string {
    return "Cat: Meow meow!";
  }
}
//e.g:
const dog = new Dog();
const cat = new Cat();
dog.emitSound();
cat.emitSound();

// 29. Interface Movable with method move() implemented in Car and Robot
console.log("\n=== Câu 29 ===");
interface Movable {
  move(): void;
}

class Car implements Movable {
  move(): void {
    console.log("Car is driving on wheels.");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot is walking on mechanical legs.");
  }
}
//e.g:
const vehicles: Movable[] = [new Car(), new Robot()];
vehicles.forEach(v => v.move());

// 30. Class School with list of Students and Teachers and display method
console.log("\n=== Câu 30 ===");
class Student {
  name: string;
  grade: string;

  constructor(name: string, grade: string) {
    this.name = name;
    this.grade = grade;
  }
}

class School {
  name: string;
  students: Student[] = [];
  teachers: Teacher[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log(`=== School: ${this.name} ===`);
    console.log(`Teachers (${this.teachers.length}): ${this.teachers.map(t => t.name).join(", ")}`);
    console.log(`Students (${this.students.length}): ${this.students.map(s => s.name).join(", ")}`);
  }
}
//e.g:
const school = new School("Tech University");
school.addTeacher(teacher);
school.addStudent(new Student("David", "Junior"));
school.addStudent(new Student("Emma", "Senior"));
school.displayInfo();