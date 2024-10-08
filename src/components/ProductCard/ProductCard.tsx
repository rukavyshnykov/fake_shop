import { useDispatch, useSelector } from "react-redux"
import { Product } from "../../services/types"
import { AppDispatch } from "../../store/store"
import { cartActions } from "../../store/cartSlice"
import cl from './ProductCard.module.scss'
import { cartSelector } from "../../selectors"

export const ProductCard = ({product}: ProductCardProps) => {
    const dispatch = useDispatch<AppDispatch>()
    const cart = useSelector(cartSelector)

    const checkItemAdded = () => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <div className={cl.card}>
            <div>
                <img src={product.image}/>
            </div>
            <span className={cl.name}>{product.title}</span>
            <span>{product.description}</span>
            <button
                type="button" 
                onClick={() => dispatch(cartActions.addProduct(product))}
                disabled={checkItemAdded()}
            >
                Add to cart
            </button>
            <span>Price: {product.price}</span>
        </div>
    )
}

type ProductCardProps = {
    product: Product
}