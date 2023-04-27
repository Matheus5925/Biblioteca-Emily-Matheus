import React from "react"
import "./index.scss"

function HeaderInfos({nome}) {
    
    return(
        <header className="principal-header-info">
            <div className="nome-principal-info-header">
                <p>Seja bem-vindo, {nome}!</p>
            </div>
            <div className="letra-principal-info-header">
                <p>{nome[0]}</p>
            </div>
        </header>
    )   
}


export default HeaderInfos