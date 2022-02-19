import "./App.scss";
import NavBar from "./components/Navbar";
import SeccionPrincipal from "./components/Seccion-principal";
import SeccionDetalle from "./components/Seccion-detalle";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
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
        <Route path="/characters/:idCharacter" element={<SeccionDetalle/>}/>
      </Routes>

     
     <Footer/> 
      </BrowserRouter>
    </div>
  )
}

export default App;
