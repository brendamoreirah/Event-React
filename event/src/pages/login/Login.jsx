import Logo from "../../assets/img/logo1.svg"
import "./Login.css"
import Botao from "../../components/botao/Botao"


const Login = () => {

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Event" />
                <form action="" className="formulario_login">
                
                    <div className="campos_login">
                        <div className="campo_input">
                        <input type="username" name="nome"  placeholder="Username"/>
                        </div>
                        <div className="campo_input">
                    
                        <input type="password"  name="Password" placeholder="Password"/>
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