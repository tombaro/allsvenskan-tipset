var express = require('express');
var router = express.Router();
var latest = require('../shared/results/latest-table.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {
  		title: 'Table saved!',
  		result: latest.table()
	});
});

module.exports = router;
