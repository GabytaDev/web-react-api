import "./App.scss";
import NavBar from "./components/Navbar";
import SeccionPrincipal from "./components/Seccion-principal";
import SeccionDetalle from "./components/Seccion-detalle";
import Footer from "./components/Footer";


const App = ()=>{

  return(
    <div>
      <NavBar/>
      <SeccionPrincipal/>
      <SeccionDetalle/>
      <Footer/>

    </div>
  )
}

export default App;
