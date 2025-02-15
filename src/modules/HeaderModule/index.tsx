import { Card } from "@/components/ui/card";
import Image from "next/image";
import Background from "./components/background";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import styles from "@/modules/HeaderModule/components/background.module.css";

const HeaderModule = () => {
  return (
    <>
      {/* Card Container */}
      <div className="relative flex flex-col min-h-screen items-center pt-32">
        {/* Background */}
        <Background></Background>
        <div>
          <div className="z-10 flex flex-col items-center mb-[-69px]">
            {/* Lampu Header */}
            <Image
              src="/lampu-header.png"
              alt="lampu-header"
              width={1108}
              height={115}
              className="w-[390px] h-[40px] md:w-[600px] md:h-[62px] lg:w-[1108px] lg:h-[115px] z-20 mt-0 lg:translate-y-[114px] lg:translate-x-[-9px]"
            />

            {/* Container for Cahaya Images */}
            <div className="flex flex-col justify-center items-start lg:items-center z-30 lg:w-[1064px]">
              {/* Cahaya Header Kiri */}
              <Image
                src="/cahaya-lampu-header-kiri.png"
                alt="cahaya-lampu-header-kiri"
                width={1108}
                height={115}
                className={`${styles.twinkleReverse} w-[353px] h-[40px] md:w-[550px] md:h-[62px] md:mt-[-60px] lg:w-[1010px] lg:h-[115px] z-40 mt-[-38px] ml-[-7px] md:translate-x-[-2px] lg:translate-y-[65px] lg:translate-x-[-22px]`}
              />

              {/* Cahaya Header Kanan */}
              <Image
                src="/cahaya-lampu-header-kanan.png"
                alt="cahaya-lampu-header-kanan"
                width={1108}
                height={115}
                className={`${styles.twinkle} w-[325px] h-[40px] md:w-[490px] md:h-[60px] md:mt-[-60px] lg:w-[920px] lg:h-[115px] z-40 -mt-[39px] ml-[27px] md:translate-x-[20px] lg:translate-y-[12px] lg:translate-x-[14px]`}
              />
            </div>
          </div>

          {/* Back Button */}
          <button className="flex justify-center items-center lg:ml-[-80px]">
            <Image
              src="/back-button.png"
              alt="back-button"
              width={30}
              height={30}
              className="mt-[-20px] mb-[20px] md:mb-[40px] lg:w-[51px] lg:h-[51px] lg:mt-[-150px] lg:translate-y-[20px]"
            />
          </button>

          {/* Top Card */}
          <Card className="bg-[#F8EBF3] w-[390px] h-[101px] md:w-[600px] md:h-[140px] lg:w-[1064px] lg:h-[264px] z-10 mt-0 md:mt-[-35px]">
            {/* Avatar inside the Card */}
            <div className="flex h-full w-full gap-3">
              {/* Avatar Component */}
              <Avatar className="w-[67px] h-[67px] md:w-[80px] md:h-[80px] lg:w-[180px] lg:h-[180px] mt-[-4px] md:mt-0">
                <AvatarImage src="/pp-boy1.png" alt="User Avatar" />
                {/* Fallback if image is not available */}
                <AvatarFallback>U</AvatarFallback>{" "}
              </Avatar>

              <div className="flex flex-col h-full items-start justify-center">
                <h2 className="font-cinzel text-xl md:text-2xl lg:text-5xl">
                  NAMA LENGKAP
                </h2>
                <h3 className="text-sm md:text-base lg:text-3xl font-openSans mb-0">
                  Rank 1/100
                </h3>
              </div>
              <div className="ml-auto flex flex-col items-end justify-center">
                <h2 className="text-xs md:text-sm lg:text-2xl font-semibold font-raleway">
                  Nilai Total
                </h2>
                <h2 className="text-xl md:text-2xl lg:text-5xl font-bold">4800</h2>
              </div>
            </div>
          </Card>

          {/*Bottom Card */}
          <Card className=" mt-10 bg-[#F8EBF3] w-[390px] h-[303px] md:w-[600px] lg:w-[1064px] lg:h-[600px] lg:mb-40 z-10"></Card>
        </div>
      </div>
    </>
  );
};

export default HeaderModule;
