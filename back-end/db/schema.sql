-- SCHEMA is the BLUEPRINT for our database

-- Step 1: Just incase there is an existing database already, drop (delete) it.
DROP DATABASE IF EXISTS animes_dev;

-- Step 2: Create the db.
CREATE DATABASE animes_dev;

-- Step 3: Connet to the database.
\c animes_dev;

--Step 4: It is very important because it will be a blueprint for any table we need. Create a new table.
CREATE TABLE anime (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    release INT
);

-- psql -U postgres -f db/schema.sql
