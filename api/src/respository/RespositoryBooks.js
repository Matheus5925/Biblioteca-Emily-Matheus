import {con} from './connection.js';

class Books{
    async ListBooks(){
        const comando = `
            SELECT * FROM TB_LIVRO
        `
        const [registro] = await (await con).query(comando);
        return registro;
    }

    async SearchBooksToId(id){
        const comando = `
            SELECT * FROM TB_LIVRO
            WHERE ID_LIVRO = ?
        `
        const [registro] = await (await con).query(comando, [id]);
        return registro[0];
    }

    async SearchBooksToName(name){
        const comand = `
        SELECT * FROM TB_LIVRO
        WHERE NM_LIVRO like ?`
        
        const [register] = await (await con).query(comand, [`${name}%`]);
        return register[0];
    };

    async AddBookDatabase(infoBook){
        const comand = `
            INSERT INTO TB_LIVRO(ID_USUARIO,NM_LIVRO, NM_AUTOR, DS_ISBN, DS_EDITORA, DS_EDICAO, DS_SINOPSE, DT_PUBLICACAO, DS_IDIOMA,BT_DISPONIVEL, QTD_PAGINAS, VL_PRECO)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `
        const [register] = await (await con).query(comand, [infoBook.idUsuario, infoBook.nameBook, infoBook.author, infoBook.insbn, infoBook.editora,
            infoBook.edition, infoBook.synopsis, infoBook.publication, infoBook.language, infoBook.available, infoBook.amountPage, infoBook.price]);
        infoBook.id = register.insertId;
        return infoBook;
    };

    async VerificationDataAddBooks(infoBook){
        if(!infoBook.idUsuario)
            throw new Error('id user not informed!')
    
        if(!infoBook.nameBook)
            throw new Error('Name not informed!')
            
        if(!infoBook.insbn)
            throw new Error('INSBN not informed!')

        if(!infoBook.editora)
            throw new Error('Publish Company not informed!')

        if(!infoBook.edition)
            throw new Error('Edition not informed! ')

        if(!infoBook.synopsis)
            throw new Error('Synopsis not informed!')

        if(!infoBook.publication)
            throw new Error('Publication not informed!')

        if(!infoBook.language)
            throw new Error('Language not informed!')

        if(!infoBook.available)
            throw new Error('Available not informed!')

        if(!infoBook.amountPage)
            throw new Error('Amout Page not informed!')

        if(!infoBook.price)
            throw new Error('Price not informed!')
    }
};

const book = new Books();

export default book;