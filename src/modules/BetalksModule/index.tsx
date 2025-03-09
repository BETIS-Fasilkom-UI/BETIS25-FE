import React from 'react';
import Speaker from './sections/speaker';
import { Rundown } from './sections/rundown';
import { BeTalksHero } from './sections/BeTalksHero';
import Faq from './sections/Faq';
import { ContactPerson } from './sections/ContactPerson';

const BetalksModule = () => {
  return (
    <main className="py-24 px-8 md:py-32 md:px-10 lg:py-44 lg:px-16 space-y-32">
      <BeTalksHero />
      <Speaker />
      <Rundown />
      <Faq />
      <ContactPerson />
    </main>
  );
};

export default BetalksModule;
