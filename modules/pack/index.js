import http from 'http' 
// import  response  from 'express';

import mysql from 'mysql' 


var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'pass@123',
    database : 'world'
  });

let server=http.createServer()

server.on('request',(req,response)=>{
    // response.writeHead(200,{'content-Type':'text/html'})
    // let data=''
    let q='select * from city limit 5;'  
    connection.query(q, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
 
        
      // response.write(data)
      response.end()
    })

  })


server.listen(3308)




   
//   connection.connect();


   
//   connection.end();














