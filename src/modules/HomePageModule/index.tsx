import React from "react";
import AboutBetis from "./sections/AboutBetis";
import { betisCarousel, betisCarouselOptions } from "./const";
import DocumentationCarousel from "./sections/DocumentationCarousel";
import Timeline from "./sections/Timeline";
import BetalksWebinarPPKB from "./sections/BetalksWebinarPPBK";
import CountdownSNBT from "./sections/CountdownSNBT";
import { ContactPerson } from "@/components/elements/ContactPerson";
import Hero from "./sections/hero";
import Sponsor from "./sections/Sponsor";
import Medpar from "./sections/Medpar";
import Faq from "./sections/Faq";
import Vismis from "./sections/VismisModule/Vismis";

export const HomePageModule = () => {
  return (
    <main className="flex flex-col justify-center items-center mb-[10dvh]">
      <Hero />
      <AboutBetis />
      <Vismis />
      <DocumentationCarousel
        slides={betisCarousel}
        options={betisCarouselOptions}
      />
      <Timeline />
      <BetalksWebinarPPKB />
      <CountdownSNBT />
      <Medpar />
      <Sponsor />
      <Faq />
      <div className="w-full px-5 md:px-10 lg:px-20">
        <ContactPerson />
      </div>
    </main>
  );
};
