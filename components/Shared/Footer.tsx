import { Input } from "@nextui-org/input";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-black mb-0">
      <div className="grid grid-cols-1  md:grid-cols-5 px-10 md:px-20  text-white py-20 gap-10">
        <div className="space-y-5">
          <p className="font-bold text-2xl">
            <span>Swift</span>
            <span className="text-red-500">Cart</span>
          </p>
          <h2 className="text-xl">Subscribe</h2>
          <p className="">Get 10% off your first Order</p>
          <Input
            type="email"
            placeholder="Send Your Email"
            radius="sm"
            className="text-black bg-black"
            endContent={
              <IoSend className="text-2xl text-black pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="text-white space-y-5">
          <h2 className="text-xl font-semibold">Support</h2>
          <p className="">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="">exclusive@gmail.com</p>
          <p className="">+88015-88888-9999</p>
        </div>
        <div className="text-white space-y-5">
          <h2 className="text-xl">Account</h2>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="space-y-5">
          <h2 className="text-xl">Quick Link</h2>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className=" space-y-5">
          <h2 className="text-xl">Download App</h2>
          <p className="text-xs">Save $3 with App New User Only</p>
          <div className="flex gap-2">
            <div className="">
              <Image
                src="/images/Footer/Qr Code.png"
                width={600}
                height={400}
                alt="slide"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <Image
                src="/images/Footer/GooglePlay.png"
                width={600}
                height={400}
                alt="slide"
                className="w-full h-full"
              />
              <Image
                src="/images/Footer/download-appstore.png"
                width={600}
                height={400}
                alt="slide"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex items-center md:justify-center gap-5 text-2xl my-10">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
  
      <p className="text-center text-white py-4 border-t border-[rgba(255,255,255,0.2)]">
        Copyright Rimel 2022. All right reserved
      </p>
    </div>
  );
}

export default Footer;
