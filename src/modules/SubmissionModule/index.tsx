"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import { FileInput } from "@/components/ui/file-input";
import { toast } from "@/components/ui/sonner";
import { getAsset, uploadFile } from "@/lib/s3";
import Image from "next/image";
import { Calendar, Clock, File, Link } from "lucide-react";

const Submission = () => {
  const [currentSection, setCurrentSection] = useState<number>(1);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/sub/submission-item/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Deleted successfully');
        setCurrentSection(2);
      } else {
        console.error('Failed to delete');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

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
        <div className="relative grid place-items-center -top-[2px] sm:top-[9px] md:-top-14">
          <div className="grid grid-cols-1 gap-2 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
            {/* week??? */}
            <div className="text-center text-[#87101a] text-2xl sm:text-3xl md:text-4xl font-black font-cinzel translate-y-[4px] sm:-translate-y-0 md:-translate-y-5 lg:-translate-y-11">
              week 4
            </div>

            {/* title */}
            <Tooltip text="Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit">
              <div className="text-[#500910] text-[14px] sm:text-[20px] md:text-[20px] lg:text-2xl font-semibold font-raleway overflow-hidden whitespace-nowrap text-ellipsis">
                Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </Tooltip>

            {/* closed date */}
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

            {/* remaining time (closed - now) */}
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

            {/* button add sub-item (hardcode) */}
            {/* <Link href={`/sub/submission-item/${userId}/${submissionId}`}>  */}
            <Link href="/sub/submission-item/[user_id]/[submission_id]">
              <Button
                className="w-[100%] h-[50%] sm:h-[80%]"
                variant="secondary"
              >
                Add Submission
              </Button>
            </Link>
          </div>
        </div>
      )}

      {currentSection === 2 && (
        <div className="relative grid place-items-center -top-[2px] sm:top-4 md:-top-14">
          <div className="grid grid-cols-1 gap-2 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
            {/* week??? */}
            <div className="text-center text-[#87101a] text-2xl sm:text-3xl md:text-4xl font-black font-cinzel translate-y-[4px] sm:-translate-y-[7px] md:-translate-y-1 lg:-translate-y-7">
              week 4
            </div>

            {/* title */}
            <Tooltip text="Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit">
              <div className="text-[#500910] text-[14px] sm:text-[20px] md:text-[20px] lg:text-2xl font-semibold font-raleway overflow-hidden whitespace-nowrap text-ellipsis">
                Submisi Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </Tooltip>

            {/* closed date */}
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

            {/* remaining time (closed - now) */}
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

            {/* filename */}
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

            {/* button remove and edit */}
            <div className="relative flex flex-col md:flex-row justify-center gap-1 sm:w-[100%] -translate-y-7 md:translate-y-0">
              <Button
                // onClick={() => handleDelete(submissionId)} // sub id not correct
                className="md:w-[50%] md:h-[80%] h-[10%] sm:h-[10%]"
                variant="secondary"
              >
                Remove Submission
              </Button>


              {/* <Button
                className="md:w-[50%] md:h-[80%] h-[10%] sm:h-[10%]"
              >
                Edit Submission
              </Button> */}
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