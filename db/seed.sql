DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS password;

CREATE TABLE password (
  hash_id SERIAL PRIMARY KEY,
  hash_value TEXT
);

CREATE TABLE customer (
  cust_id SERIAL PRIMARY KEY,
  email VARCHAR(180),
  hash_id INT REFERENCES password(hash_id)
);
