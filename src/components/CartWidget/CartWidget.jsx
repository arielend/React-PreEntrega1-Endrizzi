import iconCart from '../IconButton/assets/icon-cart.svg'
import classes from '../Button/Button.module.css'

const CartWidget = ({items}) =>{
    return(
        <button className={classes.button}>
            <img className="iconButton" src={iconCart} alt="cart icon" />
        <p 
            className={classes.text}
            style={{backgroundColor:'#00CCFF88', width: 25, height: 25, borderRadius:12.5, paddingTop: 5}}
        >{items}</p>        
    </button>        
    )
}

export default CartWidget