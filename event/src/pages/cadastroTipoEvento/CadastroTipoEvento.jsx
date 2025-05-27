import "./CadastroTipoEvento.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_CadastroTipoevento from "../../assets/img/undraw_add_tasks_re_s5yj (1) 1.png";

import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import api from "../../Services/services";

const CadastroTipoEvento = () => {


  const [tipoEvento, setTipoEvento] = useState([]);
  const [listaTipoEvento, setListaTipoEvento] = useState([]);

   function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

  async function cadastrarTipoEvento(evt) {
    evt.preventDefault();

    if (tipoEvento.trim() != "") {
      //tratamento de execao

      try {
        await api.post("tiposEventos", { tituloTipoEvento: tipoEvento })
        alert("Sucesso! Cadastro realizado com sucesso");
        setTipoEvento("");

      } catch (error) {
        console.log(error);

      }
    }

  }

  //funçao para trazer tipoEvento para o meu select
  async function listarTipoEvento() {

    try {
      const resposta = await api.get("tiposEventos");
      setListaTipoEvento(resposta.data);

    } catch (error) {
      console.log(error)
    }

  }

  async function editarTipoEvento(tipo) {
    const { value: novoTipoEvento } = await Swal.fire({
      title: "Modifique seu Tipo Evento",
      input: "text",
      inputLabel: "Novo Tipo Evento",
      inputValue: tipo.tituloTipoEvento,
      showCancelButton: true,
      inputValidator: (value) => {
        if(!value) {

          return "O campo não pode estar vazio!";
        }
      }

    });
    if(novoTipoEvento){
      try {
       await api.put(`TiposEventos/${tipo.idTipoEvento}`,
        {tituloTipoEvento: novoTipoEvento})
        Swal.fire(`O TipoEvento modificado ${novoTipoEvento}`);
      } catch (error) {
        console.log(error);
        
      }
    }

  }


  async function excluirTipoEvento(id) {
    const resultado = await Swal.fire({
    title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#3F3D56',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
    });

    if(resultado.isConfirmed) {
      try {
        await api.delete(`TiposEventos/${id.idTipoEvento}`);
        alertar("sucess", "Evento excluido com sucesso");
        listarTipoEvento();
      } catch (error) {
        console.log(error);
        alertar("error", "Erro ao Excluir")
        
      }
    }
    
  }


  //useEffect é quando a pagina for renderisada/atualizada irá aparecer as coisas novas
  useEffect(() => {
    listarTipoEvento();
  }, []);

  return (
    <>
      <Header />

      <Cadastro
        img_banner={banner_CadastroTipoevento}
        titulo_cadastro=" Cadastro Tipo De Eventos"
        visible="none"
        nomes="Titulo"
        funcCadastro={cadastrarTipoEvento}
        valorInput={tipoEvento}
        setValorInput={setTipoEvento}
        data="none"
      />

      <Lista
        tituloLista="Tipos Eventos"
        titulo="Titulo"
        tipoLista="TiposEventos"
        visibilidade="none"
        lista={listaTipoEvento}
        funcEditar={editarTipoEvento}
       funcExcluir={excluirTipoEvento}

      />


      <Footer />

    </>
  )
}
export default CadastroTipoEvento;