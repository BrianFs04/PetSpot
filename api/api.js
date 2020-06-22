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
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Mysql
const connection = mysql.createPool({
  host: "database-1.c95hyumym0pz.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Codx12.-",
  database: "petspot_db",
});

app.post("/update", (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  const { username, firstname, lastname, email, phone } = req.body;
  const sql = `UPDATE users SET username='${username}', firstname='${firstname}', lastname='${lastname}', email='${email}', phone='${phone}' WHERE id=${id}`;
  connection.query(sql, (error) => {
    res.redirect("http://localhost:4000/profile");
  });
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// All pets
app.get("/pets", (req, res) => {
  const sql =
    "SELECT pets.*, breeds.breed_name, type.animal_type FROM pets JOIN breeds ON pets.breed_id = breeds.id JOIN type ON pets.type_id = type.id ORDER BY pets.id;";

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

// All breeds
app.get("/breeds", (req, res) => {
  const sql =
    "SELECT * FROM breeds JOIN type ON breeds.type_id = type.id ORDER BY type.id";

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
  const sql =
    "SELECT pets.*, breeds.breed_name FROM pets JOIN breeds ON pets.breed_id = breeds.id ORDER BY pets.id DESC LIMIT 3";
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
  const sql = `SELECT * FROM pets JOIN breeds ON pets.breed_id = breeds.id WHERE pets.id = ${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("Not results");
    }
  });
});

// Pictures
app.get("/pictures/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM pictures JOIN pets ON pets.id = pictures.pet_id WHERE pets.id = ${id}`;
  connection.query(sql, (error, result) => {
    let pic = [];
    if (error) throw error;
    if (result.length > 0) {
      for (let i in result) {
        pic.push(result[i].pictures);
      }
      res.json([{ pictures: pic }]);
    } else {
      res.send("Not results");
    }
  });
});

// Create new pet
app.post("/add", (req, res) => {
  console.log(req.body);
  const sql = "INSERT INTO pets SET ?";

  const petObj = {
    name: req.body.name,
    breed_id: req.body.breed_id,
    type_id: req.body.type_id,
    size: req.body.size,
    sex: req.body.sex,
    picture: req.body.picture,
    description: req.body.description,
    shelter_id: req.body.shelter_id,
  };

  connection.query(sql, petObj, (error) => {
    if (error) throw error;
    res.redirect("http://localhost:1234/");
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


//store adoption form information in the database
app.post("/ask", urlencodedParser, (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    address,
    more_pets,
    have_kids,
    message,
  } = req.body;

  const sql = `INSERT INTO adopt_applications (user_fname, user_lname, user_email, user_phone, user_address, more_pets, have_kids, message) VALUES ('${firstname}', '${lastname}', '${email}', '${phone}', '${address}', '${more_pets}', '${have_kids}', '${message}');`;
  connection.query(sql, (err, results, fields) => {
    if (err) {
      console.log("Failed to store data");
      res.sendStatus(500);
      return;
    }
    console.log("Adoption form received");
    res.end();
  });
  res.redirect("http://localhost:1234/pets");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
