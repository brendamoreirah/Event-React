import "./CadastroTipoEvento.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";

const CadastroTipoEvento =() => {
    return(
        <>
          <Header/>

            <Lista
            tituloLista = "Lista Tipo Evento"
            titulo = "Titulo"
            visibilidade = "none"
            />
            

            <Footer/>

          </>
    )
}
export default CadastroTipoEvento;