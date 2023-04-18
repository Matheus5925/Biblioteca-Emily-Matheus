create database blibioteca;
use blibioteca;

create table TB_USUARIO(
	ID_USUARIO int primary key auto_increment,
    NM_USUARIO varchar(200),
    DS_EMAIL varchar(200),
    DS_SENHA varchar(50)
);

create table TB_LIVRO(
	ID_LIVRO int primary key auto_increment,
    ID_USUARIO int,
    NM_LIVRO varchar(200),
    NM_AUTOR varchar(200),
    DS_ISBN varchar(200),
    DS_EDITORA varchar(100),
    DS_EDICAO varchar(100),
    DS_SINOPSE varchar(4000),
    DT_PUBLICACAO date,
    DS_IDIOMA varchar(100),
    BT_DISPONIVEL boolean,
    QTD_PAGINAS int,
    VL_PRECO decimal(15,2),
    IMG_CAPA varchar(400),
    foreign key (ID_USUARIO) references  TB_USUARIO (ID_USUARIO)
);