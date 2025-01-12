import React from "react";
import { NextPage } from "next";
import { getAsset } from "@/lib/s3";
import Image from "next/image";

const page: NextPage<{
  params: { id: string };
}> = async ({ params }) => {
//   const response = await fetch(
//     `https://betis25-oprec.vercel.app/api/bukusihir/${params.id}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
//       },
//     }
//   );
//   const data: ResponseDetailBukuSihir = await response.json();
//   console.log(data);
  return (
    <main className="min-h-screen w-full flex relative">
        <h1>{params.id}</h1>


        {/* Background */}
        <div className="w-full h-full">
            <div className="z-[-2] w-[400px] max-md:w-[300px] max-sm:w-[200px] aspect-[596/980] absolute bottom-0 left-0">
                <Image
                    alt="contoh"
                    src={getAsset("/pohonkiri.png")} 
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
            <div className="z-[-2] w-[400px] max-md:w-[300px] max-sm:w-[200px] aspect-[596/980] absolute bottom-0 right-0">
                <Image
                    alt="contoh"
                    src={getAsset("/pohonkanan.png")} 
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
            <div className="z-[-1] w-[250px] max-md:w-[200px] max-sm:w-[153px]  aspect-[351/391] absolute bottom-0 left-0">
                <Image
                    alt="contoh"
                    src={getAsset("/jamurkiri1.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
            <div className="z-[-1] w-[200px] max-md:w-[200px] max-sm:w-[100px]  aspect-[242/231] absolute bottom-0 left-[180px] max-md:left-[120px] max-sm:left-[100px]">
                <Image
                    alt="contoh"
                    src={getAsset("/jamurkiri2.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
            <div className="z-[-1] w-[300px] max-md:w-[250px] max-sm:w-[150px] aspect-[380/580] absolute bottom-[-5%] right-0">
                <Image
                    alt="contoh"
                    src={getAsset("/jamurkanan.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
        </div>
        {/* END Background */}
    </main>
  )
};

export default page;