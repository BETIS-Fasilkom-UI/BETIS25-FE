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
import { Card } from "@/components/ui/card";

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
  year: string;
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
    <div className="w-[89%] sm:max-w-[1280px] flex flex-col md:gap-8 items-center">
      <h1 className="lg:text-t1 md:text-t2 sm:text-t3 text-2xl max-w-[90%] font-cinzel text-center lg:mb-9 mt-10">
        Betis 2024's Archive
      </h1>
      <div className="flex gap-[1vmin] sm:gap-[3vmin] md:gap-5 w-full h-auto">
        <CarouselButton direction="prev" onClick={onPrevButtonClick} />
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-10 py-6 sm:py-12 px-3.5  md:px-3  ">
            {slides.map((slide, index) => (
              <div className="relative" key={index}>
                <Card
                  className={cn(
                    " border-0 shadow-[0px_0px_12px_rgba(255,255,255,0.60)] slide-image relative transition-all duration-300 ease-in-out bg-[#ffffff] rounded-[32px] px-[4.5vmin] pt-[6vmin] sm:px-8 sm:pt-10 sm:pb-8 flex flex-col justify-center items-center"
                  )}
                >
                  <div className="w-[50vmin] h-[42vmin] sm:w-[331px] sm:h-[277px] relative rounded-2xl shadow-[5px_5px_4px_0px_rgba(0,0,0,0.20)]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                  <div>
                    <h2 className="font-raleway h-5 sm:h-7 text-center text-[#fef5ff]/50 text-[.6rem] sm:text-sm font-semibold sm:leading-7">
                      BETIS {slide.year}
                    </h2>
                    <h1 className="h-7 sm:h-9 text-center text-[#fef5ff] text-2xl sm:text-4xl font-black font-cinzel sm:leading-10">
                      <div>{slide.alt}</div>
                    </h1>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <CarouselButton direction="next" onClick={onNextButtonClick} />
      </div>
      <div className="flex gap-[0.25rem] sm:gap-5 lg:gap-2">
        {Array.from({ length: slides.length }).map((_, index) => (
          <div
            onClick={() => emblaApi?.scrollTo(index)}
            key={index}
            className={cn(
              "size-[0.55rem] sm:size-4 rounded-full cursor-pointer",
              activeSlideIndex === index
                ? "w-[1.10rem] sm:w-8 bg-gradient-to-b from-[#b73786] to-[#621d48]"
                : "bg-black"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
