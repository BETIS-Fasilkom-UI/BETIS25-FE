import Image from "next/image";

const AboutBetis = () => {
  return (
    <div className="w-full h-auto flex justify-center my-10 px-[6.4%] py-[3%]">
      {/* Main Container */}
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:items-start gap-[3%] relative">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-t2 font-cinzel text-center w-full mb-[3%] text-white">
          Apa Itu BETIS?
        </h1>

        {/* Card */}
        <div className="w-full max-w-[1275px] bg-white bg-opacity-10 backdrop-blur-md shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),-4px_-4px_12px_0px_rgba(254,245,255,0.40)] rounded-[20px] p-[4.43%] lg:px-[7.14%] lg:py-[3.92%] flex flex-col md:flex-row-reverse items-center gap-[3%] relative">
          {/* Girl Illustration */}
          <div className="absolute right-0 top-1/2 translate-x-48 -translate-y-64 md:-translate-y-[24rem] md:translate-x-[15rem] w-[24rem] h-[16rem] md:w-[32rem] md:h-[96rem]">
            <Image
              src="/about/girl-illustration.png"
              alt="Girl Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Logo Section */}
          <div className="flex-shrink-0 mb-[5.14%] md:mb-0 md:ml-[5.14%] w-[25.27%]">
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
            <h3 className="text-lg md:text-2xl text-center md:text-justify font-raleway font-medium mb-[2%]">
              BETIS: Bimbingan Belajar Gratis Fasilkom UI
            </h3>
            <p className="text-md md:text-xl text-justify leading-normal font-openSans">
              Program bimbingan belajar gratis untuk siswa SMA/sederajat dan
              alumni yang membutuhkan dukungan dalam persiapan menuju perguruan
              tinggi negeri. Program ini menyediakan materi akademis dan edukasi
              perkuliahan, membantu peserta meraih pendidikan tinggi, serta
              menjadi wadah bagi mahasiswa UI untuk mengabdi kepada masyarakat.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full md:w-3/4 md:align-baseline max-w-[1275px] my-5 md:my-7 bg-white bg-opacity-10 backdrop-blur-md shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),-4px_-4px_12px_0px_rgba(254,245,255,0.40)] rounded-[20px] p-3 flex flex-row justify-around items-center text-center text-[#FEF5FF]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-5xl font-cinzel font-bold">
              350+
            </h3>
            <h4 className="text-xl md:text-4xl font-cinzel font-bold">
              Pendaftar
            </h4>
            <p className="text-xs md:text-md font-raleway font-bold">
              BETIS 2024
            </p>
          </div>
          <div className="w-[1.5px] h-[100px] md:h-[200px] bg-[#FEF5FF] bg-opacity-50 block rounded-md"></div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-5xl font-cinzel font-bold">
              125
            </h3>
            <h4 className="text-xl md:text-4xl font-cinzel font-bold">
              Peserta
            </h4>
            <p className="text-xs md:text-md font-raleway font-bold">
              yang diterima
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBetis;
