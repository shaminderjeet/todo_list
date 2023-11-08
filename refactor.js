/*Write a readTasks() function. It receives no arguments and returns an array of task names.
 The array that it returns contains the task names that it reads from the tasks.txt file.*/
 const fs=require("fs")
 const args=process.argv;
const readTasks=()=>{
const input=fs.readFileSync("tasks.txt")
let tasks=input.toString().split("\r\n")
return tasks;
}
 //console.log(readTasks());




/*Write a writeTasks(tasks) function. It receives an argument, tasks, which is an array of task names, and returns nothing. 
It writes the array of task names that it receives to the tasks.txt file.*/
  const writeTasks=(tasks)=>{
    const joinedTasks = tasks.join('\r\n')
   fs.writeFileSync("tasks.txt",joinedTasks)
   
  }

 // writeTasks(["A","B","C"])
//  writeTasks("Trimming")





/*Write a printTasks(tasks) function. It receives an argument, tasks, 
which is an array of task names, and returns nothing. 
It prints the list of tasks to the console.*/
  const printTasks=(tasks)=>{
      tasks.forEach((element)=>{
          console.log(`[ ] ${element} `)
    })
  }
 printTasks(readTasks())
