var db = require('../db');
var app = require('../app.js');  //Tony & Max put this here

module.exports = {
  messages: {
    get: function (err, results) {

    }, // a function which produces all the messages
    post: function (err, message) {
      db.connection.query(`insert into users values (${message.username}, '') `)
      db.connection.query(`insert into messages values (${message.username}, ${message.text}, ${message.roomname}) `)
      db.connection.query(`insert into messages values (${message.username}, ${message.text}, ${message.roomname}) `)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message) {
      db.query(`insert into users values (?, ?) [${message.username}, '']`, function (err) {
        if (err) throw err
          console.log('Successfully wrote username to database...');
      });
    }
  }
};

