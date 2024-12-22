import Countdown from "@/components/elements/Countdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CountdownSNBTModule = () => {
  return (
    <div className="relative sm:w-[80%] h-[500px] sm:h-[550px] rounded-[40px] sm:rounded-[90px]">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(34,12,49,0)_0%,_#2B103A_27%,_#451C55_74%,_#8E2B8F_100%)] opacity-[100%] rounded-[40px] sm:rounded-[90px]"></div>

      <div className="relative z-10 grid place-items-center h-full">
        <div className="grid grid-cols-1 gap-6 sm:gap-7 p-6">
          <div className="font-cinzel lg:text-t6 xl:text-t4 text-center">
            BERSIAPLAH UNTUK MASA DEPANMU!
          </div>
          <Countdown displayDate targetDate={new Date("2025-02-04T23:59:59")} />
          <div className="font-raleway lg:text-t8 xl:text-t7 text-center">
            Menuju SNBT 2025!
          </div>
          <div className="font-raleway lg:text-t8 xl:text-t7 text-center -mt-5 sm:-mt-6">
            Waktunya berjuang dan raih mimpimu
          </div>
          <div className="flex justify-center">
            <Button className="w-[80%]">Daftar BETIS 2025</Button>
          </div>
        </div>
      </div>

      <div className="absolute lg:w-[208.63px] lg:h-[326.27px] -left-11 -bottom-20">
        <Image
          alt="Jam2"
          src="/Jam2.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>

      <div className="absolute lg:w-[178.29px] lg:h-[356.57px] -right-5 top-6">
        <Image
          alt="Jam1"
          src="/Jam1.png"
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CountdownSNBTModule;
