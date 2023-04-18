import {con} from './connection.js'

class Administrador{
    async LoginAdm(email, senha){
        const comando = `
        SELECT DS_EMAIL, DS_SENHA, NM_USUARIO
        FROM TB_USUARIO
        WHERE DS_EMAIL = ? and
            DS_SENHA = ?`

        const [registro] = await (await con).query(comando, [email, senha]);
        return registro[0]
    }
}

const adm = new Administrador()

export default adm