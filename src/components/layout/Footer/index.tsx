import React from "react";
import Image from "next/image";
import Link from "next/link";
import { social } from "./const";
import { MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full">
      {/* Desktop */}
      <div className="bg-[#481E58] flex justify-between items-center pt-[120px] pb-[120px] xl:pb-[164px] px-[60px] xl:px-[84px] max-lg:hidden">
        <div className="space-y-[70px]">
          <div className="flex gap-[30px] items-center">
            <div className="xl:w-[194px] xl:h-[170px] w-[130px] h-[110px] relative">
              <Image
                src="/Footer.png"
                alt="FooterLogo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-[#E2E2E2] text-[32px] xl:text-[54px] font-cinzel">
              BETIS
              <br />
              <p className="font-raleway text-[20px] xl:text-[32px]">
                Bimbingan Belajar Gratis
              </p>
            </h1>
          </div>
          <div className="flex gap-6">
            {social.map((item, index) => (
              <ContactLogo key={index} href={item.href} image={item.image} />
            ))}
          </div>
        </div>
        <div className="border-t-2 border-[#E2E2E2] space-y-9 pt-4 max-w-[300px] xl:max-w-[521px]">
          <div className="flex justify-between gap-3 xl:gap-10">
            <Link
              href="/about"
              className="text-[#E2E2E2] text-t7 xl:text-t5 font-semibold font-raleway"
            >
              About Betis
            </Link>
            <Link
              href="/talk"
              className="text-[#8D8D8D] text-t7 xl:text-t5 font-semibold font-raleway"
            >
              BETIS-Talk
            </Link>
            <Link
              href="/shop"
              className="text-[#8D8D8D] text-t7 xl:text-t5 font-semibold font-raleway"
            >
              BETIS-Shop
            </Link>
          </div>
          <div className="flex items-center justify-end gap-4 pt-8">
            <p className=" text-[#E2E2E2] text-t8 xl:text-t6 font-raleway font-semibold text-right">
              Fakultas Ilmu Komputer Universitas Indonesia Kampus UI Depok,
              Pondok Cina, Kec. Beji, Kota Depok, Jawa Barat 16424
            </p>
            <MapPin className="text-[#E2E2E2] xl:min-w-[60px] xl:min-h-[60px] xl:w-[60px] xl:h-[60px] min-w-[48px] min-h-[48px] w-[48px] h-[48px]" />
          </div>
          <div className="flex items-center justify-end gap-4">
            <p className=" text-[#E2E2E2] text-t8 xl:text-t6 font-raleway font-semibold text-right">
              betisfasilkomui2022@gmail.com
            </p>
            <Mail className="text-[#E2E2E2] xl:min-w-[60px] xl:min-h-[60px] xl:w-[60px] xl:h-[60px] min-w-[48px] min-h-[48px] w-[48px] h-[48px]" />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex gap-3 items-center justify-center bg-white py-4">
          {social.map((item, index) => (
            <ContactLogo key={index} href={item.href} image={item.image} />
          ))}
        </div>
        <div className="bg-[#481E58] px-8 sm:px-[62px] h-[471px] flex justify-center items-center flex-col">
          <div className="w-[98px] h-[86px] relative">
            <Image
              src="/Footer.png"
              alt="FooterLogo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[#E2E2E2] text-center text-[28px] font-cinzel mt-2 mb-6">
            BETIS
            <br />
            <p className="font-raleway text-[12px]">Bimbingan Belajar Gratis</p>
          </h1>
          <div className="flex justify-between gap-3 xl:gap-10 border-t-2 pt-2 mb-6 border-[#E2E2E2]">
            <Link
              href="/about"
              className="text-[#E2E2E2] text-t8 sm:text-t7 font-semibold font-raleway"
            >
              About Betis
            </Link>
            <Link
              href="/talk"
              className="text-[#8D8D8D] text-t8 sm:text-t7 font-semibold font-raleway"
            >
              BETIS-Talk
            </Link>
            <Link
              href="/shop"
              className="text-[#8D8D8D] text-t8 sm:text-t7 font-semibold font-raleway"
            >
              BETIS-Shop
            </Link>
          </div>
          <div className="flex flex-col justify-end  gap-3">
            <div className="flex items-center justify-end gap-3  max-w-[344px]">
              <p className=" text-[#E2E2E2] text-[10px] sm:text-[12px] leading-7 font-raleway font-semibold text-right">
                Fakultas Ilmu Komputer Universitas Indonesia Kampus UI Depok,
                Pondok Cina, Kec. Beji, Kota Depok, Jawa Barat 16424
              </p>
              <MapPin className="text-[#E2E2E2] min-w-[30px] min-h-[30px] w-[30px] h-[30px]" />
            </div>
            <div className="flex items-center justify-end gap-3">
              <p className=" text-[#E2E2E2] text-[10px] sm:text-[12px] font-raleway font-semibold text-right">
                betisfasilkomui2022@gmail.com
              </p>
              <Mail className="text-[#E2E2E2] min-w-[30px] min-h-[30px] w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactLogo = ({ href, image }: { href: string; image: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="lg:p-3 p-2 bg-transparent border-[#481E58] lg:border-white border-2 lg:border-4 rounded-full"
    >
      <div className="relative xl:w-[28px] xl:h-[28px] lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]">
        <Image
          src={image}
          alt="Logo"
          fill
          className="object-contain max-lg:hidden"
        />
        <Image
          src={image.split(".").join("Mob.")}
          alt="Logo"
          fill
          className="object-contain lg:hidden"
        />
      </div>
    </Link>
  );
};
