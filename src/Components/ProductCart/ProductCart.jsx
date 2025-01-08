import React from 'react'

const ProductCart = ({item}) => {
  return (
    <li className='object-cover'>
       <img src={item.image} alt={item.name} width={300} height={300}/>
       <h2>{item.name}</h2>
       <p>{item.description}</p>
       <strong>${item.price}</strong>
    </li>
  )
}

export default ProductCart
