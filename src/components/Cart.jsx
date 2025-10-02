import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Modalsection from "./Modalsection";

const Cart = ({
  cart,
  incrHandler,
  hide,
  decrHandler,
  removecart,
  totalprice,
  setPromo,
  promo,
  display,
}) => {
  return (
    <div className="relative">
      
      <Navbar cart={cart} />

      {/* Content starts below navbar */}
      <div className="pt-20 container mx-auto px-4"> {/* pt-20 = 80px for navbar height */}
        <div className="flex flex-col lg:flex-row shadow-md my-10 bg-white rounded-md">
          {/* Cart Items */}
          <div className="w-full lg:w-3/4 px-4 lg:px-10 py-8">
            <div className="flex justify-between border-b pb-4">
              <h1 className="font-semibold text-xl lg:text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-xl lg:text-2xl">{cart.length} Items</h2>
            </div>

            {/* Table header (hidden on mobile) */}
            <div className="hidden md:flex mt-6 mb-4 font-semibold text-gray-600 text-xs uppercase">
              <h3 className="w-2/5">Product Details</h3>
              <h3 className="w-1/5 text-center">Quantity</h3>
              <h3 className="w-1/5 text-center">Price</h3>
              <h3 className="w-1/5 text-center">Total</h3>
            </div>

            {cart.map((cartItem) => (
              <div
                className="flex flex-col md:flex-row items-center md:items-start hover:bg-gray-50 rounded-md -mx-4 md:mx-0 px-4 md:px-6 py-4 border-b"
                key={cartItem.id}
              >
                {/* Product Info */}
                <div className="flex w-full md:w-2/5 items-center mb-4 md:mb-0">
                  <img
                    className="h-20 w-20 object-cover rounded"
                    src={cartItem.product.thumbnail}
                    alt=""
                  />
                  <div className="ml-4 flex flex-col">
                    <span className="font-bold text-sm">{cartItem.product.title}</span>
                    <span className="text-red-500 text-xs">{cartItem.product.category}</span>
                    <button
                      onClick={() => removecart(cartItem.product.id)}
                      className="font-semibold text-xs text-gray-500 hover:text-red-500 mt-1 text-left"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex justify-center items-center w-full md:w-1/5">
                  <button
                    className="px-3 py-1 text-xl font-bold border rounded-md"
                    onClick={() => decrHandler(cartItem.product.id)}
                  >
                    -
                  </button>
                  <span className="px-4">{cartItem.quantity}</span>
                  <button
                    className="px-3 py-1 text-xl font-bold border rounded-md"
                    onClick={() => incrHandler(cartItem.product.id)}
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <span className="w-full md:w-1/5 text-center font-semibold text-sm mt-2 md:mt-0">
                  ₹{cartItem.product.price}
                </span>

                {/* Total */}
                <span className="w-full md:w-1/5 text-center font-semibold text-sm mt-2 md:mt-0">
                  ₹{cartItem.product.price * cartItem.quantity}
                </span>
              </div>
            ))}

            <NavLink
              to="/allproduct"
              className="flex items-center font-semibold text-indigo-600 text-sm mt-6"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </NavLink>
          </div>

          {/* Order Summary */}
          <div
            id="summary"
            className="w-full lg:w-1/4 px-6 lg:px-8 py-8 bg-gray-50 rounded-r-md"
          >
            <h1 className="font-semibold text-xl border-b pb-4">Order Summary</h1>
            <div className="flex justify-between mt-6 mb-4">
              <span className="font-semibold text-sm uppercase">ITEM {cart.length}</span>
              <span className="font-semibold text-sm">
                {cart.length === 0 ? 0 : totalprice()}
              </span>
            </div>

            {!hide && (
              <div className="py-6">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-2 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  onChange={(e) => setPromo(e.target.value)}
                  value={promo}
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full border rounded-md"
                />
                <button
                  onClick={display}
                  className="bg-red-500 mt-4 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase w-full rounded-md"
                >
                  Apply
                </button>
              </div>
            )}

            <div className="border-t mt-6">
              <div className="flex font-semibold justify-between py-4 text-sm uppercase">
                <span>Total cost</span>
                <span>{cart.length === 0 ? 0 : totalprice()}</span>
              </div>
              <Modalsection />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
