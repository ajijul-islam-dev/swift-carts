import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


import CountDown from "./CountDown";
import ProductCard from "../ProductCard/ProductCard";

const SellSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView : 2,
        spacing: 20,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 3, spacing: 8 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 4, spacing: 10 },
        },
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

  const time  = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <div className="relative mt-10 py-10">
      <div className="navigation-wrapper mt-5">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <ProductCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ProductCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ProductCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ProductCard />
          </div>
          <div className="keen-slider__slide number-slide1">
            <ProductCard />
          </div>
        </div>

        {loaded && instanceRef.current && (
          <div className="absolute left-0 w-full top-0 flex items-center justify-between gap-5">
            <div className="flex items-center justify-center gap-10">
              <h1 className="text-3xl font-bold">Title</h1>
              <CountDown/>
            </div>
            <div className="flex items-center justify-center gap-5">
              <Arrow
                left
                onClick={(e:any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e : any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellSlider;

function Arrow(props : any) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`arrow${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
    >
      {props.left && <FaLongArrowAltLeft />}
      {!props.left && <FaLongArrowAltRight />}
    </div>
  );
}
