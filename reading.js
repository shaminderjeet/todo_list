const fs = require('fs');
const input = fs.readFileSync("tasks.txt");

let tasks = input.toString().split("\r\n");
console.log(`${tasks.length} tasks to do:`);

tasks.forEach((element) => {
  console.log(`[] ${element} `);
});

const args = process.argv;

args.forEach((element) => {
  if (element === "add") {
    let addTask = args.slice(3);

    let valueOfTask = addTask[0];

    fs.writeFileSync("tasks.txt", tasks.concat(valueOfTask).join("\r\n"));

    const filePath = 'tasks.txt';
    let lastPosition = 0; // Initialize the last position to 0
    
    // Watch the file for changes
    fs.watch(filePath, (eventType, filename) => {
      if (eventType === 'change') {
        // Read the file from the last position
        const fileStream = fs.createReadStream(filePath, { start: lastPosition, encoding: 'utf8' });
    
        fileStream.on('data', (data) => {
          // Print the newly added data
          process.stdout.write(data);
        });
    
        fileStream.on('end', () => {
          // Update the last position to the current end of the file
          lastPosition = fs.statSync(filePath).size;
          
          console.log(`${valueOfTask}  added ${tasks.length + 1}( task to do)`);
        }
    });
});
}
});


