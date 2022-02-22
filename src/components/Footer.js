import "../styles/_Footer.scss"
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer = ()=>{
    return(
        <div> 
            <Box sx={{bgcolor:'primary.main',color: 'primary.contrastText', p:2 }}>
                <Typography variant="h6" sx={{display:"flex", justifyContent:"center"}}>Hecho por Gabriela Loyola Carpio</Typography>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <GitHubIcon sx={{ fontSize: 40 }} className="icon"/>
                         <MailOutlineIcon sx={{ fontSize: 40 }} className="icon" />
                    </Box>
            </Box>  
        </div>
    )
}
export default Footer;