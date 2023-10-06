import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemListContainer.module.css'

const ItemListContainer = ({greeting, greetingStyle}) => {
    return (
        <div className={classes.itemListContainer}>

            <h4 style={greetingStyle}>{greeting}</h4>            

            <ItemCount/>

        </div>
    )
}

export default ItemListContainer