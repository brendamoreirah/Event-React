import "./Lista.css";
import Editar from "../../assets/img/editar.png"
import Excluir from "../../assets/img/excluir.png"


const Lista = (props) => {
    return (
        <>
            <section className="listagem">
            <h1>{`Lista de ${props.tituloLista}`}</h1>
            <hr />

            <div className="tabela layout_grid">
                <table>
                    <thead>
                        <tr className="tabela_cabecalho">
                            <th>{props.titulo}</th>
                            <th style={{display:props.visibilidade}}>Tipo Evento</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr className="item_lista">
                                <td data-cell={props.titulo}>xxxxxxxxxx</td>
                                <td data-cell="Editar"><img src={Editar} alt="" /></td>
                                <td data-cell="Excluir">< img src={Excluir} alt="" /></td>
                            </tr>
                        </tbody>
                </table>


            </div>


        </section>
        </>
    

    )

}
export default Lista;