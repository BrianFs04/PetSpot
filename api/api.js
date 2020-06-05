const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 1235;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pet_api",
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// All pets
app.get("/pets", (req, res) => {
  const sql = 'SELECT * FROM pets';

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('Not results')
    }
  });
});

// Single pet
app.get("/pets/:id", (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM pets WHERE id = ${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('Not results')
    }
  });
});

// Create new pet
app.post('/add', (req, res) => {
  const sql = 'INSERT INTO pets SET ?';

  const petObj = {
    name: req.body.name,
    breed: req.body.breed,
    sex: req.body.sex
  }

  connection.query(sql, petObj, error => {
    if (error) throw error;
    res.send('Pet created!');
  });
});

// Update pet info
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, breed, sex } = req.body;
  const sql = `UPDATE pets SET name='${name}', breed='${breed}', sex='${sex}' WHERE id=${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Pet updated!');
  });
});

// Delete pet
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM pets WHERE id=${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Pet deleted!');
  });
});

// Check connect
function handleDisconnect() {
  connection.connect((error) => {
    if (error) {
      throw error;
      setTimeout(handleDisconnect, 2000);
    }
    console.log("Database server is running");
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

exports.module = app;