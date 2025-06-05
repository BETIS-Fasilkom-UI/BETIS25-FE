import { CountUp } from '@/animation/CountUp';

import Image from 'next/image';

const AboutBetis = () => {
  return (
    <div
      id="about"
      className="w-full h-auto my-10 overflow-x-clip px-5 md:px-10 lg:px-20"
    >
      {/* Main Container */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[100vw] gap-[3%] md:items-start">
        {/* Heading */}
        <h1 className="w-full mb-[3%] text-2xl md:text-4xl lg:text-5xl text-center text-white mt-2 font-cinzel">
          Apa Itu BETIS?
        </h1>

        {/* Card */}
        <div className="flex flex-col items-center w-full p-[4.43%] bg-[#F8EBF333] rounded-[20px] shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),-4px_-4px_12px_0px_rgba(254,245,255,0.40)] backdrop-blur-md gap-[3%] md:flex-row-reverse lg:px-[7.14%] lg:py-[3.92%] lg:mb-5">
          {/* Logo Section */}
          <div className="relative flex-shrink-0 w-[10rem] h-[10rem] md:w-[12.5rem] md:h-[12.5rem] lg:w-[16rem] lg:h-[16rem] mb-[5.14%] md:ml-[2.5%] md:mb-0">
            <Image
              src={'/s3/about/betis-logo.png'}
              alt="BETIS Logo"
              sizes="none"
              fill
              className="w-full h-full rounded-full object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-[#FEF5FF]">
            <h3 className="mb-2.5 md:mb-6 text-lg font-medium text-center md:text-2xl lg:text-3xl md:text-justify font-raleway">
              <span className="max-md:font-bold">BETIS</span>: Bimbingan Belajar
              Gratis Fasilkom UI
            </h3>
            <p className="text-sm leading-normal text-justify md:text-sm lg:text-base 2xl:text-xl font-raleway mb-2">
              Program bimbingan belajar gratis untuk siswa SMA/sederajat dan
              alumni yang membutuhkan dukungan dalam persiapan menuju perguruan
              tinggi negeri. Program ini menyediakan materi akademis dan edukasi
              perkuliahan, membantu peserta meraih pendidikan tinggi, serta
              menjadi wadah bagi mahasiswa UI untuk mengabdi kepada masyarakat.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-row items-center justify-around p-3 my-5 text-center text-[#FEF5FF] bg-[#F8EBF333] rounded-[20px] shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),-4px_-4px_12px_0px_rgba(254,245,255,0.40)] backdrop-blur-md w-full md:align-baseline md:my-7 md:justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl font-cinzel">
              <CountUp target={350} duration={2} />+
            </h3>
            <h4 className="text-xl font-bold md:text-3xl lg:text-4xl font-cinzel">
              Pendaftar
            </h4>
            <p className="text-xs font-bold md:text-md font-raleway">
              BETIS 2024
            </p>
          </div>
          <div className="block w-[2px] h-[75px] md:h-[125px] bg-[#FEF5FF] bg-opacity-50 rounded-md lg:h-[150px] md:mx-14 lg:mx-24"></div>
          <div className="flex flex-col items-center md:mr-24 lg:mr-32">
            <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl font-cinzel">
              <CountUp target={125} duration={2} />
            </h3>
            <h4 className="text-xl font-bold md:text-3xl lg:text-4xl font-cinzel">
              Peserta
            </h4>
            <p className="text-xs font-bold md:text-md font-raleway">
              yang diterima
            </p>
          </div>
        </div>
        {/* Girl Illustration */}
        <div className="absolute w-[24rem] h-[350px] sm:h-[400px] md:h-[650px] lg:h-[800px] top-0 md:top-72  right-0 translate-x-48  md:w-[32rem]  md:translate-x-[15rem] lg:w-[40rem] lg:translate-x-[18rem] ">
          <Image
            src={'/s3/about/girl-illustration.png'}
            alt="Girl Illustration"
            className="object-contain"
            fill
            sizes="none"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBetis;
