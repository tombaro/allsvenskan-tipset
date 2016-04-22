var fs = require('fs');

module.exports = {
	table: function() {
		var result_raw = fs.readFileSync('./shared/results/result-latest.txt');
		var lines = result_raw.toString().split('\n');

		var items = [];
		for (var i = 0; i < lines.length; i++) {
			var tmp = {
				position: i + 1,
				team: lines[i].split('\t')[1]
			};
			items.push(tmp);
		};
		// save to json file for now...
		var to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(items) + '}}';

		
		fs.writeFile('./shared/results/result-latest.json', to_string, function(err) {
			console.log('rly');
		});
		return true;
	}
}
/*
{ "result": {
		"round": 1,
		"item": [
			{"position": 1,
			"team": "Malmö"},
			{"position": 2,
			"team": "Göteborg"},
			{"position": 3,
			"team": "Norrköping"},
			{"position": 4,
			"team": "AIK"},
			{"position": 5,
			"team": "Elfsborg"},
			{"position": 6,
			"team": "Häcken"},
			{"position": 7,
			"team": "Helsingborg"},
			{"position": 8,
			"team": "Hammarby"},
			{"position": 9,
			"team": "Djurgården"},
			{"position": 10,
			"team": "Kalmar"},
			{"position": 11,
			"team": "Sundsvall"},
			{"position": 12,
			"team": "Östersund"},
			{"position": 13,
			"team": "Jönköping Södra"},
			{"position": 14,
			"team": "Gefle"},
			{"position": 15,
			"team": "Falkenberg"},
			{"position": 16,
			"team": "Örebro"}
		]	
	}
}*/