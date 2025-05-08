import "./TipoDeUsuario.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import  banner_CadastroTipoDeUsuario from "../../assets/img/undraw_add_user_re_5oib 1.png"

const TipoDeUsuario = () => {
    return (
      <>
        <Header/>

        <Cadastro
         img_banner = {banner_CadastroTipoDeUsuario}
         tituloCadastro = " Cadastro Tipo De Usuario"
         visibilidade = "none"
         nomes= "Titulo"
        />

        <Lista
         tituloLista = " Tipo De Usuario"
         titulo = "Titulo"
         visibilidade = "none"/>
      

        <Footer/>


        </>
    )
}

export default TipoDeUsuario;