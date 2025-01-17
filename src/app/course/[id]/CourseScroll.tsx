'use client';
import { useState} from 'react';
import Image from 'next/image';
import { getAsset } from "@/lib/s3";
import Link from 'next/link';
import { Section } from './interface';

const CourseScroll = ({id,title,description,items} : Section) =>{
    const [active, setActive] = useState(false);
    const handleClick = () =>{
        setActive(!active);
    }

    return(
        <div className='w-[760px] max-md:w-[600px] max-sm:w-[366px]'
        key={id}
        >
            <div className="w-full h-full flex flex-col relative">
                <div className="absolute w-full h-[89%] top-[4%] max-sm:h-[95%] max-sm:top-[1%]">
                        <Image
                            alt="kertas"
                            src={getAsset("/kertas2.png")} 
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

                <div className='z-10 w-full flex flex-col gap-5 max-md:gap-4 max-sm:gap-2 py-4 px-20 max-md:px-14'>
                    <h1 className='font-raleway font-[600] text-4xl max-md:text-2xl max-sm:text-lg text-[#87101A]'>
                        {title}
                    </h1>
                    <p className='font-openSans text-xl max-md:text-lg max-sm:text-base text-[#000] font-[400]'>
                        {description}
                    </p>

                    <div className={`font-raleway text-[#500910] w-full ${active? 'block' : 'hidden'}`}>
                        <div className='w-full flex flex-col gap-5'> 

                            {/* Materi */}
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-xl max-md:text-lg max-sm:text-base font-[600]'>Materi</p>
                                {items.map((item) => (
                                    item.type === 'material' && (
                                        <Link key={item.id} href={item.url}>
                                            <div className='flex gap-3 items-center transition-all hover:opacity-70'>
                                                <div className='p-[7px] bg-[#AB98B2] rounded-[12px]'>
                                                    <div className="relative w-[35px] h-[35px] max-md:w-[30px] max-md:h-[30px] max-sm:w-[20px] max-sm:h-[20px]">
                                                        <Image
                                                            alt="materi"
                                                            src={getAsset("/li_file-text.svg")}
                                                            fill
                                                            sizes="none"
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                                <p className='font-openSans text-xl max-md:text-lg max-sm:text-sm'>
                                                    {item.title}
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                ))}
                            </div>
                            
                            {/* Quiz */}
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-xl max-md:text-lg max-sm:text-base font-[600]'>Quiz</p>
                                {items.map((item) => (
                                        item.type !== 'material' && (
                                            <Link key={item.id} href={`/`}>
                                                <div className='flex gap-3 items-center transition-all hover:opacity-70'>
                                                    <div className='p-[7px] bg-[#CB4551] rounded-[12px]'>
                                                        <div className="relative w-[35px] h-[35px] max-md:w-[30px] max-md:h-[30px] max-sm:w-[20px] max-sm:h-[20px]">
                                                            <Image
                                                                alt="materi"
                                                                src={getAsset(item.type ==="quiz"?"/li_file-question.svg":"/li_file-plus.svg")}
                                                                fill
                                                                sizes="none"
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className='font-openSans text-xl max-md:text-lg max-sm:text-sm'>
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </Link>
                                        )
                                ))}
                            </div>
                            
                        </div>
                    </div>
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