var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // in this, render goes to index.ejs, and title is assigned a value, that value is rendered 'Express'
  res.render('index', { title: 'KevinTurney.io' });
});

module.exports = router;
