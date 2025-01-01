import Image from 'next/image'
import Lentera from './lentera';
import styles from './hero.module.css'
import { getAsset } from '@/lib/s3';


export default function Mascot(props: {className: string}) {
    return(
        <div className={`${props.className}`}>
            <div className='w-full h-full relative'>
                <Lentera
                    className={`${styles.rotateLentera} z-[0] w-[20%] aspect-[309/583] absolute -right-[4.5%] top-[14%]`}
                />
                <Image
                    className='z-0'
                    src={getAsset("/Mascot.png")} 
                    alt="mascot" 
                    sizes="none"
                    fill
                />

            </div>
        </div>
    )
}