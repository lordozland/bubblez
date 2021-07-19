var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dashboard', {title:Express});
});

router.get('/design', function(req, res, next) {
    res.render('design', {title:Express});
  	//res.send('respond with a resource');
});

module.exports = router;