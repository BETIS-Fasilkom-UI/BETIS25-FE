import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const BetalksWebinarppkbModule = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[var(--Font,#FEF5FF)] font-cinzel text-3xl font-black leading-[3.75rem] mb-5 xl:flex xl:text-[3.2rem] xl:mb-[3.25rem]">
        Our Event
      </div>

      <Card className="!border-0 !shadow-[0px_0px_12px_rgba(255,255,255,0.60)] !flex !flex-col-reverse !px-8 !pt-2 !pb-12 !mb-10 xl:!pl-14 xl:!pr-0 xl:!pt-9 xl:!h-[300px] xl:!flex-row xl:mx-auto">
        <div className="w-[72vmin] xl:w-[729px] flex flex-col">
          <div className="text-[var(--Font,#FEF5FF)] font-cinzel text-3xl xl:text-4xl font-black leading-10 mt-8 xl:mt-0 xl:flex mb-4">
            be talks
          </div>
          <div className="text-[var(--Font,#FEF5FF)] text-justify font-raleway text-sm font-semibold xl:text-base xl:font-medium leading-7 mb-5 ">
            Be-Talks adalah acara yang bertujuan untuk membangkitkan semangat
            belajar bagi peserta BETIS Fasilkom UI 2025, serta masyarakat umum
            agar tetap konsisten dalam mengejar impian mereka. Dengan adanya
            Be-Talks, diharapkan peserta dapat kembali termotivasi dan lebih
            bersemangat dalam belajar
          </div>
          <div className="gap-3 flex flex-col xl:flex-row">
            <Button className="flex-1 !py-3">Daftar Sekarang</Button>
            <Button className="flex-1 !py-3" variant="secondary">
              Description
            </Button>
          </div>
        </div>
        <div className="relative flex mx-auto w-[225px] h-[143px] md:w-[326px] md:h-[208px] xl:w-[528px] xl:h-[338px] xl:!-top-28 xl:!-right-[60px]">
          <Image
            alt="Megaphone"
            src="/imageBEtalks.png"
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
      </Card>
    </div>
  );
};

export default BetalksWebinarppkbModule;
