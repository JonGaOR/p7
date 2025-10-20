create database Prueba01I;

use Prueba01I;

create table registros (
  id_registro int primary key not null auto_increment,
  nombre varchar(100) not null,
  correo varchar(50) not null
);

select * from registros;
