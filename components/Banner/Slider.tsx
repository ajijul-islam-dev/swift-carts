"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      slider => {
        let timeout : any;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <div className="overflow-hidden w-full relative">
      <div className="navigation-wrapper overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-52 md:h-full"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-52 md:h-full"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-52 md:h-full"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-52 md:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
