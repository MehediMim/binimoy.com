const express = require('express');
const router = express.Router();
const pool = require("./db");

router.post('/addPhoneNumber', async (req, res) => {
    try {
        // Get the user data from the request body
        const { user_id, phone_number } = req.body;
        const Query = "INSERT INTO user_phone_number (user_id,phone_number) VALUES ($1,$2) RETURNING *";
          
        // Execute the query with the user data as parameters
         const newUser=await pool.query(Query, [user_id,phone_number]);
    
         res.json(newUser.rows[0]);
      } catch (error) {
        console.log(error.message);
        // Send an error response to the client
        res.status(500).send('Something went wrong');
      }
});
module.exports = router;