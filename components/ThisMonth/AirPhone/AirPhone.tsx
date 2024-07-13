import CountDown from "@/components/TodaysSell/CountDown";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

function AirPhone() {
  return (
    <div
      style={{ backgroundImage: "url('/images/products/airBg.png')" }}
      className="order-last md:order-first my-16 bg-top md:bg-right bg-contain bg-no-repeat w-full h-full bg-black grid md:grid-cols-2 p-10"
    >
      <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-evenly md:items-start gap-10">
        <h2 className="text-lg font-semibold  text-success-500">Categories</h2>
        <h1 className="text-5xl text-white">Enhance Your Music Experience</h1>
        <CountDown isRounded={true} />
        <Button
          variant="solid"
          color="success"
          radius="none"
          size="lg"
          className="text-white"
        >
          Buy Now
        </Button>
      </div>
      <div className="flex justify-center items-start md:items-center  w-full h-full order-first md:order-last">
        <Image
          src="/images/products/airphone.png"
          width={400}
          height={400}
          alt="airphone"
          className="w-full h-full "
        />
      </div>
    </div>
  );
}

export default AirPhone;
