import { Badge } from "@nextui-org/badge";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Button } from "@nextui-org/button";

const ProductCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="border rounded md:p-2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative bg-slate-100 p-7 md:p-5 flex justify-center items-center">
        <div className="absolute text-sm md:text-2xl top-5 right-3 z-50 bg-white p-1 rounded-full">
          <MdOutlineFavoriteBorder className="" />
        </div>
        <div className="absolute top-7 left-7 flex items-center justify-center">
        <Badge color="danger">-20%</Badge>
        </div>
        <div className="absolute md:text-2xl top-14 bg-white right-3 z-50 p-1 rounded-full">
          <FaRegEye />
        </div>
        <Image
          width="100"
          height={100}
          alt="card"
          className={`md:w-[170px] md:h-[170px] w-[150px] h-[150px] pb-10 ${isHover && 'scale-125 duration-300'}`}
          src="/images/products/product.png"
        />
        {isHover && (
          <div className="absolute bottom-0 grid w-full">
            <Button
              variant="solid"
              radius="none"
              className="bg-neutral-950 text-white w-full"
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>
      <div className="md:my-2  md:space-y-3">
        <h3 className="font-semibold uppercase text-xs md:text-lg">
          HAVIT HV-G92 Gamepad
        </h3>
        <div className="flex items-center justify-start gap-5">
          <span className="text-sm md:text-base font-semibold text-red-600">
            $160
          </span>
          <span className="line-through font-semibold text-gray-500">$200</span>
        </div>
        <div className="flex items-center gap-3">
          <Rating className="max-w-[60px] md:max-w-[90px]" value={4} readOnly />
          <span>(75)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
