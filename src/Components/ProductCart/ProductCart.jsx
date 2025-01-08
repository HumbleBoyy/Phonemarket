import React from 'react'
import { Cart, DeleteItem, InfoItem, Star } from '../../assets/icons'

const ProductCart = ({item}) => {
  return (
    <li className='w-[300px] bg-slate-300 rounded-md p-2 object-cover'>
       <img className='w-[100%] h-[300px] object-contain' src={item.image} alt={item.name} width={"100%"} height={300}/>
       <div className='flex items-center justify-between border-b-2'>
       <h2 className='text-[22px] font-bold'>{item.name}</h2>
       <strong className='text-[22px] font-bold'>${item.price}</strong>
       </div>
       <div className='w-[100%] h-[50px]'>
       <p className='text-[17px] mt-1'>{item.description}</p>
       </div>
       
       <div className='flex items-center justify-between mt-2'>
          <button className='bg-blue-500 p-2 rounded-md cursor-pointer'><Cart width={30} height={30} color={"white"}/></button>
          <button className='bg-blue-500 p-2 rounded-md cursor-pointer'><Star width={30} height={30} color={"white"}/></button>
          <button className='bg-blue-500 p-2 rounded-md cursor-pointer'><InfoItem width={30} height={30} color={"white"}/></button>
          <button className='bg-red-500  p-2 rounded-md cursor-pointer'><DeleteItem width={30} height={30} color={"white"}/></button>
       </div>
    </li>
  )
}

export default ProductCart
