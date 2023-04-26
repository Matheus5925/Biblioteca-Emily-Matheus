import { Link as div } from "react-router-dom"
import logo from "../../assets/image/logo-biblioteca.png";
import iconeCasa from "../../assets/image/casa-menu.png";
import iconeConsulta from "../../assets/image/consultar-menu.png";
import iconeMais from "../../assets/image/mais-menu.png";
import iconeSair from "../../assets/image/sair-menu.png";
import "./index.scss";

export default function MenuLateral() {
    return (
        <nav className="menu-nav">
            <div className="conteudo-principal-nav">
                <div className="cabecalho-nav">
                    <img src={logo} alt="logo" />
                    <h2>BookingMonk</h2>
                </div>
                <div className="link-nav">
                    <div className="link-pagina">
                        <img src={iconeCasa} alt="icone casa" />
                        <p>Home</p>
                    </div>
                    <div className="link-pagina">
                        <img src={iconeMais} alt="icone mais" />
                        <p>Cadastrar</p>
                    </div>
                    <div className="link-pagina">
                        <img src={iconeConsulta} alt="icone consulta" />
                        <p>Consultar</p>
                    </div>
                </div>
            </div>
            <div className="botao-nav">
                <img src={iconeSair} alt="botao de sair" />
                <p>Sair</p>
            </div>
        </nav>
    )
}