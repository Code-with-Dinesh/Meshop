import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import images from '../assets/Images/prex.jpg'
import Services from './Services'
import Gallery from './Gallery'
import Testimonial from './Testimonial'
const Home = () => {
 
  return (
    <div>
      
         <div className='relative'>
            <img className='w-full h-[90vh] object-cover object-top opacity-[0.8]' src={images} alt="" />
         </div>
         <div className='absolute top-[30%] left-[4%] '>
            <h3 className='text-4xl font-semibold text-black'>Discover Your Next Adventure</h3>
            <p className='text-zinc-600 font-semibold mt-3 text-2xl'>Shop Our Latest Arrival & Unleash Your Style</p>
         </div>
         <Services/>
         <Gallery/>
         <Testimonial/>
         <Footer/>
    </div>
  )
}

export default Home