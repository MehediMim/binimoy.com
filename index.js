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
   const Query="SELECT COUNT(user_id) \
   FROM users \
   WHERE user_id=$1  AND password=$2";   //user_id or phone  number jekono ekta dilei hobee
                                           //emn korte chassilam kintu query partesina
   const oldUser=await pool.query(Query,[identity,password]);
  // if(oldUser.rowCount>0) //allow access
  // else{
      //do not allow access 
  //  }

} catch (error) {

  console.log(error.message);
  res.status(500).send('Something went wrong');
}

});

//update a user
//updates can be his name , picture or password-ekhon kar jonye dhoree ney name update korbe
app.put('/users',async(req,res)=>{
  try {
    const {id}=req.body;
    const {first_name,last_name}=req.body;
    const Query="UPDATE users SET first_name=$1 , last_name=$2 where user_id=$3 ";
    const updatedUser= await pool.query(Query,[first_name,last_name,id]);
    res.json("user names have been updated");
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Something went wrong');
  }
});

//delete a user--account deletion of some product deletion
app.delete('/users',async(req,res)=>{
  try {
    const {id}=req.body;
  const Query="DELETE FROM users WHERE user_id=$1";
  const deletedUser=await pool.query(Query,[id]);
  res.json("user has been deleted");
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send("something went wrong");
    
  }

})



app.listen(5000, ()=>{
    console.log("server has started at port 5000");
});