let http=require('http')
let fs=require('fs')
const { error } = require('console')
const server=http.createServer()
server.on('request',(request,response)=>{

fs.writeFile('text.txt',(err,data)=>{
    if (err){
        console.error(err)
    } 
    console.log(data)
})


response.end('file has been created')
})


server.listen(3307)