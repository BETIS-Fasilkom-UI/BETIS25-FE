import React from "react";
import Speaker from "./sections/speaker";
import { Rundown } from "./sections/rundown";
import { WebinarPPKBHero } from "./sections/WebinarPPKBHero";
import Faq from "./sections/Faq";
import { ContactPerson } from "./sections/ContactPerson";

const PPKBModule = () => {
  return (
    <main className="py-22 px-8 md:py-32 md:px-10 lg:py-44 lg:px-16 space-y-32">
      <WebinarPPKBHero />
      <Speaker />
      <Rundown />
      <Faq />
      <ContactPerson />
    </main>
  );
};

export default PPKBModule;
