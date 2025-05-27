import "./TipoDeUsuario.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_CadastroTipoDeUsuario from "../../assets/img/undraw_add_user_re_5oib 1.png"

import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from "sweetalert2";

const TipoDeUsuario = () => {


  const [tipoUsuario, setTipoUsuario] = useState("");
  const [listaTipoUsuario, setListaTipoUsuario] = useState([]);

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

  async function cadastrarTipoUsuario(evt) {
    evt.preventDefault();

    if (tipoUsuario.trim() !== "") {

      try {
        await api.post("tiposUsuarios", { tituloTipoUsuario: tipoUsuario })
        alertar("success", "Cadastro realizado com sucesso");
        setTipoUsuario("");

      } catch (error) {
        console.log(error);
      }
    }
  }

  async function listarTipoUsuario() {
    try {
      const resposta = await api.get("tiposUsuarios");
      setListaTipoUsuario(resposta.data);

    } catch (error) {
      console.log(error);
    }
  }

   async function editarTipoUsuario(tiposUsuarios) {
        const { value: novoTipoUsuario } = await Swal.fire({
            title: "Modifique seu Tipo Usuario",
            input: "text",
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#000000',
            inputLabel: "Novo Tipo Usuario",
            inputValue: tiposUsuarios.tituloTipoUsuario,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo não pode estar vazio!";
                }
            }
        });
        if (novoTipoUsuario) {
            try {
                await api.put(`tiposUsuarios/${tiposUsuarios.idTipoUsuario}`,
                    { tituloTipoUsuario: novoTipoUsuario });
                alertar("success", "Tipo Evento Modificado!")
            } catch (error) {

            }
            Swal.fire(`Seu novo Tipo Evento: ${novoTipoUsuario}`);
        }
    }


        async function excluirTipoUsuario(id) {
        Swal.fire({
            title: 'Tem Certeza?',
            text: "Essa ação não poderá ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await api.delete(`tiposUsuarios/${id.idTipoUsuario}`);
                alertar("success", "TipoUsuario Excluido!");
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        })
    }


  //useEffect é quando a pagina for renderisada/atualizada irá aparecer as coisas novas
  useEffect(() => {
    listarTipoUsuario();
  }, [listaTipoUsuario]);


  return (
    <>
      <Header 
      user="Administreador"
      botao_logar= "none"/>

      <Cadastro
        img_banner={banner_CadastroTipoDeUsuario}
        titulo_cadastro=" Cadastro Tipo De Usuario"
        visible="none"
        nomes="Titulo"
        funcCadastro={cadastrarTipoUsuario}
        valorInput={tipoUsuario}
        setValorInput={setTipoUsuario}
        data="none"
        
      />

      <Lista
        tituloLista=" Tipo De Usuario"
        titulo="Titulo"
        visibilidade="none"

        tipoLista="tipoUsuario"
        lista={listaTipoUsuario}
        funcExcluir={excluirTipoUsuario}
        funcEditar={editarTipoUsuario}
        linha_titulo="Tipo Usuario"
        titulo_lista="Tipo Usuario"

      />


      <Footer />


    </>
  )
}

export default TipoDeUsuario; 