import "../styles/_Navbar.scss"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const NavBar = ()=>{
    return(
       
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Finder
          </Typography>
          <Button color="inherit">Character</Button>
          <Button color="inherit">Episodes</Button> 
          {/* <div>
                <ul className="contenedor-links-nav">
                    <div className="link" id="link-characters"><li><a href="#characters">Characters</a></li></div>
                    <div className="link" id="link-episodes"><li><a href="#episodes">Details</a></li></div>   
                </ul>
            </div> */}
        </Toolbar>
      </AppBar>
    </Box>
            
           
            
      
    )
}

export default NavBar;