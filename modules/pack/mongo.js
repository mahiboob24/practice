
import mysql from 'mysql' 


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Maahi@123',
    database : 'world'
  });
   
  connection.connect();

   let q='select * from city limit 10;'  
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
   
  connection.end();