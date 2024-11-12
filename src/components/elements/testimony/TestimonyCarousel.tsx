"use client";

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CarouselButton, usePrevNextButtons } from "./TestimonyCarouselButton";
import { cn } from "@/lib/utils";

type PropType = {
  slides: TestimonyCarouselItemProps[];
  options?: EmblaOptionsType;
};

export interface TestimonyCarouselProps {
  data: TestimonyCarouselItemProps[] | undefined;
}

export interface TestimonyCarouselItemProps {
  src: string;
  alt: string;
}

const TestimonyCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".slide-image") as HTMLElement;
    });
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";
      const totalSlides = slides.length;

      // Calculate indices for previous and next slides with circular indexing
      const prevSlideIndex = (activeSlideIndex - 1 + totalSlides) % totalSlides;
      const nextSlideIndex = (activeSlideIndex + 1) % totalSlides;

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.position = "relative";

          if (slideIndex === activeSlideIndex) {
            // Active slide: fully visible, on top
            tweenNode.style.transform = `scale(1) translateX(0%)`;
            tweenNode.style.zIndex = "100";
          } else if (slideIndex === prevSlideIndex) {
            // Previous slide: partially visible, slightly behind
            tweenNode.style.transform = `scale(0.8) translateX(75%)`;
            tweenNode.style.zIndex = "10";
          } else if (slideIndex === nextSlideIndex) {
            // Next slide: partially visible, slightly behind
            tweenNode.style.transform = `scale(0.8) translateX(-75%)`;
            tweenNode.style.zIndex = "10";
          } else {
            // Other slides: hidden or in background
            tweenNode.style.transform = `scale(0.8) translateX(0%)`;
          }
        });
      });
    },
    [activeSlideIndex, slides.length]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("select", () => setActiveSlideIndex(emblaApi.selectedScrollSnap()));

    setActiveSlideIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setTweenNodes, slides.length, tweenScale]);

  return (
    <div className="w-[96%] lg:w-[75%] flex flex-col md:gap-6 items-center">
      <h1 className="lg:text-t1 md:text-t2 text-t5 max-w-[90%] font-cinzel text-center lg:mb-[36px]">
        What They Said About betis?
      </h1>
      <div className="flex gap-2 md:gap-5 w-full">
        <CarouselButton direction="prev" onClick={onPrevButtonClick} />
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-10 py-10 px-3.5   md:px-3  ">
            {slides.map((slide, index) => (
              <div className="relative" key={index}>
                <div
                  className={cn(
                    "slide-image relative w-[270px] md:w-[630px] lg:w-[700px] transition-all md:h-[400px] duration-300 ease-in-out bg-[#33153E] rounded-[32px] px-6 md:px-10 pt-10 max-md:pb-7 md:py-8 shadow-testimony-card flex md:flex-row flex-col justify-center items-center gap-[20px] md:gap-[70px]"
                  )}
                >
                  <div className="absolute w-[50px] h-full z-10 max-md:right-[10%] md:left-1/3 -top-[40%]">
                    <Image
                      src={"/testimony/petik.png"}
                      fill
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute w-[50px] h-full z-10 left-[10%] bottom-[5%] md:hidden rotate-180">
                    <Image
                      src={"/testimony/petik.png"}
                      fill
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full -z-10">
                    <Image
                      src={"/testimony/background.png"}
                      fill
                      alt=""
                      className="object-cover rounded-[32px]"
                    />
                  </div>
                  <div className="md:w-full md:h-[320px] aspect-square w-[160px] h-[160px] md:aspect-[9/16] relative rounded-[10px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                  <div className="space-y-5 md:max-w-[60%]">
                    <p className="text-[12px] md:text-t7 text-justify h-[100px] md:h-[180px] overflow-y-scroll">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Non ac mi nunc volutpat garavida malesuada eu massa
                      vestibulum. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Non ac mi nunc volutpat garavida
                      malesuada eu massa vestibulum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Non ac mi nunc volutpat
                      garavida.
                    </p>
                    <div>
                      <h1 className="text-t6 md:text-t4 font-cinzel">Alice</h1>
                      <h2 className="text-t8 md:text-t6 font-raleway">
                        Peserta BETIS 2024
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CarouselButton direction="next" onClick={onNextButtonClick} />
      </div>
      <div className="flex gap-5 lg:gap-10 max-md:hidden">
        {Array.from({ length: slides.length }).map((_, index) => (
          <div
            onClick={() => emblaApi?.scrollTo(index)}
            key={index}
            className={cn(
              "size-6 rounded-full cursor-pointer",
              activeSlideIndex === index ? "bg-violet-300" : "bg-[#D9D9D9]"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonyCarousel;
