import React, { useContext, useState } from 'react'
import logo2 from "../../assets/icons/logos/logo2.svg"
import { Add, Cart, Star } from '../../assets/icons'
import Modal from '../Modal/Modal'
import Input from '../Input/Input'
import { Context } from '../../Context/Context'
const Header = () => {
  const [addModal, setAddModal] = useState(false)
  const {products,saveProduct} = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      phoneName: e.target.phoneName.value,
      phonePrice: e.target.phonePrice.value,
      phoneColor: e.target.phoneColor.value,
      phoneDescription: e.target.phoneDescription.value,
      phoneRegion: e.target.phoneRegion.value,
      phoneStorage: e.target.phoneStorage.value
    }
    saveProduct(data)
    console.log(data)
    e.target.reset()
    setAddModal(false)
  }
  return (
    <>
    <div className='w-full h-[90px] bg-blue-500 fixed top-0 p-5'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={logo2} alt="Main Logo" width={50} height={30}/>
              <h2 className='text-[2.5rem] font-bold text-slate-100'>Phones</h2>
            </div>

            <div className='flex items-center gap-2'>
                <Cart width={30} height={30} color={"white"}/>
                <Star width={30} height={30} color={"white"}/>
                <button onClick={() => setAddModal(true)} className='flex items-center justify-center gap-2 text-white text-[1.2rem] bg-red-600 rounded-md shadow-lg w-[150px] p-2'><Add width={30} height={30} color={"white"}/> Add</button>
            </div>
        </div>
    </div>

    <Modal openModal={addModal} setOpenModal={setAddModal} extraModalClass={"w-[700px]"}>
      <form onSubmit={handleSubmit} className='flex items-center flex-col justify-center mt-10 px-2'>
        <div className='flex  w-full justify-evenly items-center'>
        <div className='flex flex-col gap-2'>
         <Input name={"phoneName"} type={"text"} placeholder={"Enter a name"} className={"outline-none p-2 text-[20px] w-[300px] rounded-md shadow-md"}/>
         <Input name={"phonePrice"} type={"number"} placeholder={"Enter price"} className={"outline-none p-2 text-[20px] w-[300px] rounded-md shadow-md"}/>
         <Input name={"phoneColor"} type={"text"} placeholder={"Enter color"} className={"outline-none p-2 text-[20px] w-[300px] rounded-md shadow-md"}/>
         <button type='submit' className='w-[300px] p-2 mt-2 font-bold text-white shadow-md rounded-md bg-blue-600'>Add</button>
        </div>
        <div className='flex flex-col gap-2'>
         <Input name={"phoneDescription"} type={"text"} placeholder={"Enter description"} className={"outline-none p-2 text-[20px] w-[300px] rounded-md shadow-md"}/>
         <Input name={"phoneRegion"} type={"text"} placeholder={"Enter Region"} className={"outline-none p-2 text-[20px] w-[300px] rounded-md shadow-md"}/>
         <Input name={"phoneStorage"} type={"text"} placeholder={"Enter storage"} className={"outline-none p-2 text-[20px] w-[300px] rounded-md shadow-md"}/>
         <Input type={"file"}className={"outline-none p-2 text-[20px] w-[300px] rounded-md shadow-md"}/>
        </div>
        </div>

       
      </form>
    </Modal>
  </>
  )
}

export default Header
