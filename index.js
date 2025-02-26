const express = require ('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 8000;

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});

try {
  connection.connect();
  console.log("connected with database")
  
} catch (error) {
  console.log(error);
  
}

console.log(connection);


app.get('/',(req,res)=>{
  res.send("Welcome");
})

app.listen(PORT,()=>(
  console.log("working fine")
));