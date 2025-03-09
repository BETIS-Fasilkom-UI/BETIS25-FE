import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { SPEAKERS, TEXT } from '../const';
import styles from './speaker.module.css';
const Speaker = () => {
  return (
    <section>
      <h1 className="max-md:hidden font-cinzel font-black text-3xl lg:text-4xl text-center py-10">
        MEET OUR SPEAKER
      </h1>

      {SPEAKERS.length === 1 ? (
        <div>
          <Card className="bg-white bg-opacity-20 rounded-xl lg:rounded-2xl border-[1px] lg:border-2 border-white border-opacity-40 lg:border-opacity-60 pt-16 pb-12 px-6 md:px-12 md:pt-24 lg:px-14 lg:pb-16 lg:pt-44">
            <CardContent className="font-raleway text-foreground/70">
              <div className="fixed top-0">
                <div className="z-10 flex flex-col items-center">
                  <Image
                    src="/lampu-header.png"
                    alt="lampu-header"
                    width={1108}
                    height={115}
                    className="w-[390px] h-[40px] md:min-w-[780px] md:h-[62px] lg:min-w-[1468px] lg:h-[115px] z-20 mt-0 md:translate-x-[-70px] lg:translate-x-[-95px]"
                  />

                  <div className="flex flex-col justify-center items-start lg:items-center z-30 lg:w-[1064px]">
                    <Image
                      src="/cahaya-lampu-header-kiri.png"
                      alt="cahaya-lampu-header-kiri"
                      width={1108}
                      height={115}
                      className={`${styles.twinkleReverse} w-[353px] h-[40px] md:min-w-[705px] md:h-[62px] md:mt-[-60px] lg:min-w-[1330px] lg:h-[115px] z-40 mt-[-38px] ml-[-7px] md:translate-x-[-80px] lg:-translate-y-[50px] lg:translate-x-[-115px]`}
                    />

                    <Image
                      src="/cahaya-lampu-header-kanan.png"
                      alt="cahaya-lampu-header-kanan"
                      width={1108}
                      height={115}
                      className={`${styles.twinkle} w-[325px] h-[40px] md:min-w-[640px] md:h-[60px] md:mt-[-60px] lg:min-w-[1220px] lg:h-[115px] z-40 -mt-[39px] ml-[27px] md:-translate-x-[45px] lg:-translate-y-[100px] lg:-translate-x-[60px]`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row max-md:items-center gap-4 lg:gap-20">
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative w-[162px] h-[162px] lg:w-[524px] lg:h-[329px] xl:h-full rounded-xl"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(183, 55, 134, 0.1) 10%, rgba(183, 55, 134, 0.3) 90%)',
                    }}
                  >
                    <Image
                      alt={SPEAKERS[0].name}
                      src={SPEAKERS[0].image}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>

                  <p className="text-foreground font-semibold text-sm lg:text-3xl pt-3 text-center lg:pt-8">
                    {SPEAKERS[0].name}
                  </p>
                  <p className="font-openSans text-sm lg:text-xl text-center lg:pt-2">
                    {SPEAKERS[0].role}
                  </p>
                </div>

                <div>
                  <CardTitle className="font-black text-white text-xl lg:text-4xl text-center lg:text-left">
                    {TEXT.title}
                  </CardTitle>

                  <p className="font-semibold text-sm lg:text-xl text-center pt-2 lg:text-left lg:pt-5">
                    {TEXT.subtitle}
                  </p>

                  <div className="max-lg:hidden flex flex-row pt-11 pb-7 space-x-3">
                    <div
                      className=" p-3 rounded-xl"
                      style={{
                        background:
                          'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                      }}
                    >
                      <Calendar color="white" size={40} />
                    </div>
                    <div className="pr-11">
                      <p className="text-foreground font-semibold text-xl">
                        Date:
                      </p>
                      <p className="font-openSans text-2xl">{TEXT.date}</p>
                    </div>
                  </div>

                  <div className="max-lg:hidden flex flex-row space-x-3">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background:
                          'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                      }}
                    >
                      <MapPin color="white" size={40} />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-xl">
                        Place:
                      </p>
                      <p className="font-openSans text-2xl">{TEXT.place}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden flex flex-row items-center justify-center space-x-3 pt-5">
                <div
                  className=" p-[5px] rounded-[6px]"
                  style={{
                    background:
                      'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                  }}
                >
                  <Calendar color="white" />
                </div>
                <div className="pr-8">
                  <p className="text-foreground font-semibold text-sm">Date:</p>
                  <p className="font-openSans text-sm">{TEXT.date}</p>
                </div>

                <div
                  className="p-[5px] rounded-[6px]"
                  style={{
                    background:
                      'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                  }}
                >
                  <MapPin color="white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    Place:
                  </p>
                  <p className="font-openSans text-sm">{TEXT.place}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative">
            <Image
              alt="Kelinci"
              src={'/s3/KelinciMic.png'}
              width={80}
              height={73}
              className="lg:hidden absolute bottom-[-4rem] right-[-1rem]"
            />
          </div>
        </div>
      ) : (
        <Card className="bg-white bg-opacity-20 rounded-xl lg:rounded-2xl border-[1px] lg:border-2 border-white border-opacity-40 lg:border-opacity-60 pt-16 pb-12 px-5 md:px-16 md:pb-16 md:pt-24 lg:px-20 lg:pb-16 lg:pt-44">
          <CardHeader className="flex flex-row items-center justify-center">
            <div className="fixed md:left-12 lg:left-14 top-0">
              <div className="z-10 flex flex-col items-center">
                <Image
                  src="/lampu-header.png"
                  alt="lampu-header"
                  width={1108}
                  height={115}
                  className="w-[390px] h-[40px] md:min-w-[780px] md:h-[62px] lg:min-w-[1468px] lg:h-[115px] z-20 mt-0 md:translate-x-[-70px] lg:translate-x-[-95px]"
                />

                <div className="flex flex-col justify-center items-start lg:items-center z-30 lg:w-[1064px]">
                  <Image
                    src="/cahaya-lampu-header-kiri.png"
                    alt="cahaya-lampu-header-kiri"
                    width={1108}
                    height={115}
                    className={`${styles.twinkleReverse} w-[353px] h-[40px] md:min-w-[705px] md:h-[62px] md:mt-[-60px] lg:min-w-[1330px] lg:h-[115px] z-40 mt-[-38px] ml-[-7px] md:translate-x-[-80px] lg:-translate-y-[50px] lg:translate-x-[-115px]`}
                  />

                  <Image
                    src="/cahaya-lampu-header-kanan.png"
                    alt="cahaya-lampu-header-kanan"
                    width={1108}
                    height={115}
                    className={`${styles.twinkle} w-[325px] h-[40px] md:min-w-[640px] md:h-[60px] md:mt-[-60px] lg:min-w-[1220px] lg:h-[115px] z-40 -mt-[39px] ml-[27px] md:-translate-x-[45px] lg:-translate-y-[100px] lg:-translate-x-[60px]`}
                  />
                </div>
              </div>
            </div>
            <CardTitle className="font-black text-xl md:text-2xl lg:text-3xl text-center lg:px-32">
              {TEXT.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="font-raleway text-foreground/70">
            <p className="font-semibold text-sm lg:text-lg text-center lg:px-32">
              {TEXT.subtitle}
            </p>

            <div className="max-lg:hidden flex flex-row items-center justify-center space-x-3 pt-12 pb-20">
              <div
                className=" p-3 rounded-xl"
                style={{
                  background:
                    'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                }}
              >
                <Calendar color="white" size={40} />
              </div>
              <div className="pr-11">
                <p className="text-foreground font-semibold text-2xl">Date:</p>
                <p className="font-openSans text-2xl">{TEXT.date}</p>
              </div>

              <div
                className="p-3 rounded-xl"
                style={{
                  background:
                    'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                }}
              >
                <MapPin color="white" size={40} />
              </div>
              <div>
                <p className="text-foreground font-semibold text-2xl">Place:</p>
                <p className="font-openSans text-2xl">{TEXT.place}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 pt-6 gap-3 md:gap-6 lg:gap-10">
                {SPEAKERS.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="relative w-[142px] h-[142px] md:w-[284px] md:h-[160px] lg:w-[504px] lg:h-[309px] rounded-xl lg:rounded-3xl"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(183, 55, 134, 0.1) 10%, rgba(183, 55, 134, 0.3) 90%)',
                      }}
                    >
                      <Image
                        alt={speaker.name}
                        src={speaker.image}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <p className="text-foreground font-semibold text-sm lg:text-3xl pt-3 lg:pt-8 lg:pb-2">
                      {speaker.name}
                    </p>
                    <p className="font-openSans text-sm lg:text-xl">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden flex flex-row items-center justify-center space-x-3 pt-6">
              <div
                className="p-[5px] md:p-3 rounded-[6px] md:rounded-xl"
                style={{
                  background:
                    'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                }}
              >
                <Calendar color="white" />
              </div>
              <div className="pr-8">
                <p className="text-foreground font-semibold text-sm md:text-lg">
                  Date:
                </p>
                <p className="font-openSans text-sm md:text-lg">{TEXT.date}</p>
              </div>

              <div
                className="p-[5px] md:p-3 rounded-[6px md:rounded-xl"
                style={{
                  background:
                    'linear-gradient(180deg, #7D4893 -0.02%, #8E2B8F 129.94%)',
                }}
              >
                <MapPin color="white" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm md:text-lg">
                  Place:
                </p>
                <p className="font-openSans text-sm md:text-lg">{TEXT.place}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="relative">
        <Image
          alt="Jamur"
          src={'/s3/JamurGabungan.png'}
          width={160}
          height={143}
          className="max-lg:hidden absolute bottom-[-0.5rem] right-[-5rem]"
        />

        <Image
          alt="Lampu"
          src={'/s3/Lampu.png'}
          width={SPEAKERS.length === 1 ? 70 : 90}
          height={SPEAKERS.length === 1 ? 53 : 73}
          className="max-lg:hidden absolute bottom-[-0.7rem] left-[-3rem]"
        />

        <Image
          alt="Light"
          src={'/s3/CahayaLampu.png'}
          width={SPEAKERS.length === 1 ? 30 : 40}
          height={SPEAKERS.length === 1 ? 13 : 23}
          className={`${
            styles.twinkleReverse
          } max-lg:hidden absolute left-[-1.4rem] ${
            SPEAKERS.length === 1
              ? 'left-[-1.7rem] bottom-[25.8rem]'
              : 'left-[-1.4rem] bottom-[33.2rem]'
          }`}
        />

        <Image
          alt="Light2"
          src="/cahaya-lampu-tinggi.png"
          width={SPEAKERS.length === 1 ? 25 : 35}
          height={SPEAKERS.length === 1 ? 8 : 18}
          className={`${styles.twinkle} max-lg:hidden absolute ${
            SPEAKERS.length === 1
              ? 'left-[-1.6rem] bottom-[25.8rem]'
              : 'left-[-1.25rem] bottom-[33.2rem]'
          }`}
        />
      </div>
    </section>
  );
};

export default Speaker;
