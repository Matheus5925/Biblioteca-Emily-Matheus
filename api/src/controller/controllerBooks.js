import { Router } from "express";
import book from "../respository/RespositoryBooks.js";

const server = Router();

server.get('/livros', async (req, res) => {
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

export default server;