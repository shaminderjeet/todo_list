// const fs = require("fs");
// const args = process.argv;
// console.log(args)
// const paragraph= document.getElementById("list_tasks")
// const readTasks = () => {
//   const input = fs.readFileSync("tasks.txt");
//   //console.log("Raw tasks from file:", input.toString());
//   let tasks = input.toString().split("\r\n");
//   let nonEmptyTasks = tasks.filter((element) => element !== "");
//   //console.log("nonEmptyTasks", nonEmptyTasks);
// paragraph.textContent=nonEmptyTasks.join("\n");
//   //console.log(nonEmptyTasks)
//   return nonEmptyTasks;
// };
// readTasks();

// const writeTasks = (tasks) => {
//   fs.writeFileSync("tasks.txt", tasks.join("\r\n"));
// };

// const printTasks = (tasks) => {
//   tasks.forEach((element) => {
//     console.log(`[ ] ${element} `);
//   });
// };
// let command = args[2];
// let newTask = args[args.length - 1];
// if (command === "add") {
//   const tasks = readTasks();
//   tasks.push(newTask);
//   console.log(`"${newTask}" added (${tasks.length} task to do:)`);
//   writeTasks(tasks);
// } else {
//   const tasks = readTasks();
//   console.log(`${tasks.length} tasks to do:`);
//   printTasks(tasks);
// }
//console.log("checking mistakes")
//if the command is equal to "completed task 3 "
//it will mark the task checked
// //It will reduce the number from the tasks
// if (command === "completed") {
  //console.log("executed the completed block");
  // const tasks = readTasks();

 //console.log("tasks", tasks);
  //  for (let i = 0; i < tasks.length; i++) {
   //console.log("Task", i+1 , ":", tasks[i]);
// if(newTask===i){
//   console.log("completed")
// }
// }
// }
// const list =document.getElementById("task_list")
// const ListItem=document.createElement("li")
// ListItem.textContent="this is new list"
document.addEventListener('DOMContentLoaded', () => {
const paragraph = document.getElementById("list_tasks");

const readTasks = async () => {
  try {
    const response = await fetch('tasks.txt');
    const data = await response.text();
    
    let tasks = data.split("/\r\n|\n|\r/");
    let nonEmptyTasks = tasks.filter((element) => element.trim() !== "");
    
    paragraph.textContent = nonEmptyTasks.join("/\r\n|\n|\r/");
    
    return nonEmptyTasks;
  } catch (error) {
    console.error('Error reading tasks:', error);
  }
};

// Call readTasks to initiate the process
readTasks();
});