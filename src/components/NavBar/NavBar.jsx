import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import classes from './NavBar.module.css'

const NavBar = () =>{

    let cartItems = 15

    return(
        <nav className={classes.navBar}>

            <Button
                label={'Notebooks'}
                style={{width: 120}}
            />
            <Button
                label={'Tablets'}
                style={{width: 120}}
            />
            <Button
                label={'Celulares'}
                style={{width: 120}}
            />

            <CartWidget
                items={cartItems}
            />

        </nav>
    )
}

export default NavBar