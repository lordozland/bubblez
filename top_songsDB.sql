DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

SELECT * FROM top5000;