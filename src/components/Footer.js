import "../styles/_Footer.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Footer = ()=>{
    return(
        <div>
            <section className="content-footer">
                <p>Hecho por Gabriela Loyola Carpio</p>
                <div className="icon"> <GitHubIcon/></div>
                <div className="icon"> <MailOutlineIcon/></div>


            </section>
        </div>
    )
}
export default Footer;