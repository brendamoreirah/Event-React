import { BrowserRouter,Route, Routes, Navigate, Router } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroDeEvento from "../pages/cadastroDeEvento/CadastroDeEventos";
import CadastroTipoDeUsuario from "../pages/tipoDeUsuario/TipoDeUsuario";
import ListagemDeEvento from "../pages/listagemDeEvento/ListagemDeEvento";
import { useAuth } from "../contexts/AuthContext";
import { AuthProvider } from '../contexts/AuthContext';
const Privado = (props) => {
    const { usuario } = useAuth();
    //toke, idUsuario, tipoUsuario

    //Se nao estiver autenticado, manda para login
    if (!usuario) {
        return <Navigate to="/"/>;
    }
    //se o tipo do usuario nao for o permitido, bloqueia
    if (usuario.tipoUsuario !== props.tipoPermitido) {
        return <Navigate to="/"/>;
    }

    return <props.Item/>;
};


const Rotas =() => {
    return(
        <BrowserRouter>
        <Routes>
            {/* http://localhost:3000/ => Login */}
            <Route path="/" element={<Login/>} exact/>

            {/* http://localhost:3000/TipoEvento => Cadastro Tipo Eventos */}
            <Route path="/TipoEvento" element={<CadastroTipoEvento/>}/>

            {/* http://localhost:3000/Evento => Cadastro ventos */}
            <Route path="/Evento" element={<CadastroDeEvento/>}/>

            {/* http://localhost:3000/TipoUsuario => Cadastro do Usuario */}
            <Route path="/TipoDeUsuario" element={<CadastroTipoDeUsuario/>}/>

            {/* http://localhost:3000/Eventos => Eventos */}
            <Route path="/ListagemEvento" element={<ListagemDeEvento/>}/>

            <Route path="/" element={<Login/>} exact />
                <Route element={<Privado tipoPermitido="Adm" Item={CadastroDeEvento} />} path="/Evento"  />
                <Route element={<Privado tipoPermitido="Adm" Item={CadastroTipoEvento}/>} path="/TipoEvento"  />
                <Route element={<Privado tipoPermitido="Adm" item={CadastroTipoDeUsuario}/>} path="/TipoUsuario"  />
                <Route element={<Privado tipoPermitido="aluno" item={ListagemDeEvento}/>} path="/ListagemDeEvento"  />

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;