import { Router } from "express";
import adm from "../respository/repositoryADM.js";

const server = Router()

server.post('/login', async (req, resp) =>{
    try {
        const {email, senha} = req.body;
        if(!email)
            throw new Error('E-mail não informado');
        if(!senha)
            throw new Error('Senha não informada');

        const resposta = await adm.LoginAdm(email, senha)

        if(!resposta)
            throw new Error('Credenciais inválidas')

        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
})

export default server;