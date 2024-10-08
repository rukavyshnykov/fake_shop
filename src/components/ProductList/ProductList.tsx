import { Product } from "../../services/types"
import { ProductCard } from "../ProductCard/ProductCard"
import cl from './ProductList.module.scss'

export const ProductList = ({filteredList}: ProductListProps) => {
    return (
        <div className={cl.list}>
            {filteredList.map(fp =>
                <ProductCard product={fp} key={fp.id}/>
            )}
        </div>
    )
}

type ProductListProps = {
    filteredList: Product[]
}