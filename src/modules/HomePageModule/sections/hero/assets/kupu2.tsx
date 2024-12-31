import Image from 'next/image'
import styles from './hero.module.css'
import { getAsset } from '@/lib/s3'

export default function KupuKupu(props: {className: string, reverse: boolean}) {
    return (
        <div className={`${props.className} ${styles.atasBawah}`}>
            <Image 
                className={props.reverse ? 'transform scale-x-[-1]' : ''}
                src={getAsset("/kupu-kupu2.png")}
                alt="kupukupuk" 
                layout="fill"
            />
            <div className='w-full h-full rounded-full origin-top-left bg-[#ff9a50] blur-[82.47px]'>

            </div>
        </div>
    )
}