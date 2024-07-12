import React from "react";
import { CiCamera } from "react-icons/ci";

function CategoryCard() {
  return (
    <div className="flex items-center justify-center flex-col border-2 rounded-md duration-300 h-32 md:h-48 hover:bg-red-500 hover:text-white">
      <div className="text-4xl md:text-7xl">
        <CiCamera />
      </div>
      <h3 className="md:text-lg">Camera</h3>
    </div>
  );
}

export default CategoryCard;
