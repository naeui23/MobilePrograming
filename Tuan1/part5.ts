// 21. Generic Repository class with add(), getAll() methods[cite: 1]
console.log("=== Câu 21 ===");
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}
//e.g:
const userRepo = new Repository<string>();
userRepo.add("Alice");
userRepo.add("Bob");
console.log("Users in repo:", userRepo.getAll());

// 22. Class Stack with push, pop, peek, isEmpty methods[cite: 1]
console.log("\n=== Câu 22 ===");
class Stack<T> {
  private elements: T[] = [];

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}
//e.g:
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Peek top:", stack.peek());
console.log("Popped:", stack.pop());
console.log("Is empty:", stack.isEmpty());

// 23. Interface Payment implemented in CashPayment and CardPayment
console.log("\n=== Câu 23 ===");
interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid $${amount} in cash.`);
  }
}

class CardPayment implements Payment {
  private cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} with card ending in ${this.cardNumber.slice(-4)}.`);
  }
}
//e.g:
const cash: Payment = new CashPayment();
const card: Payment = new CardPayment("1234567890123456");
cash.pay(50);
card.pay(120);

// 24. Abstract class Appliance with turnOn(), implemented in Fan and AirConditioner
console.log("\n=== Câu 24 ===");
abstract class Appliance {
  abstract turnOn(): void;
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Fan is spinning.");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Air Conditioner is cooling at 24°C.");
  }
}
//e.g:
const fan = new Fan();
const ac = new AirConditioner();
fan.turnOn();
ac.turnOn();

// 25. Class Shape with a static method describe()
console.log("\n=== Câu 25 ===");
class Shape {
  static describe(): void {
    console.log("A shape is the form of an object or its external boundary.");
  }
}
//e.g:
Shape.describe();