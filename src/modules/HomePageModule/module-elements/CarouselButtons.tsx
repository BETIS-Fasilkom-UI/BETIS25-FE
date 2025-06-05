import { EmblaCarouselType } from 'embla-carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { PropsWithChildren, useCallback } from 'react';

type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> & {
  direction: 'prev' | 'next';
  onClick: () => void;
};

export const CarouselButton: React.FC<PropType> = (props) => {
  const { children, direction, onClick, ...restProps } = props;

  return (
    <button onClick={onClick} {...restProps}>
      {direction === 'prev' ? (
        // button color should be bg-gradient-to-b from-[#b73786] to-[#621d48]
        <div className="flex items-center justify-center size-[1.875rem] sm:size-12 bg-gradient-to-b from-[#b73786] to-[#621d48] rounded-full">
          <ArrowLeft
            color="#FEF5FF"
            className="size-[1.55rem] sm:size-10 w-8 md:w-auto"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center size-[1.875rem] sm:size-12 bg-gradient-to-b from-[#b73786] to-[#621d48] rounded-full">
          <ArrowRight
            color="#FFFFFF"
            className="size-[1.55rem] sm:size-10 w-8 md:w-auto"
          />
        </div>
      )}
      {children}
    </button>
  );
};
