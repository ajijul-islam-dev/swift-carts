import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadphonesBold } from "react-icons/pi";

function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-32">
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto my-5">
          <div className="bg-black h-16 w-16 rounded-full text-white text-5xl flex items-center justify-center">
            <FaTruckFast />
          </div>
        </div>
        <h2 className="text-lg uppercase font-bold">FREE AND FAST DELIVERY</h2>
        <p className="">Free delivery for all orders over $140</p>
      </div>
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto my-5">
          <div className="bg-black h-16 w-16 rounded-full text-white text-5xl flex items-center justify-center">
          <PiHeadphonesBold />
          </div>
        </div>
        <h2 className="text-lg uppercase font-bold">FREE AND FAST DELIVERY</h2>
        <p className="">Free delivery for all orders over $140</p>
      </div>
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto my-5">
          <div className="bg-black h-16 w-16 rounded-full text-white text-5xl flex items-center justify-center">
          <AiOutlineSafety />
          </div>
        </div>
        <h2 className="text-lg uppercase font-bold">FREE AND FAST DELIVERY</h2>
        <p className="">Free delivery for all orders over $140</p>
      </div>
    </div>
  );
}

export default Services;
