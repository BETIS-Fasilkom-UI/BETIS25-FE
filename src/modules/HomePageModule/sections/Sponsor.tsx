import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const Sponsor = () => {
  return (
    <div className="flex flex-col items-center space-y-10 mt-24 lg:mt-48">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-cinzel text-white">
        Our Sponsors
      </h1>

      {/* Sponsor Card Container */}
      <Card className="bg-[#6f4589] rounded-[32px] shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),  4px_-4px_12px_0px_rgba(254,245,255,0.40)] w-[95vw] md:w-[90vw] lg:w-[80vw]">
        <div className="flex flex-col items-center space-y-8 sm:space-y-4">
          <div className='flex gap-2'>
            <Image
              alt='Sponsor Logo Hotways'
              src='https://betis25.s3.ap-southeast-2.amazonaws.com/sponsors/hotways.jpg'
              fill
              className="object-contain"
            />
            <Image
              alt='Sponsor Logo Sido'
              src='https://betis25.s3.ap-southeast-2.amazonaws.com/sponsors/sidomuncul-transparent.png'
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sponsor;
