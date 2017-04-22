var models = require('../models');
var app = require('../app.js');
var Promise = require('bluebird');

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
    post: function (req, res) {
      console.log('hey from message post controller');
      const messages = models.messages.post(null, req.query.json);

      messages.then((res) => {
        console.log('Message successfully posted to database...');
      })
      .catch((err) => {
        throw err;
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      console.log('Hey from user post controller');
      console.log(req);
      const messages = models.users.post(null, req.query.json);

      messages.then((res) => {
        console.log('User successfully posted to database...');
      })
      .catch((err) => {
        throw err;
      })
    }
  }
};

