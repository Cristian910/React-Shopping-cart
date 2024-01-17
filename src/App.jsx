import { Products } from "./components/products";
import { useEffect, useState } from "react";
import { Header } from "./components/header";
import {useFilters} from "./hooks/usefilters"
import { Cart } from "./components/cart";
//import { Footer } from "./components/footer";
function App() {
  const [products,setProducts] = useState([])
  useEffect(()=> {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  },[])
  
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)
  
  return (
    <>
    <Cart/>
    <Header/>
      <Products products={filteredProducts}/>
    </>
  );
}

export default App;
