import Image from "next/image";

const Background = () => {
  return (
    <>
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
