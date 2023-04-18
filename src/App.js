//para poder usar o routes, como o app é o primeiro componente senrenderizado (vinducalado no index.html)
// precisa importar e chamar o routes aqui
import RoutesApp from "./routes";
// import Header from "./components/Header/header"; nao pode usar a nave4gaçao de rotas pelo link por aqui pq n tem cntato nehum com o routs


function App() {
  return (
    <>
    <RoutesApp/>
    </>
  );
}

export default App;
