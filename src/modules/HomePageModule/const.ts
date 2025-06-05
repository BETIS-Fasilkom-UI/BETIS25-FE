import { EventEntry } from './interface';
import { EmblaOptionsType } from 'embla-carousel';
import { CarouselItemProps } from './sections/DocumentationCarousel';

export const betisCarouselOptions: EmblaOptionsType = {
  loop: true,
  align: 'center',
  slidesToScroll: 1,
  startIndex: 1,
};

export const betisCarousel: CarouselItemProps[] = [
  {
    src: '/s3/CarouselGL.JPG',
    alt: 'Grand Launching',
    year: '2024',
  },
  {
    src: '/s3/CarouselMainEvent.JPG',
    alt: 'Main Event',
    year: '2024',
  },
  {
    src: '/s3/CarouselKBM.jpg',
    alt: 'KBM',
    year: '2024',
  },
  {
    src: '/s3/CarouselKBMOnline.jpg',
    alt: 'KBM Online',
    year: '2024',
  },
  {
    src: '/s3/CarouselGLOnline.jpg',
    alt: 'Grand Launching Online',
    year: '2024',
  },
];

export const events: EventEntry[] = [
  {
    name: 'Grand Launching',
    date: '25 Januari',
    status: 'Done',
  },
  {
    name: 'Be - Talks',
    date: '15 Maret',
    status: 'Awaiting',
  },
  {
    name: 'Main Event',
    date: '19 April',
    status: 'Awaiting',
  },
  {
    name: 'Webinar PPKB',
    date: '24 Mei',
    status: 'Awaiting',
  },
];
