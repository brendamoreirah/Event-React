import "./Header.css"
import Logo from "../../assets/img/logo1.svg"
import { Link } from "react-router-dom"; 
import Admin from "../../assets/img/Vector (1).png"

const Header = () =>{
    return(

        <header>
               <div className="layout_grid  cabecalho">
               <Link to="/">
            <img src={Logo}alt="Logo Event" />
            </Link>

            <nav className="nav_header">

            <Link className="link_header" to="/Home">Home</Link>
            <Link className="link_header"  to="/Eventos">Eventos</Link>
            <Link className="link_header" to="/Usuarios">Usuarios</Link>
            <Link className="link_header"  to="/Contatos">Contatos</Link>
            
            </nav>

            <nav className="nav_header admin">
                <Link to="/Administrador" className="link_header" href="">Administrador<img scr={Admin}/></Link>

            </nav>

            </div>
        </header>

    )
}
export default Header;