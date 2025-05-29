import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Participa from "../../assets/img/Vector (4).png"
import NaoParticipa from "../../assets/img/Vector (2).png"
import Comentario from "../../assets/img/Vector (1).png"
import Descricao from "../../assets/img/informacoes (1) 1.png"
import Toggle from "../../components/toggle/Toggle";
import "./ListagemDeEvento.css";



function ListagemDeEvento() {

    //usar um map(item), exemplo item.nome 
    //criar uma funcao de listar

    //    const [listagemDeEvento, setListagemDeEvento] = useState([])

    //  async function listagemDeEvento() {
    //     try {
    //         const resposta = await api.get("ListagemDeEventos")
    //         setListagemDeEvento(resposta.listagemDeEvento)
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }





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
                                <th className="left">Data do Evento</th>
                                <th className="left">Tipo Evento</th>
                                <th className="left">Descrição</th>
                                <th className="right">Comentários</th>
                                <th className="right">Participar</th>

                            </tr>
                        </thead>
                        {/* <hr className="divi" /> */}
                        <tbody>
                            <tr className="item_listagem espaco">
                                <td className="left" data-cell="Título">Nome Evento</td>
                                <td className="lefft" data-cell= "Data Do Evento">25/05/2025</td>
                                <td className="left" data-cell="Tipo Evento">Tipo de Evento</td>
                                <td className="left" data-cell="Descricao"><img src={Descricao} alt=""/></td>
                                <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                 <td className="right" data-cell="Participar"><Toggle/></td>
                            </tr>


                        </tbody>

                        <tbody>
                            <tr className="item_listagem separa">
                                <td className="left" data-cell="Título">Nome Evento</td>
                                <td className="lefft" data-cell= "Data Do Evento">25/05/2025</td>
                                <td className="left" data-cell="Tipo Evento">Tipo de Evento</td>
                                <td className="left" data-cell="Descricao"><img src={Descricao} alt=""/></td>
                                <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
                                <td className="right" data-cell="Participar"><Toggle/></td>

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
