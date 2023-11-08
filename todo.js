const fs = require("fs");
const args = process.argv;

const readTasks = () => {
  const input = fs.readFileSync("tasks.txt");
  let tasks = input.toString().split("\r\n");

  let nonEmptyTasks = tasks.filter((element) => element !== "");

  return nonEmptyTasks;
};

const writeTasks = (tasks) => {
  fs.writeFileSync("tasks.txt", tasks.join("\r\n"));
};

const printTasks = (tasks) => {
  tasks.forEach((element) => {
    console.log(`[ ] ${element} `);
  });
};
let command = args[args.length - 2];
let newTask = args[args.length - 1];
if (command === "add") {
  const tasks = readTasks();
  tasks.push(newTask);
  console.log(`"${newTask}" added (${tasks.length} task to do:)`);
  writeTasks(tasks);
} else {
  const tasks = readTasks();
  console.log(`${tasks.length} tasks to do:`);
  printTasks(tasks);
}
