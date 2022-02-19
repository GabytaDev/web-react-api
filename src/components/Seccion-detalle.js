import "../styles/_SeccionDetalle.scss";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const SeccionDetalle = ()=>{
    const param = useParams()
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
       fetch(`https://rickandmortyapi.com/api/character/${param.idCharacter}`) 
       .then((res=> res.json()))
       .then(data=> setCharacters(data))
    },[])

    return(
        <div className="seccion-detalle">
            <div className="modal-detalle">
                <h4>{characters.name}</h4>
                <h3>{characters.status}</h3>
                <div className="img-tarjeta">
                   <img src={characters.image}></img>
                </div>
                
            </div>
        </div>
    )
}

export default SeccionDetalle;