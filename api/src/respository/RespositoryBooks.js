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
}

const book = new Books();

export default book;