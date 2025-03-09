import Image from 'next/image';
import styles from './hero.module.css';

export default function Lentera(props: { className: string }) {
  return (
    <div className={`${props.className}`}>
      <Image src={'/s3/lentera.png'} alt="lentera" sizes="none" fill />
      <div
        className={`${styles.lamp} z-[-1] w-[70%] aspect-[1/1] rounded-full absolute bottom-[20%] left-[50%] translate-x-[-50%]`}
      ></div>
    </div>
  );
}
