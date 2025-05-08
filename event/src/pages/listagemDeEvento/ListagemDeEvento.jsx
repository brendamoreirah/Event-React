import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Participa from "../../assets/img/Vector (4).png"
import NaoParticipa from "../../assets/img/Vector (2).png"
import Comentario from "../../assets/img/Vector (1).png"
import "./ListagemDeEvento.css";

function ListagemDeEvento() {
    return (
        <>
            <Header/>

            <section className="ListagemDeEvento">
                    <h1>Eventos</h1>
                    <hr className="linha_titulo" />


                <div className="tabela_listagem layout_grid">

                <div className="left  seletor">
                    <label htmlFor="eventos"></label>
                    <select name="eventos" id="">
                        <option value="" disabled selected>Todos os eventos</option>
                        <option value="">Chocolate</option>
                        <option value="">Avela</option>
                        <option value="">Ninho</option>
                    </select>
                </div>
                    <table>
                        <thead>
                            <tr className="cabecalho_listagem ">
                                <th className="left">Título</th>
                                <th className="left">Tipo Evento</th>
                                <th className="right">Comentários</th>
                                <th className="right">Participar</th>
                            </tr>
                        </thead>
                        {/* <hr className="divi" /> */}
                        <tbody>
                            <tr className="item_listagem espaco">
                                <td className="left" data-cell="Título">Nome Evento</td>
                                <td className="left" data-cell="Tipo Evento">Tipo de Evento</td>
                                <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                <td className="right" data-cell="Participar"><img src={Participa} alt="" /></td>

                            </tr>


                        </tbody>

                        <tbody>
                            <tr className="item_listagem separa">
                                <td className="left" data-cell="Título">Nome Evento</td>
                                <td className="left" data-cell="Tipo Evento">Tipo de Evento</td>
                                <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                <td className="right" data-cell="Participar"><img src={NaoParticipa} alt="" /></td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ListagemDeEvento;
