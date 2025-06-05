import { EmblaCarouselType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
        <div className="flex items-center justify-center bg-violet-300 rounded-full">
          <ChevronLeft color="#FEF5FF" size="28" className="w-8 md:w-auto" />
        </div>
      ) : (
        <div className="flex items-center justify-center bg-violet-300 rounded-full">
          <ChevronRight color="#FEF5FF" size="28" className="w-8 md:w-auto" />
        </div>
      )}
      {children}
    </button>
  );
};
