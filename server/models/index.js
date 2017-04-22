var db = require('../db');
var app = require('../app.js');  //Tony & Max put this here
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (err, results) {

    }, // a function which produces all the messages
    post: function (err, message) {
      console.log(message);
      let messageQuery = JSON.parse(message);
      console.log(messageQuery);
      let query = `insert into messages (user_id, message, roomname)
            values (select id from users where users.username = '${messageQuery.username}'
            , '${messageQuery.message}'
            , '${messageQuery.roomname}')`;
      let promise = new Promise((resolve, reject) => {
        if (err) {reject(err)}
          else {resolve(
            db.connection.query(query
            ));
          }
      })
      return promise;
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (err, message) {
      console.log(message);
      let messageQuery = JSON.parse(message);
      let promise = new Promise((resolve, reject) => {
        if (err) {reject(err)}
          else {resolve(
            db.connection.query(`insert into users (username, password) values ('${messageQuery.username}', '')`));
            // where user_id = (select id from users where username=${message.username} `));
          }
      })
      return promise;
    }
  }
};

