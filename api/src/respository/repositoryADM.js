import {con} from './connection.js';

class Administrador{
    async LoginAdm(email, password){
        const comando = `
        SELECT DS_EMAIL, DS_SENHA, NM_USUARIO
        FROM TB_USUARIO
        WHERE DS_EMAIL = ? and
            DS_SENHA = ?`

        const [registro] = await (await con).query(comando, [email, password]);
        return registro[0];
    }

    async AddUserDataBase(infoUser){
        const comand = `
            insert into TB_USUARIO(NM_USUARIO, DS_EMAIL, DS_SENHA)
		    VALUE(?, ?, ?);
        `
        const [register] = await (await con).query(comand, [infoUser.name, infoUser.email, infoUser.password]);
        infoUser.id = register.insertId;
        return infoUser;
    }
}

const adm = new Administrador();

export default adm;