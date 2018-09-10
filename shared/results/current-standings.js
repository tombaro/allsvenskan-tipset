var request = require('request');

module.exports.getCurrent = function(callback) {
    request('https://allsvenskan-api.herokuapp.com/as', function (error, response, body) {
        if(!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            callback(data);
        } else {
            callback('{ "result": { "round": "latest", "item":' + JSON.stringify([]) + '}}');
        }
    });
}


