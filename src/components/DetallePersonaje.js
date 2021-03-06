import "../styles/_StylesDetalles.scss";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallePersonaje = () => {
    const param = useParams()
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${param.idCharacter}`)
            .then((res => res.json()))
            .then(data => setCharacters(data))
    }, [param.idCharacter])

    return (
        <div className="contenedor-detalle">
        <div className="seccion-detalle">
            <div className="modal-detalle-card">
                <h2>{characters.name}</h2>
                <div>
                    <img src={characters.image} alt="imagen-personaje"></img>
                </div>
                <CardContent>
                    <Typography variant="body1">Status: {characters.status}</Typography>
                    <Typography variant="body1">Specie: {characters.species}</Typography>
                    <Typography variant="body1">Gender: {characters.gender}</Typography>
                </CardContent>

            </div>
        </div>
        </div>
    )
}

export default DetallePersonaje;