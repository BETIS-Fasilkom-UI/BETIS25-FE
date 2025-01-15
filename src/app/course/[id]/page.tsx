'use client';
import React from "react";
import { getAsset } from "@/lib/s3";
import Image from "next/image";
import { useParams } from 'next/navigation'
import {Loading} from '@/components/elements/Loading'
import CourseScroll from './CourseScroll'

const dataCourse = {
    "id": "9a4d2553-2c17-4e9b-9f7e-103c3a25942f",
    "title": "Kalkulus",
    "description": "Kalkulus adalah cabang matematika yang mempelajari tentang perhitungan besaran yang berubah-ubah. Kalkulus merupakan salah satu cabang matematika yang paling penting dan banyak digunakan dalam berbagai bidang ilmu pengetahuan.",
    "items": [
      {
        "id": "92beca6e-cd78-49ab-8783-453671c36387",
        "title": "Material 1",
        "description": "Description for material 1",
        "type": "material",
        "url": "https://example.com/resource/1"
      },
      {
        "id": "5a655e99-ec92-491a-aac6-36deeceba82a",
        "title": "Material 2",
        "description": "Description for material 2",
        "type": "material",
        "url": "https://example.com/resource/2"
      },
      {
        "id": "b31ac253-4be1-4f52-b572-7df61358b6fe",
        "title": "Material 3",
        "description": "Description for material 3",
        "type": "material",
        "url": "https://example.com/resource/3"
      },
      {
        "id": "4781ab37-7e8b-4273-a1d5-b0e98973ebcb",
        "title": "Assignment 1",
        "description": "Description for assignment 1",
        "type": "submission",
        "opened_at": "2025-01-06T14:43:18.751283+00:00",
        "closed_at": "2025-01-07T14:43:18.751283+00:00",
        "cutoff_at": "2025-01-08T14:43:18.751283+00:00"
      },
      {
        "id": "ebfebe2c-2d3d-47f2-86f3-f44b878f59b2",
        "title": "Assignment 2",
        "description": "Description for assignment 2",
        "type": "submission",
        "opened_at": "2025-01-05T14:43:18.751283+00:00",
        "closed_at": "2025-01-06T14:43:18.751283+00:00",
        "cutoff_at": "2025-01-07T14:43:18.751283+00:00"
      },
      {
        "id": "373469b6-6c56-4646-b90a-8ff1a4b90286",
        "title": "Quiz 1",
        "description": "Description for quiz 1",
        "type": "quiz",
        "duration": 10
      },
      {
        "id": "aa78c603-f8e2-474c-bf3f-afe8cbfbc3e8",
        "title": "Quiz 2",
        "description": "Description for quiz 2",
        "type": "quiz",
        "duration": 20
      },
      {
        "id": "4301f6ce-50f4-465d-85ae-de81ee37c361",
        "title": "Quiz 3",
        "description": "Description for quiz 3",
        "type": "quiz",
        "duration": 30
      }
    ]
  }

const Page = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = React.useState(false);

    if (isLoading) {
        return (
            <Loading />
        )
    }else{
        return (
        <main className="min-h-screen w-full flex gap-8 max-md:gap-6 flex-col items-center relative py-36">
            {/* <h1>{id}</h1> */}

            <CourseScroll
            {...dataCourse}
            />

            <CourseScroll
            {...dataCourse}
            />


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
    )};
};

export default Page;