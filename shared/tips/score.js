// Beräkna poäng, baserat på tips och senaste result
var tips = require('./tips.json');

const MAX_POINTS = 16;

function get_points(tips, table) {
	const count = tips.length;
	var points = 0;

	for (var i = 0; i < count; i++) {
		for (var j = 0; j < table.result.item.length; j++) {
			if( table.result.item[j].team.toLowerCase() === tips[i].team.toLowerCase()) {
				points += MAX_POINTS - Math.abs(tips[i].position - table.result.item[j].position);
			}
		};
	};
	return points;
}

module.exports = {
	score: function(standings) {
		const table = standings;
		var points = [];

		for (var i = 0; i < tips.tips.length; i++) {
				var tmp = {
					position: i,
					name: tips.tips[i].name,
					points: get_points(tips.tips[i].item, table)
				};
				points.push(tmp);
		};

		return points.sort(function(a, b) {
			return b.points - a.points;
		});
	}
}