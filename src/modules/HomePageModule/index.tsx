import React from "react";
import AboutBetis from "./sections/AboutBetis";
import { betisCarousel, betisCarouselOptions } from "./const";
import DocumentationCarousel from "./sections/DocumentationCarousel";
import Timeline from "./sections/Timeline";
import BetalksWebinarPPKB from "./sections/BetalksWebinarPPBK";
import CountdownSNBT from "./sections/CountdownSNBT";
import { ContactPerson } from "@/components/elements/ContactPerson";

export const HomePageModule = () => {
  return (
    <main className="flex flex-col justify-center items-center my-[10dvh]">
      <AboutBetis />
      <DocumentationCarousel
        slides={betisCarousel}
        options={betisCarouselOptions}
      />
      <Timeline />
      <BetalksWebinarPPKB />
      <CountdownSNBT />
      <ContactPerson />
    </main>
  );
};
