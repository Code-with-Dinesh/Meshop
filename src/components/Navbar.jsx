import React from 'react'
import { NavLink} from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { auth } from '../Firebase/Firebase';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
const Navbar = ({username,cart}) => {
   const handlelogout = ()=>{
    auth.signOut().then(()=>{
      toast.success("Logout successfully")
    }).catch((err)=>{
      toast.error("Something went wrong")
    })
   }
  return (
    <>
    

<nav className="bg-white border-gray-200 dark:bg-gray-900 z-20 fixed w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
    <NavLink to='/'> <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MeShop</span></NavLink> 
  
   {username?( <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
    <NavLink to='/login'>
    <button type="button" onClick={handlelogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log out</button>
    </NavLink>  
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <span className='text-black mt-1  text-md'>{username}</span>
   <NavLink to='/cart'><button className='relative text-white '>
   <span className='absolute bg-red-600 px-1 left-1 top-[-2px] text-xs rounded-full'>{cart.length}</span>
    <FaCartShopping size={23} className='mt-3 text-black' />
    </button></NavLink> 
  </div>):( <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
    <NavLink to='/login'>
    <button type="button" onClick={handlelogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
    </NavLink>  
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <span className='text-black mt-1 text-md'>{username}</span>
   <NavLink to='/cart'><button className='relative text-white '>
   <span className='absolute bg-red-600 px-1 left-1 top-[-2px] text-xs rounded-full'>{cart.length}</span>
    <FaCartShopping size={23} className='mt-3 text-black' />
    </button></NavLink> 
  </div>)}
 
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to='/' className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to='/allproduct' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All Products</NavLink>
      </li>
      <li>
        <NavLink to='/contact' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
      </li>
      <li>
        <NavLink to='/about' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </>
  )
}

export default Navbar