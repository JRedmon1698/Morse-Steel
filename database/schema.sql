DROP DATABASE IF EXISTS morse_steel;

CREATE DATABASE morse_steel;

CREATE TABLE employees (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(50) NOT NULL, 
  position varchar(50),
  status varchar(10),
  cell_phone_number varchar(20),
  work_email varchar(20),
  employee_number int,
  certifications varchar(20) VARARRAY[10],
);

CREATE TABLE projects (

);
