var models = require('../models');
var app = require('../app.js');

var defaultCorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var headers = defaultCorsHeaders;

module.exports = {
  messages: {
    get: function (req, res) {
      // headers['Content-Type'] = 'application/json';
      // response.writeHead(200, headers);


    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      app.post('/classes/users', function(req) {
        models.users.post(req.message);
      })
    }
    // post: function (user) {
    //   app.post('/classes/users', function(req, res) {
    //     models.users.post(req, res);
    //   })
    // }
  }
};

