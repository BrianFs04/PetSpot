const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 1235;

const app = express();
var router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.set("json spaces", 2);

// Mysql
const connection = mysql.createPool({
  host: "database-1.c95hyumym0pz.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Codx12.-",
  database: "petspot_db",
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// All pets
app.get("/pets", (req, res) => {
  const sql = "SELECT * FROM pets";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("Not results");
    }
  });
});

// All shelters
app.get("/shelters", (req, res) => {
  const sql = "SELECT * FROM shelters";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("Not results");
    }
  });
});

// Last three pets
app.get("/lastpets", (req, res) => {
  const sql = "SELECT * FROM pets ORDER BY id DESC LIMIT 3";

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("Not results");
    }
  });
});

// Single pet
app.get("/pets/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM pets WHERE id = ${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("Not results");
    }
  });
});

// Create new pet
app.post("/add", (req, res) => {
  const sql = "INSERT INTO pets SET ?";

  const petObj = {
    name: req.body.name,
    breed: req.body.breed,
    sex: req.body.sex,
  };

  connection.query(sql, petObj, (error) => {
    if (error) throw error;
    res.send("Pet created!");
  });
});

// Update pet info
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, breed, sex } = req.body;
  const sql = `UPDATE pets SET name='${name}', breed='${breed}', sex='${sex}' WHERE id=${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Pet updated!");
  });
});

// Delete pet
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM pets WHERE id=${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Pet deleted!");
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

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "petspoth@gmail.com",
    pass: "c0dxc0dx",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: email, //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form Holi",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
