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
                //At this point 'current' looks like this "PPTTTTTTTTTTTTTTTRR_WW_DD_LL__GS_GC__PP"
                var tmp = {
                    position: current.substring(0,2).trim(),
                    team: current.substring(2,17).trim(),
                    round: current.substring(17,19).trim(),
                    win: current.substring(20,22).trim(),
                    draw: current.substring(23,25).trim(),
                    loss: current.substring(26,28).trim(),
                    gs: current.substring(30,32).trim(),
                    gc: current.substring(33,35).trim(),
                    points: current.substring(37,39).trim()
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
	x('https://www.svt.se/svttext/web/pages/350.html', '.root',
	{
		rowsG: ['.G'],
		rowsW: ['.W'],
		rowsC: ['.C']
	})(function(err, obj){
        if (err) {
            res.send(err);
        } else {    
            var items = [];
            for (var i = 0; i < 2; i++) {
                var current = obj.rowsG[i];;
                console.log(current.replace(/\n/g," ").replace(/^\s|\s&|\t/g," "));
                var tmp = {
                    position: current.substring(0,2).trim(),
                    team: current.substring(2,17).trim(),
                    round: current.substring(17,19).trim(),
                    win: current.substring(20,22).trim(),
                    draw: current.substring(23,25).trim(),
                    loss: current.substring(26,28).trim(),
                    gs: current.substring(30,32).trim(),
                    gc: current.substring(33,35).trim(),
                    points: current.substring(37,39).trim()
                };
                    items.push(tmp)
            };
            for (var i = 1; i < 10; i++) {
                var current = obj.rowsW[i];;
                console.log(current.replace(/\n/g," ").replace(/^\s|\s&|\t/g," "));
                var tmp = {
                    position: current.substring(0,2).trim(),
                    team: current.substring(2,17).trim(),
                    round: current.substring(17,19).trim(),
                    win: current.substring(20,22).trim(),
                    draw: current.substring(23,25).trim(),
                    loss: current.substring(26,28).trim(),
                    gs: current.substring(30,32).trim(),
                    gc: current.substring(33,35).trim(),
                    points: current.substring(37,39).trim()
                };
                    items.push(tmp)
            };
            //Since class '.C' is used alot in the beginning and french standings are following, we are fetching bottom 3 backwards.
            for (var i = obj.rowsC.length-5; i < obj.rowsC.length -2; i++) {
                var current = obj.rowsC[i];;
                console.log(current.replace(/\n/g," ").replace(/^\s|\s&|\t/g," "));
                var tmp = {
                    position: current.substring(0,2).trim(),
                    team: current.substring(2,17).trim(),
                    round: current.substring(17,19).trim(),
                    win: current.substring(20,22).trim(),
                    draw: current.substring(23,25).trim(),
                    loss: current.substring(26,28).trim(),
                    gs: current.substring(30,32).trim(),
                    gc: current.substring(33,35).trim(),
                    points: current.substring(37,39).trim()
                };
                    items.push(tmp)
            };
            
            var str = items.slice(0,16);
            // Write to json
            const to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(str) + '}}';
            res.send(to_string);
            
        }
	});
};

exports.damallsvenskan_standings = function(req, res) {
/* Scrape the table. */
	x('http://www.svt.se/svttext/web/pages/349.html',  '.sub',
	{
		rows: ['span']
	})(function(err, obj){
        if (err) {
            res.send(err);
        } else {      
            var items = [];
            for (var i = 4; i < obj.rows.length -3; i++) {
                var current = obj.rows[i];
                //At this point 'current' looks like this "PPTTTTTTTTTTTTTTTRR_WW_DD_LL__GS_GC__PP"
                var tmp = {
                    position: current.substring(0,2).trim(),
                    team: current.substring(2,17).trim(),
                    round: current.substring(17,19).trim(),
                    win: current.substring(20,22).trim(),
                    draw: current.substring(23,25).trim(),
                    loss: current.substring(26,28).trim(),
                    gs: current.substring(30,32).trim(),
                    gc: current.substring(33,35).trim(),
                    points: current.substring(37,39).trim()
                };
                items.push(tmp);
            };
            // Write to json
            const to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(items) + '}}';
            res.send(to_string);
            
        }
	});
};

exports.superettan_standings = function(req, res) {
/* Scrape the table. */
	x('http://www.svt.se/svttext/web/pages/345.html',  '.sub',
	{
		rows: ['span']
	})(function(err, obj){
        if (err) {
            res.send(err);
        } else {      
            var items = [];
            for (var i = 4; i < obj.rows.length -3; i++) {
                var current = obj.rows[i];
                //At this point 'current' looks like this "PPTTTTTTTTTTTTTTTRR_WW_DD_LL__GS_GC__PP"
                var tmp = {
                    position: current.substring(0,2).trim(),
                    team: current.substring(2,17).trim(),
                    round: current.substring(17,19).trim(),
                    win: current.substring(20,22).trim(),
                    draw: current.substring(23,25).trim(),
                    loss: current.substring(26,28).trim(),
                    gs: current.substring(30,32).trim(),
                    gc: current.substring(33,35).trim(),
                    points: current.substring(37,39).trim()
                };
                items.push(tmp);
            };
            // Write to json
            const to_string = '{ "result": { "round": "latest", "item":' + JSON.stringify(items) + '}}';
            res.send(to_string);
            
        }
	});
};