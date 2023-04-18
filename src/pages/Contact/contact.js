import { Link } from "react-router-dom";

function Contatc(){
    return (
        <div>
            <h1>Entrar em Contato com a Empresa</h1>
            <br/> <br/>
            <Link to="/profile" >Profile</Link>
            <br/>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Contatc;