import Image from 'next/image';
import Dedaunan from './dedaunan';
import KupuKupu from './kupu2';

export default function Pohon(props: { className: string; reverse: boolean }) {
  return (
    <div className={props.className}>
      <Image
        className={props.reverse ? 'transform scale-x-[-1]' : ''}
        src={'/s3/pohon.png'}
        alt="pohon"
        sizes="none"
        fill
      />
      <Dedaunan
        className={`${props.reverse ? 'transform scale-x-[-1]' : ''} w-[310px] max-md:w-[150px] max-sm:w-[100px] aspect-[1377/767] absolute -bottom-9 left-32 max-md:left-[90px] max-sm:left-10`}
      />
      <div className="flex justify-center">
        <KupuKupu
          reverse={props.reverse ? false : true}
          className={`z-[1] w-[120px] max-md:w-[80px] max-sm:w-[50px] aspect-[558/494] absolute bottom-28 max-md:bottom-20 max-sm:bottom-10 ${props.reverse ? 'left-20' : 'right-20'}`}
        />
      </div>
      <div className="flex justify-center">
        <KupuKupu
          reverse={props.reverse ? false : true}
          className={`z-[1] w-[40px] max-md:w-[20px] max-sm:w-[15px] aspect-[558/494] absolute bottom-10 max-md:bottom-16 max-sm:bottom-5 ${props.reverse ? 'left-20' : 'right-20'}`}
        />
      </div>
    </div>
  );
}
