import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { toast } from "@/components/ui/sonner";
import { getAsset, uploadFile } from "@/lib/s3";
import Image from "next/image";
import { Calendar, Clock, File } from "lucide-react";

const Submission = () => {
    const [file, setFile] = useState<File | null>(null);
    const [urlPhoto, setUrlPhoto] = useState<string | null>(null);
    const [currentSection, setCurrentSection] = useState<number>(3);
    const [iconSize1, setIconSize1] = useState(24);
    const [iconSize2, setIconSize2] = useState(24);
    const [iconSize3, setIconSize3] = useState(24);
    const [iconSize4, setIconSize4] = useState(24);
    const [iconSize5, setIconSize5] = useState(24);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 640) {
                setIconSize1(22);
                setIconSize2(16);
                setIconSize3(16);
                setIconSize4(27);
                setIconSize5(19);
            } else if (window.innerWidth < 768) {
                setIconSize1(34); 
                setIconSize2(24);
                setIconSize3(24); 
                setIconSize4(34);
                setIconSize5(25);
            } else {
                setIconSize1(24);
                setIconSize2(24);
                setIconSize3(24);
                setIconSize4(24);
                setIconSize5(24);
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);

        return () => {
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    return (
        <div className="relative flex items-start md:items-center justify-center h-full w-screen">
            <div className="absolute md:w-[581.588px] md:h-[389.025px] lg:w-[664.672px] lg:h-[444.6px]">
                <Image
                    alt="Scroll"
                    src={getAsset("/scroll.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute w-[305.968px] h-[350.88px] sm:w-[382.46px] sm:h-[438.6px] md:opacity-0">
                <Image
                    alt="ScrollKecil"
                    src={getAsset("/scrollkecil.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            {currentSection === 1 && (
                <div className="relative grid place-items-center -top-[1px] sm:top-[9.7px] md:-top-[43px] lg:-top-[58px]">
                    <div className="grid grid-cols-1 gap-1 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
                        <div className="text-center text-[#87101a] text-2xl translate-y-[3px] sm:-translate-y-[1px] sm:text-3xl md:text-4xl font-black font-cinzel">week 4</div>

                        <div className="text-center text-[#500910] text-sm md:text-[15px] lg:text-[17px] font-semibold font-raleway">File Submission</div>

                        <FileInput file={file} setFile={setFile} />

                        <div className="relative flex flex-col -translate-y-5 sm:translate-y-0 sm:flex-row justify-center gap-1 sm:gap-3 w-[100%]">
                            <Button
                                onClick={() => setCurrentSection(2)}
                                className="h-[10%] sm:w-[50%] sm:h-[80%] sm:text-t7"
                                variant="secondary"
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={async () => {
                                    if (file) {
                                        const url = await uploadFile(file, crypto.randomUUID(), "test");
                                        setUrlPhoto(url);
                                        toast.success(url);
                                    } else {
                                        toast.error("No file selected");
                                    }
                                }}
                                className="h-[10%] sm:w-[50%] sm:h-[80%]"
                            >
                                Save Changes
                            </Button>
                        </div>
                        {urlPhoto && urlPhoto}
                    </div>
                </div>
            )}

            {currentSection === 2 && (
                <div className="relative grid place-items-center -top-[2px] sm:top-[9px] md:-top-14">
                    <div className="grid grid-cols-1 gap-2 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
                        <div className="text-center text-[#87101a] text-2xl sm:text-3xl md:text-4xl font-black font-cinzel translate-y-[4px] sm:-translate-y-0 md:-translate-y-5 lg:-translate-y-11">week 4</div>

                        <div className="text-[#500910] text-[16px] sm:text-[24px] md:text-[20px] lg:text-2xl font-semibold font-raleway">Submisi Lorem Ipsum Lorem Ipsum</div>

                        <div className="flex items-center space-x-2">
                            <Calendar color="white" size={iconSize4} stroke="#500910" />
                            <div className="text-black text-[15px] md:text-[16px] font-normal font-sans">
                                Due Date: Saturday, 28 Februari 2022, 08.00 AM
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Clock color="white" size={iconSize5} stroke="#500910" />
                            <div className="text-black text-[15px] sm:text-[16px] font-normal font-sans">
                                Time Remaining: 20 days 4 hours
                            </div>
                        </div>

                        <Button
                            onClick={() => setCurrentSection(1)}
                            className="w-[100%] h-[50%] sm:h-[80%]"
                            variant="secondary"
                        >
                            Add Submission
                        </Button>
                    </div>
                </div>
            )}

            {currentSection === 3 && (
                <div className="relative grid place-items-center -top-[2px] sm:top-4 md:-top-14">
                    <div className="grid grid-cols-1 gap-2 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
                        <div className="text-center text-[#87101a] text-2xl sm:text-3xl md:text-4xl font-black font-cinzel translate-y-[4px] sm:-translate-y-[7px] md:-translate-y-1 lg:-translate-y-7">week 4</div>

                        <div className="text-[#500910] text-[14px] sm:text-[20px] md:text-[20px] lg:text-2xl font-semibold font-raleway">Submisi Lorem Ipsum Lorem</div>

                        <div className="flex items-center space-x-2">
                            <Calendar color="white" size={iconSize1} stroke="#500910" />
                            <div className="text-black text-[12px] sm:text-[15px] md:text-[16px] font-normal font-sans">
                                Due Date: Saturday, 28 Februari 2022, 08.00 AM
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Clock color="white" size={iconSize2} stroke="#500910" />
                            <div className="text-black text-[12px] sm:text-[15px] md:text-[16px] font-normal font-sans">
                                Time Remaining: 20 days 4 hours
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <File color="white" size={iconSize3} stroke="#500910" />
                            <div className="text-black text-[12px] sm:text-[15px] md:text-[16px] font-normal font-sans">
                                Namafilenya.pdf
                            </div>
                        </div>
                        
                        <div className="relative flex flex-col sm:flex-row justify-center gap-1 sm:w-[100%] -translate-y-7 sm:translate-y-0">
                            <Button
                                onClick={() => setCurrentSection(2)}
                                className="sm:w-[62%] md:w-[50%] sm:h-[80%] h-[10%]"
                                variant="secondary"
                            >
                                Remove Submission
                            </Button>

                            <Button
                                onClick={() => setCurrentSection(1)}
                                className="sm:w-[50%] md:w-[50%] sm:h-[80%] h-[10%]"
                            >
                                Edit Submission
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="absolute -z-20 h-2/5 sm:h-2/3 aspect-[2/3] md:h-full -right-5 -bottom-3 md:aspect-[2/3]">
                <Image
                    alt="PohonKanan"
                    src={getAsset("/pohonkanan.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
            
            <div className="absolute -z-20 h-2/5 sm:h-2/3 aspect-[2/3] md:h-full -left-5 -bottom-3 md:aspect-[2/3]">
                <Image
                    alt="PohonKiri"
                    src={getAsset("/pohonkiri.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-1/4 sm:h-2/6 sm:aspect-[2/3] md:h-3/5 -left-3 -bottom-4 md:-left-5 md:-bottom-7 md:aspect-[2/3]">
                <Image
                    alt="JamurKiri1"
                    src={getAsset("/jamurkiri1.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-1/4 aspect-[2/3] sm:h-0 left-0 -bottom-6">
                <Image
                    alt="JamurKiri1Gepeng"
                    src={getAsset("/jamurkiri1gepeng.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 md:h-2/5 left-44 -bottom-7 md:aspect-[2/3]">
                <Image
                    alt="JamurKiri2"
                    src={getAsset("/jamurkiri2.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-1/4 aspect-[2/3] sm:h-2/5 sm:aspect-[2/3] md:h-3/5 right-0 -bottom-2 sm:right-4 sm:-bottom-6 md:aspect-[2/3]">
                <Image
                    alt="JamurKanan"
                    src={getAsset("/jamurkanan.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 md:h-[7%] left-80 bottom-36 md:aspect-[2/3]">
                <Image
                    alt="KupuKiri"
                    src={getAsset("/kupukiri.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 md:h-[5%] right-16 bottom-80 md:aspect-[2/3]">
                <Image
                    alt="KupuKanan1"
                    src={getAsset("/kupukanan1.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 md:h-[7%] right-20 bottom-96 md:aspect-[2/3]">
                <Image
                    alt="KupuKanan2"
                    src={getAsset("/kupukanan2.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default Submission;
