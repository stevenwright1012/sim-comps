CREATE TABLE doggies(
    id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    price DECIMAL,
    img_url TEXT,
    energy FLOAT DEFAULT 99.998765,
    legs INT DEFAULT 4
)