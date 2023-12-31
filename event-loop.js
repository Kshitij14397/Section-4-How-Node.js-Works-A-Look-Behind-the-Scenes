//# Section 4: How Node.js Works: A Look Behind The Scenes

//# 33. The Event Loop in Practice
const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
//For increasing the no of thread pools
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("---------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 2000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  //Asynchronous Version
  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // });

  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // });

  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // });

  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // });

  //Synchronous Version
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello from the top-level code");
