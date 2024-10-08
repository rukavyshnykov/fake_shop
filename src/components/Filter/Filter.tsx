export const Filter = ({filter, setFilter}: FilterProps) => {
    return (
        <div>
            <span>Filter by name: </span>
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)}/>
        </div>
    )
    
}

type FilterProps = {
    filter: string
    setFilter: (filter: string) => void
}