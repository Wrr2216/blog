var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('landing', { title: "Miller's Dev Desk" });
});

router.get('/portfolio', function(req, res) {
  res.render('portfolio', { title: "Miller's Dev Desk" });
});


module.exports = router;
