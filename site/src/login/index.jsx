import { useState } from "react"
import './index.scss'
import logobiblioteca from '../assets/image/logo-biblioteca.png'

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return(
        <main className="page-login-pricipal">
            <section className="card-login-principal">
                <div className="header-login">
                    <img src={logobiblioteca} alt="" />
                    <h2>Seja Bem-Vindo</h2>
                </div>
                <div className="principal-inputs">
                    <div className="inputs-login">
                        <label  htmlFor="">E-mail</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="inputs-login">
                        <label htmlFor="">Senha</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="button-login">
                        <button>Entrar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage