'use strict';
const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers').Profile; //requiring the methods
const config = require('../../config/development.json')
const app = express() //
const path = require('path')//
const pg = require('pg')

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:3000/';
const middleware = require('../middleware');
const Twit = require('twit');
const helper = require('../controllers/profiles.js')

app.set('view enginer', 'ejs');
app.set('views', path.join(__dirname, 'views'))

router.route('/')
.get(ProfileController.render) //running methods from controllers/profiles.js
router.route('/:id')
  //search db
  .get(ProfileController.search)
  ;
  router.route('/id/:term')
    //search db
    .get(ProfileController.filterDB)

module.exports = router;
