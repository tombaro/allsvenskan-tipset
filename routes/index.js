var express = require('express');
var router = express.Router();
var tips = require('../shared/tips/score.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Tippning Allsvenskan 2016',
  	score: tips.score()
  });
});

module.exports = router;
