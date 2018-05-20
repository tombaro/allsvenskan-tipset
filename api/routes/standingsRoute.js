'use strict';
module.exports = function(app) {
  var standings = require('../controllers/standingsController');


  // standings Routes
  app.route('/as')
    .get(standings.allsvenskan_standings)
  app.route('/el')
    .get(standings.elitettan_standings)
};