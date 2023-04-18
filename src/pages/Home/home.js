import { Link } from "react-router-dom";

function Home() {
    return (
      <div >
       <h1> Bem vindo a pagina Home </h1>
      <br/> <br/>
      <Link to="/profile" >Profile</Link>


      </div>
    );
  }
  
  export default Home;
  