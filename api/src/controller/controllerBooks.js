import { Router } from "express";
import book from "../respository/RespositoryBooks.js";

const server = Router();

server.get('/getallbooks', async (req, res) => {
    try {
        const books = await book.ListBooks();
        if(!books)
            throw new Error('Failed to search books!');

        res.send(books);
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
});

server.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const idBook = await book.SearchBooksToId(id);

        if(!idBook)
            throw new Error('id not exist!');

        res.send(idBook);

    } catch (err) {
        res.status(400).send({
            error: err.message
        })
    }
})

export default server;