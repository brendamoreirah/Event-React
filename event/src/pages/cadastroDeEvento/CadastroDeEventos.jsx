import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_CadastroDeEvento from "../../assets/img/undraw_add_information_j2wg 1 (1).png";

import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import api from "../../Services/services";

const CadastroDeEventos = () => {


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


        

    return(
     <>
        <Header/>

        <Cadastro
                img_banner = {banner_CadastroDeEvento}
                titulo_cadastro = " Cadastro De Eventos"
                nomes= "Nome"
                nomedescricao="Descrição"
                />

     
            <Lista
            titulo_lista = "Eventos"
            titulo = "Titulo"
            visibilidade = "none"
        />
             
            
        
      
        <Footer/>
        </>

    )
}
export default CadastroDeEventos;