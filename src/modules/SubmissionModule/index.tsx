"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import { FileInput } from "@/components/ui/file-input";
import { toast } from "@/components/ui/sonner";
import { getAsset, uploadFile } from "@/lib/s3";
import Image from "next/image";
import { Calendar, Clock, File } from "lucide-react";

const Submission = () => {
  const [file, setFile] = useState<File | null>(null);
  const [urlPhoto, setUrlPhoto] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(3);

  return (
    <div className="relative flex items-start md:items-center justify-center h-screen w-screen">
      <div className="absolute md:w-[581.588px] md:h-[389.025px] lg:w-[664.672px] lg:h-[444.6px] max-md:hidden">
        <Image
          alt="Scroll"
          src={getAsset("/scroll.png")}
          fill
          priority
          sizes="none"
          className="object-contain"
        />
      </div>

      <div className="absolute w-[305.968px] h-[350.88px] sm:w-[382.46px] sm:h-[438.6px] md:hidden">
        <Image
          alt="ScrollKecil"
          src={getAsset("/scrollkecil.png")}
          fill
          priority
          sizes="none"
          className="object-contain"
        />
      </div>

      {currentSection === 1 && (
        <div className="relative grid place-items-center -top-[1px] sm:top-[9.7px] md:-top-[43px] lg:-top-[58px]">
          <div className="grid grid-cols-1 gap-1 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
            <div className="text-center text-[#87101a] text-2xl translate-y-[3px] sm:-translate-y-[1px] md:-translate-y-[2px] lg:-translate-y-[1px] sm:text-3xl md:text-4xl font-black font-cinzel">
              week 4
            </div>

            <div className="text-center text-[#500910] text-sm md:text-[15px] lg:text-[17px] font-semibold font-raleway">
              File Submission
            </div>

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
                    const url = await uploadFile(
                      file,
                      crypto.randomUUID(),
                      "test"
                    );
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
            <div className="text-center text-[#87101a] text-2xl sm:text-3xl md:text-4xl font-black font-cinzel translate-y-[4px] sm:-translate-y-0 md:-translate-y-5 lg:-translate-y-11">
              week 4
            </div>

            <Tooltip text="Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit">
              <div className="text-[#500910] text-[14px] sm:text-[20px] md:text-[20px] lg:text-2xl font-semibold font-raleway overflow-hidden whitespace-nowrap text-ellipsis">
                Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </Tooltip>

            <div className="flex items-center space-x-2">
              <Calendar
                color="white"
                className="size-[27px] sm:size-[34px] md:size-6"
                stroke="#500910"
              />
              <div className="text-black text-[15px] md:text-[16px] font-normal font-sans">
                Due Date: Saturday, 28 Februari 2022, 08.00 AM
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Clock
                color="white"
                className="size-[19px] sm:size-[25px] md:size-6"
                stroke="#500910"
              />
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
            <div className="text-center text-[#87101a] text-2xl sm:text-3xl md:text-4xl font-black font-cinzel translate-y-[4px] sm:-translate-y-[7px] md:-translate-y-1 lg:-translate-y-7">
              week 4
            </div>

            <Tooltip text="Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit">
              <div className="text-[#500910] text-[14px] sm:text-[20px] md:text-[20px] lg:text-2xl font-semibold font-raleway overflow-hidden whitespace-nowrap text-ellipsis">
                Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </Tooltip>

            <div className="flex items-center space-x-2">
              <Calendar
                color="white"
                className="size-[22px] sm:size-[34px] md:size-6"
                stroke="#500910"
              />
              <div className="text-black text-[12px] sm:text-[15px] md:text-[16px] font-normal font-sans">
                Due Date: Saturday, 28 Februari 2022, 08.00 AM
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Clock
                color="white"
                className="size-4 sm:size-6"
                stroke="#500910"
              />
              <div className="text-black text-[12px] sm:text-[15px] md:text-[16px] font-normal font-sans">
                Time Remaining: 20 days 4 hours
              </div>
            </div>

            <Tooltip text="Namafilenya.pdf">
              <div className="flex items-center space-x-2">
                <File
                  color="white"
                  className="size-4 sm:size-6"
                  stroke="#500910"
                />
                <div className="text-black text-[12px] sm:text-[15px] md:text-[16px] font-normal font-sans overflow-hidden whitespace-nowrap text-ellipsis">
                  Namafilenya.pdf
                </div>
              </div>
            </Tooltip>

            <div className="relative flex flex-col md:flex-row justify-center gap-1 sm:w-[100%] -translate-y-7 md:translate-y-0">
              <Button
                onClick={() => setCurrentSection(2)}
                className="md:w-[50%] md:h-[80%] h-[10%] sm:h-[10%]"
                variant="secondary"
              >
                Remove Submission
              </Button>

              <Button
                onClick={() => setCurrentSection(1)}
                className="md:w-[50%] md:h-[80%] h-[10%] sm:h-[10%]"
              >
                Edit Submission
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute -z-20 h-2/5 sm:h-2/3 aspect-[1/3] sm:aspect-[1/2] md:h-full -left-5 -bottom-[88px] sm:-bottom-16 md:-bottom-[98px] lg:bottom-0 lg:aspect-[2/3]">
        <Image
          alt="BG"
          src={getAsset("/SubmissionBGKIRI.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <div className="absolute -z-20 h-2/5 sm:h-2/3 aspect-[1/3] sm:aspect-[1/2]  md:h-full -right-5 -bottom-[86px] sm:-bottom-16 md:-bottom-[86px] lg:bottom-0 lg:aspect-[2/3]">
        <Image
          alt="BG"
          src={getAsset("/SubmissionBGKANAN.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Submission;