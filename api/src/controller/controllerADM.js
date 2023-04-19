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
})

export default server;