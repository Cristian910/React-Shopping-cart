import { ClearCartIcon,CartIcon } from "./icons";
import "./cart.css"
import { useCart } from "../hooks/useCart";
export function ItemCart({image,price,title,quantity,addToCart,removeProduct}){
    return(
        <li>
            <img src={image} alt={`image of${title}`}/>
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>qty: {quantity}</small>
                <button onClick={addToCart}>+</button>
                <button onClick={removeProduct}>-</button>
            </footer>
        </li>
    )
} 
export function Cart() {
    const {clearCart,cart,addToCart,removeProduct} = useCart()
    let total = 0
    return(
        <>
        <label htmlFor="checkCart" className="btnCart">
            <CartIcon/>
        </label>
        <input type="checkbox" name="checkCart" id="checkCart" hidden/>
        <aside className="listCart">
            <ul>
            {cart.map(product =>{
                total+=product.price*product.quantity
                return(
                <ItemCart key={product.id} {...product} addToCart={() => addToCart(product)} removeProduct={() => removeProduct(product)}/>
            )
            }
            )}
            </ul>
            <h2>total: {total}</h2>
            <button className="btnClear" onClick={()=> clearCart()}>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )
}