DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS words;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  hashed_password TEXT,
  email VARCHAR(48)
);

INSERT INTO users (email)
VALUES
('WhatIsTruth?@Athens.edu'),
('TheRepublic@TheCave.org'),
('PhilosophyIzKool@VirtueEthics.com');