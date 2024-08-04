const fs= require("fs")
const readLine=require("readline")
// // Creating files
// fs.writeFile("text.txt", 'Good morning', (error)=>{
//     if(error){
//        console.log(error);
//     }
//     console.log("File created successfully")

// }
// )
// Reading files
// fs.readFile("text.txt", "UTF-8", (error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(data)
// })
// Taking input and output in node js
const inputOutput = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
})

// How to use it
inputOutput.question("What is your name?", (name)=>{
    console.log(`my name is ${name}`)
})
// inputOutput.question("Where are you",(place)=>{
// console.log(`I am at ${place}`)
// })
