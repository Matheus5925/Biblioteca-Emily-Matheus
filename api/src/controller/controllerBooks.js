import { Router } from "express";
import book from "../respository/RespositoryBooks.js";
import CheckDataBooks from "../middlewares/VerificationBooks.js";

const server = Router();

server.get('/getallbooks', async (req, res) => {
    try {
        const livros = await book.ListBooks();
        if(!livros)
            throw new Error('Falha ao procurar livros!');

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

server.get('/books/name', async (req, resp) =>{
    try {
        const {name} = req.query

        if(!name)
            throw new Error('name of book not was informed');

        const BookFilterToName = await book.SearchBooksToName(name);

        if(!BookFilterToName)
            throw new Error('Book is not exists')

        resp.send(BookFilterToName)
        
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
});

server.post("/addbook", async (req, resp) => {
    try {
        const infoBook = req.body

        await CheckDataBooks.VerificationDataAddBooks(infoBook)


        const result = await book.AddBookDatabase(infoBook);

        resp.send(result)
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
})

export default server;