DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS hash_customer;

CREATE TABLE customer (
    cust_id SERIAL PRIMARY KEY,
    email VARCHAR(180)
    
);

CREATE TABLE hash_customer (
    hash_id SERIAL PRIMARY KEY,
    hash_value TEXT,
    cust_id INT REFERENCES customer( cust_id )
);