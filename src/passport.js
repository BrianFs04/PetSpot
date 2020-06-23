const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('./database');
const helpers = require('./helpers');

//Local passport method to authenticate a user
passport.use('local.signin', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
}, async (req, username, password, done) => {
        console.log(req.body);
        const rows = await pool.query('SELECT * FROM users where username = ?', [username]);
        if (rows.length > 0) {
                const user = rows[0];
                const validpassword = await helpers.matchPassword(password, user.password);
                if (validpassword) {
                        done(null, user);
                } else {
                        done(null, false);
                }
        } else {
                return done(null, false);
        }
}));

//Local passport method to create a new user in the DB
passport.use('local.signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
}, async (req, username, password, done) => {
        const newUser = {
                username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password
        }
        newUser.password = await helpers.encryptPassword(password);
        const result = await pool.query('INSERT INTO users SET ?', [newUser]);
        newUser.id = result.insertId;
        return done(null, newUser);
}));

// Passport method to serialize a user
passport.serializeUser((usr, done) => {
        done(null, usr.id);
});

// Passport method to desserialize a user
passport.deserializeUser(async (id, done) => {
        const rows = await pool.query('SELECT * FROM users WHERE id= ?', [id]);
        done(null, rows[0]);
});