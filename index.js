// 

// const os = require ('os')
// console.log(os.hostname())
// 
// console.log(os.machine())
// console.log(os.networkInterfaces())
// console.log(os.loadavg())


//this is write file  and raed
// const fs = require ('fs')

// fs.writeFile('./sample1.txt', 'this is a new file node js insert welcome',(error)=>{
//     if(error)
//     console.log(error)
// else
// console.log('file write successfull')
// })
// fs.readFile('./sample1.txt','utf-8',(error,data)=>{
//     if(error)
//     console.log(error)
// else
// console.log('sucessfull read the file')
// })



//synch function used
// const fs = require ('fs')
// try {
//     fs.writeFileSync('./sample2.txt','this is a sample 2 documents','utf-8')
//     let data = fs.readFileSync('./sample2.txt','utf-8')
//     console.log('Sync',data)
// } catch (error) {
//     console.log(error)
// }


// const fs = require ('fs')

// let data = fs.readFileSync('./Sample.txt','utf-8')
// console.log('Sync',data)
 
//this is readfile document
// const fs = require ('fs')
//  fs.readFile('./Sample1.txt','utf-8',(error,data)=>{
//     if(error)
//     console.log(error)
// else
// console.log(data)
//  })
//  let data = fs.readFileSync('./Sample1.txt','utf-8')
//   console.log('Sync',data)
 


//this is create localhost serverpathh

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "Content-Type":"application/json"
//     })
//     res.end(JSON.stringify({
//         name:"Prabhavathi",
//         email:"prabhashok2501@gmail.com",
//         std:"FSD",
//     }))
// })
// server.listen(8000,()=>console.log("server is listening port 8000"))

//this is multi path file data
// const fs = require ('fs')
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "Content-Type":"multipart/form-data"
//     })
//    const readSteam = fs.createReadStream('./sample.txt')
//    readSteam.pipe(res)
// })
// server.listen(8000,()=>console.log("server is listening port 8000"))

//this is how to display the date and time server
// const fs = require ('fs')
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "Content-Type":"text/html"
//     })
//     res.end(new Date().toLocaleString())
// })
// server.listen(8000,()=>console.log("server is listening port 8000"))

// this is show the date and time in datetime.txt
// const fs = require ('fs')
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     try {
//         let date = new Date()
//          fs.writeFileSync('./DateTime.txt',date.toLocaleString())
//         let data = fs.readFileSync('./DateTime.txt','utf-8')
//         res.writeHead(200,{
//             "Content-Type":"text/html"
//         })
//         res.end(data)
        
//     } catch (error) {
//         console.log(error)
//     }
//    res.end()
// })
// server.listen(8002,()=>console.log("server is listening port 8002"))



 const fs = require ('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    try {
        let date = new Date()
         fs.writeFileSync('${+date}',date.toLocaleString())
        let data = fs.readFileSync('${+date}','utf-8')
        res.writeHead(200,{
            "Content-Type":"text/html"
        })
        res.end(data)
        
    } catch (error) {
        console.log(error)
    }
   res.end()
})
server.listen(8003,()=>console.log("server is listening port 8003"))