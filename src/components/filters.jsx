import {useId } from "react"
import {useFilters} from "../hooks/usefilters"

export function Filters() {
    const {setFilter,filter} = useFilters()
    const minPriceUseId = useId()
    const categoryUseId = useId()

    function handleChangeMinPrice(e) {
        setFilter(prevState => ({
            ...prevState,
            minPrice:e.target.value})
            )
    }

    function handleChangeCategory(e) { 
        setFilter(prevState => ({
            ...prevState,
            category:e.target.value})
            )
    }
    return(
        <section className="filters">
            <div>
            <label htmlFor={minPriceUseId}>Precio minimo</label>
            <input type="range" id={minPriceUseId} value={filter.minPrice} min="0" max='1000' onChange={handleChangeMinPrice}/>
            <span>${filter.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryUseId}>Categoria</label>
                <select name="category" id={categoryUseId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>
        </section>
    )
}