var express = require('express');
var router = express.Router();
var score = require('../shared/tips/score.js');
var table = require('../shared/results/result-latest.json');
var tips = require('../shared/tips/teamscore.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Tippning Allsvenskan 2017',
	score: score.score(),
	tips: tips.teamscore(),
	table: table
  });
});

module.exports = router;
