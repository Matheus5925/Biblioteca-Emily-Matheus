import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './login'
import MenuLateral from './components/MenuLateral'
import HomeAdm from './admin/home'
import ListarLivroLista from './components/Pesquisar-livros'

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/inicio' element={<MenuLateral/>}/>
                <Route path='/home' element={<HomeAdm/>} >
                </Route>
                <Route path='/teste' element={<ListarLivroLista/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}