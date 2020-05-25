import React from "react"
import Product from "./Product"
import productsData from "../data/productsData"

function ProductsApp() {
    const ProductComponents = productsData.map(item => <Product key={item.id} product={item}/>)
  
    return (
    <div>
        {ProductComponents}
    </div>
  )
}

export default ProductsApp