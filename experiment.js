
const args = process.argv; 
  
if(args[args.length-2]=="add"){
  console.log(args[args.length-1])
}
  
    
//   }
    
    // // Absolute file path is the second element 
    // // of process.argv array 
    // else   { 
    //   console.log("hate")
    // }
//  })
 // fs.readFile('tasks.txt',(err,Input)=>{
//     if(err)throw err
//     else{
//     let tasks=Input.toString().split("\r\n")
//      console.log(`${tasks.length} tasks to do:` )
//      tasks.forEach(element=>{
//         console.log(`[] ${element} `)
//      })
//     }
// })