"use client"
import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Button } from "@nextui-org/button";
import ProductCard from "../Shared/ProductCard";
import AirPhone from "./AirPhone/AirPhone";

function ThisMonth() {
  return (
    <div>
      <SectionTitle title="This Month" />
      <div className="flex items-center justify-between my-10">
        <h1 className="text-lg md:text-3xl font-bold">Best Selling Products</h1>
        <Button size="sm" radius="none" color="danger">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <div className="">
        <AirPhone/>
      </div>
    </div>
  );
}

export default ThisMonth;
