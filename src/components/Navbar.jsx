import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { auth } from '../Firebase/Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';

const Navbar = ({ cart }) => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName || user.email);
      } else {
        setUsername(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Logout function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        setUsername(null);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 z-20 fixed w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MeShop</span>
        </NavLink>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
          {!loading && (
            username ? (
              <>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log out
                </button>
                <span className="text-black mt-1 text-md">{username}</span>
              </>
            ) : (
              <NavLink to="/login">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log in
                </button>
              </NavLink>
            )
          )}

          <NavLink to="/cart">
            <button className="relative text-white">
              <span className="absolute bg-red-600 px-1 left-1 top-[-2px] text-xs rounded-full">{cart.length}</span>
              <FaCartShopping size={23} className="mt-3 text-black" />
            </button>
          </NavLink>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><NavLink to="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500">Home</NavLink></li>
            <li><NavLink to="/allproduct" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700">All Products</NavLink></li>
            <li><NavLink to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700">Contact</NavLink></li>
            <li><NavLink to="/about" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700">About</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
