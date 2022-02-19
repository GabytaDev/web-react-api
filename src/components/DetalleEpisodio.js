import "../styles/_CardContent.scss";
import "../styles/_DetalleEpisodio.scss";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const DetalleEpisodio = ()=>{
    const param = useParams()
    const [episodes, setEpisodes] = useState([])

    useEffect(()=>{
       fetch(`https://rickandmortyapi.com/api/episode/1`) 
       .then((res=> res.json()))
       .then(data=> setEpisodes(data))
    },[])
    
    return(
        <div>
            <div>
                <h2>{episodes.name}</h2>
                
                <CardContent>
                <Typography variant="body1"> Date: {episodes.air_date}</Typography>   
                 <Typography variant="body1"> Seasson and Episode: {episodes.episode}</Typography>
                </CardContent>
               
                
            </div>
        </div>
    )
}
export default DetalleEpisodio;