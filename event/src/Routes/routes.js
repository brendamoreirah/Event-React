import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login"
import CadastroDeEventos from "../pages/cadastroDeEvento/CadastroDeEventos";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
                 {/* / => Login*/}
            <Route path="/" element={<Login/>} exact />
                     {/* /CadastroFilme => cadastro filme*/}
                     <Route path="/Eventos" element={<CadastroDeEventos/>}/>
                     <Route path="/CadastroTipoEvento" element={<CadastroTipoEvento/>}/>
        </Routes>
        </BrowserRouter>

    )
}
export default Rotas;