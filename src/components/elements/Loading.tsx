import React from 'react';
import Image from 'next/image';

export const Loading = () => {
  return (
    <main className="flex flex-col gap-10 items-center justify-center h-screen">
      <Image
        src={'/s3/Load.png'}
        alt="Logo"
        width={180}
        height={158}
        className="animate-pulse object-contain"
      />
      <h1 className="text-[#FEF5FFCC] text-[36px] animate-pulse font-cinzel">
        Loading...
      </h1>
    </main>
  );
};
