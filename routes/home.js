var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.redirect('/home')
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Holiday Diary' });
});

module.exports = router;
