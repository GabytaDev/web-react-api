
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Characters = ()=>{
 const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((res)=> res.json())
        .then((data)=> setCharacters(data.results))
    }, [])

    return (
        <div>
            <h2>Characters</h2>
            <div className="contenedor-tarjetas">
            {characters.map(character =>(
               <Link to={`/characters/${character.id}`}>
                   <div>
                       <h3>{character.name}</h3>
                       <h3>{character.status}</h3>
                       <img src={character.image}/>
                   </div>
               </Link> 
            ))}
            </div>
        </div>
    )
}
export default Characters;