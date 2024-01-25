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
    phone_Number VARCHAR(30),   
    email VARCHAR(255),
    password_hash VARCHAR(255),
     CHECK ((phone_number IS NOT NULL AND email IS NULL) OR (phone_number IS NULL AND email IS NOT NULL))
);

-- Set the sequence to the next available value
SELECT setval('users_user_id_seq', COALESCE((SELECT MAX(user_id) FROM users), 1), false);


--phone number is a multivalued attribute so another table was needed to maintain the first normal form
-- Table for User Phone Numbers
CREATE TABLE user_phone_number (
    user_id INT,
    phone_number VARCHAR(30),
    PRIMARY KEY (user_id, phone_number),
    FOREIGN KEY (user_id) REFERENCES users(user_id)--not sure though
);

--items table , user_id is used as foreign key

CREATE SEQUENCE items_item_id_seq START 1;
-- //// er upor porjonto hoise
CREATE TABLE items (
    item_id INT  DEFAULT nextval('items_item_id_seq') PRIMARY KEY,
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image BLOB,  --it has to be made correct
    price DECIMAL(10, 0),
    status VARCHAR(50),
    date_Posted TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
SELECT setval('items_item_id_seq', COALESCE((SELECT MAX(item_id) FROM items), 1), false);

--for category
CREATE SEQUENCE categories_category_id_seq START 1;
CREATE TABLE categories (
    category_id INT DEFAULT nextval('categories_category_id_seq') PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);
SELECT setval('categories_category_id_seq', COALESCE((SELECT MAX(category_id) FROM categories), 1), false);

--for subcategory
CREATE SEQUENCE subcategories_subcategory_id_seq START 1;
CREATE TABLE subcategories (
    subcategory_id INT DEFAULT nextval('subcategories_subcategory_id_seq') PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
SELECT setval('subcategories_subcategory_id_seq', COALESCE((SELECT MAX(subcategory_id) FROM subcategories), 1), false);


--for discount
CREATE SEQUENCE discounts_discount_id_seq START 1;
CREATE TABLE discounts (
    discount_id INT DEFAULT nextval('discounts_discount_id_seq') PRIMARY KEY,
    discount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
);
SELECT setval('discounts_discount_id_seq', COALESCE((SELECT MAX(discount_id) FROM discounts), 1), false);

--many to many relationship between items and discounts
CREATE TABLE item_discounts (
    item_id INT NOT NULL,
    discount_id INT NOT NULL,
    PRIMARY KEY (item_id, discount_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id),
    FOREIGN KEY (discount_id) REFERENCES discounts(discount_id)
);
--for message 
-- Table for Messages
CREATE TABLE messages (
    message_id INT SERIAL PRIMARY KEY,
    user_id_sender INT NOT NULL,
    user_id_receiver INT NOT NULL,
    message_history TEXT ,
    message_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id_receiver) REFERENCES users(user_id),
     FOREIGN KEY (user_id_sender) REFERENCES users(user_id)
);

--for reporting 
CREATE TABLE report(
    report_id INT SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    description TEXT,
    date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);


--FOR REVIEWS
CREATE TABLE reviews(
    review_id INT SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    content TEXT,
    upvotes INT DEFAULT 0,
    downvotes INT DEFAULT 0,
    date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);
