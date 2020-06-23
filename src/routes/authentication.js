const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../auth');


//Mysql connection
const connection = mysql.createPool({
        host: "database-1.c95hyumym0pz.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "Codx12.-",
        database: "petspot_db",
});

//Route to render the signup form
router.get('/signup', isNotLoggedIn, (req, res) => {
        res.render('auth/signup');
});

//Route that receives data and creates a new user
router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup'
}));

//Route to render the signin form
router.get('/signin', isNotLoggedIn, (req, res) => {
        res.render('auth/signin');
});

//Route to authenticate the users and redirect to profile
router.post('/signin', isNotLoggedIn, (req, res, next) => {
        passport.authenticate('local.signin', {
                successRedirect: '/profile',
                failureRedirect: 'http://localhost:1234/login'
        })(req, res, next);
});

//Route to redirect authenticated users to profile
router.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile')
});

//Route to delete the current user session
router.post('/logout', isLoggedIn, (req, res) => {
        req.logOut();
        res.redirect('http://localhost:1234/login');
});

module.exports = router;