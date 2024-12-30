"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardImage,
  CardDescription,
} from "@/components/ui/card";
import "./styles.css";
import Image from "next/image";

const Vismis = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-center font-cinzel text-4xl mb-12 text-white">
        VISI MISI BETIS
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* card 1: inspiratif */}
        <div className="card w-[390px] h-[340px]">
          <div className="h-full card__content transition-transform duration-1000">
            <Card className="card__front absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader className="absolute top-12">
                <CardTitle>Inspiratif</CardTitle>
              </CardHeader>
              <Image
                src="/buku.png"
                alt="Insipiratif"
                width={694}
                height={452}
                className="bottom-6 absolute scale-90"
              />
            </Card>

            <Card className="card__back absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader className="absolute top-10">
                <CardTitle>Inspiratif</CardTitle>
              </CardHeader>
              <Card className="flex h-3/4 py-2">
                  BETIS 2025 bertujuan menginspirasi peserta untuk bermimpi
                  besar dan menciptakan lingkungan positif yang memotivasi tiap
                  individu untuk mencapai potensi maksimal
              </Card>
            </Card>
          </div>
        </div>

        {/* card 2: Kolaboratif */}
        <div className="card w-[390px] h-[340px]">
          <div className="h-full card__content transition-transform duration-1000">
            <Card className="card__front absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader className="absolute top-12">
                <CardTitle>Kolaboratif</CardTitle>
              </CardHeader>
              <Image
                src="/Lentera.png"
                alt="Kolaboratif"
                width={257}
                height={316}
                className="absolute bottom-0 left-2 w-60"
              />
            </Card>

            <Card className="card__back absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle>Kolaboratif</CardTitle>
              </CardHeader>
              <Card>
                <CardDescription className="items-center justify-center">
                  bla bla
                </CardDescription>
              </Card>
            </Card>
          </div>
        </div>

        {/* Card 3: Progresif */}
        <div className="card w-[390px] h-[340px]">
          <div className="h-full card__content transition-transform duration-1000">
            <Card className="card__front absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader className="absolute top-12">
                <CardTitle>Progresif</CardTitle>
              </CardHeader>
              <CardImage
                src="/Kupu-kupu.png"
                alt="Progresif"
                className="absolute bottom-0"
              />
            </Card>

            <Card className="card__back absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle>Progresif</CardTitle>
              </CardHeader>
              <Card>
                <CardDescription className="items-center justify-center">
                  bla bla
                </CardDescription>
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vismis;
