"use client";
import React from "react";
import Image from "next/image";
import { getAsset } from "@/lib/s3";
import { motion } from "framer-motion";
import Link from "next/link"; // linknya make ini???

const CourseList = () => {
  return (
    <div className="flex flex-col mb-[3000px]">
      <div className="w-[494px] aspect-[494/155] absolute z-[100] top-[53vh] left-[33vw]">
        <Image
          alt="Header Courses"
          src={getAsset("/Courses.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <motion.div
        className="w-[651px] aspect-[651/195] absolute z-[99] top-[71vh] left-[26vw]"
        whileHover={{ scale: 1.2 }}
      >
        <div className="relative w-full h-full">
          <Image
            alt="Kemampuan Penalaran Umum"
            src={getAsset("/KPU.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
      </motion.div>
      <motion.div
        className="w-[651px] aspect-[651/195] absolute z-[98] top-[89vh] left-[34vw]"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          alt="Pengetahuan dan Pemahaman Umum"
          src={getAsset("/PPU.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        className="w-[651px] aspect-[651/195] absolute z-[97] top-[107vh] left-[26vw]"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          alt="Pengetahuan dan Pemahaman Umum"
          src={getAsset("/PBM.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        className="w-[651px] aspect-[651/195] absolute z-[96] top-[124vh] left-[34vw]"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          alt="Pengetahuan dan Pemahaman Umum"
          src={getAsset("/KK.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        className="w-[651px] aspect-[651/195] absolute z-[95] top-[142vh] left-[25vw]"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          alt="Pengetahuan dan Pemahaman Umum"
          src={getAsset("/LBI.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        className="w-[651px] aspect-[651/195] absolute z-[94] top-[160vh] left-[34vw]"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          alt="Pengetahuan dan Pemahaman Umum"
          src={getAsset("/LBE.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        className="w-[651px] aspect-[651/195] absolute z-[93] top-[176vh] left-[26vw]"
        whileHover={{ scale: 1.2 }}
      >
        <Image
          alt="Pengetahuan dan Pemahaman Umum"
          src={getAsset("/PM.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div className="w-[142px] aspect-[142/1501] absolute z-[92] top-[67vh] left-[48vw]">
        <Image
          alt="Batang"
          src={getAsset("/Batang.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
      <motion.div className="w-[1440px] xl: aspect-[2015/2152] absolute z-[91] top-[63vh]">
        <Image
          alt="background"
          src={getAsset("/hutan.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default CourseList;
