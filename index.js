const express = require("express");
const app = express();
const cors = require("cors");
const pool =require("./db");

//middleware
app.use(cors());
app.use(express.json());


//create a user or sign in 
const signInRoutes = require("./signIn");
app.use(signInRoutes);
//login
const logInRoutes = require("./logIn");
app.use(logInRoutes);
//add users phone number
const addPhoneNumberRoutes = require("./addPhoneNumber");
app.use(addPhoneNumberRoutes);
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