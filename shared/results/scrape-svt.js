var fs = require('fs');
var Xray = require('x-ray');
var x = Xray();

/* Scrape the table. */
var scrape = function(req, res, next) {
	x('http://www.svt.se/svttext/web/pages/343.html',  '.root',
	{
		rows: ['span']
	})(function(err, obj){
		var items = [];
		for (var i = 4; i < obj.rows.length -3; i++) {
			var current = obj.rows[i];
			var tmp = {
				position: current.substring(0,2).trim(),
				team: current.substring(3,16).trim()
			};
			
			//console.log(team);
			items.push(tmp);
		};
		// Write to json
		var to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(items) + '}}';

		fs.writeFile('./shared/results/result-latest-svt.json', to_string, function(err) {
			console.log('Svt has been scraped and saved ;)');
		});
	});
};

module.exports = scrape;
