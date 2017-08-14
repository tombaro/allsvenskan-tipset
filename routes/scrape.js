var express = require('express');
var fs = require('fs');
var router = express.Router();
//var latest = require('../shared/results/latest-table.js');
var Xray = require('x-ray');
var x = Xray();

/* Scrape the table. */
router.get('/', function(req, res, next) {
	x('http://www.svt.se/svttext/web/pages/343.html',  '.root',
	{
		rows: ['span']
	})(function(err, obj){
		var items = [];
		for (var i = 4; i < obj.rows.length -3; i++) {
			var current = obj.rows[i];
			var tmp = {
				position: current.substring(0,2).trim(),
				team: current.substring(3,16).trim(),
				round: current.substring(16,2).trim()
			};
			
			//console.log(team);
			items.push(tmp);
		};
		// Write to json
		var to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(items) + '}}';
		// TODO: Skriv en fil för varje omgång, om den är komplett.

		fs.writeFile('./shared/results/result-latest.json', to_string, function(err) {
			console.log('rly');
		});
	});
	
	res.render('scrape', {
		title: 'Table',
		result: 'Saved!'
	});
});

module.exports = router;
