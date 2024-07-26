import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const Singleproduct = ({ handlecart}) => {
  const {id} = useParams()
  const [singleitem,setsingleitem] = useState([])
   
   const singleproduct = async ()=>{
    const result = await axios.get(`https://dummyjson.com/products/${id}`)
    console.log(result.data)
    setsingleitem(result.data)
   }
   useEffect(()=>{
     singleproduct()
   },[singleitem])

    function clickHandler(){
        handlecart(singleitem)
        
    }
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
        <Link to="/allproduct">
          <div className='relative'>
         <button className='text-blue-600 text-xl font-bold underline  absolute left-[20%] top-10'>  Go Back</button>
         </div>
        </Link>
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap mb-5">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={singleitem.thumbnail}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{singleitem.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{singleitem.title}</h1>
      
        <p className="leading-relaxed">{singleitem.description}</p>
        
        <div className="flex mt-5">
          <span className="title-font font-medium text-2xl text-gray-900">{singleitem.price} Rs.</span>
          <button onClick={clickHandler} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>
      
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default Singleproduct