import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";

import Comentario from "../../assets/img/Vector (1).png"
import Descricao from "../../assets/img/informacoes (1) 1.png"
import Toggle from "../../components/toggle/Toggle";

import "./ListagemDeEvento.css";
import { useEffect, useState } from "react";
import api from "../../Services/services"

//improtar a biblioteca da data = format
import { format } from "date-fns";

//importar modal
import Modal from "../../components/modal/Modal"

import Swal from "sweetalert2";

import { useAuth } from "../../contexts/AuthContexts";


const ListagemDeEvento = () => {

    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModal] = useState("");

    const [dadosModal, setDadosModal] = useState({});
    //idEvento, etc.
    const [modalAberto, setModalAberto] = useState(false)

    //filtro
    const [filtroData, setFiltroData] = useState("todos");

    const {usuario} = useAuth();
    // const [usuarioId, setUsuarioId] = useState("3FA85F64-5717-4562-B3FC-2C963F66AFA6")


    async function listarEventos() {
        try {

            //pego os eventos em geral
            const resposta = await api.get("Eventos");
            const todosOsEventos = resposta.data;

            const respostaPresenca = await api.get("PresencasEventos/ListarMinhas/" + usuario.idUsuario)
            const minhasPresencas = respostaPresenca.data

            const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento === eventosComPresencas.idEvento);

                return {
                    //AS INFORMACOES TANTO DE EVENTOS QUANTO DE EVENTOS QUE POSSUEM PRESENCA
                    ...atualEvento,// MATEM os dados originais do evento atual
                    possuiPresenca: presenca?.situacao === true,
                    idPresenca: presenca?.presencaEvento || null
                }
            })

            setListaEventos(eventosComPresencas);

            console.log(`Informacoes de todos os eventos:`)
            console.log(todosOsEventos)

            console.log(`Informacoes de todos os eventos:`)
            console.log(minhasPresencas)

            console.log(`Informacoes de todos os eventos:`)
            console.log(eventosComPresencas)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarEventos();
        // console.log(usuario);
    }, [])

    function abrirModal(tipo, dados) {
        setTipoModal(tipo)
        setDadosModal(dados)
        setModalAberto(true)
    }

    function fecharModal() {
        setModalAberto(false);
        setDadosModal({});
        setTipoModal("");
    }

    

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca != "") {
                //atualizacao: situacao para FALSE
                await api.put(`PresencaEventos/${idPresenca}`,
                    { situacao: true })
                Swal.fire(`Removido!`, `Sua presenca foi removida`, `sucess`);
            } else if (idPresenca != "") {
                //atualizacao: situacao para TRUE
                await api.put(`PresencaEventos/${idPresenca}`,
                    { situacao: true });
                Swal.fire(`Confirmado`, `Sua presenca foi confirmada`, `sucess`);
            } else {
                //cadstrar uma nova presenca
                await api.post("PresencasEventos", { situacao: true, idUsuario: usuario.idUsuario, idEvento: idEvento });
                Swal.fire(`Confirmado!`, `Sua presenca foi confurmada`, `secess`);
                listarEventos()
            }
        } catch (error) {
            console.log(error)
        }
    }


    function filtrarEventos() {
        const hoje = new Date();

        return listarEventos.filter(evento => {
            const dataEvento = new Date(evento.dataEvento)

            if (filtroData.includes("todos")) return true;
            if (filtroData.includes("futuros") && dataEvento > hoje)
                return true;
            if (filtroData.includes("passados") && dataEvento < hoje)
                return true;

            return false;
        });


    }


    return (
        <>
            <Header />

            <section className="ListagemDeEvento">
                <h1>Eventos</h1>
                <hr className="linha_titulo" />


                <div className="tabela_listagem layout_grid">

                    <div className="left  seletor">
                        <label htmlFor="eventos"></label>
                        <select onChange={(e) => setFiltroData([e.target.value])}>
                            <option value="todos">Todos os eventos</option>

                            <option value="futuros">Somente futuros</option>
                            <option value="passados">Somente passados</option>

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
                                filtrarEventos() && filtrarEventos().map((item) => (
                                    <tr className="item_listagem espaco">
                                        <td className="left" data-cell="Título">{item.nomeEvento}</td>
                                        <td className="lefft" data-cell="Data Do Evento">{format(item.dataEvento, "dd/MM/yy")}</td>
                                        <td className="left" data-cell="Tipo Evento">{item.tiposEvento.tituloTipoEvento}</td>

                                        <td className="left" data-cell="Descricao">
                                            <button className="icon" onClick={() => abrirModal
                                                ("descricaoEvento", { descricao: item.descricao })} >
                                                <img src={Descricao} alt="" />
                                            </button>
                                        </td>

                                        <td className="right" data-cell="Comentários">
                                            <button className="icon" onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}>
                                                <img src={Comentario} alt="" />
                                            </button>
                                        </td>

                                        <td className="right" data-cell="Participar"><Toggle
                                            presenca={item.possuiPresenca}
                                            manipular={() => manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)}
                                        /></td>
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

            {modalAberto && (
                <Modal
                    titulo={tipoModal == "descricaoEvento" ? " Descrição do evento" : "Comentário"}
                    //estou vereficando qual é o tipo do modal
                    tipoModel={tipoModal}

                    idEvento={dadosModal.idEvento}

                    descricao={dadosModal.descricao}

                    fecharModal={fecharModal}


                />
            )}


        </>
    );
}

export default ListagemDeEvento;
