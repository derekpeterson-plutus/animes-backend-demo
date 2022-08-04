// SETUP Postgres Promise
const pgp = require('pg-promise')();
require('dotenv').config();

//SETUP CONNECTION TO HOST, PORT, DATABASE AND USER
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

module.exports = db;
