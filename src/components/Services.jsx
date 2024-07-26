import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
const Services = () => {
  return (
    <>
    <div  className='container mx-auto px-5 flex py-11 gap-9 items-center justify-center flex-wrap'>
       <div className='bg-blue-500 py-3 px-4 rounded text-white flex gap-2 flex-col items-center w-[240px]'>
       <FaShippingFast size={30} />
       <p>FREE SHIPPING</p>
       </div>
       <div className='bg-blue-500 py-3 px-4 rounded text-white flex gap-2 flex-col items-center w-[240px]'>
       <MdProductionQuantityLimits size={30} />
       <p>AUNTHENTIC PRODUCT</p>
       </div>
       <div className='bg-blue-500 py-3 px-4 rounded text-white flex gap-2 flex-col items-center w-[240px]'>
       <TbTruckReturn size={30} />
       <p>EASY RETURN</p>
       </div>
       <div className='bg-blue-500 py-3 px-4 rounded text-white flex gap-2 flex-col items-center w-[240px]'>
       <MdOutlinePayment size={30} />
       <p>SECURE PAYMENT</p>
       </div>
    </div>
    </>
  )
}

export default Services