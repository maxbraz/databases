CREATE DATABASE chat;

USE chat;

CREATE TABLE users (

  username varchar(20), password varchar(20), id int(10) not null auto_increment primary key

);

CREATE TABLE rooms (

  id int(10) not null auto_increment primary key, roomname varchar(20)

);

CREATE TABLE messages (
  /* Describe your table here.*/
  user_id int(10) not null, message varchar(120), room_id int(10) not null, createdat int(10) not null auto_increment primary key, 
  foreign key (user_id) references users(id), foreign key (room_id) references rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

