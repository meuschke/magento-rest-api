var request = require('request');

var internals = function (client) {
    return request.defaults({
        auth: client.auth,
        oauth: client.oauth,
        json: true,
        followRedirect: true,
        followAllRedirects: true
    });
};

module.exports = internals;
