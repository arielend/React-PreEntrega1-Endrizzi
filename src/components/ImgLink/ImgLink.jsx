import logoTienda from './assets/tecno-tienda.svg'
import classes from '../ImgLink/ImgLink.module.css'

const ImgLink = () =>{
    return(
        <a href="#" target="_blank">
            <img className={classes.imgLink} src={logoTienda} alt="logo Tecno Store" />
        </a>
    )
}

export default ImgLink