const express = require('express');
const router = express.Router();
const pool = require("./db");

router.get('/logIn', async (req, res) => {
    try{
    const {identity,password}=req.body;
    const Query="SELECT COUNT(user_id) \
    FROM users \
    WHERE (phone_number=$1 OR user_id ::VARCHAR=$1 OR email=$1)   AND  password_hash=crypt($2,password_hash)";   //user_id or phone  number jekono ekta dilei hobee
                                            //emn korte chassilam kintu query partesina
    const oldUser=await pool.query(Query,[identity,password]);
    if(oldUser.rows[0].count>0) console.log("Login successful");
    else{
       res.send("Login denied , please try again with correct credentials");
     }
 
 } catch (error) {
 
   console.log(error.message);
   res.status(500).send('Something went wrong');
 }
});
module.exports = router;