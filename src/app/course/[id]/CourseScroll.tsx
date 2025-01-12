'use client';
import { useState} from 'react';
import Image from 'next/image';
import { getAsset } from "@/lib/s3";

const CourseScroll = () =>{
    const [active, setActive] = useState(false);
    const handleClick = () =>{
        setActive(!active);
    }

    return(
        <div className='w-[800px] max-md:w-[600px] max-sm:w-[366px]'>
            <div className="w-full h-full flex flex-col relative">
                <div className="absolute w-full h-[89%] top-[4%]">
                        <Image
                            alt="kertas"
                            src={getAsset("/kertas.png")} 
                            fill
                            sizes="none"
                        />
                </div>

                <div className="z-[0] relative w-full aspect-[805/103] flex justify-center items-center">
                    <h1 
                        className='font-cinzel text-4xl max-md:text-2xl max-sm:text-lg z-10 text-[#87101A]'>
                        Week 1
                    </h1>
                    <Image
                        alt="gulungan"
                        src={getAsset("/gulungan.png")} 
                        fill
                        sizes="none"
                        className="object-contain"
                    />
                </div>

                <div className='z-10 w-full flex flex-col gap-5 max-md:gap-4 max-sm:gap-2 py-4 px-14'>
                    <h1 className='font-raleway font-[600] text-4xl max-md:text-2xl max-sm:text-lg text-[#87101A]'>
                        Polinomial Trigonometri
                    </h1>
                    <p className='font-openSans text-xl max-md:text-lg max-sm:text-base text-[#000] font-[400]'>
                        Berikut merupakan file mengenai Struktur Data dan Algoritma. Silahkan buat buku progress berdasarkan buku tersebut, basically this is a way for pengajar to give certain instructions to mentees without having to address it one by one per student
                    </p>
                </div>

                <button className="z-[0] relative w-full aspect-[805/103] flex justify-center items-center"
                    onClick={handleClick}>
                    <div className='z-10 relative w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px]'>
                        <Image
                            alt="panah"
                            src={getAsset("/panah.svg")} 
                            fill
                            sizes="none"
                            className={`object-contain duration-300 ${active ? 'transform rotate-180' : ''}`}
                        />
                    </div>
                    <Image
                        alt="gulungan"
                        src={getAsset("/gulungan.png")} 
                        fill
                        sizes="none"
                        className="object-contain"
                    />
                </button>
            </div>
        </div>
    )
}
export default CourseScroll;