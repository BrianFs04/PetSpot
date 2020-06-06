var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'pet_api'
});

var app = express();
app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/auth', function (request, response) {
        var username = request.body.username;
        var password = request.body.password;
        if (username && password) {
                connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
                        if (results.length > 0) {
                                request.session.loggedin = true;
                                request.session.username = username;
                                response.redirect('/dashboard');
                        } else {
                                response.redirect('http://localhost:1234/login');
                        }
                        response.end();
                });
        } else {
                response.send('Please enter Username and Password!');
                response.end();
        }
});

app.post('/create', function (request, response) {
        const sql = 'INSERT INTO users SET ?';
        const userObj = {
                username: request.body.username,
                name: request.body.name,
                lastname: request.body.lastname,
                email: request.body.email,
                phone: request.body.phone,
                password: request.body.password
        }

        connection.query(sql, userObj, error => {
                if (error) throw error;
                response.redirect('http://localhost:1234/login');
                console.log('User created');
        });

});

app.get('/dashboard', function (request, response) {
        if (request.session.loggedin) {
                var welcome = `<h1>Welcome back ${request.session.username} !</h1>`
                response.send(welcome);
        } else {
                response.send('Please login to view this page!');
        }
        response.end();
});

app.listen(3000);