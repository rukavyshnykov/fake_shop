import { Filter } from "../../components/Filter/Filter"
import { ProductList } from "../../components/ProductList/ProductList"
import { Sort } from "../../Sort/Sort"
import { useProducts } from "./useProducts"

export const Products = () => {
    const [filter, setFilter, sort, setSort, filteredSortedProducts] = useProducts()
    
    return (
        <section>
            <Filter filter={filter} setFilter={setFilter}/>
            <Sort sort={sort} setSort={setSort}/>
            <ProductList filteredList={filteredSortedProducts ?? []}/>
        </section>
    )
}
