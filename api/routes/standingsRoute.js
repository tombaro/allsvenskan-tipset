'use strict';
module.exports = function(app) {
  var standings = require('../controllers/standingsController');


  // standings Routes
  app.route('/current')
    .get(standings.list_standings)
};