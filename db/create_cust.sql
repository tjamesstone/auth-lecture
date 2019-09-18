-- INSERT INTO customer
-- (email, hash_value)
-- VALUES
-- (${email}, ${hash_value})
-- RETURNING *;

INSERT INTO customer (email, hash_id)
VALUES (${email}, ${hash_id})
RETURNING *;