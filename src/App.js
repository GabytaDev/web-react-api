import "./App.scss";
import NavBar from "./components/Navbar";
import SeccionPrincipal from "./components/Seccion-principal";
import DetallePersonaje from "./components/DetallePersonaje";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import DetalleEpisodio from "./components/DetalleEpisodio";

const App = ()=>{

  return(
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<SeccionPrincipal/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/characters/:idCharacter" element={<DetallePersonaje/>}/>
        <Route path="/episodes/:idEpisode" element={<DetalleEpisodio/>}/>
      </Routes>

     
     <Footer/> 
      </BrowserRouter>
    </div>
  )
}

export default App;
