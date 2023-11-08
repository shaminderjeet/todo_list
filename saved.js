const fs = require("fs");
const args = process.argv;

const input = fs.readFileSync("tasks.txt");
console.log(input)
let tasks = input.toString().split("\r\n");
console.log(tasks)

if (args[args.length - 2] === "add") {
  console.log(`"${args[args.length - 1]}" added (${tasks.length + 1} task to do)`);
  fs.writeFileSync(
    "tasks.txt",
    tasks.concat(args[args.length - 1]).join("\r\n")
  );
} else {
  console.log(`${tasks.length} tasks to do`);

  tasks.forEach((element) => {
    console.log(`[] ${element} `);
  });
}
