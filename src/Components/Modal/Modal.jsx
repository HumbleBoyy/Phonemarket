import React from 'react'
import { CLoseIcon } from '../../assets/icons'

const Modal = ({children, openModal, setOpenModal, extraModalClass}) => {
  return (
    <div id='wrapper' onClick={(e)=> e.target.id === "wrapper" ? setOpenModal(false) : ""} className={`fixed inset-0 flex items-center ${openModal ? "scale-1" : "scale-0"}  justify-center bg-[#00000079]`}>
       <div className={`w-[500px] h-[300px] bg-slate-100 ${extraModalClass} rounded-md relative`}>
           <button onClick={() => setOpenModal(false)} className='absolute top-2 right-2'><CLoseIcon width={30} height={30} color={"black"}/></button>
           {children}
       </div>
    </div>
  )
}

export default Modal
