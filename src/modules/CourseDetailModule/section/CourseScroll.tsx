"use client";
import { useState } from "react";
import Image from "next/image";
import { getAsset } from "@/lib/s3";
import Link from "next/link";
import { Scroll, Section } from "../interface";

const CourseScroll = ({
  id,
  title,
  description,
  sections,
  week,
}: Scroll & { week: string }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="w-[660px] max-md:w-[600px] max-sm:w-[366px]" key={id}>
      <div className="w-full h-full flex flex-col relative">
        <div className="absolute w-full h-[97%] top-[1%]">
          <Image
            alt="kertas"
            src={getAsset("/lembarankertas2.png")}
            fill
            sizes="none"
            priority
          />
        </div>

        <div className="z-[0] relative w-full aspect-[805/103] flex justify-center items-center">
          <h1 className="font-cinzel text-4xl max-md:text-2xl max-sm:text-lg z-10 text-[#87101A]">
            {week}
          </h1>
          <Image
            alt="gulungan"
            src={getAsset("/gulungan1.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="z-10 w-full flex flex-col gap-3 max-md:gap-2 max-sm:gap-1 py-4 pl-8 pr-7 max-md:px-14">
          <h1 className="font-raleway font-semibold text-4xl max-md:text-2xl max-sm:text-lg px-12 text-[#87101A]">
            {title}
          </h1>
          <p className="font-openSans text-xl max-md:text-lg max-sm:text-base px-12 text-[#000]">
            {description}
          </p>
          {active && <hr className="border-[#50091054]" />}
          <div
            className={`font-raleway text-[#500910] w-full ${
              active ? "block" : "hidden"
            }`}
          >
            <div className="w-full flex flex-col gap-5 px-12">
              {sections.map((section) => (
                <div key={section.id} className="w-full flex flex-col gap-2">
                  <div>
                    <h2 className="text-lg max-md:text-base max-sm:text-sm font-semibold">
                      {section.title}
                    </h2>
                    <p className="text-base max-md:text-sm max-sm:text-xs">
                      {section.description}
                    </p>
                  </div>
                  {section.items.map((item) =>
                    item.type === "material" ? (
                      item.title.toLowerCase().includes("quiz") ? (
                        <Link key={item.id} href={`/`}>
                          <div className="flex gap-3 items-center transition-all hover:opacity-70">
                            <div className="p-[7px] bg-[#CB4551] rounded-[12px]">
                              <div className="relative w-[35px] h-[35px] max-md:w-[30px] max-md:h-[30px] max-sm:w-[20px] max-sm:h-[20px]">
                                <Image
                                  alt="materi"
                                  src={getAsset("/li_file-question.svg")}
                                  fill
                                  sizes="none"
                                  className="object-contain"
                                />
                              </div>
                            </div>
                            <p className="font-openSans text-xl max-md:text-lg max-sm:text-sm">
                              {item.title}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <Link key={item.id} href={item.url}>
                          <div className="flex gap-3 items-center transition-all hover:opacity-70">
                            <div className="p-[7px] bg-[#AB98B2] rounded-[12px]">
                              <div className="relative w-[35px] h-[35px] max-md:w-[30px] max-md:h-[30px] max-sm:w-[20px] max-sm:h-[20px]">
                                <Image
                                  alt="materi"
                                  src={getAsset("/li_file-text.svg")}
                                  fill
                                  sizes="none"
                                  className="object-contain"
                                />
                              </div>
                            </div>
                            <p className="font-openSans text-xl max-md:text-lg max-sm:text-sm">
                              {item.title}
                            </p>
                          </div>
                        </Link>
                      )
                    ) : (
                      <Link key={item.id} href={`/`}>
                        <div className="flex gap-3 items-center transition-all hover:opacity-70">
                          <div className="p-[7px] bg-[#CB4551] rounded-[12px]">
                            <div className="relative w-[35px] h-[35px] max-md:w-[30px] max-md:h-[30px] max-sm:w-[20px] max-sm:h-[20px]">
                              <Image
                                alt="materi"
                                src={getAsset("/li_file-plus.svg")}
                                fill
                                sizes="none"
                                className="object-contain"
                              />
                            </div>
                          </div>
                          <p className="font-openSans text-xl max-md:text-lg max-sm:text-sm">
                            {item.title}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="z-[0] relative w-full aspect-[805/103] flex justify-center items-center"
          onClick={handleClick}
        >
          <div className="z-10 relative w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px]">
            <Image
              alt="panah"
              src={getAsset("/panah.svg")}
              fill
              sizes="none"
              className={`object-contain duration-300 ${
                active ? "transform rotate-180" : ""
              }`}
            />
          </div>
          <Image
            alt="gulungan"
            src={getAsset("/gulungan2.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
};
export default CourseScroll;
