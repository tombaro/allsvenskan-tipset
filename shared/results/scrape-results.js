var fs = require('fs');
var Xray = require('x-ray');
var x = Xray();

var scrape = function(req, res, next) {

	const latest_table = scrape_table();

	// Write latest result
	// const latest = '{ "result": { "round": "latest", "item":' + JSON.stringify(latest_table) + '}}';
	// fs.writeFile('./shared/results/result-latest.json', latest, function(err) {
	// 	console.log('Result has been scraped and saved ;)');
	// });

	// if (is_complete_round(latest.item)) {
	// 	// Write latest round
	// 	const round_number = 0;
	// 	const round = '{ "result": { "round": "' + round_number + '", "item":' + JSON.stringify(items) + '}}';
	// 	fs.writeFile('./shared/results/result-round-' + round_number + '.json', round, function(err) {
	// 		console.log('Round has been scraped and saved ;)');
	// 	});
	// }
}

function scrape_table() {
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
				round: current.substring(17,19).trim()
			};
			items.push(tmp);
		};

		const latest = '{ "result": { "round": "latest", "item":' + JSON.stringify(items) + '}}';
		fs.writeFile('./shared/results/result-latest.json', latest, function(err) {
			console.log('Result has been scraped and saved ;)');
		});

	});
};

function is_complete_round(result) {
	const check_row = result[0].round;
	for (var index = 0; index < result.length; index++) {
		if (check_row !== result[index].round) {
			return false;
		}
	}

	return true;
}

module.exports = scrape;