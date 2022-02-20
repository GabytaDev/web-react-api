import "../styles/_StylesDetalles.scss"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const DetalleUbicacion = ()=>{
    const param = useParams()
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/location/${param.idLocation}`)
        .then(res=> (res.json()))
        .then (data=>setLocations(data))
    },[])

    return(
        <div className="seccion-detalle">
            <div className="modal-detalle-card">
                <h2> Location: {locations.name}</h2>
                <CardContent>
                <Typography variant="body1"> Type: {locations.type}</Typography>   
                 <Typography variant="body1"> Dimension: {locations.dimension}</Typography>
                </CardContent> 
            </div>
        </div>
    )
}

export default DetalleUbicacion;