'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {

    res.status(200).render('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;

// app.listen(3000, () => console.log('Twitter app listening on port 3000!'))
