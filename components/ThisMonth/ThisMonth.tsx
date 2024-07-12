"use client"
import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Button } from "@nextui-org/button";
import ProductCard from "../ProductCard/ProductCard";

function ThisMonth() {
  return (
    <div>
      <SectionTitle title="This Month" />
      <div className="flex items-center justify-between my-10">
        <h1 className="text-3xl font-bold">Best Selling Products</h1>
        <Button size="lg" radius="none" color="danger">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
}

export default ThisMonth;