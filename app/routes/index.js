var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS Express Web Framework' });
  //res.send('<h1>Express NodeJS Web Framework</h1>')
});

module.exports = router;
