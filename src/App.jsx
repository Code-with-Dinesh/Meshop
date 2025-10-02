import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Allproduct from './components/Allproduct'
import Login from './components/Login'
import SignUp from './components/SignUp'
import toast, { Toaster } from 'react-hot-toast'
import { auth } from './Firebase/Firebase'
import Singleproduct from './components/Singleproduct'
import ProtectedRoute from './auth/ProtectedRoute'

const App = () => {
  const [cart,setcart] = useState([])
  const [promo,setPromo]= useState("")
  const [discount,setdiscount] = useState("")
  const [hide,sethide] = useState(false)
  const [username,setusername]= useState("")
  
 // product cart section
 function handlecart(product){
  
  let productexit = cart.find((findelement) =>findelement.product.id === product.id)
  
  if(productexit)
  {
   const updatecart =  cart.map((item)=>item.id == product.id ?{...item,quantity:item.quantity+1}:item)
   setcart(updatecart)
  }
  else{
    setcart([...cart,{quantity:1,product}])
   
    toast.success("Product added")
  }
 }
 // increment price handler
 function incrHandler(id){
  const incrvalue = cart.map((item)=>item.product.id === id?{...item,quantity:item.quantity+1}:item)
  setcart(incrvalue)
 }

 //decrement price handler
 const decrHandler =(id)=>{
   const decrvalue = cart.map((item)=>item.product.id === id && item.quantity>1?{...item,quantity:item.quantity-1}:item)
   setcart(decrvalue)
 }

 // remove card handler
  const removecart =(element)=>{
    const deletecart = cart.filter((item)=>item.product.id !== element)
    setcart(deletecart)
    toast.error("Product Remove")
  }
  

  // total price handler
  function totalprice (){
   const totalamount =  cart.reduce((total,acc)=>{
        return total + acc.product.price *acc.quantity;
    },0).toFixed(2)
    return totalamount-discount;
  }
  
  /// promo code
  const display = ()=>{
    if(promo === "discount10"){
      setdiscount(totalprice()*0.2)
      toast.success("Coupon Applied")
      setPromo("")
      sethide(true)
      
    }
    else{
      toast.error("Wrong Coupon")
    }
   
  }
  // firebase
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        setusername(user.displayName)
      }
      else{
        setusername("")
      }
    })
  },[])
  return (
    <>
     <BrowserRouter>
       <Navbar username={username} cart={cart}/>
        <Routes>
          <Route path='/' element={<Home cart={cart}/>} />
          <Route path='/cart' element={ <ProtectedRoute> <Cart cart={cart} hide={hide} sethide={sethide}  display={display} setPromo={setPromo} promo={promo} incrHandler={incrHandler} totalprice={totalprice} decrHandler={decrHandler} removecart={removecart} /> </ProtectedRoute>}  />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* <Route path='/allproduct' element={<Allproduct/>}  handlecart={handlecart}/> */}
          <Route path='/allproduct' element={<ProtectedRoute> <Allproduct handlecart={handlecart}  /> </ProtectedRoute>} />
          <Route path='/singleproduct/:id' element={<ProtectedRoute><Singleproduct   handlecart={handlecart}  /> </ProtectedRoute> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
          <Toaster/>
     </BrowserRouter>
    </>
  )
}

export default App