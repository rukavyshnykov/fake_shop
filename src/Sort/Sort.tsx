import { SortType } from "../pages/Products/useProducts"

export const Sort = ({sort, setSort}: SortProps) => {
    return (
        <div>
            <p>Sort by price: {sort}</p>
            <label>
                <span>Ascending: </span>
                <input type="radio" name="sort" value={'asc'} defaultChecked onChange={e => setSort(e.target.value as SortType)}/> 
            </label>
            <label>
                <span>Descending: </span>
                <input type="radio" name="sort" value={'dsc'} onChange={e => setSort(e.target.value as SortType)}/> 
            </label>
        </div>
    )
}

type SortProps = {
    sort: SortType
    setSort: (sort: SortType) => void
}