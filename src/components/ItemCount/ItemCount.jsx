import { useState } from 'react'

import IconButton from '../IconButton/IconButton'
import Button from '../Button/Button'

import iconMinus from '../IconButton/assets/icon-minus.svg'
import iconPlus from '../IconButton/assets/icon-plus.svg'

import classes from './ItemCount.module.css'

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const clickOnAdd = () =>{
        (count > 0) ? console.log(`Items agregados al carrito: ${count}`) : console.log("Debe seleccionar al menos 1 item.")
    }

    let stock = 10

    return (
    <div className={classes.itemCount}>

        <div className={classes.counter}>

            <IconButton
                src={iconMinus}
                label={'Quitar'}
                callback={() => (count>0) && (setCount((count) => count - 1))}
                alt={'icon minus'} 
            />
            
            <label style={{fontSize: 30, minWidth: 60}}>
                {count}
            </label>

            <IconButton
                src={iconPlus}
                label={'Agregar'}
                callback={() => (count < stock) && setCount((count) => count + 1)}
                alt={'icon minus'} 
            />

        </div>

        <div className={classes.addButton}>
            
            <Button 
                label={'Agregar al carrito'}
                style={{width: 280}}
                callback={clickOnAdd}
            />

        </div>


    </div>
    )
}

export default ItemCount