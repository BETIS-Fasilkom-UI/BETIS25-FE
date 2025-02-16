import React from "react";
import Speaker from "./section/speaker";
import { Rundown } from "./section/rundown";
import { BeTalksHero } from "./section/BeTalksHero";
import Faq from "./section/Faq";
import { ContactPerson } from "./section/ContactPerson";

const BetalksModule = () => {
  return (
    <main className="py-22 px-8 md:py-32 md:px-10 lg:py-44 lg:px-16 space-y-32">
      <BeTalksHero />
      <Speaker />
      <Rundown />
      <Faq />
      <ContactPerson />
    </main>
  );
};

export default BetalksModule;
