"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Modal, ModalButton } from "@/components/ui/modal";
import { useState } from "react";
import { getAsset } from "@/lib/s3";

const BetalksWebinarPPKB = () => {
  // isRegisterOpen state as placeholder for needing login
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isBetalksDescOpen, setBetalksDescOpen] = useState(false);
  const [isWebinarppkbDescOpen, setWebinarppkbDescOpen] = useState(false);

  return (
    <div className="flex flex-col w-full px-5 md:px-10 lg:px-20">
      <div className="text-[var(--Font,#FEF5FF)] font-cinzel max-md:text-center text-2xl md:text-4xl lg:text-5xl font-black leading-[3.75rem] mb-5 xl:flex xl:mb-[3.25rem]">
        Our Event
      </div>

      <section className="space-y-10 md:space-y-20">
        <Card className="w-full flex flex-col-reverse xl:grid xl:grid-cols-2 bg-[#6F4589] bg-opacity-100 !px-8 !pt-2 !pb-12 xl:!pl-14 xl:!pr-0 xl:!pt-9 h-full xl:h-[320px] 2xl:h-[300px] xl:!flex-row xl:mx-auto">
          <div className="flex flex-col">
            <div className="text-[var(--Font,#FEF5FF)] font-cinzel text-2xl md:text-3xl max-md:text-center xl:text-4xl font-black leading-10 mt-8 xl:mt-0 xl:flex mb-4">
              be talks
            </div>
            <div className="text-[var(--Font,#FEF5FF)] text-justify font-raleway text-xs font-semibold md:text-base xl:font-medium leading-7 mb-5 ">
              Be-Talks adalah acara yang bertujuan untuk membangkitkan semangat
              belajar bagi peserta BETIS Fasilkom UI 2025, serta masyarakat umum
              agar tetap konsisten dalam mengejar impian mereka. Dengan adanya
              Be-Talks, diharapkan peserta dapat kembali termotivasi dan lebih
              bersemangat dalam belajar
            </div>
            <div className="gap-3 flex flex-col xl:flex-row">
              <Button
                disabled
                className="flex-1 !py-3"
                onClick={() => setRegisterOpen(true)}
              >
                Daftar Sekarang
              </Button>
              <Button
                disabled
                className="flex-1 !py-3"
                variant="secondary"
                onClick={() => setBetalksDescOpen(true)}
              >
                Description
              </Button>
              <Modal
                title="OOPS!"
                open={isRegisterOpen}
                onOpenChange={setRegisterOpen}
                buttons={[
                  <ModalButton className="w-full">Register</ModalButton>,
                ]}
              >
                Fitur ini memerlukan login untuk melanjutkan. Yuk, masuk atau
                daftar dulu untuk menikmati pengalaman penuh!
              </Modal>
              <Modal
                title="BE TALKS"
                open={isBetalksDescOpen}
                onOpenChange={setBetalksDescOpen}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui
                orci ac egestas. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut dui orci ac egestas. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut dui orci ac egestas. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut dui orci
                ac egestas
              </Modal>
            </div>
          </div>
          <div className="relative mx-auto w-[225px] h-[143px] md:w-[326px] md:h-[208px] xl:w-[528px] xl:h-[338px] xl:!-top-[8.75rem]">
            <Image
              alt="Megaphone"
              src={getAsset("/ImageBEtalks.png")}
              fill
              sizes="none"
              className="object-contain animate-swing"
            />
          </div>
        </Card>

        <Card className="w-full flex flex-col xl:grid xl:grid-cols-2 bg-[#6F4589] bg-opacity-100 !px-8 !pt-2 !pb-12 xl:!pl-0 xl:!pr-14 xl:!pt-9 h-full xl:h-[320px] 2xl:h-[300px] xl:!flex-row xl:mx-auto">
          <div className="relative mx-auto w-[225px] h-[143px] md:w-[326px] md:h-[208px] xl:w-[528px] xl:h-[338px] xl:!-top-[8.75rem]">
            <Image
              alt="Scroll"
              src={getAsset("/ImageWebinarPPKB.png")}
              fill
              sizes="none"
              className="object-contain animate-swing"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[var(--Font,#FEF5FF)] font-cinzel text-2xl md:text-3xl max-md:text-center xl:text-4xl font-black leading-10 mt-8 xl:mt-0 xl:flex mb-4">
              Webinar PPKB
            </div>
            <div className="text-[var(--Font,#FEF5FF)] text-justify font-raleway text-xs font-semibold md:text-base xl:font-medium leading-7 mb-5 ">
              Webinar PPKB adalah acara untuk memberikan panduan menulis esai
              yang baik dan benar dalam seleksi PPKB (Prestasi dan Penelusuran
              Kemampuan Belajar). Peserta akan mempelajari struktur, strategi
              penulisan, serta tips untuk membuat esai yang menarik dan sesuai
              kriteria, dengan tujuan meningkatkan peluang keberhasilan.
            </div>
            <div className="gap-3 flex flex-col xl:flex-row">
              <Button
                disabled
                className="flex-1 !py-3"
                onClick={() => setRegisterOpen(true)}
              >
                Daftar Sekarang
              </Button>
              <Button
                disabled
                className="flex-1 !py-3"
                variant="secondary"
                onClick={() => setBetalksDescOpen(true)}
              >
                Description
              </Button>
              <Modal
                title="OOPS!"
                open={isRegisterOpen}
                onOpenChange={setRegisterOpen}
                buttons={[
                  <ModalButton className="w-full">Register</ModalButton>,
                ]}
              >
                Fitur ini memerlukan login untuk melanjutkan. Yuk, masuk atau
                daftar dulu untuk menikmati pengalaman penuh!
              </Modal>
              <Modal
                title="BE TALKS"
                open={isWebinarppkbDescOpen}
                onOpenChange={setWebinarppkbDescOpen}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui
                orci ac egestas. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut dui orci ac egestas. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut dui orci ac egestas. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut dui orci
                ac egestas
              </Modal>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default BetalksWebinarPPKB;
