// 6. Class Book with title, author, year[cite: 1]
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
//e.g:
console.log("\n==Câu 6==");
  const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
  const book2 = new Book("The Richest Man in Babylon", "George S.Clason", 1926);
  console.log(`Sach: "${book1.title}" - Tac gia: ${book1.author} (${book1.year})`);
  console.log(`Sach: "${book2.title}" - Tac gia: ${book2.author} (${book2.year})`);
// 7. Class User with private name and getter/setter
class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim().length > 0) {
      this._name = value;
    }
  }
}
//e.g:
console.log("\n==Câu 7==");
  const user1 = new User("John");
  console.log(`Ten ban dau: ${user1.name}`);
  user1.name = "John Doe";
  console.log(`Ten sau khi cap nhat: ${user1.name}`);
// 8. Class Product and filtering price > 100
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
//e.g:
console.log("\n==Câu 8==");
const products: Product[] = [
  new Product("Keyboard", 80),
  new Product("Monitor", 250),
  new Product("Mouse", 45),
  new Product("Headphones", 150),
  new Product("Microphone", 135)
];
const expensiveProducts = products.filter(p => p.price > 100);
console.log("Cac san pham co gia > 100:", expensiveProducts);
// 9. Interface Animal with sound() method[cite: 1]
interface Animal {
  name: string;
  sound(): void;
}
//e.g:
console.log("\n==Câu 9==");
const dog: Animal = {
  name: "Corgi",
  sound() {
    console.log(`${this.name} keu: Woof woof!`);
  }
};
const cat: Animal = {
  name: "Christian",
  sound() {    
    console.log(`${this.name} keu: Meow meow`);
  }
}
dog.sound();
cat.sound();


// 10. Class Account with public, private, and readonly fields[cite: 1]
class Account {
  public accountNumber: string;
  private balance: number;
  readonly createdAt: Date;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.createdAt = new Date();
  }

  getBalance(): number {
    return this.balance;
  }
}
//e.g:
console.log("\n==Câu 10==");
const acc = new Account("1023651313", 1500);
console.log(`STK: ${acc.accountNumber}`);
console.log(`So du (qua getter): ${acc.getBalance()}`);
console.log(`Ngay tao: ${acc.createdAt.toISOString()}`);
