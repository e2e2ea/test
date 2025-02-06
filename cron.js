import fs from "fs";
import cron from "node-cron";

cron.schedule("* * 1 * *", () => {
  const message = `Hello, World! ${new Date().toISOString()}\n`;
  // fs.appendFileSync("hello.log", message);
  console.log('mssage1');
  console.log('mssage2');
  console.log('mssage3');
  console.log(message.trim());
});

console.log("Cron job started...");
