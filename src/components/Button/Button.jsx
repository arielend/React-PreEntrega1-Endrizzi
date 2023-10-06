import classes from './Button.module.css'

const Button = ({label, callback, style}) =>{
    return (
        <button className={classes.button} onClick={callback} style={style}>
            <label className={classes.text}>{label}</label>
        </button>
    )
}

export default Button