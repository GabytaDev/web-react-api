import "../styles/_Footer.scss"
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Footer = ()=>{
    return(
        <div>
            <section className="content-footer">
                <Typography variant="h6">Hecho por Gabriela Loyola Carpio</Typography>
                <div className="content-icons">
                <div className="icon"> <GitHubIcon sx={{ fontSize: 40 }} /></div>
                <div className="icon"> <MailOutlineIcon sx={{ fontSize: 40 }} /></div>
                </div>
               

            </section>
        </div>
    )
}
export default Footer;