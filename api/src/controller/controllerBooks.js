import { Router } from "express";
import book from "../respository/RespositoryBooks.js";

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

        await book.VerificationDataAddBooks(infoBook)
        // if(!infoBook.idUsuario)
        //     throw new Error('id user not informed!')
    
        // if(!infoBook.nameBook)
        //     throw new Error('Name not informed!')
            
        // if(!infoBook.insbn)
        //     throw new Error('INSBN not informed!')

        // if(!infoBook.editora)
        //     throw new Error('Publish Company not informed!')

        // if(!infoBook.edition)
        //     throw new Error('Edition not informed! ')

        // if(!infoBook.synopsis)
        //     throw new Error('Synopsis not informed!')

        // if(!infoBook.publication)
        //     throw new Error('Publication not informed!')

        // if(!infoBook.language)
        //     throw new Error('Language not informed!')

        // if(!infoBook.available)
        //     throw new Error('Available not informed!')

        // if(!infoBook.amountPage)
        //     throw new Error('Amout Page not informed!')

        // if(!infoBook.price)
        //     throw new Error('Price not informed!')


        const result = await book.AddBookDatabase(infoBook);

        resp.send(result)
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
})

export default server;