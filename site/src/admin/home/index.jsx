import MenuLateral from "../../components/MenuLateral";
import HeaderInfos from "../../components/header-info";
import "./index.scss"

function HomeAdm() {
    return(
        <main className="principal-home-adm">
            <section>
                <MenuLateral/>
            </section>
            <section className="home-meio-conteudo">
                <HeaderInfos nome='Matheus Fagundes Fernandes'/>
                <div className="meio-home-imagem"></div>
            </section>
        </main>
    );   
};

export default HomeAdm;