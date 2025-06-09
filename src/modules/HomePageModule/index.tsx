import { ContactPerson } from '@/components/elements/ContactPerson';
import { betisCarousel, betisCarouselOptions } from './const';
import AboutBetis from './sections/AboutBetis';
import CountdownSNBT from './sections/CountdownSNBT';
import DocumentationCarousel from './sections/DocumentationCarousel';
import Faq from './sections/Faq';
import Hero from './sections/hero';
import Timeline from './sections/Timeline';
import Vismis from './sections/VismisModule/Vismis';
import BetalksWebinarPPKB from './sections/BetalksWebinarPPKB';
import Medpar from './sections/Medpar';
import Sponsor from './sections/Sponsor';

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
      <CountdownSNBT />
      <BetalksWebinarPPKB />
      <Sponsor />
      <Faq />
      <div className="w-full px-5 md:px-10 lg:px-20">
        <ContactPerson />
      </div>
    </main>
  );
};
