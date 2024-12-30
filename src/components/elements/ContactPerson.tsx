import React from "react";
import Image from "next/image";

export const ContactPerson = () => {
  return (
    <div className="bg-[#1E0D2599] flex flex-col -z-10 relative justify-center items-center py-20 md:py-[54px] w-full max-md:px-4 md:px-8 rounded-[40px]">
      <div className="absolute w-full h-full -z-10 max-md:hidden">
        <Image
          src={"/ContactPersonBg.png"}
          fill
          alt=""
          className="object-fill rounded-[40px]"
        />
      </div>
      <div className="absolute w-full h-full -z-10 md:hidden">
        <Image
          src={"/ContactPersonBgMob.png"}
          fill
          alt=""
          className="object-fill rounded-[40px]"
        />
      </div>
      <div className="absolute w-[100px] h-[180px] z-10 top-0 left-0 md:top-10 md:left-[10%] lg:left-[20%]">
        <Image
          src={"/ContactPersonLamp.png"}
          fill
          alt=""
          className="object-contain rounded-[40px]"
        />
      </div>
      <div className="absolute w-[120px] h-[100px] z-10 top-0 right-0 md:hidden">
        <Image
          src={"/ContactPersonBurung.png"}
          fill
          alt=""
          className="object-contain rounded-[40px]"
        />
      </div>
      <h1 className="font-cinzel text-t5 md:text-t3 text-center">
        Perlu Bantuan?
      </h1>
      <h2 className="font-raleway text-neutral-100 text-t8 md:text-t6 text-center mt-2 mb-7">
        Silakan hubungi tim kontak kami!
      </h2>
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center">
        <div className="bg-cp-gradient rounded-[32px] gap-2.5 lg:gap-6 border-2 border-violet-500 px-12 sm:px-20 py-[34px] flex flex-col items-center justify-center">
          <h1 className="font-raleway text-t6 lg:text-t5 text-center text-neutral-50">
            John Doe
          </h1>
          <div className="flex gap-3 justify-center items-center text-t8 lg:text-t6">
            <div className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] relative">
              <Image
                src={"/social/LINE.svg"}
                alt="line"
                fill
                className="object-contain"
              />
            </div>
            john_doe
          </div>
          <div className="flex gap-3 justify-center items-center text-t8 lg:text-t6">
            <div className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] relative">
              <Image
                src={"/social/Whatsapp.svg"}
                alt="wa"
                fill
                className="object-contain"
              />
            </div>
            +62 818 0817 2003
          </div>
        </div>
        <div className="bg-cp-gradient rounded-[32px] gap-2.5 lg:gap-6 border-2 border-violet-500 px-12 sm:px-20 py-[34px] flex flex-col items-center justify-center">
          <h1 className="font-raleway text-t6 lg:text-t5 text-center text-neutral-50">
            John Doe
          </h1>
          <div className="flex gap-3 justify-center items-center text-t8 lg:text-t6">
            <div className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] relative">
              <Image
                src={"/social/LINE.svg"}
                alt="line"
                fill
                className="object-contain"
              />
            </div>
            john_doe
          </div>
          <div className="flex gap-3 justify-center items-center text-t8 lg:text-t6">
            <div className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] relative">
              <Image
                src={"/social/Whatsapp.svg"}
                alt="wa"
                fill
                className="object-contain"
              />
            </div>
            +62 818 0817 2003
          </div>
        </div>
      </div>
    </div>
  );
};
