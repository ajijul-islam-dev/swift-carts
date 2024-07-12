import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import CategorySlider from "./CategorySlider";

function Categories() {
  return (
    <div>
      <SectionTitle title="Categories" />
      <div className="">
        <CategorySlider sliderTitle="Browse By Categories"/>
      </div>
    </div>
  );
}

export default Categories;
