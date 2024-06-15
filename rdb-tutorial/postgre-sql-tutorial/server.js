const express = require("express");
const pool = require("./db"); // import pool from './db'

const app = express();
const PORT = 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id; // users/1

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
});

app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  pool.query(
    "SELECT u FROM users u WHERE u.email = $1",
    [email],
    (error, results) => {
      if (results.rows.length) {
        return res.status(409).send("User exists");
      }

      pool.query(
        "INSERT INTO users (name, email, age) values ($1, $2, $3)",
        [name, email, age],
        (error, results) => {
          if (error) throw error;
          return res.status(201).send("User created");
        },
      );
    },
  );
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "SELECT u FROM users u WHERE u.id = $1",
    [id],
    (error, results) => {
      if (error) throw error;

      const isUserNotExist = results.rows.length === 0;
      if (isUserNotExist) {
        return res.status(404).send("User not exists");
      }

      pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
        if (error) throw error;
        return res.status(200).send("user deleted");
      });
    },
  );
});

app.put("/users/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  pool.query(
    "SELECT u FROM users u WHERE u.id = $1",
    [id],
    (error, results) => {
      if (results.rows.length === 0) {
        return res.status(404).send("User doesn't exist");
      }

      pool.query(
        "UPDATE users SET name = $1 WHERE id = $2",
        [name, id],
        (error, results) => {
          if (error) throw error;
          return res.status(201).send("User updated");
        },
      );
    },
  );
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
