import "../styles/_CardContent.scss";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Locations = ()=>{
    const [locations, setLocations]= useState([])
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/location`)
        .then((res)=> res.json())
        .then((data)=> setLocations(data.results))

    }, [])
    return (
        <div>
            <Typography variant="h4" sx={{m:1, p:1}}>Locations</Typography>
            <section className="contenedor-tarjetas">
             {locations.map((location)=>(
                <CardActionArea key={location.id} className="tarjeta">
                 <Card sx={{m:1, p:1}}>
                    <Link to={`/locations/${location.id}`} className="style-link">
                        <div>
                            <Typography variant="h5">{location.name}</Typography>  
                        </div>
                    </Link> 
                </Card>
               </CardActionArea>
            ))}
            </section>
        </div>
    )
}
export default Locations;