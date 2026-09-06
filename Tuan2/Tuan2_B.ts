// Delay Timing Function
function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task done (${time}ms)`), time);
  });
}

// 11.
async function task11(): Promise<string> {
  const delay = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
  return await delay;
}

// 12.
async function task12(): Promise<void> {
  const result = await simulateTask(2000);
  console.log("Task 12 Result:", result);
}

// 13.
async function task13(): Promise<void> {
  const failingTask = new Promise<string>((_, reject) => {
    setTimeout(() => reject(new Error("Lỗi hệ thống!")), 1000);
  });

  try {
    await failingTask;
  } catch (error: any) {
    console.log("Task 13 Caught Error:", error.message);
  }
}

// 14.
async function task14(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

// 15.
async function task15(): Promise<void> {
  const res1 = await simulateTask(1000);
  console.log("Task 15 (Sequential 1):", res1);
  const res2 = await simulateTask(2000);
  console.log("Task 15 (Sequential 2):", res2);
}

// 16.
async function task16(): Promise<void> {
  const results = await Promise.all([simulateTask(1000), simulateTask(2000)]);
  console.log("Task 16 (Parallel):", results);
}

// 17.
async function task17(): Promise<void> {
  const promises = [simulateTask(1000), simulateTask(500), simulateTask(800)];
  for await (const result of promises) {
    console.log("Task 17 Loop item:", result);
  }
}

// 18.
interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: `User_${id}` };
}

// 19.
async function fetchUsers(ids: number[]): Promise<User[]> {
  const userPromises = ids.map((id) => fetchUser(id));
  return await Promise.all(userPromises);
}

// 20.
async function task20WithTimeout<T>(promise: Promise<T>, timeoutMs: number = 2000): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error("Timeout: Yêu cầu mất quá 2 giây")), timeoutMs);
  });

  return await Promise.race([promise, timeoutPromise]);
}

async function main() {
  // Task 11
  console.log("[Task 11] Đang chờ 2s...");
  const res11 = await task11();
  console.log("Task 11 Output:", res11, "\n");

  // Task 12
  console.log("[Task 12] Gọi simulateTask(2000)...");
  await task12();
  console.log();

  // Task 13
  console.log("[Task 13] Chờ 1s để bắt lỗi qua try/catch...");
  await task13();
  console.log();

  // Task 14
  console.log("[Task 14] Đang tính (5 * 3) sau 1s...");
  const res14 = await task14(5);
  console.log("Task 14 Output:", res14, "\n");

  // Task 15
  console.log("[Task 15] Chạy tuần tự (1s xong mới đến 2s, tổng 3s)...");
  await task15();
  console.log();

  // Task 16
  console.log("[Task 16] Chạy song song Promise.all (chỉ mất 2s)...");
  await task16();
  console.log();

  // Task 17
  console.log("[Task 17] Duyệt for await...of qua mảng 3 promises...");
  await task17();
  console.log();

  // Task 18
  console.log("[Task 18] fetchUser(1) sau 1s...");
  const user = await fetchUser(1);
  console.log("Task 18 Output:", user, "\n");

  // Task 19
  console.log("[Task 19] fetchUsers([101, 102, 103]) đồng thời...");
  const users = await fetchUsers([101, 102, 103]);
  console.log("Task 19 Output:", users, "\n");

  // Task 20 - Trường hợp hoàn thành trước 2s
  console.log("[Task 20 - Case 1] Task 1s chạy trước timeout 2s:");
  const res20Success = await task20WithTimeout(simulateTask(1000), 2000);
  console.log("Task 20 Output:", res20Success, "\n");

  // Task 20 - Trường hợp vượt quá 2s
  console.log("[Task 20 - Case 2] Task 3s bị timeout 2s chặn lại:");
  try {
    await task20WithTimeout(simulateTask(3000), 2000);
  } catch (err: any) {
    console.log("Task 20 Catch Error:", err.message, "\n");
  }
}
main()
