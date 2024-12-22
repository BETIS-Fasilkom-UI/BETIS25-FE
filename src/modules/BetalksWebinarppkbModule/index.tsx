import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const BetalksWebinarppkbModule = () => {
  return (
    <div>
      <div className="flex w-[1328px] h-[861.24px] flex-col justify-start items-start gap-3">
        <div className="text-[var(--Font,#FEF5FF)] font-cinzel text-5xl font-black leading-[60px] ">
          Our Event
        </div>

        <div className="flex flex-col items-start gap-[144px] self-stretch">
          <Card className="flex flex-row-reverse w-[1278px] h-[300px] py-[28px] px-[24px]">
            <div className="flex relative w-[480px] h-[307px] flex-shrink-0">
              <Image
                alt="Megaphone"
                src="/imageBEtalks.png"
                fill
                sizes="none"
                className="object-contain"
              />
            </div>
            <div className="flex w-[729px] h-[236px] flex-col items-start gap-[20px] flex-shrink-0">
              <div className="text-[var(--Font,#FEF5FF)] font-cinzel text-[36px] font-[800] leading-[40px]">
                be talks
              </div>

              <div className="text-[var(--Font,#FEF5FF)] text-justify font-raleway text-[16px] font-[600] leading-[28px]">
                Be-Talks adalah acara yang bertujuan untuk membangkitkan
                semangat belajar bagi peserta BETIS Fasilkom UI 2025, serta
                masyarakat umum agar tetap konsisten dalam mengejar impian
                mereka. Dengan adanya Be-Talks, diharapkan peserta dapat kembali
                termotivasi dan lebih bersemangat dalam belajar
              </div>

              <div className="h-12 justify-start items-start gap-3 inline-flex">
                <Button className="flex-grow">Daftar Sekarang</Button>
                <Button className="flex-grow" variant="secondary">
                  Description
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BetalksWebinarppkbModule;
