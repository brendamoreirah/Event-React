import Logo from "../../assets/img/logo1.svg"
import "./Login.css"
import Botao from "../../components/botao/Botao"
import api from "../../Services/services"
import { useEffect, useState } from "react";
import { userDecodeToken } from "../../auth/Auth";
import secureLocalStorage from "react-secure-storage";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate

    async function realizarAutenticacao(e){
        e.preventDefault();

        const usuario = {
            email: email,
            senha: senha
        }
        if(senha.trim() != "" || email.trim() != ""){

            try {
                const resposta = await api.post("Login", usuario);
                const token =resposta.data.token;

                if(token){
                    //token sera decodificado:
                   const tokenDecodificado = userDecodeToken(token);
                    // console.log("tokem decodificado!")
                    // console.log(tokenDecodificado.tipoUsuario);

                    secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado))

                    if(tokenDecodificado.tipoUsuario === "aluno"){
                        //redirecionar a tela de lista de eventos(branco)
                        navigate("/Eventos")
                    }else{
                        //ele vai me redirecionar para a tela de cadastro de eventos(vermelha)
                    }

                }
                
                console.log(token);
                
            } catch (error) {
                console.log(error);
            }
        }else{
            alert("Preencha os campos vazios para realizar o login!")
        }

    }

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Event" />
                <form action="" className="formulario_login" onSubmit={realizarAutenticacao}>
                
                    <div className="campos_login">
                        <div className="campo_input">
                        <input type="username" name="nome" 
                         placeholder="Username"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="campo_input">
                    
                        <input type="password" 
                         name="Password" placeholder="Password"
                          value={senha}
                         onChange={(e)=>setSenha(e.target.value)}/>
                         
                        </div>
                    </div>
                    <a href="">Esqueceu a senha?</a>
                    <Botao nomeDoBotao="Entar" />
      
                </form>
            </section>
        </main>


    )
}
export default Login;