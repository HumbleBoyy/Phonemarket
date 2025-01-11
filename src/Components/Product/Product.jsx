import React, { useState } from 'react'
import honor200 from "../../assets/images/honor.png"
import galaxy24 from "../../assets/images/galaxy.png"
import ProductCart from '../ProductCart/ProductCart'
const Product = () => {
  const [products, setProducts] = useState([

    {
      id:1,
      name:"Honor 200 pro",
      condition:"First hand",
      price:600,
      count:1,
      color:"Black",
      region:"China",
      status: true,
      storage:"512GB",
      description:"A good phone to use on a daily bases",
      image:honor200
    },
    
    {
      id:2,
      name:"Galaxy S25 Ultra",
      condition:"First hand",
      count:1,
      color:"Black",
      region:"S.Korea",
      price:900,
      status: true,
      storage:"512GB",
      description:"Galaxy S24 is one of the best camera phone in the world...",
      image:galaxy24
    },
  ])
  return (
    <div className='my-5 w-[1000px] mx-auto mt-32'>
        <ul className='flex justify-between gap-2 flex-wrap'>
            {products.map(item => <ProductCart key={item.id} item={item}/>)}
        </ul>
    </div>
  )
}

export default Product
