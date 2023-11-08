
So, first, create a new folder for this project. We’re going to be making an application to manage our to-do list, to keep track of the tasks that we need to do during the day. So maybe call it something like todolist
Let’s assume that the main file is going to be todo.js. You should be able to call it in this way:
node todo.js
When you call it like that, it should print the list of tasks that you need to do, for example:
3 tasks to do:
[ ] go to the beach
[ ] eat ice cream
[ ] have a good time
Make sure this is working first before continuing. I’ll write the next few steps as well, so you can come back and work on this whenever you want.
After the above is working (seriously, DO THE ABOVE FIRST, then come back to this) then the next step is for those tasks to be read from an external file. Let’s call it tasks.txt. For now we just need the names of the different tasks to be in it, each in a different line:
go to the beach
eat ice cream
have a good time
When you call node todo.js, it should produce the same output
########currently working on this###########
$ node todo.js
2 tasks to do:
[ ] Relax
[ ] Take a nap

$ node todo.js add "Go to the beach"
"Go to the beach" added (3 tasks to do)

$ node todo.js
3 tasks to do:
[ ] Relax
[ ] Take a nap
[ ] Go to the beach
*******Third task to do:-********
 Next task is going to be a little different. After doing this task, your to-do list app will be able to do… exactly the same things that it already does. Nothing more, nothing less :upside_down_face:
What we’re going to be doing is called refactoring, which is a fancy tech word for “reorganizing your code”. We’re going to split the application’s code into small functions that have a single responsibility, clear boundaries, and meaningful names.
This might seem unintuitive: CodeWars-style problems make it seem like shorter code is better code. In a real application, though, clearer code is better code.
Let’s stop for a second and think about your code. Roughly speaking, your code does these things in this order:
read the tasks file into an array
check whether the arguments say to add a new task or not
if it says to add a task:
add the new task to the array of tasks
write the array of tasks into the tasks file
print a message saying the task has been added
otherwise:
print the array of tasks to the console
You will be writing small functions that take on some of these responsibilities. The easiest places to start are:
Write a readTasks() function. It receives no arguments and returns an array of task names. The array that it returns contains the task names that it reads from the tasks.txt file.
Write a writeTasks(tasks) function. It receives an argument, tasks, which is an array of task names, and returns nothing. It writes the array of task names that it receives to the tasks.txt file.
Write a printTasks(tasks) function. It receives an argument, tasks, which is an array of task names, and returns nothing. It prints the list of tasks to the console.
You already wrote all the code that you need for these functions. All that you need to do is move it into these functions, re-arrange it slightly, and call these functions at the points in the code where you originally did these things. 





2:54
Before you start working on this task, I want you to read the above text very slowly and carefully, paying attention to what it actually says. Then I want you to read it again, but even slower and more carefully this time.
Once you’ve really read it, before you start, ask me any questions you have: anything that isn’t clear, or anything that you want to know… it’s better to make sure it’s understood before starting to work on it.



Noemi Lapresta
  5:14 PM
To be clear: when we say “read from the tasks.txt file” or write to the tasks.txt file” or “print the list of tasks to the console”, this means in the exact same format that you’re currently using. That is, the newlines for the tasks.txt file, and the fancy [ ] Task goes here format for printing to the console.