const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const secret = require('./config/keys');
const app = express()

passport.use(new GoogleStrategy());

app.listen(5000, () => console.log('App started on Port 5000'))


