const fs = require('fs');

// console.log("After reading" );

// fs.readFile("file.txt", "utf8", (err, data)=>{ it is asynchronous 
//     if(err) throw err;
//     console.log(data);
    
// })
// console.log("After reading ");

  
// console.log("Before reading ");

// // const data = fs.readFileSync("file.txt", "utf8")  file reading is synchronous
// console.log(data);

// console.log("After reading ");


// writting files 
// fs.writeFile("file.txt", "This is the holy month of ramzan", (err)=>{
//     if(err) throw err;
//     console.log("File has been saved!");
    
// })

// // append file 
// fs.appendFile("file.txt","\n This is a line added after the file was created", (err)=>{
//     if(err) throw err;
//     console.log("Data appended successfully!");
// })

// Delete file 

// fs.unlink("file.txt", (err)=>{
//     if(err) throw err;
//     console.log("File deleted successfully!");
// })

// Recommended for reading files
//  const readStream = fs.createReadStream("file.txt", "utf8",);
// //  console.log(readStream);
 
// readStream.on('data',  ( chunk)=> {

//     console.log(chunk);
    
// })

// readStream.on('end',()=>{
//     console.log("reading completed!");
    
// })

// recommended for writing files

const writeStream = fs.createWriteStream("file.txt", "utf8",);

writeStream.write("So, in Ramzan we should perform many mnay things\n");
console.log("Data written successfully!");
