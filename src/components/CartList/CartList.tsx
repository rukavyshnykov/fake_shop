import { CartProduct } from "../../services/types"
import { CartItem } from "../CartItem/CartItem"
import cl from './CartList.module.scss'

export const CartList = ({list}: CartListProps) => {
    const getSum = () => {
        return list.reduce((a, b) => a + (Number(b.price)) * b.amount, 0)
    }

    return (
        <>
            <div>Summary: {getSum()}</div>
            <div className={cl.list}>
                {list.map(product => <CartItem item={product} key={product.id}/>)}
            </div>
        </>
        
    )
}

type CartListProps = {
    list: CartProduct[]
}