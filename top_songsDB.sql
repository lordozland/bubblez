-- DROP DATABASE IF EXISTS top_songsDB;

-- CREATE DATABASE top_songsDB;

-- USE top_songsDB;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY(position)
); 

CREATE TABLE top_album (
  position INT NOT NULL,
  album VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY(position)
); 



SELECT top_albums.position, top_albums.year, top5000.artist, top5000.song
FROM top5000
INNER JOIN top_albums
ON top5000.artist = top_albums.artist AND top_albums.year;

SELECT * FROM top5000;
SELECT * FROM top_albums;