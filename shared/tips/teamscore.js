// Beräkna poäng per lag, baserat på tips och senaste result
var tips = require('./tips.json');

const MAX_POINTS = 16;

function get_team_points(tips, table) {
	var count = tips.length;

	var teampoints = [];
	for (var i = 0; i < count; i++) {
		for (var j = 0; j < table.result.item.length; j++) {
			if( table.result.item[j].team.toLowerCase() === tips[i].team.toLowerCase()) {
				let temp = {
					name: table.result.item[j].team,
					points: MAX_POINTS - Math.abs(tips[i].position - table.result.item[j].position)
				};
				teampoints.push(temp);
			}
		};
	};
	return teampoints;
}

module.exports = {
	teamscore: function(standings) {
		const table = standings;
		var team = [];

		for (var i = 0; i < tips.tips.length; i++) {
			var tmp = {
				position: i,
				name: tips.tips[i].name,
				teampoints: get_team_points(tips.tips[i].item, table)
			};
			team.push(tmp);
		};
		
		return team;
	}
}
