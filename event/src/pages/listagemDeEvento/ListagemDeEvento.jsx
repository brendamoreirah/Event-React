import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Participa from "../../assets/img/Vector (4).png"
import NaoParticipa from "../../assets/img/Vector (2).png"
import Comentario from "../../assets/img/Vector (1).png"
import Descricao from "../../assets/img/informacoes (1) 1.png"
import Toggle from "../../components/toggle/Toggle";
import "./ListagemDeEvento.css";
import { useEffect, useState } from "react";


import api from "../../Services/services"

//improtar a biblioteca da data = format
import { format } from "date-fns";
import Modal from "../../components/modal/Modal";

//importar modal




const ListagemDeEvento = () => {

    const [listaEventos, setListaEventos] = useState([]);

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");

            setListaEventos(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    return (
        <>

      

            <section className="ListagemDeEvento">
                <h1>Eventos</h1>
                <hr className="linha_titulo" />


                <div className="tabela_listagem layout_grid">

                    <div className="left  seletor">
                        <label htmlFor="eventos"></label>
                        <select name="eventos" id="">
                            <option value="" disabled selected>Todos os eventos</option>
                            <option value="">Todos os Eventos</option>
                            <option value="">Avela</option>
                            <option value="">Ninho</option>
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr className="cabecalho_listagem ">
                                <th className="left">Título</th>
                                <th className="left">Data do Evento</th>
                                <th className="left">Tipo Evento</th>
                                <th className="left">Descrição</th>
                                <th className="right">Comentários</th>
                                <th className="right">Participar</th>

                            </tr>
                        </thead>
                        {/* <hr className="divi" /> */}
                        <tbody>
                            {listaEventos.length > 0 ? (
                                listaEventos.map((item) => (
                                    <tr className="item_listagem espaco">
                                        <td className="left" data-cell="Título">{item.nomeEvento}</td>
                                        <td className="lefft" data-cell="Data Do Evento">{format(item.dataEvento, "dd/MM/yy")}</td>
                                        <td className="left" data-cell="Tipo Evento">{item.tiposEvento.tituloTipoEvento}</td>
                                        <td className="left" data-cell="Descricao"><img src={Descricao} alt="" /></td>
                                        <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                        <td className="right" data-cell="Participar"><Toggle /></td>
                                    </tr>
                                ))
                            ) :
                                (
                                    <p>Nenhum evento encontrado</p>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>

            <Footer />
            <Modal/>

            
        </>
    );
}

export default ListagemDeEvento;
