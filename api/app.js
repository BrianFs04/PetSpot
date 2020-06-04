const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3306;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  database: "pet_api",
});

// Routes
app.get("/", (req, res) => {
  res.send("The API is really working!");
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