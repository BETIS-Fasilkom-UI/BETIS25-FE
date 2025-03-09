import Image from 'next/image';
import styles from './hero.module.css';

export default function KupuKupu(props: {
  className: string;
  reverse: boolean;
}) {
  return (
    <div className={`${props.className} ${styles.atasBawah}`}>
      <Image
        className={props.reverse ? 'transform scale-x-[-1]' : ''}
        src={'/s3/kupu-kupu2.png'}
        alt="kupukupuk"
        sizes="none"
        fill
      />
      <div className="w-full h-full rounded-full origin-top-left bg-[#ff9a50] blur-[82.47px]"></div>
    </div>
  );
}
