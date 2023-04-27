import { useState } from "react"
import lupaBusca from '../../assets/image/icon-buscar.png'

function ListarLivroLista() {
    const [nomeLivro, setNomeLivro] = useState("");

    return(
        <main>
            <div>
                <input placeholder="Buscar Livro Por Nome" type="text" value={nomeLivro} onChange={e => setNomeLivro(e.target.value)}/>
                <img src={lupaBusca} alt="lupa busca" />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>IDENTIFICAÇÃO</th>
                            <th>LIVRO</th>
                            <th>AUTOR</th>
                            <th>LANÇAMENTO</th>
                            <th>DISPONIVEL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>Harry Potter e a Ordem da Fenix</td>
                            <td>Algum doido</td>
                            <td>09/08/2006</td>
                            <td>Sim</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListarLivroLista