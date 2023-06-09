use blibioteca;

insert into TB_USUARIO(NM_USUARIO, DS_EMAIL, DS_SENHA)
		VALUE('Matheus Fagundes', 'matheus@gmail.com', '1234');

-- (01)Login
SELECT DS_EMAIL, DS_SENHA, NM_USUARIO
FROM TB_USUARIO
WHERE DS_EMAIL = 'matheus@gmail.com' and
	DS_SENHA = '1234';

-- (02)
INSERT INTO TB_LIVRO(ID_USUARIO,NM_LIVRO, NM_AUTOR, DS_ISBN, DS_EDITORA, DS_EDICAO, DS_SINOPSE, DT_PUBLICACAO, DS_IDIOMA,BT_DISPONIVEL, QTD_PAGINAS, VL_PRECO)
				VALUES(1, 'HARRY POTTER', 'DWANY JHONSON', 'TESTE', 'WORDEDITOR', 'A ORDEM DA FENIX','UM LIVRO MUITO BOM', '2004-04-10','PT-BR',TRUE, 520, 50.8);

-- (03)Listar todos os Livros
SELECT * FROM TB_LIVRO;

-- (04)Update do Livro
UPDATE TB_LIVRO 
SET
    ID_USUARIO = 1,
    NM_LIVRO = '',
    NM_AUTOR = '',
    DS_ISBN = '',
    DS_EDITORA = '',
    DS_EDICAO = '',
    DS_SINOPSE = '',
    DT_PUBLICACAO = '',
    DS_IDIOMA = '',
    BT_DISPONIVEL = TRUE,
    QTD_PAGINAS = '',
    VL_PRECO = 10.1
WHERE ID_LIVRO = 1;

-- (05)Remover Livro
DELETE FROM TB_LIVRO
WHERE ID_LIVRO = 1;

-- (06) BUSCAR LIVRO POR NOME
SELECT * FROM TB_LIVRO
WHERE NM_LIVRO like 'Harry Potter%';

-- (07) BUSCAR LIVRO POR ID
SELECT * FROM TB_LIVRO
WHERE ID_LIVRO = 2
