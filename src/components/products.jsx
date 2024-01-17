import { AddToCartIcon,RemoveFromCartIcon } from "./icons";
import {useCart} from "../hooks/useCart"
export function Products({products}) {
    const {cart,addToCart,removeProduct} = useCart()
    return (<main>
        <ul className="listProducts">
            {products.map(product => 
                    {const isProductInCart = cart.some(item => item.id === product.id)
            return(
                <li key={product.id} className="product">
                    <img src={product.image} alt={`image of ${product.title}`} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => {isProductInCart?removeProduct(product):addToCart(product)}}>
                    {isProductInCart?<RemoveFromCartIcon/>:<AddToCartIcon/>}
                    </button>
                </li>
                  )          
                    }
            )}
        </ul>
    </main>)
}