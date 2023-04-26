import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './login'
import MenuLateral from './components/MenuLateral'

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/inicio' element={<MenuLateral/>}/>
            </Routes>
        </BrowserRouter>
    )
}