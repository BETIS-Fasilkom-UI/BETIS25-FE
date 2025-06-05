'use client';
import { Loading } from '@/components/elements/Loading';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseDetail } from './interface';
import CourseScroll from './section/CourseScroll';

export const CourseDetailModule = ({
  courseData,
}: {
  courseData: CourseDetail;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log(courseData);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <main className="min-h-screen w-full flex gap-8 max-md:gap-6 flex-col items-center relative py-36">
        <div className="relative w-11/12">
          <button
            className="w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px] max-sm:w-[25px] max-sm:h-[25px] absolute top-[50%] translate-y-[-50%] bg-white rounded-full"
            onClick={() => router.back()}
          >
            <Image
              alt="contoh"
              src={'/s3/li_chevron-left.svg'}
              fill
              sizes="none"
              className="object-contain"
            />
          </button>
          <h1 className="font-cinzel text-4xl max-md:text-4xl max-sm:text-2xl font-[900] text-white text-center">
            {courseData?.title}
          </h1>
        </div>
        {courseData.scrolls !== null ? (
          <>
            {courseData?.scrolls?.map((scroll, index) => (
              <CourseScroll
                key={scroll.id}
                id={scroll.id}
                title={scroll.title}
                description={scroll.description}
                sections={scroll.sections}
                week={`Week ${index + 1}`}
              />
            ))}
          </>
        ) : (
          <p className="text-white text-center font-cinzel text-4xl max-md:text-4xl max-sm:text-2xl font-[900]">
            No scroll available
          </p>
        )}

        {/* Background */}
        <div className="w-full h-full">
          <div className="z-[-2] w-[400px] max-md:w-[300px] max-sm:w-[200px] aspect-[596/980] absolute bottom-0 left-0">
            <Image
              alt="contoh"
              src={'/s3/pohonkiri.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="z-[-2] w-[400px] max-md:w-[300px] max-sm:w-[200px] aspect-[596/980] absolute bottom-0 right-0">
            <Image
              alt="contoh"
              src={'/s3/pohonkanan.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="z-[-1] w-[250px] max-md:w-[200px] max-sm:w-[153px]  aspect-[351/391] absolute bottom-0 left-0">
            <Image
              alt="contoh"
              src={'/s3/jamurkiri1.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="z-[-1] w-[200px] max-md:w-[200px] max-sm:w-[100px]  aspect-[242/231] absolute bottom-0 left-[180px] max-md:left-[120px] max-sm:left-[100px]">
            <Image
              alt="contoh"
              src={'/s3/jamurkiri2.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="z-[-1] w-[300px] max-md:w-[250px] max-sm:w-[150px] aspect-[380/580] absolute bottom-[-5%] right-0">
            <Image
              alt="contoh"
              src={'/s3/jamurkanan.png'}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
        </div>
        {/* END Background */}
      </main>
    );
  }
};
