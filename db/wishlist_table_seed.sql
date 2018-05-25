CREATE TABLE wishlist(
id SERIAL PRIMARY KEY,
product_id INT REFERENCES products(id),
qty INT DEFAULT 0
)