import "./CadastroTipoEvento.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_CadastroTipoevento from "../../assets/img/undraw_add_tasks_re_s5yj (1) 1.png";

const CadastroTipoEvento =() => {
    return(
        <>
          <Header/>

           <Cadastro
                img_banner = {banner_CadastroTipoevento}
                tituloCadastro = " Cadastro Tipo De Eventos"
                visibilidade = "none"
                nomes= "Titulo"
                />
       
            <Lista
            tituloLista = "Tipo Evento"
            titulo = "Titulo"
            visibilidade = "none"

            />
            

            <Footer/>

          </>
    )
}
export default CadastroTipoEvento;