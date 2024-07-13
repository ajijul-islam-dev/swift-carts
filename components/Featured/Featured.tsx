"use client";
import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import Image from "next/image";
import { Button } from "@nextui-org/button";

function Featured() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="my-20">
      <SectionTitle title="Featured" />
      <h1 className="text-lg md:text-3xl font-bold my-10">New Arrival</h1>
      <div className="grid grid-cols-2 gap-0.5 md:gap-5">
        <div className="bg-black md:p-10 relative" onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=> setIsVisible(false)}>
          <div
            className={`duration-300 absolute bottom-2 md:bottom-10 left-2 md:left-10 text-white ${
              isVisible ? "block" : "hidden"
            }`}
          >
            <h1 className="text-sm md:text-xl font-semibold">PlayStation 5</h1>
            <p className="md:my-2 text-xs md:text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Button size="sm" className="bg-transparent border-b-2 rounded-none text-white px-0">
              Shop Now
            </Button>
          </div>
          <Image
            src="/images/featured/fridge.png"
            width={600}
            height={400}
            alt="slide"
            className="w-full h-full"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-0.5 md:gap-5">
          <div className="relative" onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=> setIsVisible(false)}>
            <div
              className={`absolute bottom-2 md:bottom-10 left-2 md:left-10 text-white ${
                isVisible ? "block" : "hidden"
              }`}
            >
              <h1 className="text-sm md:text-xl font-semibold">PlayStation 5</h1>
              <p className="md:my-2 text-xs md:text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Button size="sm" className="bg-transparent border-b-2 rounded-none text-white px-0">
                Shop Now
              </Button>
            </div>
            <Image
              src="/images/featured/hat.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-0.5 md:gap-5">
            <div className="p-3 md:p-10 bg-black relative" onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=> setIsVisible(false)}>
              <div
                className={`absolute bottom-2 md:bottom-10 left-2 md:left-10 text-white ${
                  isVisible ? "block" : "hidden"
                }`}
              >
                <h1 className="text-sm md:text-xl font-semibold">PlayStation 5</h1>
                <p className="md:my-2 text-xs md:text-sm">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Button size="sm" className="bg-transparent border-b-2 rounded-none text-white px-0">
                  Shop Now
                </Button>
              </div>
              <Image
                src="/images/featured/speaker.png"
                width={600}
                height={400}
                alt="slide"
                className="w-full h-full"
              />
            </div>
            <div className="bg-black p-3 md:p-10 relative" onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=> setIsVisible(false)}>
              <div
                className={`absolute bottom-2 md:bottom-10 left-2 md:left-10 text-white ${
                  isVisible ? "block" : "hidden"
                }`}
              >
                <h1 className="text-sm md:text-xl font-semibold">PlayStation 5</h1>
                <p className="md:my-2 text-xs md:text-sm">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Button size="sm" className="bg-transparent border-b-2 rounded-none text-white px-0">
                  Shop Now
                </Button>
              </div>
              <Image
                src="/images/featured/perfume.png"
                width={600}
                height={400}
                alt="slide"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
