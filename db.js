/* eslint-disable */
const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_URL
});

pool.on("connect", () => {
  console.log("Database connection successful");
});

const listTables = () => {
  const queryString = `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema='public' AND table_type='BASE TABLE';
  `;

  pool.query(queryString)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

const createUsersTable = () => {
  const queryString = `
    CREATE TABLE IF NOT EXISTS
    users(
      id UUID PRIMARY KEY,
      email VARCHAR(128) UNIQUE NOT NULL,
      first_name VARCHAR(128) NOT NULL,
      last_name VARCHAR(128) NOT NULL,
      password VARCHAR(128) NOT NULL,
      is_admin BOOLEAN NOT NULL,
      created_on TIMESTAMP,
      modified_on TIMESTAMP
    );
  `;

  pool.query(queryString)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
}; 

module.exports = {
  listTables,
  createUsersTable
};

require("make-runnable/custom")({
  printOutputFrame: false
});