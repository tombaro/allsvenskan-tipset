'use strict';


var Xray = require('x-ray');
var x = Xray();


exports.allsvenskan_standings = function(req, res) {
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
                    round: current.substring(17,19).trim(),
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

exports.elitettan_standings = function(req, res) {
/* Scrape the table. */
	x('http://www.elitettan.se/tabell/', '#tabell',
	{
		rows: ['tr']
	})(function(err, obj){
        if (err) {
            res.send(err);
        } else {    
            //console.log(obj.rows.toString().replace(/(\n|\t)/g,"   ").replace(/,/g, '\n'));
            var items = [];
            for (var i = 1; i < obj.rows.length ; i++) {
                var current = obj.rows[i];
                //console.log(current.replace(/\n/g," "));
                var tmp = {
                    position: current.substring(0,4).trim().replace('.',""),
                    team: current.substring(8,30).trim().replace(/(\n|\t|[0-9]|-)/g ,""),
                    round: current.substring(8,30).trim().match(/\d+.?\d*/),
                    points: current.substring((current.length -4), current.length).trim()
                };
                //Removes linebreaks elitettan.se uses
                if(!(tmp.round === null)){
                    items.push(tmp)
                    
                }
            };
            var str = items.slice(0,16);
            // Write to json
            const to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(str) + '}}';
            res.send(to_string);
            
        }
	});
};