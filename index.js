const express = require("express");
const app = express();
const cors = require("cors");
const pool =require("./db");
const { Query } = require("pg");


//middleware
app.use(cors());
app.use(express.json());


//Routes

//create a user
app.post('/users', async (req, res) => {
  try {
    // Get the user data from the request body
    const { first_name, middle_name, last_name, phone_number, password } = req.body;
    const Query = "INSERT INTO users(first_name, middle_name, last_name, phone_number, password) \
     VALUES ($1,$2,$3,$4,$5) RETURNING *";
      
    // Execute the query with the user data as parameters
     const newUser=await pool.query(Query, [first_name, middle_name, last_name, phone_number, password]);

     res.json(newUser.rows[0]);
  } catch (error) {
    console.log(error.message);
    // Send an error response to the client
    res.status(500).send('Something went wrong');
  }
});

//get a user
app.get('/users',async(req,res)=>{
try {
  const {identity,password}=req.body;
   const Query="SELECT first_name, last_name\
   FROM users \
   WHERE user_id=$1  AND password=$2";
   const oldUser=await pool.query(Query,[identity,password]);
   res.json(oldUser.rows[0]);
   //console.log(oldUser);

} catch (error) {

  console.log(error.message);
  res.status(500).send('Something went wrong');
}



});

//get all user

//update a user

//delete a user



app.listen(5000, ()=>{
    console.log("server has started at port 5000");
});