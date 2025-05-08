import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login"
import CadastroDeEventos from "../pages/cadastroDeEvento/CadastroDeEventos";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroDeEvento from "../pages/cadastroDeEvento/CadastroDeEventos";
import TipoDeUsuario from "../pages/tipoDeUsuario/TipoDeUsuario"
import ListagemDeEvento from "../pages/listagemDeEvento/ListagemDeEvento";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
                 {/* / => Login*/}
            <Route path="/" element={<Login/>} exact />
                     {/* /CadastroFilme => cadastro filme*/}
                     <Route path="/Eventos" element={<CadastroDeEventos/>}/>
                     <Route path="/CadastroTipoEvento" element={<CadastroTipoEvento/>}/>
                     <Route path="/CadastroDeEvento" element={<CadastroDeEvento/>}/>
                     <Route path="/TipoDeUsuario" element={<TipoDeUsuario/>}/>
                     <Route path="/ListagemDeEvento" element={<ListagemDeEvento/>}/>

                     
        </Routes>
        </BrowserRouter>

    )
}
export default Rotas;