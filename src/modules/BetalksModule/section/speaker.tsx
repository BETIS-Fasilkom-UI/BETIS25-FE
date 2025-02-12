import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAsset } from "@/lib/s3";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SPEAKERS, TEXT } from "../const";

const Speaker = () => {
  return (
    <section>
      <h1 className="max-md:hidden font-cinzel font-black text-3xl lg:text-4xl text-center py-10">
        MEET OUR SPEAKER
      </h1>

      {SPEAKERS.length === 1 ? (
        <Card className="bg-white bg-opacity-20 rounded-xl lg:rounded-2xl border-[1px] lg:border-2 border-white border-opacity-40 lg:border-opacity-60 pt-16 pb-12 px-6 md:px-12 lg:px-14 lg:pb-16 lg:pt-44">
          <CardContent className="font-raleway text-foreground/70">
            <div className="flex gap-4 lg:gap-20">
              <div>
                <div
                  className="relative w-[162px] h-[162px] lg:w-[524px] lg:h-[329px] rounded-xl"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(183, 55, 134, 0.1) 10%, rgba(183, 55, 134, 0.3) 90%)",
                  }}
                >
                  <Image
                    alt={SPEAKERS[0].name}
                    src={getAsset(SPEAKERS[0].image)}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-foreground font-semibold text-sm lg:text-3xl pt-3 text-center lg:pt-8">
                  {SPEAKERS[0].name}
                </p>
                <p className="font-openSans text-sm lg:text-xl text-center lg:pt-2">
                  {SPEAKERS[0].role}
                </p>
              </div>

              <div>
                <CardTitle className="font-black text-white text-xl lg:text-4xl text-center lg:text-left">
                  {TEXT.title}
                </CardTitle>

                <p className="font-semibold text-sm lg:text-xl text-center pt-2 lg:text-left lg:pt-5">
                  {TEXT.subtitle}
                </p>

                <div className="max-lg:hidden flex flex-row pt-11 pb-7 space-x-3">
                  <div
                    className=" p-3 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                    }}
                  >
                    <Calendar color="white" size={40} />
                  </div>
                  <div className="pr-11">
                    <p className="text-foreground font-semibold text-2xl">
                      Date:
                    </p>
                    <p className="font-openSans text-2xl">
                      {TEXT.date}
                    </p>
                  </div>
                </div>

                <div className="max-lg:hidden flex flex-row space-x-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                    }}
                  >
                    <MapPin color="white" size={40} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-2xl">
                      Place:
                    </p>
                    <p className="font-openSans text-2xl">
                      {TEXT.place}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex flex-row items-center justify-center space-x-3 pt-5">
              <div
                className=" p-[5px] rounded-[6px]"
                style={{
                  background:
                    "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                }}
              >
                <Calendar color="white" />
              </div>
              <div className="pr-8">
                <p className="text-foreground font-semibold text-sm">
                  Date:
                </p>
                <p className="font-openSans text-sm">{TEXT.date}</p>
              </div>

              <div
                className="p-[5px] rounded-[6px]"
                style={{
                  background:
                    "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                }}
              >
                <MapPin color="white" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">
                  Place:
                </p>
                <p className="font-openSans text-sm">{TEXT.place}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-white bg-opacity-20 rounded-xl lg:rounded-2xl border-[1px] lg:border-2 border-white border-opacity-40 lg:border-opacity-60 pt-16 pb-12 px-5 md:px-16 md:pb-16 md:pt-16 lg:px-20 lg:pb-16 lg:pt-20">
          <CardHeader className="flex flex-row items-center justify-center">
            <CardTitle className="font-black text-xl md:text-2xl lg:text-3xl text-center lg:px-32">
              {TEXT.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="font-raleway text-foreground/70">
            <p className="font-semibold text-sm lg:text-lg text-center lg:px-32">
              {TEXT.subtitle}
            </p>

            <div className="max-lg:hidden flex flex-row items-center justify-center space-x-3 pt-12 pb-20">
              <div
                className=" p-3 rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                }}
              >
                <Calendar color="white" size={40} />
              </div>
              <div className="pr-11">
                <p className="text-foreground font-semibold text-2xl">
                  Date:
                </p>
                <p className="font-openSans text-2xl">{TEXT.date}</p>
              </div>

              <div
                className="p-3 rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                }}
              >
                <MapPin color="white" size={40} />
              </div>
              <div>
                <p className="text-foreground font-semibold text-2xl">
                  Place:
                </p>
                <p className="font-openSans text-2xl">{TEXT.place}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 pt-6 gap-3 md:gap-6 lg:gap-10">
                {SPEAKERS.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="relative w-[162px] h-[162px] md:w-[284px] md:h-[160px] lg:w-[524px] lg:h-[329px] rounded-xl lg:rounded-3xl"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(183, 55, 134, 0.1) 10%, rgba(183, 55, 134, 0.3) 90%)",
                      }}
                    >
                      <Image
                        alt={speaker.name}
                        src={getAsset(speaker.image)}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <p className="text-foreground font-semibold text-sm lg:text-3xl pt-3 lg:pt-8 lg:pb-2">
                      {speaker.name}
                    </p>
                    <p className="font-openSans text-sm lg:text-xl">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden flex flex-row items-center justify-center space-x-3 pt-6">
              <div
                className="p-[5px] md:p-3 rounded-[6px] md:rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                }}
              >
                <Calendar color="white" />
              </div>
              <div className="pr-8">
                <p className="text-foreground font-semibold text-sm md:text-lg">
                  Date:
                </p>
                <p className="font-openSans text-sm md:text-lg">
                  {TEXT.date}
                </p>
              </div>

              <div
                className="p-[5px] md:p-3 rounded-[6px md:rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)",
                }}
              >
                <MapPin color="white" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm md:text-lg">
                  Place:
                </p>
                <p className="font-openSans text-sm md:text-lg">
                  {TEXT.place}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default Speaker;
