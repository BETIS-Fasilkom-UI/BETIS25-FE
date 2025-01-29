import Image from "next/image";

const Background = () => {
  return (
    <div className="absolute overflow-visible max-w-[1920px] max-h-[1560px] bottom-0 w-full h-full">
      <Image
        src="/kupukanan.png"
        width={205}
        height={181}
        alt="kupu-kupu"
        className="absolute hidden lg:block w-[14vw] max-w-[205px] right-[5vw] top-[100px]"
      />

      <Image
        src="/kupukanan.png"
        width={205}
        height={181}
        alt="kupu-kupu"
        className="absolute hidden lg:block rotate-45 w-[14vw] max-w-[205px] left-[5vw] top-[100px]"
      />
        <Image
          src="/pohon-kanan.png"
          width={700}
          height={1150}
          alt="pohon kanan"
          className="absolute w-[70vw] -bottom-[20vw] -right-[100px] max-w-[650px] lg:-bottom-[15vw] lg:right-[300px] xl:max-w-[700px] xl:right-[380px] xl:-bottom-[200px] lg:w-[49vw]"
        />
      <Image
        src="/pohon-kanan.png"
        width={700}
        height={1150}
        alt="pohon kanan"
        className="absolute hidden -bottom-[15vw] max-w-[700px] lg:block lg:right-0 lg:w-[49vw] xl:max-w-[800px] xl:-bottom-[200px]"
      />
        <Image
          src="/pohon-kiri.png"
          width={700}
          height={1150}
          alt="pohon kanan"
          className="absolute w-[70vw] -bottom-[20vw] -left-[100px] max-w-[650px] lg:-bottom-[15vw] lg:left-[300px] xl:max-w-[700px] xl:left-[380px] xl:-bottom-[200px] lg:w-[49vw]"
        />
      <Image
        src="/pohon-kiri.png"
        width={700}
        height={1150}
        alt="pohon kanan"
        className="absolute hidden -bottom-[15vw] max-w-[700px] lg:block lg:left-0 lg:w-[49vw] xl:max-w-[800px] xl:-bottom-[200px]"
      />
   </div>
  );
};

export { Background };
