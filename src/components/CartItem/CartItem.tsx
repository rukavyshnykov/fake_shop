import { useDispatch } from "react-redux"
import { CartProduct } from "../../services/types"
import { AppDispatch } from "../../store/store"
import { cartActions } from "../../store/cartSlice"

import cl from './CartItem.module.scss'

export const CartItem = ({item}: CartItemProps) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className={cl.item}>
            <div>
                <img src={item.image}/>
            </div>
            <span className={cl.title}>{item.title}</span>
            <span>
                Amount: 
                <button disabled={item.amount === 1} onClick={() => dispatch(cartActions.decreaseAmount({id: item.id}))}>-</button>
                {item.amount}
                <button  onClick={() => dispatch(cartActions.increaseAmount({id: item.id}))}>+</button>
            </span>
            <button onClick={() => dispatch(cartActions.deleteProduct({id: item.id}))}>Delete item</button>
        </div>
    )
}

type CartItemProps = {
    item: CartProduct
}