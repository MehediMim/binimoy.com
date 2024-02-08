-- Inserting data into the subcategories table

INSERT INTO subcategories (subcategory_id, category_id, name)
VALUES
  -- Category: Mobiles (category_id = 1)
  (1, 1, 'Mobile Phones'),
  (2, 1, 'Mobile Phone Accessories'),
  (3, 1, 'Wearables'),
  (4, 1, 'SIM Cards'),
  (5, 1, 'Mobile Phone Services'),

  -- Category: Electronics (category_id = 2)
  (1, 2, 'Desktop Computers'),
  (2, 2, 'Laptops'),
  (3, 2, 'Laptop & Computer Accessories'),
  (4, 2, 'Tablets & Accessories'),
  (5, 2, 'TVs'),
  (6, 2, 'TV & Video Accessories'),
  (7, 2, 'Home Appliances'),
  (8, 2, 'Cameras, Camcorders & Accessories'),
  (9, 2, 'ACs & Home Electronics'),
  (10, 2, 'Audio & Sound Systems'),
  (11, 2, 'Video Game Consoles & Accessories'),
  (12, 2, 'Photocopiers'),
  (13, 2, 'Other Electronics'),

  -- Category: Home & Living (category_id = 3)
  (1, 3, 'Living Room Furniture'),
  (2, 3, 'Kitchen & Dining Furniture'),
  (3, 3, 'Bedroom Furniture'),
  (4, 3, 'Office & Shop Furniture'),
  (5, 3, 'Children''s Furniture'),
  (6, 3, 'Household Items'),
  (7, 3, 'Bathroom Products'),
  (8, 3, 'Doors'),
  (9, 3, 'Home Textiles & Decoration'),

  -- Category: Men's Fashion & Grooming (category_id = 4)
  (1, 4, 'Jacket & Coat'),
  (2, 4, 'Shirts & T-Shirts'),
  (3, 4, 'Pants'),
  (4, 4, 'Traditional Clothing'),
  (5, 4, 'Grooming & Bodycare'),
  (6, 4, 'Optical & Sunglasses'),
  (7, 4, 'Baby Boy''s Fashion'),
  (8, 4, 'Bags & Accessories'),
  (9, 4, 'Footwear'),
  (10, 4, 'Watches'),
  (11, 4, 'Wholesale - Bulk'),

  -- Category: Women's Fashion & Beauty (category_id = 5)
  (1, 5, 'Traditional Wear'),
  (2, 5, 'Winter Wear'),
  (3, 5, 'Western Wear'),
  (4, 5, 'Bags & Accessories'),
  (5, 5, 'Footwear'),
  (6, 5, 'Lingerie & Sleepwear'),
  (7, 5, 'Jewellery & Watches'),
  (8, 5, 'Beauty & Personal Care'),
  (9, 5, 'Optical & Sunglasses'),
  (10, 5, 'Wholesale - Bulk'),
  (11, 5, 'Baby Girl''s Fashion'),

  -- Category: Pets & Animals (category_id = 6)
  (1, 6, 'Pets'),
  (2, 6, 'Farm Animals'),
  (3, 6, 'Pet & Animal Accessories'),
  (4, 6, 'Pet & Animal food'),
  (5, 6, 'Other Pets & Animals'),

  -- Category: Hobbies, Sports & Kids (category_id = 7)
  (1, 7, 'Musical Instruments'),
  (2, 7, 'Sports'),
  (3, 7, 'Fitness & Gym'),
  (4, 7, 'Music, Books & Movies'),
  (5, 7, 'Children''s Items'),
  (6, 7, 'Other Hobby, Sport & Kids items'),

  -- Category: Business & Industry (category_id = 8)
  (1, 8, 'Office Supplies & Stationary'),
  (2, 8, 'Safety & Security'),
  (3, 8, 'Industry Machinery & Tools'),
  (4, 8, 'Raw Materials & Industrial Supplies'),

  -- Category: Education (category_id = 9)
  (1, 9, 'Textbooks'),
  (2, 9, 'Other Books'),
  (3, 9, 'Other Education Materials'),

  -- Category: Essentials (category_id = 10)
  (1, 10, 'Grocery'),
  (2, 10, 'Fruits & Vegetables'),
  (3, 10, 'Meat & Seafood'),
  (4, 10, 'Baby Products'),
  (5, 10, 'Healthcare'),
  (6, 10, 'Household'),
  (7, 10, 'Other Essentials'),

  -- Category: Agriculture (category_id = 11)
  (1, 11, 'Crops, Seeds & Plants'),
  (2, 11, 'Farming Tools & Machinery'),
  (3, 11, 'Other Agriculture');
