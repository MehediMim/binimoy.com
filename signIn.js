
//sign In menu
const express = require('express');
const router = express.Router();
const pool = require("./db");

router.post('/signIn', async (req, res) => {
    try {
        // Get the user data from the request body
        const { first_name, middle_name, last_name, phone_number,email, password } = req.body;
        const Query = "INSERT INTO users(first_name, middle_name, last_name, phone_number,email, password_hash) \
         VALUES ($1,$2,$3,$4,$5,crypt($6,gen_salt('bf')))";
          
        // Execute the query with the user data as parameters
         const newUser=await pool.query(Query, [first_name, middle_name, last_name, phone_number,email, password]);
    
         res.json(newUser.rows[0]);
      } catch (error) {
        console.log(error.message);
        // Send an error response to the client
        res.status(500).send('Something went wrong');
      }
});
module.exports = router;