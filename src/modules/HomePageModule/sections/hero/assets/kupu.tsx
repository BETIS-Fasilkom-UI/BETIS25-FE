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
        src={'/s3/kupu-kupu1.png'}
        alt="kupukupuk"
        fill
        sizes="none"
      />
    </div>
  );
}
