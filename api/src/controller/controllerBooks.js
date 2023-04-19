import { Router } from "express";
import book from "../respository/RespositoryBooks.js";

const server = Router();

server.get('/livros', async (req, res) => {
    try {
        const { id } = req.params

        const livros = await book.ListBooks();

        res.send(livros);
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

export default server;