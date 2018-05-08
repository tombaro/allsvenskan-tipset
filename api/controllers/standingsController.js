'use strict';


var Xray = require('x-ray');
var x = Xray();


exports.list_standings = function(req, res) {
/* Scrape the table. */
	x('http://www.svt.se/svttext/web/pages/343.html',  '.root',
	{
		rows: ['span']
	})(function(err, obj){
        if (err) {
            res.send(err);
        } else {      
            var items = [];
            for (var i = 4; i < obj.rows.length -3; i++) {
                var current = obj.rows[i];
                var tmp = {
                    position: current.substring(0,2).trim(),
                    team: current.substring(3,16).trim(),
                    round: current.substring(16,2).trim(),
                    points: current.substring(36,39).trim()
                };
                
                items.push(tmp);
            };
            // Write to json
            const to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(items) + '}}';
            res.send(to_string);
            
        }
	});
};