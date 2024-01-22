-- Create the e_commerce database
CREATE DATABASE e_commerce;

-- Add the pgcrypto extension to the database
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SEQUENCE users_user_id_seq START 1;
-- Create the users table with hashed passwords
CREATE TABLE users (
    user_id INT DEFAULT nextval('users_user_id_seq') PRIMARY KEY,
    first_Name VARCHAR(100) NOT NULL,
    middle_Name VARCHAR(100),
    last_Name VARCHAR(100) NOT NULL,
    phone_Number VARCHAR(14),   
    email VARCHAR(255),
    password_hash VARCHAR(255),
     CHECK ((phone_number IS NOT NULL AND email IS NULL) OR (phone_number IS NULL AND email IS NOT NULL))
);

-- Set the sequence to the next available value
SELECT setval('users_user_id_seq', COALESCE((SELECT MAX(User_id) FROM users), 1), false);
