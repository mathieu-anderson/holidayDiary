var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Knex = require("knex")
var knexConfig = require("../knexfile.js").development;
var knex = Knex(knexConfig)

router.get('/entry/:id', function(req, res, next) {
  console.log(req.params.id)
  knex("entries")
    .select("*")
    .where({date: req.params.id})
    .then(rows => {
      var dataObject = {entries: rows}
      res.render("entry", dataObject)
    })
    .catch(error => console.log(error))
});

module.exports = router;
