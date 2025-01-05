import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { toast } from "@/components/ui/sonner";
import { getAsset, uploadFile } from "@/lib/s3";
import Image from "next/image";
import { Calendar, Clock, File } from "lucide-react";

const Submission = () => {
    const [file, setFile] = useState<File | null>(null);
    const [urlPhoto, setUrlPhoto] = useState<string | null>(null);

    return (
        <div className="relative flex items-center justify-center h-full w-screen">
            <div className="absolute w-[664.672px] h-[444.6px]">
                <Image
                    alt="Scroll"
                    src={getAsset("/scroll.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
            
            <div id="help" className="relative grid place-items-center -top-14">
                <div className="grid grid-cols-1 gap-2 sm:gap-2 p-6 w-[530.672px]">
                    <div className="text-center text-[#87101a] text-4xl font-black font-cinzel">week 4</div>

                    {/* <div className="text-center text-[#500910] text-[17px] font-semibold font-raleway">File Submission</div>
                    
                    <FileInput file={file} setFile={setFile} />
                    <div className="relative flex justify-center gap-3 w-[100%]">
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
                            className="w-[50%] h-[80%]"
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
                            className="w-[50%] h-[80%]"
                        >
                            Save Changes
                        </Button>
                    </div>
                    {urlPhoto && (urlPhoto)} */}

                    <div className="text-[#500910] text-2xl font-semibold font-raleway">Submisi Lorem Ipsum Lorem Ipsum</div>

                    <div className="flex items-center space-x-2">
                        <Calendar color="white" size={24} stroke="#500910" />
                        <div className="text-black text-md font-normal font-sans">
                            Due Date: Saturday, 28 Februari 2022, 08.00 AM
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Clock color="white" size={24} stroke="#500910" />
                        <div className="text-black text-md font-normal font-sans">
                            Time Remaining: 20 days 4 hours
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <File color="white" size={24} stroke="#500910" />
                        <div className="text-black text-md font-normal font-sans">
                            Namafilenya.pdf
                        </div>
                    </div>

                    <div className="relative flex justify-center gap-3 w-[100%]">
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
                            className="w-[50%] h-[80%]"
                            variant="secondary"
                        >
                            Remove Submission
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
                            className="w-[50%] h-[80%]"
                        >
                            Edit Submission
                        </Button>
                    </div>

                    {/* <Button
                        onClick={async () => {
                            if (file) {
                                const url = await uploadFile(file, crypto.randomUUID(), "test");
                                setUrlPhoto(url);
                                toast.success(url);
                            } else {
                                toast.error("No file selected");
                            }
                        }}
                        className="w-[100%] h-[80%]"
                        variant="secondary"
                    >
                        Add Submission
                    </Button> */}
                </div>
            </div>
            
            <div className="absolute -z-20 h-full -right-5 -bottom-3 aspect-[2/3]">
                <Image
                    alt="PohonKanan"
                    src={getAsset("/pohonkanan.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>
            
            <div className="absolute -z-20 h-full -left-5 -bottom-3 aspect-[2/3]">
                <Image
                    alt="PohonKiri"
                    src={getAsset("/pohonkiri.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-3/5 -left-5 -bottom-7 aspect-[2/3]">
                <Image
                    alt="JamurKiri1"
                    src={getAsset("/jamurkiri1.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-2/5 left-44 -bottom-7 aspect-[2/3]">
                <Image
                    alt="JamurKiri2"
                    src={getAsset("/jamurkiri2.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-3/5 right-4 -bottom-6 aspect-[2/3]">
                <Image
                    alt="JamurKanan"
                    src={getAsset("/jamurkanan.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-[7%] left-80 bottom-36 aspect-[2/3]">
                <Image
                    alt="KupuKiri"
                    src={getAsset("/kupukiri.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-[5%] right-16 bottom-80 aspect-[2/3]">
                <Image
                    alt="KupuKanan1"
                    src={getAsset("/kupukanan1.png")}
                    fill
                    sizes="none"
                    className="object-contain"
                />
            </div>

            <div className="absolute -z-20 h-[7%] right-20 bottom-96 aspect-[2/3]">
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
}

export default Submission;