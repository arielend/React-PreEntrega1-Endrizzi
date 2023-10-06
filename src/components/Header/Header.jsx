import ImgLink from '../ImgLink/ImgLink'
import NavBar from '../NavBar/NavBar'

import classes from '../Header/Header.module.css'

const Header = () => {
    return(
        <header className={classes.header}>

            <ImgLink/>

            <NavBar/>

        </header>
    )
}

export default Header