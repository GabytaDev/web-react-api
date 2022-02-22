import "../styles/_StylesDetalles.scss";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const DetalleEpisodio = ()=>{
    const param = useParams()
    const [episodes, setEpisodes] = useState([])

    useEffect(()=>{
       fetch(`https://rickandmortyapi.com/api/episode/${param.idEpisode}`) 
       .then((res=> res.json()))
       .then(data=> setEpisodes(data))
    },[])
    
    return(
        <div>
        <div className="seccion-detalle">
            <div className="modal-detalle-card">
                <h2> Episode: {episodes.name}</h2>
                <CardContent>
                <Typography variant="body1"> Date: {episodes.air_date}</Typography>   
                 <Typography variant="body1"> Seasson and Episode: {episodes.episode}</Typography>
                </CardContent> 
            </div>
        </div>
        </div>
    )
}
export default DetalleEpisodio;