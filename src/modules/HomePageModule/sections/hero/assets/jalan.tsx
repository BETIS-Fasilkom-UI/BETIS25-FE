import Image from 'next/image';
import Aliran from './aliran';
import Buku from './buku';
import styles from './hero.module.css';
import Mascot from './mascot';
import Pohon from './pohon';

export default function Jalan(props: { className: string }) {
  return (
    <div className={`${props.className}`}>
      {/* Biar bikin atasnya soft */}
      <div className="w-[50%] h-1 border-[50px] border-[#692597] blur-[50px] absolute top-[-5%] left-[50%] translate-x-[-50%] rounded-full"></div>

      <Image
        className={`${styles.softEdge} z-0`}
        src={'/s3/jalan.png'}
        alt="Jalan"
        sizes="none"
        fill
        priority
      />
      <div className="z-[0]">
        <Mascot className="w-[300px] max-md:w-[200px] max-sm:w-[150px] aspect-[1396/2132] absolute bottom-32 max-sm:bottom-20 left-52 max-sm:left-40" />
      </div>

      <div className="z-[1] flex justify-center">
        <Buku className="w-[900px] max-md:w-[800px] max-sm:w-[550px] aspect-[5200/1782] absolute bottom-0" />
      </div>

      {/* PEPOHONAN */}
      <div className="z-[1]">
        <Pohon
          reverse={true}
          className="w-[655px] max-md:w-[400px] max-sm:w-[211px] aspect-[2643/3349] absolute bottom-[-320px] max-md:bottom-[-200px] max-sm:bottom-[-90px] right-[-300px] max-md:right-[-90px] max-sm:right-10"
        />
      </div>
      <div className="z-[1]">
        <Pohon
          reverse={false}
          className="w-[655px] max-md:w-[400px] max-sm:w-[211px] aspect-[2643/3349] absolute bottom-[-320px] max-md:bottom-[-200px] max-sm:bottom-[-90px] left-[-300px] max-md:left-[-90px] max-sm:left-8"
        />
      </div>
      {/* END PEPOHONAN */}

      <div className="z-[1]">
        <Aliran className="w-[1440px] max-md:w-[1000px] max-sm:w-[700px] aspect-[5790/466] absolute bottom-[-390px] max-md:bottom-[-270px] max-sm:bottom-[-150px] right-10" />
      </div>
    </div>
  );
}
