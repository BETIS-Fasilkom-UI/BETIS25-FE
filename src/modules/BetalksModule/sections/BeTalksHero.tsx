import CountdownHero from "@/components/elements/CountdownHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getAsset } from "@/lib/s3";
import Image from "next/image";
import Link from "next/link";

export const BeTalksHero = () => {
  return (
    <Card className="mx-auto flex flex-col overflow-hidden justify-center items-center bg-[#F8EBF3] bg-opacity-[20%] shadow-[5px_5px_20px_rgba(254,245,255,1),-5px_-5px_20px_rgba(254,245,255,1)] sm:shadow-[10px_10px_30px_rgba(254,245,255,1),-10px_-10px_30px_rgba(254,245,255,1)] md:shadow-[10px_10px_40px_rgba(254,245,255,1),-10px_-10px_40px_rgba(254,245,255,1)] w-full h-fit rounded-[51.64px] sm:rounded-[59.25px] lg:rounded-[69.25px] xl:rounded-[89.25px]">
      <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">
        Be-Talks
      </CardTitle>
      <CardContent className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[63%] flex flex-col justify-center items-center gap-[35px]">
        <div className="flex flex-col gap-[32px]">
          <div className="relative w-full max-w-3xl mx-auto">
            <CountdownHero
              displayDate
              targetDate={new Date("2025-03-15T13:00:00")}
            />
            <div className="absolute max-sm:hidden -z-20 h-[80px] sm:h-[150px] md:h-[160px] lg:h-[180px] xl:h-[190px] -left-[10px] md:-left-16 lg:-left-16 xl:-left-0 -top-[4px] sm:-top-[47px] md:-top-0 aspect-[17/10]">
              <Image
                alt="BG"
                src={getAsset("/bocilatas.png")}
                fill
                sizes="none"
                className="object-contain"
              />
            </div>

            <div className="absolute -z-20 h-[80px] sm:h-[150px] md:h-[160px] lg:h-[180px] xl:h-[190px] -right-12 md:-right-14 lg:-right-16 xl:-right-0 bottom-4 md:-bottom-0 aspect-[17/10]">
              <Image
                alt="BG"
                src={getAsset("/bocilbawah.png")}
                fill
                sizes="none"
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-center text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg -mt-2 md:mt-0 xl:mt-5">
            Be-Talks adalah acara yang bertujuan untuk membangkitkan semangat
            belajar bagi peserta BETIS Fasilkom UI 2025 dan masyarakat umum agar
            tetap konsisten dalam mengejar impian mereka. Diharapkan peserta
            dapat kembali termotivasi dan lebih bersemangat dalam belajar.
          </div>
        </div>
        <Link href="http://ristek.link/RSVPBetalksBETIS25" target="_blank">
          <Button
            variant={"primary"}
            className="max-md:-mt-5 max-md:w-full h-[39px] md:h-[43px] lg:h-[48px] text-xs md:text-t8 rounded-[16px] md:rounded-[14px] lg:rounded-5"
          >
            Register Here
          </Button>
        </Link>
        <div className="relative max-lg:self-start lg:absolute -z-20 h-[200px] sm:h-[250px] md:h-[270px] lg:h-[400px] xl:h-[500px] -left-5 lg:-left-4 lg:-bottom-8 xl:-bottom-10 -mt-28 -mb-11 -ml-5 sm:-mt-40 sm:-mb-12 sm:-ml-16 md:-mt-52 md:-ml-14 lg:mt-0 lg:mb-0 lg:ml-0 aspect-[4/5]">
          <Image
            alt="BG"
            src={getAsset("/betalkskiri.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="relative max-lg:self-end lg:absolute -z-20 h-[200px] sm:h-[250px] md:h-[270px] lg:h-[400px] xl:h-[500px] -right-5 lg:-right-4 lg:-bottom-20 xl:-bottom-24 -mt-[168px] -mb-16 -mr-5 sm:-mt-52 sm:-mb-[75px] sm:-mr-16 md:-mt-[226px] md:-mr-16 md:-mb-20 lg:mt-0 lg:mb-0 lg:mr-0 aspect-[17/25]">
          <Image
            alt="BG"
            src={getAsset("/betalkskanan.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute -z-30 translate-y-28 sm:translate-y-14 lg:translate-y-10 max-sm:-translate-x-[60px] h-[550px] sm:h-[500px] md:h-[600px] lg:h-[680px] xl:h-[750px] bottom-0 aspect-[5/3]">
          <Image
            alt="BG"
            src={getAsset("/castle2.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute max-sm:hidden -z-20 h-[80px] sm:h-[150px] md:h-[180px] lg:h-[250px] xl:h-[300px] -left-[10px] md:-left-[25px] -top-[4px] sm:-top-[47px] md:-top-[57px] lg:-top-[80px] xl:-top-[90px] aspect-[17/10]">
          <Image
            alt="BG"
            src={getAsset("/betalksataskiri.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute max-sm:hidden -z-20 h-[80px] sm:h-[150px] md:h-[180px] lg:h-[250px] xl:h-[300px] -right-[10px] md:-right-[25px] -top-[10px] sm:-top-[47px] md:-top-[57px] lg:-top-[80px] xl:-top-[90px] aspect-[17/10]">
          <Image
            alt="BG"
            src={getAsset("/betalksataskanan.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute sm:hidden -z-20 h-[130px] left-0 -top-[8px] aspect-[13/10]">
          <Image
            alt="BG"
            src={getAsset("/betalksataskirimobile.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>

        <div className="absolute sm:hidden -z-20 h-[130px] right-0 -top-[8px] aspect-[13/10]">
          <Image
            alt="BG"
            src={getAsset("/betalksataskananmobile.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
};
