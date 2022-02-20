import "../styles/_Navbar.scss"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const NavBar = ()=>{
    return(
       
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
        <Link to="/" sx={{ color: 'primary.main'}} className="style-link">Home</Link>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, m:1}}>Finder</Typography>
          <Link to="/characters" fontSize="32" sx={{ color: 'primary.main' }} className="style-link">Characters </Link>
          <Link to="/episodes" fontSize="32" sx={{ color: 'primary.main' }} className="style-link">Episodes </Link>
          <Link to="/locations" fontSize="32" sx={{ color: 'primary.main' }} className="style-link">Locations </Link>
        </Toolbar>
      </AppBar>
    </Box>
      
    )
}

export default NavBar;