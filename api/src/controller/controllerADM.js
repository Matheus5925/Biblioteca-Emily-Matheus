import { Router } from "express";
import adm from "../respository/repositoryADM.js";

const server = Router()

server.post('/login', async (req, resp) =>{
    try {
        const {email, password} = req.body;
        if(!email)
            throw new Error('E-mail not informed!');
        if(!password)
            throw new Error('Password not informed!');

        const response = await adm.LoginAdm(email, password)

        if(!response)
            throw new Error('Credentials invalid!')

        resp.send(response)

    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
});

server.post('/senduser', async (req, res) => {
    try {
        const infoUser = req.body;
        if(!infoUser.name)
            throw new Error('Name not infromed!')
        if(!infoUser.email)
            throw new Error('Email not informed!');
        if(!infoUser.password)
            throw new Error('Passwod not informed!');
        
        const response = await adm.AddUserDataBase(infoUser);

        res.send(response).status(201);
        
    } catch (err) {
        res.status(400).send({
            error: err.message
        })
    }
})

export default server;