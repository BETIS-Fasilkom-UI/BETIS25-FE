import React from 'react';
import Speaker from './sections/speaker';
import { Rundown } from './sections/rundown';
import { WebinarPPKBHero } from './sections/WebinarPPKBHero';
import Faq from './sections/Faq';
import { ContactPerson } from './sections/ContactPerson';

const PPKBModule = () => {
  return (
    <main className="py-32 md:py-44 px-8 md:px-10  lg:px-16 space-y-32">
      <WebinarPPKBHero />
      <Speaker />
      <Rundown />
      <Faq />
      <ContactPerson />
    </main>
  );
};

export default PPKBModule;
