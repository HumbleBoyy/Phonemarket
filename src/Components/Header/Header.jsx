import React from 'react'
import logo2 from "../../assets/images/logos/logo2.svg"
import { Cart, Star } from '../../assets/icons'
const Header = ({width, height}) => {
  return (
    <div className='w-full h-[70px] bg-blue-500 fixed p-2'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={logo2} alt="Main Logo" width={50} height={30}/>
              <h2 className='text-[2.5rem] font-bold text-slate-100'>Phones</h2>
            </div>

            <div className='flex items-center gap-2'>
                <Cart width={30} height={30} color={"white"}/>
                <Star width={30} height={30} color={"white"}/>
            </div>
        </div>
    </div>
  )
}

export default Header
