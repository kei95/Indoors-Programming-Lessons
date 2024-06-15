const { Pool } = require("pg");

const pool = new Pool({
  user: "kei95",
  host: "localhost",
  database: "users",
  password: "",
  port: "5432",
});

module.exports = pool;

// es module export import == new
// commonJS require module.exports == old
