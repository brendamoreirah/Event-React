import React, { useEffect, useState } from 'react'
import ImgDeletar from "../../assets/img/deletar.png"

import "./Modal.css"

import api from "../../Services/services"

const Modal = (props) => {

    const [comentarios, setComentarios] = useState([]);

    const [usuarioId, setUsuarioId] = useState("E402DC2E-873E-4D93-A188-5B392EE9BEE2");
    
    const [novoComentario, setNovoComentario] = useState("");

    async function listarComentarios(){
        try {
           const resposta = await api.get(`ComeentariosEventos/
            ListarSoemnteExibe?id=${props.idEvento}`);

            setComentarios(resposta.data);

           console.log(resposta.data)

        } catch (error) {
            console.log(error)
        }
    }


    async function cadastrarComentario(comentario){
       try {
        await api.post("ComentariosEventos", {
            idUsuario: usuarioId,
            idEvento: props.idEvento,
            descricao: comentarios})
       } catch (error) {
        console.error(error);
       }
    }


    async function deletarComentario(idComentario){
          try {
            await api.delete(`ComentariosEventos/${idComentario}`);
          } catch (error) {
            console.log(error)
          }
    }


    useEffect(() => {
          listarComentarios();
    }, [])
    return (
        <>
            <div className="model-overlay" onClick={props.fecharModal}
            ></div>
            <div className="model">
                <h1>{props.titulo}</h1>
                <div className="model_conteudo">
                    {props.tipoModel === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ) : (
                        <>
                            {comentarios.map((item) => (

                                <div key={item.idComentarioEvento}>
                                    <strong>{item.usuario.nomeUsuario}
                                    </strong>
                                    <img src={ImgDeletar}
                                        alt="Deletar" 
                                        onClick={() => deletarComentario(item.idComentarioEvento)}/>
                                    <p>{item.descricao}</p>
                                    <hr />
                                </div>
                            ))}
                            <div>
                                <input type="text"
                                     placeholder="Escreva seu comentario " 
                                     value={novoComentario}
                                     onChange={(e) => setNovoComentario(e.target.value)}
                                     />
                              
                                <button onClick={() => cadastrarComentario}>
                                    Cadastrar
                                </button>
                            </div>
                        </>

                    )}
                </div>
            </div>

        </>
    )
}


export default Modal
