"use client";

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CarouselButton, usePrevNextButtons } from "./CarouselButtons";
import { cn } from "@/lib/utils";

type PropType = {
  slides: CarouselItemProps[];
  options?: EmblaOptionsType;
};

export interface CarouselProps {
  data: CarouselItemProps[] | undefined;
}

export interface CarouselItemProps {
  src: string;
  alt: string;
}

const Carousel: React.FC<PropType> = (props) => {
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
            // Active slide
            tweenNode.classList.remove("blur-sm");
            tweenNode.style.transform = `scale(1) translateX(0%)`;
            tweenNode.style.zIndex = "100";
          } else if (
            slideIndex === prevSlideIndex ||
            slideIndex === nextSlideIndex
          ) {
            // Previous or Next slides
            tweenNode.classList.add("blur-sm");
            tweenNode.style.transform = `scale(0.75) translateX(${
              slideIndex === prevSlideIndex ? "15%" : "-15%"
            })`;
            tweenNode.style.zIndex = "10";
          } else {
            // Other slides
            tweenNode.classList.add("blur-sm");
            tweenNode.style.transform = `scale(0) translateX(0%)`;
            tweenNode.style.zIndex = "0";
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
    <div className="w-[89%] max-w-[1278px] flex flex-col md:gap-6 items-center">
      <h1 className="lg:text-t1 md:text-t2 text-t5 max-w-[90%] font-cinzel text-center lg:mb-[36px]">
        Betis 2024
      </h1>
      <div className="flex gap-2 md:gap-5 w-full">
        <CarouselButton direction="prev" onClick={onPrevButtonClick} />
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-10 py-10 px-3.5   md:px-3  ">
            {slides.map((slide, index) => (
              <div className="relative" key={index}>
                <div
                  className={cn(
                    "slide-image relative transition-all duration-300 ease-in-out bg-[#6f4589] rounded-[32px] px-8 pt-10 pb-10 shadow-testimony-card flex flex-col justify-center items-center gap-[24px]"
                  )}
                >
                  <div className="w-[331px] h-[227px] relative rounded-2xl shadow-[5px_5px_4px_0px_rgba(0,0,0,0.20)]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                  <div className="space-y-5 md:max-w-[60%]">
                    <div>
                      <h2 className="font-raleway h-7 text-center text-[#fef5ff]/50 text-sm font-semibold leading-7">
                        BETIS 2024
                      </h2>
                      <h1 className="h-9 text-center text-[#fef5ff] text-4xl font-black font-cinzel leading-10">
                        BE-TALKS
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CarouselButton direction="next" onClick={onNextButtonClick} />
      </div>
      <div className="flex gap-5 lg:gap-2 max-md:hidden">
        {Array.from({ length: slides.length }).map((_, index) => (
          <div
            onClick={() => emblaApi?.scrollTo(index)}
            key={index}
            className={cn(
              "size-4 rounded-full cursor-pointer",
              activeSlideIndex === index
                ? "w-8 bg-gradient-to-b from-[#b73786] to-[#621d48]"
                : "bg-black"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
