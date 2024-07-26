import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import Modalsection from './Modalsection'
const Cart = ({cart,incrHandler,hide, decrHandler,removecart,totalprice,setPromo,promo,display}) => {
  
  return (
    <div>
        
        <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
      

       {
        cart.map((cartItem,index)=>(
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={cartItem.id}>
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src={cartItem.product.thumbnail} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{cartItem.product.title}</span>
              <span className="text-red-500 text-xs">{cartItem.product.category}</span>
              <a onClick={()=>removecart(cartItem.product.id)} href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
           <button className='mr-2 text-2xl p-3' onClick={()=> decrHandler(cartItem.product.id) }>-</button>
            <button  className='text-xl'>{cartItem.quantity}</button>

            <button onClick={()=>incrHandler(cartItem.product.id)} className='ml-2 text-2xl p-3'>+</button>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{cartItem.product.price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">{cartItem.product.price * cartItem.quantity}</span>
        </div>
        ))
       }

        <NavLink to='/allproduct' className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </NavLink>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">ITEM {cart.length}</span>
          <span className="font-semibold text-sm">{
           cart.length == 0 ?0:
          totalprice()}</span>
        </div>
      {
        !hide && <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input  onChange={(e)=>setPromo(e.target.value)}  value={promo}  type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
          <button onClick={display} className="bg-red-500 mt-5 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        </div>  
      }
      
       
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{
              cart.length == 0 ?0:
            totalprice()}</span>
          </div>
          <Modalsection/>
          {/* <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button> */}
        </div>
      </div>

    </div>
  </div>
         <Footer/>
    </div>
  )
}

export default Cart