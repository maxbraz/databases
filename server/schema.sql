CREATE DATABASE chat;

USE chat;

CREATE TABLE users (

  username text not null, password text, id integer auto_increment primary key

);

CREATE TABLE messages (
  /* Describe your table here.*/
  user_id integer not null, message text, roomname text not null, createdat integer not null auto_increment primary key, 
  foreign key (user_id) references users(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/