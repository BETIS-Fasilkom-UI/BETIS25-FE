"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardImage,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import "./styles.css";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { getAsset } from "@/lib/s3";

const Vismis = () => {
  const [isRotated, setIsRotated] = useState<Array<boolean>>([
    false,
    false,
    false,
  ]);

  const rotate: (i: number) => void = (i) => {
    setIsRotated(isRotated.map((val, idx) => (idx === i ? !val : false)));
  };

  return (
    <div className="flex flex-col items-center my-20 md:my-60 w-screen md:px-10 lg:px-20">
      <h1 className="text-center font-cinzel text-2xl md:text-4xl lg:text-5xl mb-12 text-white">
        VISI MISI BETIS
      </h1>

      <div className="flex flex-col max-md:items-center w-full md:flex-row gap-8 lg:gap-10">
        {/* card 1: inspiratif */}
        <div
          onClick={() => rotate(0)}
          className="card w-full max-md:w-[290px] h-[340px]"
        >
          <motion.div
            style={{ rotateY: isRotated[0] ? "180deg" : 0 }}
            className="h-full card__content transition-transform duration-1000"
          >
            <Card className="card__front absolute bg-[#F8EBF333] bg-opacity-100 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-start">
              <CardHeader>
                <CardTitle>Inspiratif</CardTitle>
              </CardHeader>
              <Image
                src={getAsset("/buku.png")}
                alt="Insipiratif"
                width={694}
                height={452}
                className="-bottom-3 absolute scale-90"
              />
            </Card>

            <Card className="card__back absolute bg-[#F8EBF333] bg-opacity-100 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-start">
              <CardHeader>
                <CardTitle>Inspiratif</CardTitle>
              </CardHeader>
              <Card className="absolute rounded-2xl text-sm lg:text-md bottom-6 left-6 right-6 h-52 flex justify-center items-center p-2 lg:p-4 text-center">
                BETIS 2025 bertujuan menginspirasi peserta untuk bermimpi besar
                dan menciptakan lingkungan positif yang memotivasi tiap individu
                untuk mencapai potensi maksimal
              </Card>
            </Card>
          </motion.div>
        </div>

        {/* card 2: Kolaboratif */}
        <div
          onClick={() => rotate(1)}
          className="card w-full max-md:w-[290px] h-[340px]"
        >
          <motion.div
            style={{ rotateY: isRotated[1] ? "180deg" : 0 }}
            className="h-full card__content transition-transform duration-1000"
          >
            <Card className="card__front absolute bg-[#F8EBF333] bg-opacity-100 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader className="absolute top-12">
                <CardTitle>Kolaboratif</CardTitle>
              </CardHeader>
              <Image
                src={getAsset("/lentera.png")}
                alt="Kolaboratif"
                width={257}
                height={316}
                className="absolute bottom-8 items-center w-60"
              />
            </Card>

            <Card className="card__back absolute bg-[#F8EBF333] bg-opacity-100 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-start">
              <CardHeader>
                <CardTitle>Kolaboratif</CardTitle>
              </CardHeader>
              <Card className="absolute rounded-2xl text-sm lg:text-md bottom-6 left-6 right-6 h-52 flex justify-center items-center p-2 lg:p-4 text-center">
                BETIS 2025 berfokus mendorong kolaborasi erat antara peserta,
                pengajar, dan panitia untuk membangun jaringan yang solid dan
                sinergi yang kuat
              </Card>
            </Card>
          </motion.div>
        </div>

        {/* Card 3: Progresif */}
        <div
          onClick={() => rotate(2)}
          className="card w-full max-md:w-[290px] h-[340px]"
        >
          <motion.div
            style={{ rotateY: isRotated[2] ? "180deg" : 0 }}
            className="h-full card__content transition-transform duration-1000"
          >
            <Card className="card__front absolute bg-[#F8EBF333] bg-opacity-100 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
              <CardHeader className="absolute top-12">
                <CardTitle>Progresif</CardTitle>
              </CardHeader>
              <Image
                src={getAsset("/Kupu-Kupu.png")}
                alt="Progresif"
                width={240}
                height={150}
                className="absolute max-w-[400px] max-h-[400px] w-11/12 bottom-0 items-center "
              />
            </Card>

            <Card className="card__back absolute bg-[#F8EBF333] bg-opacity-100 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-start">
              <CardHeader>
                <CardTitle>Progresif</CardTitle>
              </CardHeader>
              <Card className="absolute rounded-2xl text-sm lg:text-md bottom-6 left-6 right-6 h-52 flex justify-center items-center p-2 lg:p-4 text-center">
                BETIS 2025 terus berinovasi dengan evaluasi rutin dan pembaruan
                kurikulum, membekali peserta dengan keterampilan untuk
                menghadapi tantangan pendidikan modern.
              </Card>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Vismis;
