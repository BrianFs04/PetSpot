const express = require('express');
const router = express.Router();
const mysql = require("mysql");


const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../auth');

//Mysql
const connection = mysql.createPool({
        host: "database-1.c95hyumym0pz.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "Codx12.-",
        database: "petspot_db",
});

router.get('/signup', isNotLoggedIn, (req, res) => {
        res.render('auth/signup');
});

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup'
}));

router.get('/signin', isNotLoggedIn, (req, res) => {
        res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
        passport.authenticate('local.signin', {
                successRedirect: '/profile',
                failureRedirect: 'http://localhost:1234/login'
        })(req, res, next);
});

router.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile')
});


router.post('/logout', isLoggedIn, (req, res) => {
        req.logOut();
        res.redirect('http://localhost:1234/login');
});

router.post('/update', isLoggedIn, (req, res) => {

});

module.exports = router;