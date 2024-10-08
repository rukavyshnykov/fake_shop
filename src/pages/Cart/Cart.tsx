import { useSelector } from "react-redux"
import { cartSelector } from "../../selectors"
import { CartList } from "../../components/CartList/CartList"

export const Cart = () => {
    const cart = useSelector(cartSelector)

    return (
        <section>
            <CartList list={cart}/>
        </section>
    )
}