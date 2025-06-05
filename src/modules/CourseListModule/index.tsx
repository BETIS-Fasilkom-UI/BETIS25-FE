'use client';
import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { courseId } from '../CourseDetailModule/const';

const CourseList = () => {
  return (
    <div className="relative w-full h-[823px] md:h-[1256px] lg:h-[1682px] overflow-hidden flex flex-col items-center mt-52">
      <div className="relative z-[101] scale-[0.49] -left-[190px] md:-left-[280px] md:scale-75 lg:-left-[370px] lg:scale-100">
        <div className="w-[494px] aspect-[494/155] absolute z-[100] left-[115px]">
          <Image
            alt="Header Courses"
            src={'/s3/Courses.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <Link href={`/course/${courseId[0].name}`}>
          <motion.div
            className="w-[651px] aspect-[651/195] absolute z-[99] top-[208px] left-[14px]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="Kemampuan Penalaran Umum"
              src={'/s3/KPU.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </motion.div>
        </Link>
        <Link href={`/course/${courseId[1].name}`}>
          <motion.div
            className="w-[651px] aspect-[651/195] absolute z-[98] top-[386px] left-[129px]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="Pengetahuan dan Pemahaman Umum"
              src={'/s3/PPU.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </motion.div>
        </Link>
        <Link href={`/course/${courseId[2].name}`}>
          <motion.div
            className=" w-[651px] aspect-[651/195] absolute z-[97] top-[564px] left-[14px]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="Pengetahuan dan Pemahaman Umum"
              src={'/s3/PBM.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </motion.div>
        </Link>
        <Link href={`/course/${courseId[3].name}`}>
          <motion.div
            className="w-[651px] aspect-[651/195] absolute z-[96] top-[732px] left-[129px]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="Pengetahuan dan Pemahaman Umum"
              src={'/s3/KK.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </motion.div>
        </Link>
        <Link href={`/course/${courseId[4].name}`}>
          <motion.div
            className="w-[651px] aspect-[651/195] absolute z-[95] top-[910px] "
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="Pengetahuan dan Pemahaman Umum"
              src={'/s3/LBI.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </motion.div>
        </Link>
        <Link href={`/course/${courseId[5].name}`}>
          <motion.div
            className="w-[651px] aspect-[651/195] absolute z-[94] top-[1088px] left-[129px]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="Pengetahuan dan Pemahaman Umum"
              src={'/s3/LBE.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </motion.div>
        </Link>
        <Link href={`/course/${courseId[6].name}`}>
          <motion.div
            className="w-[651px] aspect-[651/195] absolute z-[93] top-[1247px] left-[14px]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              alt="Pengetahuan dan Pemahaman Umum"
              src={'/s3/PM.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </motion.div>
        </Link>
        <motion.div className="w-[142px] aspect-[142/1501] absolute z-[92] top-[184px] left-[331px]">
          <Image
            alt="Batang"
            src={'/s3/Batang.png'}
            fill
            sizes="none"
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="absolute min-w-[610px] w-[142vw] overflow-x-clip aspect-[2015/2152] z-[91] top-[170px] sm:top-[120px]">
        <Image
          alt="background"
          src={'/s3/hutan.png'}
          fill
          sizes="none"
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default CourseList;
