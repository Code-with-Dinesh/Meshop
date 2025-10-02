import React, { useState } from 'react';
import { db } from '../Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import Footer from './Footer';
import toast from 'react-hot-toast';

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "ContactUser"), {
        name: usercontact.name,
        email: usercontact.email,
        message: usercontact.message,
      });
      toast.success(`Thank you for submitting, ${usercontact.name}`);
      setusercontact({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row">
          
          {/* Map */}
          <div className="w-full md:w-2/3 h-64 md:h-auto bg-gray-300 rounded-lg overflow-hidden mb-8 md:mb-0 relative">
            <iframe
              title="map"
              width="100%"
              height="100%"
              className="absolute inset-0"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/3 md:ml-8 bg-white flex flex-col px-6 py-8 rounded-lg shadow-md">
            <h2 className="text-gray-900 text-xl mb-4 font-medium title-font">Contact</h2>

            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input
              value={usercontact.name}
              onChange={changeHandler}
              required
              type="text"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 mb-4 transition-colors duration-200"
            />

            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              value={usercontact.email}
              onChange={changeHandler}
              required
              type="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 mb-4 transition-colors duration-200"
            />

            <label className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              value={usercontact.message}
              onChange={changeHandler}
              required
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 mb-4 resize-none transition-colors duration-200"
            ></textarea>

            <button
              onClick={submitHandler}
              className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-6 rounded text-lg transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
