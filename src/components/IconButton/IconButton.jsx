import classes from '../Button/Button.module.css'

const IconButton = ({src, label, callback, alt}) => {
    return (
        <button onClick={callback} className={classes.button}>
            <img className={classes.iconButton} src={src} alt={alt} />
            <p className={classes.text}>{label}</p>        
        </button>
    )
}

export default IconButton

// Llamada
{/* <IconButton
    src={'/src/assets/icon-name.svg'}
    label={''}
    callback={()=> {console.log("Boton")}}
    alt={''} 
/> */}