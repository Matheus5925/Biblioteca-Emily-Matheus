import {con} from './connection.js';

class Books{
    async ListarLivros(){
        const comando = `
            SELECT * FROM TB_LIVRO
        `
        const [registro] = await (await con).query(comando);
        return registro;
    }
}

const book = new Books();

export default book;