-- Create the e_commerce database
CREATE DATABASE e_commerce;

-- Add the pgcrypto extension to the database
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SEQUENCE users_user_id_seq START 1;
-- Create the users table with hashed passwords
CREATE TABLE users (
    user_id INT DEFAULT nextval('users_user_id_seq') PRIMARY KEY,  
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(30) UNIQUE,   
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
     CHECK (phone_number IS NOT NULL OR email IS NOT NULL)
);
 
-- Set the sequence to the next available value
SELECT setval('users_user_id_seq', COALESCE((SELECT MAX(user_id) FROM users), 1), false);


--phone number is a multivalued attribute so another table was needed to maintain the first normal form
-- Table for User Phone Numbers
CREATE TABLE user_phone_number (
    user_id INT NOT NULL,
    phone_number VARCHAR(30) UNIQUE,
    PRIMARY KEY (user_id,phone_number)
    --not sure though
);

--items table , user_id is used as foreign key

CREATE SEQUENCE items_item_id_seq START 1;
CREATE TABLE items (
    item_id INT  DEFAULT nextval('items_item_id_seq') PRIMARY KEY,
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    subcategory_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image TEXT ,
    price DECIMAL(10, 0) NOT NULL CHECK (price >= 0),
    status VARCHAR(50),
    date_Posted TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
SELECT setval('items_item_id_seq', COALESCE((SELECT MAX(item_id) FROM items), 1), false);

--for category

CREATE TABLE categories (
    category_id INT  PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);


--for subcategory

CREATE TABLE subcategories (
    subcategory_id INT NOT NULL,
    category_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (category_id, subcategory_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE images (
    image_id SERIAL,
    item_id INT NOT NULL,
    image_url TEXT NOT NULL,
    PRIMARY KEY (image_id, item_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

--for discount
CREATE SEQUENCE discounts_discount_id_seq START 1;
CREATE TABLE discounts (
    discount_id INT DEFAULT nextval('discounts_discount_id_seq') PRIMARY KEY,
    discount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    start_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    duration INT NOT NULL CHECK (duration >= 0)            //
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

CREATE TABLE messages(
    user_id_sender INT NOT NULL,
    user_id_receiver INT NOT NULL,
    message TEXT ,            //
    message_date TIMESTAMP WITH TIME ZONE  DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id_sender, user_id_receiver),
    FOREIGN KEY (user_id_receiver) REFERENCES users(user_id),
     FOREIGN KEY (user_id_sender) REFERENCES users(user_id)
);

--for reporting 
CREATE TABLE report(
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    description TEXT,
    date_posted TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, item_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);


--FOR REVIEWS
CREATE TABLE reviews(
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    content TEXT,
    upvotes INT DEFAULT 0,
    downvotes INT DEFAULT 0,
    date_posted TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, item_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

-- Orders Table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),                 
    total_price DECIMAL(10) NOT NULL CHECK (total_price >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_details (
    order_id INT NOT NULL,
    item_id INT NOT NULL REFERENCES items(item_id),
    quantity INT NOT NULL CHECK (quantity >= 0),
    price DECIMAL(10,0) NOT NULL CHECK (price >= 0),
   PRIMARY KEY(order_id)
);

CREATE TABLE shipping_info (
    order_id INT NOT NULL REFERENCES orders(order_id),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    division VARCHAR(100),
    zip_code VARCHAR(20),
    shipping_date TIMESTAMP,
    PRIMARY KEY (order_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

CREATE TABLE payments (
    order_id INT UNIQUE REFERENCES orders(order_id),
    amount DECIMAL(10, 0) NOT NULL CHECK (amount > 0),
    payment_method VARCHAR(255),
    PRIMARY KEY (order_id,user_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);