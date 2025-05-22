import "./Lista.css";
import Editar from "../../assets/img/editar.png"
import Excluir from "../../assets/img/excluir.png"
import React, { useState } from 'react';


const Lista = (props) => {


    return (
        <>
        <section className="listagem">
            <h1>{`Lista  ${props.tituloLista}`}</h1>
            <hr className="linha_titulo" />

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
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => (
                            <tr className="item_lista"
                            key={item.IdTipoEvento }
                            >
                                <td data-cell={props.titulo}>{props.tipoLista == "TiposEventos" ? item.tituloTipoEvento : item.tituloTipoUsuario}</td>
                                <td data-cell="Tipo Evento" style={{ display: props.visibilidade }} >xxxxxxxxx</td>

                                <td data-cell="Editar" className="botao_edicao">
                                    <img src={Editar} 
                                    onClick={() => props.funcEditar(item)}
                                    
                                    />
                                    
                                    </td>
                                <td data-cell="Excluir" className="botao_edicao">
                                    < img src={Excluir} 
                                    alt="Lixeira"
                                    onClick={() => props.funcExcluir(item)}
                                    // style= {{cursor: "pointer"}}

                                    />
                                    </td>
                            </tr>

                                ))
                            ) : (
                                <p>nenhum evento cadastrado</p>
                            )
                        
                        }
                        </tbody>
                </table>
            </div>

        </section>
        </>
    )
}
export default Lista;