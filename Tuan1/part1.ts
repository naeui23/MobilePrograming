// 1. Class Person with attributes name and age[cite: 1]
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
//e.g: Print person's information
console.log("==Câu 1==");
  const person1 = new Person("Ha Thi C",19);
  const person2 = new Person("Ly Thanh H", 20);
  const person3 = new Person("Cao Ba T",21);
  const person4 = new Person("Tong Ngoc A", 22);

  person1.display();
  person2.display();
  person3.display()

// 2. Class Student extending Person with attribute grade
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAll(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}
//e.g: Print student's information
console.log("\n==Câu 2==");
  const student1 = new Student("Nguyen Hoai A", 21, "B");
  const student2 = new Student("Huynh Huu D",20, "B+");

  student1.displayAll();
  student2.displayAll();



// 3. Class Car with brand, model, year[cite: 1]
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): void {
    console.log(`Car: ${this.year} ${this.brand} ${this.model}`);
  }
}
//e.g: Show car's information
console.log("\n==Câu 3==");
const car1 = new Car("Toyota", "Camry", 2023);
const car2 = new Car("Vinfast", "VF", 2021);
const car3= new Car("Honda", "City", 2020 );

car1.showInfo();
car2.showInfo();
car3.showInfo();

// 4. Class Rectangle with area and perimeter methods[cite: 1]
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
//e.g:
console.log("\n==Câu 4==");
const rect = new Rectangle(10, 5);
console.log(`Dien tich: ${rect.calculateArea()}`);
console.log(`Chu vi: ${rect.calculatePerimeter()}`);

// 5. Class BankAccount with deposit and withdraw[cite: 1]
class BankAccount {
  balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Nap: +${amount} | So du: ${this.balance}`);
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Rut: -${amount} | So du: ${this.balance}`);
    } else {
      console.log(`Rut ${amount} that bai! So du khong du.`);
    }
  }
}
//e.g:
console.log("\n==Câu 5==");
  const myAccount = new BankAccount(500);
  myAccount.deposit(100);
  myAccount.withdraw(150);
  myAccount.withdraw(600);