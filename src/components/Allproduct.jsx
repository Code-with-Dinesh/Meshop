import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Allproduct = (props) => {
   const {handlecart} = props
  const [catergory,setcategory] = useState([])
  const [singleproduct,setsingleproduct] = useState([])
  const [stringproduct,setstringproduct] = useState("")
  
  useEffect(()=>{
    const getdata = async ()=>{
      const result =await axios.get("https://dummyjson.com/products/category-list")
      
      setcategory(result.data)
    }
    getdata()
  },[])
  function ClickHandler(item){
    setstringproduct(item)
  }
  useEffect(()=>{
     const singledata = async ()=>{
      if(stringproduct){
        const result = await axios.get(`https://dummyjson.com/products/category/${stringproduct}`)
        setsingleproduct(result.data.products)
      }
      else{
        const result = await axios.get(`https://dummyjson.com/products`)
        setsingleproduct(result.data.products)
      }
    }
    singledata()
  },[singleproduct])
  return (
    <div className='overflow-x-hidden '>
  
  <div className='flex gap-5 flex-wrap p-4'>
   
    {catergory.map((item, index) => (
     
        <button onClick={()=>ClickHandler(item)} className='bg-zinc-600 hover:bg-black hover:text-white rounded-lg text-white px-2 py-2 mt-3 ' key={index}>{item}</button>
      
    ))}
  </div>
  <div className='flex items-center justify-center gap-4 flex-wrap'>
    {singleproduct.map((elem, index) => (
      <div className='bg-gray-900 mb-4 mt-10 flex-shrink-0 rounded-lg' key={index}>
        <div className='border-2 bg-sky-800 rounded-lg shadow-lg shadow-black p-4 text-white'>
        <NavLink to={`/singleproduct/${elem.id}`}>
          <img  src={elem.thumbnail} alt="" key={elem.id} />
        </NavLink>
          <p>Title: {elem.title}</p>
          <p>Rating: {elem.rating}</p>
          <p>Price: {elem.price}</p>
          <button onClick={()=>handlecart(elem)}  className='bg-green-600 text-white px-2 py-1 mt-3 cursor-pointer rounded-md'>Add To Cart</button>
        </div>
      </div>
    ))}
  </div>
  <Footer/>
</div>

  )
}

export default Allproduct