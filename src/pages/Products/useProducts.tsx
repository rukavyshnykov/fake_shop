import { useMemo, useState } from "react"
import { useGetProductsQuery } from "../../services/productsApi"

export const useProducts = () => {
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState<SortType>('asc')
    const {data: products} = useGetProductsQuery() 
    const filteredProducts = useMemo(() => {
        return products?.filter(p => p.title.toLowerCase().includes(filter))
    }, [filter, products])
    const filteredSortedProducts = useMemo(() => {
        return filteredProducts?.sort((a, b) => sort === 'asc' ? Number(a.price) - Number(b.price) : Number(b.price) - Number(a.price))
    }, [filteredProducts, sort])

    return [filter, setFilter, sort, setSort, filteredSortedProducts] as const
}

export type SortType = 'asc' | 'dsc'
