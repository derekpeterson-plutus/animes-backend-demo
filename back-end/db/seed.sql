-- Step 1: Connect to the existing database in schema.sql
\c animes_dev;

--Step 2: Add values to the pre-made data in schema.sql
INSERT INTO anime (name, release) VALUES ('One Piece', 1999), ('Naruto', 2002), ('Jujutsu Kaisen', 2020), ('Cowboy Bebop', 1998);

-- psql -U postgres -f db/seed.sql