import { Link } from "react-router-dom";

function Profile() {
    return (
      <div >
       <h1> Bem vindo ao profile </h1>
       <br/><br/>

       <Link to="/" >Home</Link>
       <br/>
       <Link to="/contact" >Entrar em contatto</Link>

      </div>
    );
  }
  
  export default Profile;
  