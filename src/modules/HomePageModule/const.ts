import { EventEntry } from "./interface";
import { EmblaOptionsType } from "embla-carousel";
import { CarouselItemProps } from "./sections/DocumentationCarousel";

export const betisCarouselOptions: EmblaOptionsType = {
  loop: true,
  align: "center",
  slidesToScroll: 1,
  startIndex: 1,
};

export const betisCarousel: CarouselItemProps[] = [
  {
    src: "/placeholder/placeholder(1).jpg",
    alt: "Acara 1",
    year: "2023",
  },
  {
    src: "/placeholder/placeholder(2).jpg",
    alt: "Acara 2",
    year: "2023",
  },
  {
    src: "/placeholder/placeholder(3).jpg",
    alt: "Acara 3",
    year: "2022",
  },
  {
    src: "/placeholder/placeholder(4).jpg",
    alt: "Acara 4",
    year: "2022",
  },
  {
    src: "/placeholder/placeholder(5).jpg",
    alt: "Acara 5",
    year: "2021",
  },
  {
    src: "/placeholder/placeholder(6).jpg",
    alt: "Acara 6",
    year: "2021",
  },
  {
    src: "/placeholder/placeholder(7).jpg",
    alt: "Acara 7",
    year: "2023",
  },
];


export const events: EventEntry[] = [
    {
        name: 'Grand Launching',
        date: '25 Januari',
        status: 'Done'
    },
    {
        name: 'Be - Talks',
        date: '15 Maret',
        status: 'Awaiting'
    },
    {
        name: 'Main Event',
        date: '19 April',
        status: 'Awaiting'
    },
    {
        name: 'Webinar PPKB',
        date: '24 Mei',
        status: 'Awaiting'
    }
]
