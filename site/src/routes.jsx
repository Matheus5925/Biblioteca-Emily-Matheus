import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './login'

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}