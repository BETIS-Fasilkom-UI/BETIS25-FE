import Image from "next/image";

const AboutBetis = () => {
  return (
    <div className="flex justify-center w-full h-auto my-10 px-[6.4%] py-[3%]">
      {/* Main Container */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1440px] gap-[3%] md:items-start">
        {/* Heading */}
        <h1 className="w-full mb-[3%] text-2xl text-center text-white md:text-4xl lg:text-t2 font-cinzel">
          Apa Itu BETIS?
        </h1>

        {/* Card */}
        <div className="relative flex flex-col items-center w-full max-w-[1275px] p-[4.43%] bg-white bg-opacity-10 rounded-[20px] shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),-4px_-4px_12px_0px_rgba(254,245,255,0.40)] backdrop-blur-md gap-[3%] md:flex-row-reverse lg:px-[7.14%] lg:py-[3.92%]">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 w-[25.27%] mb-[5.14%] md:ml-[5.14%] md:mb-0">
            <Image
              src="/about/betis-logo.png"
              alt="BETIS Logo"
              width={277.51}
              height={277.51}
              className="w-full rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-[#FEF5FF]">
            <h3 className="mb-[2%] text-lg font-medium text-center md:text-2xl md:text-justify font-raleway">
              BETIS: Bimbingan Belajar Gratis Fasilkom UI
            </h3>
            <p className="text-md leading-normal text-justify md:text-xl font-openSans">
              Program bimbingan belajar gratis untuk siswa SMA/sederajat dan
              alumni yang membutuhkan dukungan dalam persiapan menuju perguruan
              tinggi negeri. Program ini menyediakan materi akademis dan edukasi
              perkuliahan, membantu peserta meraih pendidikan tinggi, serta
              menjadi wadah bagi mahasiswa UI untuk mengabdi kepada masyarakat.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-row items-center justify-around w-full p-3 my-5 text-center text-[#FEF5FF] bg-white bg-opacity-10 rounded-[20px] shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),-4px_-4px_12px_0px_rgba(254,245,255,0.40)] backdrop-blur-md md:w-[90%] md:align-baseline md:my-7 max-w-[1275px] md:justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold md:text-5xl font-cinzel">
              350+
            </h3>
            <h4 className="text-xl font-bold md:text-4xl font-cinzel">
              Pendaftar
            </h4>
            <p className="text-xs font-bold md:text-md font-raleway">
              BETIS 2024
            </p>
          </div>
          <div className="block w-[1.5px] h-[100px] bg-[#FEF5FF] bg-opacity-50 rounded-md md:h-[175px] md:mx-16"></div>
          <div className="flex flex-col items-center md:mr-24">
            <h3 className="text-2xl font-bold md:text-5xl font-cinzel">
              125
            </h3>
            <h4 className="text-xl font-bold md:text-4xl font-cinzel">
              Peserta
            </h4>
            <p className="text-xs font-bold md:text-md font-raleway">
              yang diterima
            </p>
          </div>
        </div>
        {/* Girl Illustration */}
          <div className="absolute w-[24rem] h-[16rem] right-0 top-1/2 translate-x-48 -translate-y-80 md:w-[32rem] md:h-[96rem] md:translate-x-[15rem] md:-translate-y-[32rem]">
            <Image
              src="/about/girl-illustration.png"
              alt="Girl Illustration"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
      </div>
    </div>
  );
};

export default AboutBetis;
