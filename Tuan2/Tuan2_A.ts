const task1 = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Hello Async"), 2000);
});

// 2.
function task2(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

// 3. 
function task3(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

// 4.
function task4(): void {
  const randomPromise = new Promise<number>((resolve, reject) => {
    const num = Math.random();
    if (num > 0.3) {
      resolve(num);
    } else {
      reject(new Error("Value too low"));
    }
  });

  randomPromise
    .then((result) => console.log("Task 4 Success:", result))
    .catch((err) => console.error("Task 4 Catch:", err.message));
}

// 5.
function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task done (${time}ms)`), time);
  });
}

// 6.
function task6(): Promise<void> {
  const p1 = simulateTask(1000);
  const p2 = simulateTask(1500);
  const p3 = simulateTask(500);

  return Promise.all([p1, p2, p3])
    .then((results) => console.log("Task 6 (Promise.all):", results))
    .catch((err) => console.error("Task 6 Error:", err));
}

// 7.
function task7(): Promise<void> {
  const pFast = simulateTask(300);
  const pMedium = simulateTask(800);
  const pSlow = simulateTask(1200);

  return Promise.race([pFast, pMedium, pSlow])
    .then((winner) => console.log("Task 7 (Promise.race winner):", winner))
    .catch((err) => console.error("Task 7 Error:", err));
}

// 8.
function task8(): Promise<void> {
  return Promise.resolve(2)
    .then((val) => val ** 2)
    .then((val) => val * 2)
    .then((val) => val + 5)
    .then((finalResult) => console.log("Task 8 (Promise chain):", finalResult));
}

// 9. Write a Promise that reads an array after 1 second and filters even numbers.
function task9(arr: number[]): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = arr.filter((x) => x % 2 === 0);
      resolve(evens);
    }, 1000);
  });
}

// 10.
function task10(): Promise<void> {
  const mightFail = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("OK") : reject(new Error("Failed"));
    }, 500);
  });

  return mightFail
    .then((res) => console.log("Task 10 Result:", res))
    .catch((err) => console.error("Task 10 Error:", err.message))
    .finally(() => console.log("Task 10: Done"));
}


async function runAll() {
  console.log("--- Bắt đầu chạy các bài tập ---");

  // Bài 1
  console.log("\n[Chạy bài 1] Đang chờ 2s...");
  const res1 = await task1;
  console.log("Task 1 Output:", res1);

  // Bài 2
  console.log("\n[Chạy bài 2] Đang chờ 1s...");
  const res2 = await task2();
  console.log("Task 2 Output:", res2);

  // Bài 3
  console.log("\n[Chạy bài 3] Chờ 1s và bắt reject...");
  try {
    await task3();
  } catch (err: any) {
    console.log("Task 3 Caught:", err.message);
  }

  // Bài 4
  console.log("\n[Chạy bài 4]");
  await task4();

  // Bài 5 & 6
  console.log("\n[Chạy bài 6 dùng simulateTask bài 5]");
  await task6();

  // Bài 7
  console.log("\n[Chạy bài 7]");
  await task7();

  // Bài 8
  console.log("\n[Chạy bài 8]");
  await task8();

  // Bài 9
  console.log("\n[Chạy bài 9] Đang lọc số chẵn sau 1s...");
  const evens = await task9([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log("Task 9 Evens:", evens);

  // Bài 10
  console.log("\n[Chạy bài 10]");
  await task10();

}

runAll();