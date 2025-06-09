import Image from 'next/image';

const Sponsor = () => {
  return (
    <article className="mt-32">
      <h1 className="text-xl lg:text-3xl font-cinzel text-center">
        Our Sponsors
      </h1>
      <div className="w-full bg-white p-10 rounded-3xl mt-10 flex gap-5 flex-wrap items-center justify-center">
        <Image
          src={'/sido.png'}
          width={200}
          height={300}
          alt="sido"
        />
        <Image
          src={'/hotways.jpg'}
          width={200}
          height={200}
          alt="hotways"
        />
      </div>
    </article>
  );
};

export default Sponsor;
