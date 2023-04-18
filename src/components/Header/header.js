
import { Link } from "react-router-dom";
import './header.css'

function Header(){
    return (
        <div className="header-container">
            <h2>Pagina de Visita</h2>
            <div className="menu" >
                <Link to="/" >Home</Link>
                <Link to="/profile" >Sobre Nós</Link>
                <Link to="/contact" >Contato</Link>

            </div>
            
        </div>
    )
}

export default Header;