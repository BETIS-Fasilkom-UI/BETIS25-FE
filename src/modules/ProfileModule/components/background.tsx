import Image from "next/image";

const Background = () => {
  return (
    <>
      <Image
        src="/background-salju.png"
        width={433}
        height={1500}
        alt="salju"
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <Image
        src="/kupukanan.png"
        width={205}
        height={181}
        alt="kupu-kupu"
        className="absolute hidden lg:block w-[14vw] right-[5vw] top-[25vh]"
      />

      <Image
        src="/kupukanan.png"
        width={205}
        height={181}
        alt="kupu-kupu"
        className="absolute hidden lg:block rotate-45 w-[14vw] left-[5vw] top-[15vh]"
      />

      <Image
        src="/pohon-kanan.png"
        width={700}
        height={1150}
        alt="pohon kanan"
        className="absolute hidden -bottom-[15vw] lg:block lg:-right-20 lg:-z-10 lg:w-[49vw]"
      />
      <Image
        src="/pohon-kanan.png"
        width={700}
        height={1150}
        alt="pohon kanan"
        className="absolute w-[70vw] -bottom-[20vw] -right-[10vw] lg:-bottom-[15vw] lg:right-[15vw]  -z-10 lg:w-[49vw]"
      />
      <Image
        src="/pohon-kiri.png"
        width={700}
        height={1150}
        alt="pohon kanan"
        className="absolute hidden -bottom-[15vw] lg:block lg:-left-20 lg:-z-10 lg:w-[49vw]"
      />
      <Image
        src="/pohon-kiri.png"
        width={700}
        height={1150}
        alt="pohon kanan"
        className="absolute w-[70vw] -bottom-[20vw] -left-[10vw] lg:-bottom-[15vw] lg:left-[15vw] lg:-z-10 lg:w-[49vw]"
      />
    </>
  );
};

export { Background };
