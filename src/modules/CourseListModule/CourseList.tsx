"use client";
import React from "react";
import Image from "next/image";
import { getAsset } from "@/lib/s3";
import { motion } from "framer-motion";
import Link from "next/link"; // linknya make ini???

const CourseList = () => {
  return (
    <div className="relative w-full h-[823px] md:h-[1256px] lg:h-[1682px] overflow-hidden flex flex-col items-center mt-52">
      <div className="relative z-[101] scale-[0.49] -left-[190px] md:-left-[280px] md:scale-75 lg:-left-[370px] lg:scale-100">
        <div className="w-[494px] aspect-[494/155] absolute z-[100] left-[115px]">
          <Image
            alt="Header Courses"
            src={getAsset("/Courses.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <motion.div
          className="w-[651px] aspect-[651/195] absolute z-[99] top-[208px] left-[14px]"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            alt="Kemampuan Penalaran Umum"
            src={getAsset("/KPU.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="w-[651px] aspect-[651/195] absolute z-[98] top-[386px] left-[129px]"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
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
          className=" w-[651px] aspect-[651/195] absolute z-[97] top-[564px] left-[14px]"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
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
          className="w-[651px] aspect-[651/195] absolute z-[96] top-[732px] left-[129px]"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
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
          className="w-[651px] aspect-[651/195] absolute z-[95] top-[910px] "
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
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
          className="w-[651px] aspect-[651/195] absolute z-[94] top-[1088px] left-[129px]"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
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
          className="w-[651px] aspect-[651/195] absolute z-[93] top-[1247px] left-[14px]"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            alt="Pengetahuan dan Pemahaman Umum"
            src={getAsset("/PM.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </motion.div>
        <motion.div className="w-[142px] aspect-[142/1501] absolute z-[92] top-[184px] left-[331px]">
          <Image
            alt="Batang"
            src={getAsset("/Batang.png")}
            fill
            sizes="none"
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* usahain make 1 file aja tpi klo kepaksa/biar lebih gampang make gambar hutansmol.png utk mobile */}
      <div className="absolute w-[142vw] overflow-x-clip aspect-[2015/2152] z-[91] top-[170px] sm:top-[120px]">
        <Image
          alt="background"
          src={getAsset("/hutan.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      {/*  */}
    </div>
  );
};

export default CourseList;
