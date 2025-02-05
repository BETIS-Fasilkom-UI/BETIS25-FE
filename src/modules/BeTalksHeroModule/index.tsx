import CountdownHero from "@/components/elements/CountdownHero";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BeTalksHeroModule = () => {
  return (
    <Card className="flex flex-col justify-center items-center bg-[#F8EBF3] bg-opacity-[20%] shadow-[5px_5px_20px_rgba(254,245,255,1),-5px_-5px_20px_rgba(254,245,255,1)] sm:shadow-[10px_10px_30px_rgba(254,245,255,1),-10px_-10px_30px_rgba(254,245,255,1)] md:shadow-[10px_10px_40px_rgba(254,245,255,1),-10px_-10px_40px_rgba(254,245,255,1)] w-[85%] md:w-[80%] h-fit rounded-[51.64px] sm:rounded-[59.25px] lg:rounded-[69.25px] xl:rounded-[89.25px]">
      <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">
        Be-Talks
      </CardTitle>
      <CardContent className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[63%] flex flex-col justify-center items-center gap-[35px]">
        <div className="flex flex-col gap-[32px]">
          <CountdownHero
            displayDate
            targetDate={new Date("2025-02-14T08:00:00")}
          />
          <div className="text-center text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg -mt-2 md:mt-0 xl:mt-5">
            Be-Talks adalah acara yang bertujuan untuk membangkitkan semangat
            belajar bagi peserta BETIS Fasilkom UI 2025 dan masyarakat umum agar
            tetap konsisten dalam mengejar impian mereka. Diharapkan peserta
            dapat kembali termotivasi dan lebih bersemangat dalam belajar.
          </div>
        </div>
        <Button
          variant={"primary"}
          className="max-md:-mt-5 max-md:w-full h-[39px] md:h-[43px] lg:h-[48px] text-xs md:text-t8 rounded-[16px] md:rounded-[14px] lg:rounded-5"
        >
          Register Here
        </Button>
      </CardContent>
    </Card>
  );
};

export default BeTalksHeroModule;
