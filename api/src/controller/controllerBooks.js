import { Router } from "express";
import book from "../respository/RespositoryBooks.js";

const server = Router();

server.get('/getallbooks', async (req, res) => {
    try {
        const livros = book.ListarLivros;
        if(!livros)
            throw new Error('Falha ao procurar livros!');

        res.send(livros);
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

server.get('/livros/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const idLivro = await book.SearchBooksToId(id);

        if(!idLivro)
            throw new Error('id nao existe');

        res.send(idLivro);

    } catch (err) {
        res.status(400).send({
            error: err.message
        })
    }
})

export default server;