// 16. Generic class Box storing any type of value
console.log("\n== Câu 16 ==");
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }

  setContent(value: T): void {
    this.content = value;
  }
}
//e.g:
const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello TypeScript");
console.log(`numberBox value: ${numberBox.getContent()}`);
console.log(`stringBox value: ${stringBox.getContent()}`);


// 17. Singleton Logger class that logs messages to console
console.log("\n== Câu 17 ==");
class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`[LOG - ${new Date().toLocaleTimeString()}]: ${message}`);
  }
}
//e.g:
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("System initialized.");
console.log(`Is Singleton identical: ${logger1 === logger2}`);


// 18. Static class MathUtil with add, subtract, multiply, divide
console.log("\n== Câu 18 ==");
class MathUtil {
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
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }
}
//e.g:
console.log(`MathUtil.add(10, 5) = ${MathUtil.add(10, 5)}`);
console.log(`MathUtil.subtract(10, 5) = ${MathUtil.subtract(10, 5)}`);
console.log(`MathUtil.multiply(10, 5) = ${MathUtil.multiply(10, 5)}`);
console.log(`MathUtil.divide(10, 5) = ${MathUtil.divide(10, 5)}`);


// 19. Method overriding using polymorphism with Animal and subclasses
console.log("\n== Câu 19 ==");
class Animal19 {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog19 extends Animal19 {
  override makeSound(): void {
    console.log("Dog: Gâu gâu!");
  }
}

class Cat19 extends Animal19 {
  override makeSound(): void {
    console.log("Cat: Meo meo!");
  }
}
//e.g:
const animals: Animal19[] = [new Animal19(), new Dog19(), new Cat19()];
animals.forEach(animal => animal.makeSound());

// 20. Vehicle interface implemented in Car and Bike classes
console.log("\n== Câu 20 ==");
interface Vehicle {
  brand: string;
  speed: number;
  drive(): void;
}

class Car20 implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`Car (${this.brand}) is driving at ${this.speed} km/h.`);
  }
}

class Bike20 implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(`Bike (${this.brand}) is pedaling at ${this.speed} km/h.`);
  }
}
//e.g:
const myCar = new Car20("Honda", 80);
const myBike = new Bike20("Giant", 25);
myCar.drive();
myBike.drive();