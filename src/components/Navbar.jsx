import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger icons
import { auth } from "../Firebase/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = ({ cart }) => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

    return () => unsubscribe();
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
    <nav className="bg-white border-gray-200 dark:bg-gray-900 z-20 fixed w-full shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold text-blue-700 dark:text-white">
          MeShop
        </NavLink>

        {/* Right side buttons */}
        <div className="flex items-center gap-4 md:order-2">
          {!loading &&
            (username ? (
              <>
                <button
                  onClick={handleLogout}
                  className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2 text-sm font-medium"
                >
                  Log out
                </button>
                <span className="hidden sm:block text-gray-800 dark:text-gray-200">
                  {username}
                </span>
              </>
            ) : (
              <NavLink to="/login">
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2 text-sm font-medium">
                  Log in
                </button>
              </NavLink>
            ))}

          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <FaCartShopping size={23} className="text-black dark:text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </NavLink>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 rounded-lg md:hidden hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 md:mt-0 border md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent space-y-2 md:space-y-0 md:space-x-8">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 rounded hover:text-blue-700"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allproduct"
                className="block py-2 px-3 rounded hover:text-blue-700"
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 rounded hover:text-blue-700"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 rounded hover:text-blue-700"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
