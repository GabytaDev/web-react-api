import "./App.scss";
import NavBar from "./components/Navbar";
import SeccionPrincipal from "./components/Seccion-principal";
import Footer from "./components/Footer";


const App = ()=>{

  return(
    <div>
      <NavBar/>
      <SeccionPrincipal/>
      <Footer/>
    </div>
  )
}

export default App;
