import { useFilters } from "../hooks/usefilters"
import { useCart } from "../hooks/useCart"
import "./footer.css"
export function Footer(){
    const {filter} = useFilters()
    const {cart} = useCart()
    return(
        <footer className="footer">
            {JSON.stringify(filter,null,2)}
            {JSON.stringify(cart,null,2)}
        </footer>
    )
}