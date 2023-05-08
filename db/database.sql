CREATE DATABASE IF NOT EXISTS  fichajedb

use fichasdb

create table ficha(
id int(11) not null AUTO_INCREMENT,
nombre VARCHAR(45) DEFAULT NULL,
PRIMARY KEY(id))