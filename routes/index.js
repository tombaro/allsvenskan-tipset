var express = require('express');
var router = express.Router();
var score = require('../shared/tips/score.js');
var tips = require('../shared/tips/tips.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Tippning Allsvenskan 2016',
	score: score.score(),
	tips: tips
  });
});

module.exports = router;
