var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('landing', { title: 'Miller Cyber Technologies' });
});

router.get('/portfolio', function(req, res) {
  res.render('portfolio', { title: 'Logan Miller Portfolio' });
});


module.exports = router;
