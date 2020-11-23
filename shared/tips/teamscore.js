// Beräkna poäng per lag, baserat på tips och senaste result
var tips = require('./tips-shortname.json');

const MAX_POINTS = 16;

function get_team_points(tips, table) {
	var count = tips.length;
	const currentTable = JSON.parse(table).result;

	var teampoints = [];
	for (var i = 0; i < count; i++) {
		for (var j = 0; j < currentTable.item.length; j++) {
			if( currentTable.item[j].team.toLowerCase() === tips[i].team.toLowerCase()) {
				let temp = {
					name: currentTable.item[j].team,
					points: MAX_POINTS - Math.abs(tips[i].position - currentTable.item[j].position)
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
