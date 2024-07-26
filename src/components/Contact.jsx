import React, { useState } from 'react'
import { db } from '../Firebase/Firebase'
import { collection,addDoc } from 'firebase/firestore'
import { auth } from '../Firebase/Firebase'
import Footer from './Footer'
import toast from 'react-hot-toast'

const Contact = () => {
  const [usercontact, setusercontact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setusercontact({ ...usercontact, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addDoc(collection(db,"ContactUser"),{
      name:usercontact.name,
      email:usercontact.email,
      message:usercontact.message,
    })
    toast.success(`Thanku For submit ${usercontact.name}`)
    setusercontact({
      name: "",
      email: "",
      message: "",
    })
  
  };
  return (
    <div>
        
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0"  title="map"   src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
      
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Name</label>
        <input value={usercontact.name} onChange={changeHandler} required type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Email</label>
        <input value={usercontact.email} onChange={changeHandler} required type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Message</label>
        <textarea value={usercontact.message} onChange={changeHandler} required id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
      </div>
      <button onClick={submitHandler} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    </div>
  </div>
</section>

        <Footer/>
    </div>
  )
}

export default Contact