var express = require('express');
var router = express.Router();
var current = require('../shared/results/current-standings.js');
var score = require('../shared/tips/score.js');
var tips = require('../shared/tips/teamscore.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	getStandings(function(standings){
		res.render('index', { 
			title: 'Tippning Allsvenskan 2021',
			score: score.score(standings),
			tips: tips.teamscore(standings),
			table: standings
		});
	});
});

function getStandings(callback) {
	return current.getCurrent(callback);
}

module.exports = router;
