var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Knex = require("knex")
var knexConfig = require("../knexfile.js").development;
var knex = Knex(knexConfig)

/* GET home page. */

router.get('/', function(req, res, next) {
  res.redirect('/home')
});

router.get('/home', function(req, res, next) {
  knex("entries")
    .select("*")
    .then(rows => {
      var dataObject = {entries: rows}
      res.render("home", dataObject)
    })
    .catch(error => console.log(error))
});

module.exports = router;
