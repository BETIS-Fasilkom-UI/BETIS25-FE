import Countdown from "@/components/elements/Countdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CountdownSNBT = () => {
  return (
    <div className="relative flex justify-center w-full h-[700px] sm:h-[800px] overflow-hidden max-md:mt-[100px] mt-[150px] px-5 md:px-10 lg:px-20">
      <div className="relative w-full h-[500px] sm:h-[550px] translate-y-[100px] sm:translate-y-[150px] rounded-[40px] sm:rounded-[90px]">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(34,12,49,0)_0%,_#2B103A_27%,_#451C55_74%,_#8E2B8F_100%)] opacity-[12%] rounded-[40px] sm:rounded-[90px]"></div>

        <div className="relative z-30 grid place-items-center h-full">
          <div className="grid grid-cols-1 gap-6 sm:gap-7 p-6">
            <div className="font-cinzel text-t6 md:text-t5 lg:text-t5 xl:text-t4 text-center">
              BERSIAPLAH UNTUK MASA DEPANMU!
            </div>
            <Countdown
              displayDate
              targetDate={new Date("2025-04-23T08:00:00")}
            />
            <div className="font-raleway text-t8 md:text-t8 xl:text-t7 text-center">
              Menuju SNBT 2025!
            </div>
            <div className="font-raleway text-t8 md:text-t8 xl:text-t7 text-center -mt-5 sm:-mt-6">
              Waktunya berjuang dan raih mimpimu
            </div>
            <div className="flex justify-center">
              <Link href="/registration">
                <Button className="w-fit sm:w-[80%] h-[90%] text-t8 sm:text-t7">
                  Daftar BETIS 2025
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute z-20 w-[116.16px] h-[181.67px] sm:w-[208.63px] sm:h-[326.27px] -left-14 sm:-left-36 md:-left-20 lg:left-6 xl:left-20 2xl:left-32 -bottom-24 sm:-bottom-32 md:-bottom-20">
          <Image
            alt="Jam2"
            src="/Jam2.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute z-20 w-[109.74px] h-[219.48px] sm:w-[178.29px] sm:h-[356.57px] -right-14 sm:-right-32 md:-right-10 lg:right-12 xl:right-32 2xl:right-40 -top-36 sm:-top-48 md:top-6">
          <Image
            alt="Jam1"
            src="/Jam1.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute z-10 w-[548.86px] h-[61.37px] sm:w-[658.632px] sm:h-[73.644px] md:opacity-0 -right-14 -top-20 sm:-right-32">
          <Image
            alt="Vector1"
            src="/Vector1.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute z-10 w-[464.54px] h-[38.41px] sm:w-[650.356px] sm:h-[53.774px] md:opacity-0 -bottom-12 sm:-bottom-11 -left-14 sm:-left-36">
          <Image
            alt="Vector2"
            src="/Vector2.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownSNBT;
