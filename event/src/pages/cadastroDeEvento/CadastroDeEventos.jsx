import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_CadastroDeEvento from "../../assets/img/undraw_add_information_j2wg 1 (1).png";


const CadastroDeEventos = () => {
    return(
     <>
        <Header/>

        <Cadastro
                img_banner = {banner_CadastroDeEvento}
                tituloCadastro = " Cadastro De Eventos"
                nomes= "Nome"
                />

     
            <Lista
            tituloLista = " Eventos"
            titulo = "Titulo"
            visibilidade = "none"/>
      
        <Footer/>
        </>

    )
}
export default CadastroDeEventos;