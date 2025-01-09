import React, { useState } from 'react'
import Header from '../Header/Header'
import Product from '../Product/Product'

const Main = () => {
  
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [])

  localStorage.setItem("products", JSON.stringify(products))
  return (
    <div>
      <Header products={products} setProducts={setProducts}/>
      <Product products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main
