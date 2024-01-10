-- Create the e_commerce database
CREATE DATABASE e_commerce;

-- Add the pgcrypto extension to the database
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SEQUENCE users_user_id_seq START 1;
-- Create the users table with hashed passwords
CREATE TABLE users (
    User_id INT DEFAULT nextval('users_user_id_seq') PRIMARY KEY,
    First_Name VARCHAR(255),
    Middle_Name VARCHAR(255),
    Last_Name VARCHAR(255),
    Phone_Number VARCHAR(14),
    Password VARCHAR(255)
);

-- Set the sequence to the next available value
SELECT setval('users_user_id_seq', COALESCE((SELECT MAX(User_id) FROM users), 1), false);
